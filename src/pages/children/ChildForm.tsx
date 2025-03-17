import React from 'react';
import { Child, Employee } from '../../types';

interface ChildFormProps {
  onSubmit: (data: Omit<Child, 'id'>) => void;
  initialData?: Child;
  employees: Employee[];
  buttonText?: string;
}

export const ChildForm: React.FC<ChildFormProps> = ({
  onSubmit,
  initialData,
  employees,
  buttonText = 'Add Child'
}) => {
  const [formData, setFormData] = React.useState({
    name: initialData?.name || '',
    age: initialData?.age || '',
    religion: initialData?.religion || '',
    address: initialData?.address || '',
    caregiverId: initialData?.caregiverId || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name: formData.name,
      age: Number(formData.age),
      religion: formData.religion,
      address: formData.address,
      caregiverId: formData.caregiverId
    });
    if (!initialData) {
      setFormData({ name: '', age: '', religion: '', address: '', caregiverId: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Age</label>
        <input
          type="number"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Religion</label>
        <input
          type="text"
          value={formData.religion}
          onChange={(e) => setFormData({ ...formData, religion: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <textarea
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          rows={3}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Caregiver</label>
        <select
          value={formData.caregiverId}
          onChange={(e) => setFormData({ ...formData, caregiverId: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
          <option value="">Select a caregiver</option>
          {employees.map((employee) => (
            <option key={employee.id} value={employee.id}>
              {employee.name}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {buttonText}
      </button>
    </form>
  );
};