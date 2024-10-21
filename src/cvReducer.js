import { createSlice } from '@reduxjs/toolkit';
import useAPI from './hooks/useAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUser = createAsyncThunk(
    'cv/getUser',
    async () => {
        const response = await useAPI("users");
        return response;
    }
);

export const getIndustry = createAsyncThunk(
    'cv/getIndustry',
    async () => {
        const response = await useAPI("industry");
        return response;
    }
);

export const getEducation = createAsyncThunk(
    'cv/getEducation',
    async () => {
        const response = await useAPI("education");
        return response;
    }
);


export const cvSlice = createSlice({
    name: 'cv',
    initialState: {
        data: [{}]
    },
    reducers: {}, 
    extraReducers: (builder) => {
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.data = action.payload;
        });
        builder.addCase(getIndustry.fulfilled, (state, action) => {
            state.data = action.payload;
        });
        builder.addCase(getEducation.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    }
});

export const cvActions = cvSlice.actions;
export const selectData = state => state.cv.data;
export default cvSlice.reducer;