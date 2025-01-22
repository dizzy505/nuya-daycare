import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { Child, Employee } from '../../types';

interface ChildListProps {
  children: Child[];
  employees: Employee[];
  onEdit: (child: Child) => void;
  onDelete: (id: string) => void;
}

export const ChildList: React.FC<ChildListProps> = ({
  children,
  employees,
  onEdit,
  onDelete,
}) => {
  const getCaregiver = (caregiverId: string) => {
    return employees.find(emp => emp.id === caregiverId)?.name || 'Unknown';
  };

  return (
    <div className="mt-8 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Age
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Religion
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Address
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Caregiver
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {children.map((child) => (
            <tr key={child.id}>
              <td className="px-6 py-4 whitespace-nowrap">{child.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{child.age}</td>
              <td className="px-6 py-4 whitespace-nowrap">{child.religion}</td>
              <td className="px-6 py-4 whitespace-nowrap">{child.address}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {getCaregiver(child.caregiverId)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEdit(child)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Pencil className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => onDelete(child.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};