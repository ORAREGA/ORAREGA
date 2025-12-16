import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedJob: null,
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    selectJob: (state, action) => {
      state.selectedJob = action.payload;
    },
    clearSelectedJob: (state) => {
      state.selectedJob = null;
    },
  },
});

export const { selectJob, clearSelectedJob } = jobSlice.actions;
export default jobSlice.reducer;
