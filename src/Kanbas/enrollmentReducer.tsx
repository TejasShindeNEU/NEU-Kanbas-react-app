import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "./Database";
const initialState = {
    enrollments: enrollments,
};
const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollCourse: (state, { payload: enroll }) => {
      const newCourse: any = {
        _id: new Date().getTime().toString(),
        user: enroll.user,
        course: enroll.course,
      };
      // state.assignments = [...state.assignments, newAssignment] as any;
      state.enrollments.push(enroll); // payload is an object like { userId, courseId }
    },
    unenrollCourse: (state, { payload: unenroll }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) => enrollment.course !== unenroll.course || enrollment.user !== unenroll.user
      );
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
