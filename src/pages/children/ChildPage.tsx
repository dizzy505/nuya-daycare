import React from 'react';
import { ChildForm } from './ChildForm';
import { ChildList } from './ChildList';
import { Child, Employee } from '../../types';

export const ChildPage = () => {
  const [children, setChildren] = React.useState<Child[]>([]);
  const [editingChild, setEditingChild] = React.useState<Child | null>(null);
  const [employees, setEmployees] = React.useState<Employee[]>([]);

  const handleSubmit = (data: Omit<Child, 'id'>) => {
    if (editingChild) {
      setChildren(children.map(child => 
        child.id === editingChild.id 
          ? { ...data, id: child.id }
          : child
      ));
      setEditingChild(null);
    } else {
      setChildren([...children, { ...data, id: Date.now().toString() }]);
    }
  };

  const handleEdit = (child: Child) => {
    setEditingChild(child);
  };

  const handleDelete = (id: string) => {
    setChildren(children.filter(child => child.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Child Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">
            {editingChild ? 'Edit Child' : 'Add New Child'}
          </h2>
          <ChildForm
            onSubmit={handleSubmit}
            initialData={editingChild || undefined}
            employees={employees}
            buttonText={editingChild ? 'Update Child' : 'Add Child'}
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Child List</h2>
          <ChildList
            children={children}
            employees={employees}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};