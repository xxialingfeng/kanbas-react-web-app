import React from "react";
import { useNavigate, useParams,} from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck, faEllipsisV} from "@fortawesome/free-solid-svg-icons";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div style={{borderBottom:"2px solid #ddd", height:"230px"}}>
        <div className="buttonset" style={{ height: '54px', borderBottom: '1.5px solid #ddd', marginTop:"20px", marginBottom:"20px", fontFamily: "Verdana, Arial, Helvetica, sans-serif"}}>
            <div className="float-end" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faCircleCheck} className="p-1" style={{ color: 'green', display: 'flex', justifyContent: 'center' }}/>
                <p className="p-1" style={{ color: 'green', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0', margin: '0' }}>Published</p>
                <button className="btn btn-secondary" style={{ height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ddd', border: '1px solid #ddd', color: 'black' }}>
                <FontAwesomeIcon icon={faEllipsisV}/>
                </button>
            </div>
        </div>
      <span style={{fontSize: "20px", marginTop:"20px", marginBottom:"20px", fontFamily: "Verdana, Arial, Helvetica, sans-serif"}}>Assignment Name</span>
      <input value={assignment.title}
             className="form-control mb-2" style={{fontFamily: "Verdana, Arial, Helvetica, sans-serif", marginTop:"10px", marginBottom:"10px"}}/>
      <div className="float-end" style={{fontFamily: "Verdana, Arial, Helvetica, sans-serif"}}>
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`} 
                className="btn btn-secondary" style={{backgroundColor:"#ddd", border:"none", color:"black"}}>
            Cancel
        </Link>
        <button onClick={handleSave} className="btn me-2" style={{backgroundColor:"#B22222", border:"none", color:"white", marginLeft:"5px"}}>
            Save
        </button>
      </div>
    </div>
  );
}


export default AssignmentEditor;