import React, { useState, useEffect } from "react";
import { BsGripVertical } from "react-icons/bs";
import SingleAssignmentControlButtons from "./SingleAssignmentControlButton";
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentControlButtons from "./AssigmentControlButtons";
import { FaRegEdit } from "react-icons/fa";
import AssignmentControls from "./AssignmentControls";
import { useParams, useLocation } from "react-router";
import * as db from "../../Database";
import ProtectedEdit from "../../Account/ProtectedEdit";
import { setAssignments, addAssignment, editAssignment, updateAssignment, deleteAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function Assignments() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [assignmentName, setAssignmentName] = useState("");
  const [assignmentDesc, setAssignmentDesc] = useState("");
  const [assignmentPoints, setAssignmentPoints] = useState("");
  const [assignmentDue, setAssignmentDue] = useState("");
  const [assignmentFrom, setAssignmentFrom] = useState("");
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const dispatch = useDispatch();

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

    return (
      <div id="wd-assignments">
        <ProtectedEdit>
          <AssignmentControls/>
        </ProtectedEdit> 
        <br /><br /><br /><br />

        <ul id="wd-assignment-list" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div id="wd-assignments-title" className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              <IoMdArrowDropdown className="me-1"/>
                Assignments
              <AssignmentControlButtons />
            </div>
            {assignments
                .map((assignment: any) => (
                    <li className="wd-lesson list-group-item p-3 ps-1">
                      <div className="d-flex">
                        <div className="align-self-center me-3">
                          <BsGripVertical className="me-2 fs-3" />
                          <FaRegEdit className="me-1 text-success"/>
                        </div>
                        <div className="align-self-center flex-grow-1">
                          <a className="wd-assignment-link"
                            href={currentUser.role === "FACULTY" ? `#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`
                              : `#/Kanbas/Courses/${cid}/Assignments/`}>
                            {assignment.title}
                          </a><br />
                          <div className="wd-float-left text-danger me-1">
                            Multiple module 
                          </div>
                          <div className="wd-float-left me-1"> 
                            | <b>Not available until</b> {assignment.available_date_num} at 12:00 am | <br /> 
                          </div >
                          <div className="wd-float-left me-1">
                            <b>Due</b> {assignment.due_date_num} at 11:59pm | {assignment.points} pts
                          </div>  
                        </div>
                        <div className="align-self-center">
                          <SingleAssignmentControlButtons 
                            assignmentId={assignment._id}
                            deleteAssignment={(assignmentId) => removeAssignment(assignmentId)}/>
                        </div>
                      </div>
                  </li>
                  )
                )
              }
          </li>
        </ul>
      </div>
  );}
  