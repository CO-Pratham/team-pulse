import { createSlice } from "@reduxjs/toolkit";

const roleSlice = createSlice({
    name: "roles",
    initialState: { currentRole: "teamLead" }, // can be 'teamLead' or 'member'
    reducers: {
        setRole: (state, action) => { state.currentRole = action.payload; },
    },
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;
