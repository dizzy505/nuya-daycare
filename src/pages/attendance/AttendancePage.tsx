import React from 'react';
import { useParams } from 'react-router-dom';
import { AttendanceForm } from './AttendanceForm';
import { AttendanceList } from './AttendanceList';
import { Attendance, Employee, Child } from '../../types';

export const AttendancePage = () => {
  const { type } = useParams<{ type: 'employees' | 'children' }>();
  const [attendances, setAttendances] = React.useState<Attendance[]>([]);
  const [people, setPeople] = React.useState<(Employee | Child)[]>([]);

  const calculateDuration = (checkIn: string, checkOut: string) => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = end.getTime() - start.getTime();
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    return `${hours}h ${minutes}m`;
  };

  const handleCheckIn = (userId: string) => {
    const newAttendance: Attendance = {
      id: Date.now().toString(),
      userId,
      checkIn: new Date().toISOString(),
      checkOut: null,
      duration: null,
    };
    setAttendances([...attendances, newAttendance]);
  };

  const handleCheckOut = (userId: string) => {
    setAttendances(
      attendances.map((attendance) => {
        if (attendance.userId === userId && !attendance.checkOut) {
          const checkOut = new Date().toISOString();
          return {
            ...attendance,
            checkOut,
            duration: calculateDuration(attendance.checkIn, checkOut),
          };
        }
        return attendance;
      })
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        {type === 'employees' ? 'Employee' : 'Child'} Attendance
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Record Attendance</h2>
          <AttendanceForm
            type={type === 'employees' ? 'employee' : 'child'}
            people={people}
            onCheckIn={handleCheckIn}
            onCheckOut={handleCheckOut}
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Attendance List</h2>
          <AttendanceList
            type={type === 'employees' ? 'employee' : 'child'}
            attendances={attendances}
            people={people}
          />
        </div>
      </div>
    </div>
  );
};