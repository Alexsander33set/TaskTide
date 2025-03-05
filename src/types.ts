export type User = {
  id: string;
  email: string;
  name?: string;
  image?: string;
  boards: Board[];
  createdAt: Date;
};

export type Board = {
  id: string;
  name: string;
  order: number;
  ownerId: string;
  owner: User;
  columns: Column[];
  createdAt: Date;
  updatedAt: Date;
};

export type Column = {
  id: string;
  name: string;
  boardId: string;
  board: Board;
  tasks: Task[];
};

export type Task = {
  id: string;
  content: string;
  columnId: string;
  column: Column;
  color?: string;
  createdAt: Date;
};
