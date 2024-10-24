import { createSlice } from "@reduxjs/toolkit";
import useAPI from "./hooks/useAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("cv/getUser", async (user) => {
  const response = await useAPI("users", user);
  return response;
});

export const setUser = createAsyncThunk(
  "cv/setUser",
  async (data, user = "") => {
    console.log("Setting user: ", data);
    console.log(`Send uri is users/${data.id}`);

    const response = await useAPI("users/" + data.id, user, "PATCH", data);
    console.log("Response: ", response);
    return response;
  }
);

export const getIndustry = createAsyncThunk("cv/getIndustry", async () => {
  const response = await useAPI("industry");
  return response;
});

export const getEducation = createAsyncThunk("cv/getEducation", async () => {
  const response = await useAPI("education");
  return response;
});

export const cvSlice = createSlice({
  name: "cv",
  initialState: {
    data: { user: {}, education: [], industry: [] },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.data.user = action.payload[0];
    });
    builder.addCase(getIndustry.fulfilled, (state, action) => {
      state.data.industry = action.payload;
    });
    builder.addCase(getEducation.fulfilled, (state, action) => {
      state.data.education = action.payload;
    });
    builder.addCase(setUser.fulfilled, (state, action) => {
      console.log("Setting user from reducer: ", action.payload);
      state.data.user = action.payload;
    });
  },
});

export const cvActions = cvSlice.actions;
export const selectData = (state) => state.cv.data;
export default cvSlice.reducer;
