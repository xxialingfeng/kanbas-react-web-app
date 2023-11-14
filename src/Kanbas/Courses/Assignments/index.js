import React, {useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteAssignment,
  selectAssignment,
  setAssignemnts,
} from "./assignmentsReducer";
import {findAssignmentsForCourse} from "./service"
import * as service from "./service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck, faPlus, faEllipsisV, faBook, faGripVertical, faCaretDown} from "@fortawesome/free-solid-svg-icons";
function Assignments() {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  useEffect(() => {
    const localDispatch = dispatch;
    findAssignmentsForCourse(courseId)
      .then((assignments) =>
      localDispatch(setAssignemnts(assignments))
    );
  }, [courseId], dispatch);
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);

  const handleDelete = (e, assignmentId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this assignment?");
    if (confirmDelete) {
      service.deleteAssignment(assignmentId).then((status) => {
        dispatch(deleteAssignment(assignmentId));
      });
  
    }
    e.preventDefault(); // 阻止Link的默认导航行为
  };






  return (
    <div>
        <div style={{width:"100%"}}>
            <div class="buttonset" style={{height:"54px", borderBottom: "1.5px solid #ddd", marginTop:"20px"}}>
                <div class="float-end">
                    <button class="btn btn-secondary" style={{backgroundColor:"#ddd", border: "#ddd", color:"black", marginLeft:"5px"}}><FontAwesomeIcon icon={faPlus}/>  Group</button>
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments/AssignmentEditor`}>
                      <button class="btn btn-danger" style={{backgroundColor:"#B22222", border: "#ddd", color: "white", marginLeft:"5px"}}><FontAwesomeIcon icon={faPlus}/>  Assignment</button>
                    </Link>
                    <button class="btn btn-secondary" style={{height: "40px", backgroundColor: "#ddd", border: "#ddd", color: "black", marginLeft:"5px"}}><FontAwesomeIcon icon={faEllipsisV}/></button>
                </div>
                <input type="text" class="form-control w-25" style={{width:"300px"}} placeholder="Search for Assignment" ariaLabel="Recipient's username" ariaDescribedby="button-addon2"></input>
            </div>
        </div>
      <div className="list-group" style={{marginTop:"20px"}}>
            <li class="list-group-item list-group-item-secondary" style={{display:"flex-wrap", justifyContent:"space-between", paddingTop:"10px", paddingBottom:"10px", fontFamily: "Verdana, Arial, Helvetica, sans-serif", }}>
                <FontAwesomeIcon icon={faGripVertical} style={{alignItems: "cecnter", marginRight:"5px"}}/>
                <FontAwesomeIcon icon={faCaretDown} style={{marginRight:"5px"}} />
                ASSIGNMENTS
                <div class="float-end">
                    <i class="rounded" style={{border:"1px solid grey", fontSize:"12px", padding:"3px", margin:"10px"}}> 40% of total </i>
                    <FontAwesomeIcon icon={faPlus}/>
                    <FontAwesomeIcon icon={faEllipsisV} style={{marginLeft:"10px"}}/>
                </div>
            </li>
        {
        assignments
        .filter((assignment) => assignment.course === courseId)
        .map((assignment, index) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} 
            onClick={() => dispatch(selectAssignment({ ...assignment, course: courseId }))}
            className="list-group-item"
            style={{borderLeft:"3px solid green"}}
            >
            <div style={{display: "flex", justifyContent:"space-between", }}>
                <div className="d-flex" style={{display: "flex", justifyContent:"space-between", alignItems: "center", fontFamily: "Verdana, Arial, Helvetica, sans-serif"}}>
                    <FontAwesomeIcon icon={faGripVertical} style={{alignItems: "cecnter"}}/>
                    <FontAwesomeIcon icon={faBook} className="p-3" style={{alignItems: "cecnter", color:"green"}}/>
                    <div>
                        <a href="edit.html" style={{fontSize:"15px", listStyleType: "none", color: "black", textDecoration: "none", fontWeight: "bold"}}>{assignment._id}</a>
                        <br/>
                        <span style={{fontSize:"13px", color:"#B22222"}}>Multiple Modules</span><span style={{fontSize:"13px"}}>| Not available until October 2</span>
                        <br/>
                        <span style={{fontSize:"11px", fontWeight: "bolder"}}>Due </span>
                        <span style={{fontSize:"11px"}}>Sep 18, 2022 at 11:59pm | 100pts</span>
                    </div>
                </div>
                <div class="float-end" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <FontAwesomeIcon icon={faCircleCheck} className="p-2" style={{color: "green"}}/>
                    <FontAwesomeIcon icon={faEllipsisV} className="p-2"/>
                    <button className="btn" style={{ backgroundColor: "#ddd" }} onClick={(e) => handleDelete(e, assignment._id)}>
                      Delete
                    </button>
                </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;