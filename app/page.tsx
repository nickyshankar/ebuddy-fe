'use client';

import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useEffect, useState, use } from 'react';
import UpdateButton from './components/UpdateButton';
import { RootState } from './store/store';
import { Typography } from '@mui/material';
import { getUserData } from './apis/updateUserData';

const HomePage: React.FC = () => {
	const router = useRouter();
	const user = useSelector((state: RootState) => state.auth.user);

	useEffect(() => {
		if (!user) {
			router.push('/login');
		} else {
			getUserData('XfZ5CVGuWIYmVZs00Ce6');
		}
		console.log(user);
	}, [user, router]);

	return user ? (
		<div>
			<Typography variant="h5">eBuddy FrontEnd Web App</Typography>
			<Typography>Logged in as {user.email}</Typography>
			<UpdateButton />
		</div>
	) : null;
};

export default HomePage;
