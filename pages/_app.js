import Layout from "../components/layout";
import { SessionProvider, useSession } from "next-auth/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<SessionProvider session={session}>
			<Layout>
				{Component.auth ? (
					<Auth>
						<Component {...pageProps} />
					</Auth>
				) : (
					<Component {...pageProps} />
				)}
			</Layout>
		</SessionProvider>
	);
}
function Auth({ children }) {
	// if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
	const { status } = useSession({ required: true });

	if (status === "loading") {
		return (
			<div className=' flex justify-center'>
				<div className='mt-10 w-1/2'>
					<h1 className=' font-extrabold text-2xl'>
						You are not Authentication...
					</h1>
					<h3 className=' font-light'>This page is require authentication</h3>
				</div>
			</div>
		);
	} else {
		return children;
	}
}
export default MyApp;
