const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Create sample data
const sampleData = [
    {
        'First Name': 'John',
        'Last Name': 'Doe',
        'Email': 'john.doe@example.com',
        'Age': 30,
        'Department': 'Engineering',
        'Salary': 75000,
        'Date of Joining': '2022-03-15',
        'Is Active': true
    },
    {
        'First Name': 'Jane',
        'Last Name': 'Smith',
        'Email': 'jane.smith@example.com',
        'Age': 28,
        'Department': 'Marketing',
        'Salary': 65000,
        'Date of Joining': '2021-11-10',
        'Is Active': true
    },
    {
        'First Name': 'Robert',
        'Last Name': 'Johnson',
        'Email': 'robert.j@example.com',
        'Age': 35,
        'Department': 'Sales',
        'Salary': 85000,
        'Date of Joining': '2020-07-22',
        'Is Active': true
    },
    {
        'First Name': 'Emily',
        'Last Name': 'Williams',
        'Email': 'emily.w@example.com',
        'Age': 32,
        'Department': 'Human Resources',
        'Salary': 60000,
        'Date of Joining': '2023-01-05',
        'Is Active': true
    },
    {
        'First Name': 'Michael',
        'Last Name': 'Brown',
        'Email': 'michael.b@example.com',
        'Age': 40,
        'Department': 'Finance',
        'Salary': 95000,
        'Date of Joining': '2019-09-18',
        'Is Active': true
    },
    {
        'First Name': 'Sarah',
        'Last Name': 'Davis',
        'Email': 'sarah.d@example.com',
        'Age': 26,
        'Department': 'Engineering',
        'Salary': 70000,
        'Date of Joining': '2023-05-30',
        'Is Active': false
    },
    {
        'First Name': 'David',
        'Last Name': 'Miller',
        'Email': 'david.m@example.com',
        'Age': 33,
        'Department': 'Operations',
        'Salary': 72000,
        'Date of Joining': '2022-08-14',
        'Is Active': true
    },
    {
        'First Name': 'Lisa',
        'Last Name': 'Wilson',
        'Email': 'lisa.w@example.com',
        'Age': 29,
        'Department': 'Marketing',
        'Salary': 63000,
        'Date of Joining': '2023-03-25',
        'Is Active': true
    },
    {
        'First Name': 'James',
        'Last Name': 'Moore',
        'Email': 'james.m@example.com',
        'Age': 45,
        'Department': 'Management',
        'Salary': 120000,
        'Date of Joining': '2018-12-01',
        'Is Active': true
    },
    {
        'First Name': 'Amanda',
        'Last Name': 'Taylor',
        'Email': 'amanda.t@example.com',
        'Age': 31,
        'Department': 'IT',
        'Salary': 78000,
        'Date of Joining': '2022-02-28',
        'Is Active': true
    },
    {
        'First Name': 'Christopher',
        'Last Name': 'Anderson',
        'Email': 'chris.a@example.com',
        'Age': 27,
        'Department': 'Engineering',
        'Salary': 68000,
        'Date of Joining': '2023-07-15',
        'Is Active': true
    },
    {
        'First Name': 'Jennifer',
        'Last Name': 'Thomas',
        'Email': 'jennifer.t@example.com',
        'Age': 38,
        'Department': 'Sales',
        'Salary': 92000,
        'Date of Joining': '2021-04-12',
        'Is Active': false
    },
    {
        'First Name': 'Daniel',
        'Last Name': 'Jackson',
        'Email': 'daniel.j@example.com',
        'Age': 34,
        'Department': 'Finance',
        'Salary': 88000,
        'Date of Joining': '2020-10-05',
        'Is Active': true
    },
    {
        'First Name': 'Michelle',
        'Last Name': 'White',
        'Email': 'michelle.w@example.com',
        'Age': 25,
        'Department': 'Human Resources',
        'Salary': 55000,
        'Date of Joining': '2023-09-20',
        'Is Active': true
    },
    {
        'First Name': 'Richard',
        'Last Name': 'Harris',
        'Email': 'richard.h@example.com',
        'Age': 42,
        'Department': 'Operations',
        'Salary': 81000,
        'Date of Joining': '2019-11-30',
        'Is Active': true
    },
    {
        'First Name': 'Patricia',
        'Last Name': 'Martin',
        'Email': 'patricia.m@example.com',
        'Age': 36,
        'Department': 'IT',
        'Salary': 82000,
        'Date of Joining': '2021-06-17',
        'Is Active': true
    },
    {
        'First Name': 'Charles',
        'Last Name': 'Thompson',
        'Email': 'charles.t@example.com',
        'Age': 39,
        'Department': 'Management',
        'Salary': 110000,
        'Date of Joining': '2018-03-08',
        'Is Active': true
    },
    {
        'First Name': 'Susan',
        'Last Name': 'Garcia',
        'Email': 'susan.g@example.com',
        'Age': 44,
        'Department': 'Sales',
        'Salary': 98000,
        'Date of Joining': '2017-08-25',
        'Is Active': true
    },
    {
        'First Name': 'Joseph',
        'Last Name': 'Martinez',
        'Email': 'joseph.m@example.com',
        'Age': 37,
        'Department': 'Engineering',
        'Salary': 90000,
        'Date of Joining': '2020-05-19',
        'Is Active': true
    },
    {
        'First Name': 'Karen',
        'Last Name': 'Robinson',
        'Email': 'karen.r@example.com',
        'Age': 41,
        'Department': 'Marketing',
        'Salary': 73000,
        'Date of Joining': '2019-02-14',
        'Is Active': false
    },
    {
        'First Name': 'Thomas',
        'Last Name': 'Clark',
        'Email': 'thomas.c@example.com',
        'Age': 43,
        'Department': 'Finance',
        'Salary': 105000,
        'Date of Joining': '2016-12-03',
        'Is Active': true
    },
    {
        'First Name': 'Nancy',
        'Last Name': 'Rodriguez',
        'Email': 'nancy.r@example.com',
        'Age': 33,
        'Department': 'Human Resources',
        'Salary': 62000,
        'Date of Joining': '2022-09-08',
        'Is Active': true
    },
    {
        'First Name': 'Paul',
        'Last Name': 'Lewis',
        'Email': 'paul.l@example.com',
        'Age': 31,
        'Department': 'IT',
        'Salary': 76000,
        'Date of Joining': '2021-12-15',
        'Is Active': true
    },
    {
        'First Name': 'Sandra',
        'Last Name': 'Lee',
        'Email': 'sandra.l@example.com',
        'Age': 46,
        'Department': 'Operations',
        'Salary': 89000,
        'Date of Joining': '2015-07-22',
        'Is Active': true
    },
    {
        'First Name': 'Kevin',
        'Last Name': 'Walker',
        'Email': 'kevin.w@example.com',
        'Age': 29,
        'Department': 'Engineering',
        'Salary': 71000,
        'Date of Joining': '2023-11-01',
        'Is Active': true
    }
];

