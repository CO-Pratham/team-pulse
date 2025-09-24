// src/redux/slice/memberSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch members from randomuser.me API
export const fetchMembers = createAsyncThunk(
    "members/fetchMembers",
    async () => {
        const response = await fetch("https://randomuser.me/api/?results=8"); // fetch 8 members
        const data = await response.json();
        // Map API data to our member structure
        return data.results.map(user => ({
            id: user.login.uuid,
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            status: "Idle",
            tasks: [],
            avatar: user.picture.thumbnail,
            gender: user.gender
        }));
    }
);

const memberSlice = createSlice({
    name: "members",
    initialState: {
        list: [],
        loading: false,
        error: null
    },
    reducers: {
        // Update member status
        updateStatus: (state, action) => {
            const { id, status } = action.payload;
            const member = state.list.find(m => m.id === id);
            if (member) member.status = status;
        },
        // Add a task to a member
        addTask: (state, action) => {
            const { id, task } = action.payload;
            const member = state.list.find(m => m.id === id);
            if (member) member.tasks.push(task);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMembers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMembers.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            })
            .addCase(fetchMembers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

// Export actions
export const { updateStatus, addTask } = memberSlice.actions;

// Export reducer
export default memberSlice.reducer;
