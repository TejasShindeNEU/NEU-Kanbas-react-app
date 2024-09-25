import { FaPlus } from "react-icons/fa6";
export default function ModulesControls() {
  return (
    <div id="wd-assigment-controls" className="text-nowrap">
        <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </button>
        <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </button>
        <div >
            <i ></i>
            <input type="text" placeholder="Search..." 
                className="me-1 float-end"/>
        </div>
    </div>
);}
