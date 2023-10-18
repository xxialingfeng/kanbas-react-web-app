import { Link } from "react-router-dom";
import db from "../Database";
import logo from './color.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBook} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';

function Dashboard() {
  const courses = db.courses;
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (courseId) => {
    setSelectedCourse(courseId);
  };

  return (
    <div style={{ flex: 1 }}>
      <div style={{marginLeft:"10px", borderBottom :"1px solid #ddd", fontFamily: "Verdana, Arial, Helvetica, sans-serif",}}>
        <li class="title" style={{listStyleType: "none", fontSize: "30px", fontWeight: "lighter",}}>Dashboard</li>
      </div>
      <div style={{paddingLeft: "30px", marginTop: "20px", paddingBottom: "20px", fontSize: "25px", fontFamily: "Verdana, Arial, Helvetica, sans-serif"}}>
        <li class="title" style={{borderBottom:"1px solid #ddd", listStyleType: "none", fontSize: "20px"}}>Published Courses(24)</li>
      </div>
      <div className="list-group d-flex flex-wrap justify-content-start" style={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "30px", padding: "0px"}}>
        {courses.map((course) => (
          <Link 
            key={course._id} 
            to={`/Kanbas/Courses/${course._id}`} 
            className="list-group-item" 
            onClick={() => handleCourseClick(course._id)}
            style={{width:254, marginRight:"20px", paddingTop: "0px", marginBottom:"20px"}}>
            <li style={{ border: "0cm", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
                <img src={logo} alt="Logo" className="navbar-logo" style={{ width: 254, height: 150, }} />
            </li>
            <div style={{padding:"0px", margin:"0px"}}>
                <div style={{ margin: 0, padding: 0 }}>
                    <span style={{color:"#2874A6", fontSize:"16px", fontFamily: "Verdana, Arial, Helvetica, sans-serif", padding:0, margin:0}}>{course.name}</span>
                </div>
                <div style={{height:20}}>
                    <span style={{color:"grey", fontSize:"18px", fontFamily: "Verdana, Arial, Helvetica, sans-serif"}}>{course.number}.{course._id}</span>
                </div>
                <div >
                    <span style={{color:"#ddd", fontSize:"12px", fontFamily: "Verdana, Arial, Helvetica, sans-serif"}}>{course.startDate} to {course.endDate}</span>
                </div>
            </div>
            <FontAwesomeIcon icon={faBook} style={{ fontSize: "20px", color: "grey" }} />
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;