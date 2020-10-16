import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAll } from "../api";
import { loadSuccessful, loadFailed } from "./loadStatusSlice";

const loadData = createAsyncThunk(
    "data/loadData",
    async (payload, { dispatch }) => {
        const data = await getAll()
            .then((res) => {
                dispatch(loadSuccessful());
                return res.json();
            })
            .catch(() => dispatch(loadFailed()));
        return data;
    }
);

const dataSlice = createSlice({
    name: "data",
    initialState: [],
    extraReducers: {
        [loadData.fulfilled]: (state, action) => action.payload,
    },
});

const { reducer } = dataSlice;
// const { getData } = actions;
export { loadData };
export { reducer as dataReducer };
