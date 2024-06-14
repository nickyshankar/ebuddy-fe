import axios from 'axios';
import { auth } from '../firebase/firebaseConfig';

export const updateUserData = async (userId: string, userName: string, userEmail: string) => {
    try {
        const token = await auth.currentUser?.getIdToken();
        console.log(token);
        const data = {
            "id": userId,
            "userName": userName,
            "userEmailId": userEmail
        };
        const headers = {
            'Authorization': 'Bearer ' + token
        };
        const response = await axios.put('http://127.0.0.1:5001/ebuddy-rest-api/us-central1/eBuddyRestAPI/api/users/update-user-data', data, {
            headers: headers
        });
        console.log(response)
        return response
    } catch (error) {
        console.log(error)

    }
};

export const getUserData = async (id: string) => {
    try {
        const token = await auth.currentUser?.getIdToken();
        console.log(token);
        const data = {
            "id": id,
        };
        const headers = {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        };
        const response = await axios.get('http://127.0.0.1:5001/ebuddy-rest-api/us-central1/eBuddyRestAPI/api/users/user-data', {
            headers: headers,
            data: data
        });
        console.log(response)
        return response
    } catch (error) {
        console.log(error)
    }
};