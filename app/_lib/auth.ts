import NextAuth, { NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';

import { createGuest, getGuest } from './data-service';
import { Tables } from '../_types/database.types';
import { NewGuest } from '../_types/NewGuest';

const authConfig: NextAuthConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user }) {
      try {
        const existingGuest: Tables<'guests'> | null = await getGuest(
          user.email as string
        );

        if (!existingGuest)
          await createGuest({
            email: user.email,
            fullName: user.name,
          } as NewGuest);

        return true;
      } catch {
        return false;
      }
    },
    async session({ session }) {
      const guest: Tables<'guests'> | null = await getGuest(session.user.email);
      session.user.guestId = guest?.id;
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
