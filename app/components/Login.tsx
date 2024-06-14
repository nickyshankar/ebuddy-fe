'use client';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { loginStart, loginSuccess, loginFailure } from '../store/authSlice';
import { Button, TextField, Typography, Box, Container } from '@mui/material';
import { RootState } from '../store/store';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { loading, error } = useSelector((state: RootState) => state.auth);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async () => {
		dispatch(loginStart());
		try {
			const login = await signInWithEmailAndPassword(auth, email, password);
			console.log('Login Details: ', login);
			dispatch(loginSuccess(login.user));
			router.push('/');
		} catch (err: any) {
			dispatch(loginFailure(err.message));
		}
	};

	return (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Typography variant="h5">Login</Typography>
				<Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						color="primary"
						onClick={handleLogin}
						disabled={loading}
					>
						Login
					</Button>
					{error && <Typography color="error">{error}</Typography>}
				</Box>
			</Box>
		</Container>
	);
};

export default Login;
