import React from 'react';
import { Employee, Child } from '../../types';

interface AttendanceFormProps {
  type: 'employee' | 'child';
  people: (Employee | Child)[];
  onCheckIn: (id: string) => void;
  onCheckOut: (id: string) => void;
}

export const AttendanceForm: React.FC<AttendanceFormProps> = ({
  type,
  people,
  onCheckIn,
  onCheckOut,
}) => {
  const [selectedId, setSelectedId] = React.useState('');

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Select {type === 'employee' ? 'Employee' : 'Child'}
        </label>
        <select
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select...</option>
          {people.map((person) => (
            <option key={person.id} value={person.id}>
              {person.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => selectedId && onCheckIn(selectedId)}
          className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Check In
        </button>
        <button
          onClick={() => selectedId && onCheckOut(selectedId)}
          className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Check Out
        </button>
      </div>
    </div>
  );
};