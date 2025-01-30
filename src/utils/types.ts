export interface User {
  name: string;
  email: string;
  image: string;
  id: string;
}

export interface Session {
  user: User;
  expires: string;
}
