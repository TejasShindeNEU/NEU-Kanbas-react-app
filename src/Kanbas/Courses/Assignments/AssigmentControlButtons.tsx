import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import "./styles.css"

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <span className="bg-white wd-rounded-corners-all-around 
     wd-border-thin wd-border-grey wd-border-solid 
     pt-1 pb-1 ps-2 pe-2">40% of Total</span>
      <BsPlus className="fs-2"/>
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
