import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [Google],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        signIn(signInParams) {
            console.log(signInParams);
            return true
        },
    },
    pages: {
        signIn: "/login",
    },
})