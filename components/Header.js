import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

function Header() {
	const { data: session } = useSession();
	return (
		<div className=' bg-blue-500 p-2 flex justify-center'>
			<div className=''>
				<Link className='navBtn' href='/'>
					Home
				</Link>
				<Link className='navBtn' href='/profile'>
					Profile
				</Link>
				<Link className='navBtn' href='/about'>
					About
				</Link>
				{!session ? (
					<button className='navBtn bg-yellow-300' onClick={() => signIn()}>
						Sign In
					</button>
				) : (
					<button
						className='navBtn bg-red-400 text-white'
						onClick={() => signOut()}
					>
						Sign Out
					</button>
				)}
			</div>
		</div>
	);
}

export default Header;
