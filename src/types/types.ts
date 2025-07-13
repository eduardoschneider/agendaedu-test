export interface Professor {
  id: number;
  email: string;
  password: string;
  name: string;
}

export interface Student {
  id: number;
  name: string;
  age: number;
  class: string;
}

export interface Observation {
  id: number;
  professorId: number;
  studentId: number;
  text: string;
  date: string;
}

export interface Favorite {
  id: number;
  professorId: number;
  studentId: number;
}