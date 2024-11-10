import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as db from "./Database";
import { enrollCourse, unenrollCourse } from "./enrollmentReducer";
import ProtectedEdit from "./Account/ProtectedEdit";
import ProtectedRouteStudent from "./Account/ProtectedRouteStudent";

export default function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void; }) {
    
    const [showAllCourses, setShowAllCourses] = useState(false);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentReducer); 
        
    // console.log(typeof enrollments);
    
    // const enrolledCourses = courses.filter((course: any) => enrollments.some(
    //     (enrollment: any) => enrollment.user === currentUser._id && enrollment.course === course._id
    //   ));
    
      const dispatch = useDispatch();

    const displayedCourses = showAllCourses ? db.courses : courses;
    // const displayedCourses = courses;
    return (
        <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard
            <ProtectedRouteStudent>
                <button className="btn btn-primary float-end"
                id="wd-enrollments-click" 
                onClick={() => setShowAllCourses(!showAllCourses)}>
                  {showAllCourses ? "Back" : "Enrollments"}
                </button>
            </ProtectedRouteStudent>
        </h1> 
        
        <hr />
        <ProtectedEdit>
            <h5>New Course
                <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={addNewCourse} > Add </button>
                <button className="btn btn-warning float-end me-2"
                    onClick={updateCourse} id="wd-update-course-click">
                    Update
                </button>
            </h5><br />
            <input value={course.name} className="form-control mb-2" 
                onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
            <textarea value={course.description} className="form-control"
                onChange={(e) => setCourse({ ...course, description: e.target.value }) }/>
            <hr />
        </ProtectedEdit>
        
        <h2 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h2> <hr />
        <div id="wd-dashboard-courses" className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
            {displayedCourses.map((course) => (
                <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                <div className="card rounded-3 overflow-hidden">
                    <Link to={enrollments.some(
                                (enrollment: any) =>
                                    enrollment.user === currentUser._id 
                                    && enrollment.course === course._id
                                ) ? (`/Kanbas/Courses/${course._id}/Home`) : ("/Kanbas/Dashboard")}
                        className="wd-dashboard-course-link text-decoration-none text-dark" >
                        <img src={`/images/${course._id}.jpg`} width="100%" height={160} 
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;  // type cast to HTMLImageElement
                                target.onerror = null;  // prevent infinite loop in case fallback image fails
                                target.src = '/images/coursethumbnail.jpg';  // fallback image path
                            }} 
                        />
                        <div className="card-body">
                            <h5 className="wd-dashboard-course-title card-title">
                            {course.name}
                            </h5>
                            <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                            {course.description}
                            </p>
                            
                            <ProtectedEdit>
                                <button className="btn btn-primary"> Go </button>
                                <button onClick={(event) => {
                                    event.preventDefault();
                                    deleteCourse(course._id);
                                    }} className="btn btn-danger float-end"
                                    id="wd-delete-course-click">
                                        Delete
                                </button>
                                <button id="wd-edit-course-click"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course);
                                    }}
                                    className="btn btn-warning me-2 float-end" >
                                    Edit
                                </button>
                            </ProtectedEdit>

                            <ProtectedRouteStudent>
                                {enrollments.some(
                                (enrollment: any) =>
                                    enrollment.user === currentUser._id && enrollment.course === course._id
                                ) ? (
                                <div>
                                    <button className="btn btn-primary"> Go </button>
                                    <button
                                        className="btn btn-danger ms-1 float-end"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            dispatch(unenrollCourse({ 
                                                user: currentUser._id, 
                                                course: course._id 
                                            }))
                                        }}
                                    >
                                        Unenroll
                                    </button>
                                </div>
                                ) : (
                                <button
                                    className="btn btn-success ms-1 float-end"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(enrollCourse({ 
                                            user: currentUser._id, 
                                            course: course._id 
                                        }))
                                    }}
                                >
                                    Enroll
                                </button>
                                )}
                            </ProtectedRouteStudent>
                        </div>
                    </Link>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
}