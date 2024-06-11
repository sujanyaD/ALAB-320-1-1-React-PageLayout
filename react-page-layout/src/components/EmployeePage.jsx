// EmployeeList.js
import React from 'react';
import EmployeeListItem from './EmployeeListItem';

function EmployeePage() {
  // Sample employee data
  const employees = [
    { id: 1, name: 'James King', position: 'President and CEO' },
    { id: 2, name: 'Julie Taylor', position: 'Vp Marketing' },
    // Add more employee data as needed
  ];

  return (
    <div className="employee-list">
      {employees.map(employee => (
        <EmployeeListItem key={employee.id} employee={employee} />
      ))}
    </div>
  );
}

export default EmployeePage;