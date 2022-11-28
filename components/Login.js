import { useSession, signIn, signOut } from "next-auth/react";
export default function Component() {
	const { data: session } = useSession();
	if (session) {
		return (
			<>
				<h1>Signed in as {session.user.email}</h1> <br />
				<button className='btnSign' onClick={() => signOut()}>
					Sign out
				</button>
			</>
		);
	}
	return (
		<>
			<h1>Not signed in</h1> <br />
			<button className='btnSign' onClick={() => signIn()}>
				Sign in
			</button>
		</>
	);
}
