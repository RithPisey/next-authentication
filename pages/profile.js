import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

function profile() {
	const { data: session } = useSession();
	return (
		<div className=' flex justify-center'>
			<div className='mt-10 w-1/2'>
				<h1 className=' font-extrabold text-2xl'>{session.user.email}</h1>
				<h3 className=' font-light'>This page is require authentication</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		</div>
	);
}

profile.auth = true;

export default profile;
