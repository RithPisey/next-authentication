import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: { label: "Email", type: "email", placeholder: "jsmith" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				const user = { id: 111, email: "abc@abc.com", password: "123" };
				const { email, password } = credentials;
				if (user.email === email && user.password === password) {
					return user;
				}
				return null;
			},
		}),
	],
	pages: {
		signIn: "/auth/credentials-signin",
	},
	callbacks: {
		async redirect({ url, baseUrl }) {
			// console.log("redirect >>> ", { url, baseUrl });
			return baseUrl;
		},
		async jwt({ token, account, profile }) {
			// console.log("jwt >>> ", { token, account, profile });

			return token;
		},
		async session({ session, token, user }) {
			// console.log("session >>> ", { session, token, user });
			session.user.id = token.sub;
			return session;
		},
	},
};

export default NextAuth(authOptions);