// Create workbook and worksheet
const workbook = XLSX.utils.book_new();
const worksheet = XLSX.utils.json_to_sheet(sampleData);

// Add some formatting
const headerStyle = {
    font: { bold: true, color: { rgb: "FFFFFF" } },
    fill: { fgColor: { rgb: "4F81BD" } },
    alignment: { horizontal: "center" }
};

// Get the range
const range = XLSX.utils.decode_range(worksheet['!ref']);

// Apply header styling
for (let C = range.s.c; C <= range.e.c; ++C) {
    const cellAddress = XLSX.utils.encode_cell({ r: 0, c: C });
    if (!worksheet[cellAddress]) continue;
    worksheet[cellAddress].s = headerStyle;
}

// Set column widths
const colWidths = [
    { wch: 15 }, // First Name
    { wch: 15 }, // Last Name
    { wch: 25 }, // Email
    { wch: 10 }, // Age
    { wch: 20 }, // Department
    { wch: 15 }, // Salary
    { wch: 20 }, // Date of Joining
    { wch: 15 }  // Is Active
];
worksheet['!cols'] = colWidths;

// Add the worksheet to the workbook
XLSX.utils.book_append_sheet(workbook, worksheet, 'Employees');

// Add a second sheet with different data format (for testing)
const sampleData2 = [
    {
        'firstName': 'Mark',
        'lastName': 'Allen',
        'email': 'mark.a@example.com',
        'age': 32,
        'department': 'Engineering',
        'salary': 80000,
        'dateOfJoining': '2022-06-10',
        'isActive': true
    },
    {
        'firstName': 'Laura',
        'lastName': 'Young',
        'email': 'laura.y@example.com',
        'age': 29,
        'department': 'Marketing',
        'salary': 67000,
        'dateOfJoining': '2023-02-15',
        'isActive': true
    }
];

const worksheet2 = XLSX.utils.json_to_sheet(sampleData2);
XLSX.utils.book_append_sheet(workbook, worksheet2, 'Alternate Format');

// Add a third sheet with some missing data (for error testing)
const sampleData3 = [
    {
        'First Name': 'Test',
        'Last Name': 'User1',
        'Email': 'test1@example.com',
        // Age missing
        'Department': 'Test Dept',
        'Salary': 'Not a number', // Invalid data
        'Date of Joining': 'Invalid date',
        'Is Active': 'yes'
    },
    {
        'First Name': '', // Empty
        'Last Name': 'User2',
        'Email': 'invalid-email', // Invalid email
        'Age': 25,
        'Department': 'Test Dept',
        'Salary': 50000,
        'Date of Joining': '2023-12-01',
        'Is Active': true
    }
];

const worksheet3 = XLSX.utils.json_to_sheet(sampleData3);
XLSX.utils.book_append_sheet(workbook, worksheet3, 'Test Errors');

// Save the file
const fileName = 'test-employees.xlsx';
XLSX.writeFile(workbook, fileName);

console.log(`✅ Excel file generated: ${fileName}`);
console.log(`📊 Total records in main sheet: ${sampleData.length}`);
console.log(`📁 File size: ${(fs.statSync(fileName).size / 1024).toFixed(2)} KB`);
console.log('\n📋 Sheets in the file:');
console.log('1. Employees - Main test data (25 records)');
console.log('2. Alternate Format - Different column names');
console.log('3. Test Errors - For testing error handling');
console.log('\n📍 Upload this file to test your application!');