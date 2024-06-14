import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';

const firebaseConfig = {
    apiKey: "",
    projectId: "",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);