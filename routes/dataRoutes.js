const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
const DataRecord = require('../models/dataRecord');
const path = require('path');

const router = express.Router();

const fs = require('fs');

// Ensure uploads directory exists
const uploadsDir = 'uploads/';
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadsDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {

        const filetypes = /xlsx|xls|vnd.openxmlformats-officedocument.spreadsheetml.sheet|vnd.ms-excel|application\/octet-stream/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype || extname) {
            return cb(null, true);
        }
        cb(new Error(`Only Excel files are allowed! (Received: ${file.mimetype})`));
    }
});

// Upload and process Excel file
router.post('/upload', upload.single('excelFile'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        // Read Excel file
        const workbook = xlsx.readFile(req.file.path);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        // Convert to JSON
        const data = xlsx.utils.sheet_to_json(worksheet);

        // Process and save to database
        const savedRecords = [];
        const errors = [];

        for (let i = 0; i < data.length; i++) {
            try {
                const row = data[i];

                // Simple validation
                if (!row['First Name'] && !row['firstName']) {
                    throw new Error('First Name is required');
                }
                if (!row['Email'] && !row['email']) {
                    throw new Error('Email is required');
                }

                // Create new record
                const record = new DataRecord({
                    firstName: (row['First Name'] || row['firstName'] || '').trim(),
                    lastName: (row['Last Name'] || row['lastName'] || '').trim(),
                    email: (row['Email'] || row['email'] || '').toLowerCase().trim(),
                    age: parseInt(row['Age'] || row['age'] || 0),
                    department: (row['Department'] || row['department'] || '').trim(),
                    salary: parseFloat(row['Salary'] || row['salary'] || 0),
                    dateOfJoining: row['Date of Joining'] || row['dateOfJoining'] || null,
                    isActive: row['Is Active'] !== undefined ? row['Is Active'] : true,
                    sourceFile: req.file.filename
                });

                const savedRecord = await record.save();
                savedRecords.push(savedRecord);
            } catch (error) {
                errors.push({
                    row: i + 2, // +2 because Excel rows start at 1 and header is row 1
                    error: error.message
                });
            }
        }

        res.json({
            success: true,
            message: `Processed ${data.length} rows`,
            saved: savedRecords.length,
            errors: errors,
            file: req.file.filename
        });

    } catch (error) {
        console.error('Error processing file:', error);
        res.status(500).json({ error: error.message });
    }
});

// Get all data
router.get('/', async (req, res) => {
    try {
        const data = await DataRecord.find()
            .sort({ importedAt: -1 })
            .exec();

        res.json({ data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;