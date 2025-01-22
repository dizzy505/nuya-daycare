import React from 'react';
import { Attendance, Employee, Child } from '../../types';

interface AttendanceListProps {
  type: 'employee' | 'child';
  attendances: Attendance[];
  people: (Employee | Child)[];
}

export const AttendanceList: React.FC<AttendanceListProps> = ({
  type,
  attendances,
  people,
}) => {
  const getPerson = (id: string) => {
    return people.find(person => person.id === id)?.name || 'Unknown';
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString();
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
              Check In
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Check Out
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Duration
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {attendances.map((attendance) => (
            <tr key={attendance.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {getPerson(attendance.userId)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formatTime(attendance.checkIn)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {attendance.checkOut ? formatTime(attendance.checkOut) : '-'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {attendance.duration || '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};