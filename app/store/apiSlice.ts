import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ApiState {
    data: any | null;
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: ApiState = {
    data: null,
    loading: false,
    success: false,
    error: null,
};

const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {
        fetchDataStart(state) {
            state.loading = true;
            state.success = false;
        },
        fetchDataSuccess(state, action: PayloadAction<any>) {
            state.loading = false;
            state.success = true;
            state.data = action.payload;
        },
        fetchDataFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.success = false;
            state.error = action.payload;
        },
    },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = apiSlice.actions;
export default apiSlice.reducer;
