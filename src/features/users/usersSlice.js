import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: "Christian Keihäs"},
    { id: '1', name: "Joona Suovanen"},
    { id: '2', name: "Joonas Laaksonen"}
];

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;