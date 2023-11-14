import React, {useEffect} from "react";
import { useNavigate, useParams, useLocation} from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"
import {
  addAssignment,
  selectAssignment,
  updateAssignment,
  resetAssignment,
  setAssignemnts,
} from "../assignmentsReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck, faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import {findAssignmentsForCourse, createAssignment} from "../service"
function AssignmentEditor() {
  const dispatch = useDispatch();
  const { assignmentId } = useParams();
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const { pathname } = useLocation();
  const { courseId } = useParams();
  useEffect(() => {
    const localDispatch = dispatch;
    findAssignmentsForCourse(courseId)
      .then((assignments) =>
      localDispatch(setAssignemnts(assignments))
    );
  }, [courseId, dispatch]);
  const navigate = useNavigate();
  useEffect(() => {
    const localDispatch = dispatch;
    if (pathname.includes("AssignmentEditor")) {
      localDispatch(resetAssignment());
    } else {
      localDispatch(selectAssignment(assignment));
    }
    }, [assignmentId, dispatch, pathname, assignment]);
  const handleSave = () => {
    if (!pathname.includes("AssignmentEditor")) {
        handleUpdateAssignment();
  } else {
      createAssignment(courseId, assignment).then((assignment) => {
        dispatch(addAssignment(assignment));
      });
  }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleUpdateAssignment = async () => {
    dispatch(updateAssignment(assignment));
  };





  
  return (
    <div style={{ height:"230px"}}>
        <div className="buttonset" style={{ height: '54px', marginTop:"20px", marginBottom:"20px", fontFamily: "Verdana, Arial, Helvetica, sans-serif"}}>
            <div className="float-end" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faCircleCheck} className="p-1" style={{ color: 'green', display: 'flex', justifyContent: 'center' }}/>
                <p className="p-1" style={{ color: 'green', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0', margin: '0' }}>Published</p>
                <button className="btn btn-secondary" style={{ height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ddd', border: '1px solid #ddd', color: 'black' }}>
                <FontAwesomeIcon icon={faEllipsisV}/>
                </button>
            </div>
        </div>
      <span style={{fontSize: "20px", marginTop:"20px", marginBottom:"20px", fontFamily: "Verdana, Arial, Helvetica, sans-serif"}}>Assignment Name</span>
      <input value={assignment.name}
              onChange={(e) => dispatch(selectAssignment({ ...assignment, name: e.target.value }))}
             className="form-control mb-2" style={{fontFamily: "Verdana, Arial, Helvetica, sans-serif", marginTop:"10px", marginBottom:"10px"}}/>
      <textarea value={assignment.description}
          onChange={(e) => dispatch(selectAssignment({ ...assignment, description: e.target.value }))}
          className="form-control mb-2" style={{fontFamily: "Verdana, Arial, Helvetica, sans-serif", marginTop:"10px", marginBottom:"10px"}}/>
      <div style={{fontFamily: "Verdana, Arial, Helvetica, sans-serif", borderBottom:"1px solid #ddd", marginBottom:"20px", paddingBottom:"10px"}}> 
        <div className="d-flex" style={{fontFamily: "Verdana, Arial, Helvetica, sans-serif"}}>
          <div style={{width:"400px",display: "flex", justifyContent: "flex-end", alignItems: "center", paddingRight:"30px"}}>
            <span >Points</span>
          </div>
          <input value={100}
             className="form-control mb-2" style={{fontFamily: "Verdana, Arial, Helvetica, sans-serif", marginTop:"10px", marginBottom:"10px", width:"400px"}}/>
        </div>
        <div className="d-flex" >
          <div style={{width:"400px",display: "flex", justifyContent: "flex-end", alignItems: "center", paddingRight:"30px"}}>
            <span >Assign</span>
          </div>
          <div className="form-control" style={{width:"700px"}}>
            <span style={{fontWeight:"bold"}}>Due</span>
            <input value={assignment.dueDate}
            onChange={(e) => dispatch(selectAssignment({ ...assignment, dueDate: e.target.value }))}
             className="form-control mb-2" style={{fontFamily: "Verdana, Arial, Helvetica, sans-serif", marginTop:"10px", marginBottom:"10px", width:"300px"}}/>
              <div className="row">
                <div className="col"style={{marginTop:"20px"}} >
                  <span style={{fontWeight:"bold"}}>Available From</span>
                  <input type="date" style={{width:"300px"}} className="form-control" value={assignment.availableFromDate}
                  onChange={(e) => dispatch(selectAssignment({ ...assignment, availableFromDate: e.target.value }))}
                   aria-label="First name" />
                </div>
                <div className="col" style={{marginTop:"20px"}}>
                  <span style={{fontWeight:"bold"}}>Until</span>
                  <input type="date" style={{width:"300px"}} className="form-control" value={assignment.availableUntilDate}
                  onChange={(e) => dispatch(selectAssignment({ ...assignment, availableUntilDate: e.target.value }))}
                  aria-label="Last name" />
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="float-end" style={{fontFamily: "Verdana, Arial, Helvetica, sans-serif"}}>
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`} 
                className="btn btn-secondary" style={{backgroundColor:"#ddd", border:"none", color:"black"}}>
            Cancel
        </Link>
        <button onClick={() => {handleSave()}} className="btn me-2" style={{backgroundColor:"#B22222", border:"none", color:"white", marginLeft:"5px"}}>
            Save
        </button>
      </div>
    </div>
  );
}


export default AssignmentEditor;