import db from "../../Database";
import { useParams } from "react-router-dom";
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faFileImport, faFileExport, faCaretDown, faKeyboard } from "@fortawesome/free-solid-svg-icons";
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
        <div>
            <div className="buttonset d-flex" style={{ height: '54px', borderBottom: '1.5px solid #ddd', marginTop:"20px", justifyContent:"space-between" }}>
                <div>
                    <span style={{fontSize:"20px", color:"#B22222", fontFamily: "Verdana, Arial, Helvetica, sans-serif", marginRight:"10px"}}>Gradebook</span>
                    <FontAwesomeIcon icon={faCaretDown} style={{color:"#B22222", marginRight:"330px"}}/>
                    <FontAwesomeIcon icon={faKeyboard} style={{color:"#B22222"}}/>
                </div>
                <div className="float-end">
                    <button className="btn btn-secondary" style={{ backgroundColor: '#ddd', border: '1px solid #ddd', color: 'black' }}>
                        <FontAwesomeIcon icon={faFileImport}/>
                        Import
                    </button>
                    <button className="btn btn-secondary" style={{ backgroundColor: '#ddd', border: '1px solid #ddd', color: 'black',marginLeft:"5px" }}>
                        <FontAwesomeIcon icon={faFileExport}/>
                        Export
                    </button>
                    <button className="btn btn-secondary" style={{ height: '38px', backgroundColor: '#ddd', border: '1px solid #ddd', color: 'black',marginLeft:"5px" }}>
                        <FontAwesomeIcon icon={faGear}/>
                    </button>
                </div>
            </div>
            <div className="row d-flex" style={{ paddingTop: '20px', justifyContent:"space-between"}}>
                <div className="col col-md-4" style={{ width:"500px" }}>
                    <label htmlFor="studentNames" className="form-label">Student Names</label>
                    <select id="studentNames" className="form-select">
                    <option selected>Search students</option>
                    <option>...</option>
                    </select>
                </div>
                <div className="col col-md-4" style={{ width:"500px" }}>
                    <label htmlFor="assignmentNames" className="form-label">Assignment Names</label>
                    <select id="assignmentNames" className="form-select">
                    <option selected><i className="fa-solid fa-magnifying-glass"></i> Search Assignments</option>
                    <option>...</option>
                    </select>
                </div>
            </div>
        </div>
      <div className="table-responsive" style={{marginTop:"30px", fontFamily: "Verdana, Arial, Helvetica, sans-serif"}}>
        <table className="table table-striped" >
          <thead style={{textAlign:"center", alignItems:"center",border:"1px solid #ddd"}}>
            <th style={{display:"flex", alignItems:"center", fontWeight:"lighter", fontSize:"18px", height:"49.5px"}}>Student Name</th>
            {assignments.map((assignment) => (<th style={{fontWeight:"lighter", fontSize:"18px"}}>{assignment.title}
            <p style={{fontSize:"13px", fontWeight:"lighter", margin:0, padding:0}}>Out of 100</p>
            </th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr style={{border:"1px solid #ddd"}}>
                   <td style={{color:"#B22222"}}>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td style={{textAlign:"center"}}>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;