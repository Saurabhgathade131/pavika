import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || "dummy-client",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "dummy-secret",
    }),
    Credentials({
      name: "Phone Number",
      credentials: {
        phone: { label: "Phone Number", type: "text", placeholder: "+91 xxxxx xxxxx" },
      },
      async authorize(credentials) {
        if (!credentials?.phone) return null;
        
        // Mocking an OTP authorization 
        return {
          id: String(credentials.phone),
          name: "PAVIKA User " + String(credentials.phone).slice(-4),
          email: `${credentials.phone}@pavika.local`,
          image: "https://api.dicebear.com/7.x/initials/svg?seed=" + credentials.phone,
        }
      }
    })
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (token?.sub && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  secret: process.env.AUTH_SECRET || "default_local_secret_for_pavika",
  trustHost: true,
})
