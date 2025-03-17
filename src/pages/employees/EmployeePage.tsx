import React from 'react';
import { EmployeeForm } from './EmployeeForm';
import { EmployeeList } from './EmployeeList';
import { Employee } from '../../types';

export const EmployeePage = () => {
  const [employees, setEmployees] = React.useState<Employee[]>([]);
  const [editingEmployee, setEditingEmployee] = React.useState<Employee | null>(null);

  const handleSubmit = (data: Omit<Employee, 'id'>) => {
    if (editingEmployee) {
      setEmployees(employees.map(emp => 
        emp.id === editingEmployee.id 
          ? { ...data, id: emp.id }
          : emp
      ));
      setEditingEmployee(null);
    } else {
      setEmployees([...employees, { ...data, id: Date.now().toString() }]);
    }
  };

  const handleEdit = (employee: Employee) => {
    setEditingEmployee(employee);
  };

  const handleDelete = (id: string) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Employee Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">
            {editingEmployee ? 'Edit Employee' : 'Add New Employee'}
          </h2>
          <EmployeeForm
            onSubmit={handleSubmit}
            initialData={editingEmployee || undefined}
            buttonText={editingEmployee ? 'Update Employee' : 'Add Employee'}
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Employee List</h2>
          <EmployeeList
            employees={employees}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};