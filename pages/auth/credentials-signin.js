import { getCsrfToken, signIn } from "next-auth/react";

export default function SignIn({ csrfToken }) {
	return (
		<form method='post' action='/api/auth/callback/credentials'>
			<input name='csrfToken' type='hidden' defaultValue={csrfToken} />
			<div className='flex mt-10 justify-center '>
				<div className=' p-10 rounded-md w-1/2 flex flex-col justify-center items-center bg-gray-100 shadow-sm'>
					<div className='flex flex-col h-46'>
						<label>Email</label>
						<input className=' w-[300px]' name='email' type='email' />
						<label>Password</label>
						<input name='password' type='password' />
					</div>
					<button
						className='bg-blue-400 p-1 rounded-md text-white w-20 mt-5'
						type='submit'
					>
						Sign in
					</button>
				</div>
			</div>
		</form>
	);
}

// /api/auth/callback/credentials

export async function getServerSideProps(context) {
	return {
		props: {
			csrfToken: await getCsrfToken(context),
		},
	};
}
