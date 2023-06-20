import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        pending: false,
        value: null,
    },
    reducers: {
        getUserAsync: (state, action) => {
            console.log(action);
            if (action.requestState === "pending") {
                state.pending = true;
            } else if (action.requestState === "finished") {
                state.pending = false;
                state.value = action.response.user;
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { getUserAsync } = userSlice.actions;

export default userSlice.reducer;
