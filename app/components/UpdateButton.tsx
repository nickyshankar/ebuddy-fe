import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../store/apiSlice';
import { Button, Typography } from '@mui/material';
import { auth } from '../firebase/firebaseConfig';
import { RootState } from '../store/store';
import { updateUserData } from '../apis/updateUserData';

const UpdateButton: React.FC = () => {
	const dispatch = useDispatch();
	const { loading, success, error } = useSelector((state: RootState) => state.api);

	const handleClick = async () => {
		dispatch(fetchDataStart());
		try {
			const userDetails = {
				id: 'XfZ5CVGuWIYmVZs00Ce6',
				userName: 'raviu',
				userEmailId: 'nickyshankar@gmail.com',
			};
			const updatedData = await updateUserData(
				userDetails.id,
				userDetails.userName,
				userDetails.userEmailId,
			);
			dispatch(fetchDataSuccess(updatedData?.data?.status));
		} catch (err: any) {
			dispatch(fetchDataFailure(err.message));
		}
	};

	return (
		<div>
			<Button variant="contained" color="primary" onClick={handleClick} disabled={loading}>
				Update Data
			</Button>
			{loading && <Typography>Updating User Details.....</Typography>}
			{success && <Typography color="success">Update successful!</Typography>}
			{error && <Typography color="error">{error}</Typography>}
		</div>
	);
};

export default UpdateButton;
