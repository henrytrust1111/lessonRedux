import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lessonUser: {},
    lessonData: [],
};

const features = createSlice({
    name: "lesson",
    initialState,
    reducers: {
        lessonLogin: (state, {payload}) => {
            state.lessonUser = payload
            console.log("User Data:", payload);
        },
        lessonDataApi: (state, {payload}) =>{
          state.lessonData = payload
        },
        lessonLogout: (state) =>{
          state.lessonUser = null
        }
    },
});

export const {
  lessonLogin,
  lessonDataApi,
  lessonLogout
} = features.actions;

export default features.reducer;
