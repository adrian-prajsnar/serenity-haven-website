import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      guestId?: number | null;
    } & DefaultSession['user'];
  }

  interface User {
    guestId?: number | null;
  }
}
