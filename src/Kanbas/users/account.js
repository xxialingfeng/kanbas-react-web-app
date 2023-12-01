import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };
  const navigate = useNavigate();
  const save = async () => {
    await client.updateUser(account);
  };

  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
    
  };
  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);
  const signout = async () => {
    await client.signout();
    navigate(`/project/signin`);
  };

  return (
    <div className="w-50" style={{marginLeft:"30px"}}>
      <h1>Account</h1>
      {account && (
        <div>
          <input className="form-control" value={account.password}
            onChange={(e) => setAccount({ ...account,
              password: e.target.value })}/>
          <input className="form-control" value={account.firstName}
            onChange={(e) => setAccount({ ...account,
              firstName: e.target.value })}/>
          <input className="form-control" value={account.lastName}
            onChange={(e) => setAccount({ ...account,
              lastName: e.target.value })}/>
          <input className="form-control" value={account.dob}
            onChange={(e) => setAccount({ ...account,
              dob: e.target.value })}/>
          <input  className="form-control" value={account.email}
            onChange={(e) => setAccount({ ...account,
              email: e.target.value })}/>
          <select className="form-control" onChange={(e) => setAccount({ ...account,
              role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>
        
      )}
      <button onClick={save} className="btn btn-primary w-100">
        Save
      </button>
      <Link to="/project/admin/users"   className="btn btn-warning w-100">
          Users
      </Link>
      <button onClick={signout} className="btn btn-danger w-100">
        Signout
      </button>
    </div>
  );
}
export default Account;