declare module "next-auth" {
  interface User {
    id: string;
  }

  interface Session {
    user: User;
  }
}

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
