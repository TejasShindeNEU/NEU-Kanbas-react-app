import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "./Database";


const initialState = {
    enrollments: enrollments,
  };
// This will hold the enrollment information
const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollCourse: (state, { payload }) => {
      state.enrollments.push(payload); // payload is an object like { userId, courseId }
    },
    unenrollCourse: (state, { payload }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) => enrollment.course !== payload.course || enrollment.user !== payload.user
      );
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
