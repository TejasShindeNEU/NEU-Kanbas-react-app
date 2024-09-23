import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input id="wd-username" value="alice" placeholder="username" 
        className="form-control mb-2"/>
      <input id="wd-password" value="123" placeholder="password" type="password" 
        className="form-control mb-2"/> 
      <input id="wd-firstname" value="Alice" placeholder="First Name" 
        className="form-control mb-2"/>
      <input id="wd-lastname" value="Wonderland" placeholder="Last Name" 
        className="form-control mb-2"/>
      <input id="wd-dob" value="2000-01-01" type="date" 
        className="form-control mb-2"/>
      <input id="wd-email" value="alice@wonderland" type="email" 
        className="form-control mb-2"/>
      <input id="wd-role" value="User" placeholder="Role" 
        className="form-control mb-2"/>
      {/* <select id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select><br/> */}
      <Link  id="wd-signin-link" to="/Kanbas/Account/Signin"
              className="btn btn-danger w-100">Signout</Link>
    </div>
);}
