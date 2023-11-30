import Signin from "../Kanbas/users/signin";
import Signup from "../Kanbas/users/signup"
import Account from "../Kanbas/users/account"
import UserTable from "../Kanbas/users/table";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../Nav";
import ProjectNavigation from "./projectNavgation"
function Project() {
  return (
    <div className="row">
      <div >
        <Nav />
      </div>
      <div className="d-flex">
        <ProjectNavigation />
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Navigate to="/project/home" />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/account/:id" element={<Account />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Project;