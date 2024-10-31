import { Link, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import * as db from "../../Database"
import ProtectedEdit from "../../Account/ProtectedEdit";
import { addAssignment, editAssignment, updateAssignment, deleteAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux"; 

export default function NewAssignmentEditor() {
    const { cid, aid } = useParams();
    // const assignments = db.assignments;
    const [assignmentName, setAssignmentName] = useState("");
    const [assignmentDesc, setAssignmentDesc] = useState("");
    const [assignmentPoints, setAssignmentPoints] = useState("");
    const [assignmentDue, setAssignmentDue] = useState("");
    const [assignmentFrom, setAssignmentFrom] = useState("");
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();
    
    // const assignment = assignments.find((assignment: any) => assignment._id === aid);
        


    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><h5>Assignment Name</h5></label>
        
        <div className="input-group mb-4">
            <input id="wd-name" className="form-control" defaultValue={assignmentName}
                    onChange={(e) => setAssignmentName(e.target.value)} />
        </div>
              
        <div className="input-group mb-4">
                    <textarea id="wd-description" className="form-control" onChange={(e) => setAssignmentDesc(e.target.value)}>
                        {assignmentDesc}
                    </textarea>
        </div>
        
        <div id="wd-css-responsive-forms-2">
            <form>
                <div className="row mb-3">
                    <label htmlFor="wd-points" className="text-end col-sm-3 col-form-label">
                        Points 
                    </label>
                    <div className="col-sm-9">
                        <input id="wd-points" className="form-control" 
                        defaultValue={assignmentPoints} placeholder="Points"
                        onChange={(e) => setAssignmentPoints(e.target.value)}/>
                    </div> 
                </div>
                            

                <div className="row mb-3">
                    <label id="wd-assign" htmlFor="wd-assign" 
                    className="text-end col-sm-3 col-form-label">
                        Assign
                    </label>
                    <div className="col-sm-9 border">
                        <label id="wd-due-date" htmlFor="wd-assign-to"> Due </label>
                        <input className="form-control mb-4" type="date"
                            id="wd-due-date" defaultValue={assignmentDue} placeholder="Due"
                            onChange={(e) => setAssignmentDue(e.target.value)}/>
                        <div className="d-flex mb-4">
                            <div className="flex-fill">
                                <label htmlFor="wd-available-from">
                                    Available from
                                </label>
                                <div><input className="form-control" type="date"
                                    id="wd-available-from" defaultValue={assignmentFrom} placeholder="From"
                                    onChange={(e) => setAssignmentFrom(e.target.value)} />
                                </div>
                            </div>
                            <div className="flex-fill">
                                <label htmlFor="wd-available-until">Until</label>
                                <div>
                                <input className="form-control" type="date"
                                    id="wd-available-until" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <hr />
        
        <div className="d-flex justify-content-end">
            <Link to="./..">
                <button className="btn btn-secondary me-1">
                    Cancel
                </button>
            </Link>
            <ProtectedEdit>
                <Link to="./..">
                    <button className="btn btn-danger" 
                        onClick={() => {
                            dispatch(addAssignment({ 
                              title: assignmentName,
                              description: assignmentDesc,
                              points: assignmentPoints,
                              due_date_num: assignmentDue,
                              available_date_num: assignmentFrom,
                              course: cid,
                            }));
                            setAssignmentName("");
                            setAssignmentDesc("");
                            setAssignmentPoints("");
                            setAssignmentDue("");
                            setAssignmentFrom("");
                          }}>
                        Save
                    </button>
                </Link>
            </ProtectedEdit>
        </div>
    </div>
);}
