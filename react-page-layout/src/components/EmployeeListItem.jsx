// EmployeeListItem.js
import React from 'react';

function EmployeeListItem({ employee }) {
  return (
    <div className='employye-lsit-item'>
   <div>{employee.name}</div>
   <div>{employee.position}</div>

   </div>
  );
}

export default EmployeeListItem;