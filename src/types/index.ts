export interface Employee {
  id: string;
  name: string;
  age: number;
  religion: string;
  address: string;
}

export interface Child {
  id: string;
  name: string;
  age: number;
  religion: string;
  address: string;
  caregiverId: string;
}

export interface Attendance {
  id: string;
  userId: string;
  checkIn: string;
  checkOut: string | null;
  duration: string | null;
}

export interface User {
  id: string;
  username: string;
  role: 'admin' | 'user';
}