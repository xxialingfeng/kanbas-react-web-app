import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlasses } from "@fortawesome/free-solid-svg-icons";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home"
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import React, { useState, useEffect } from "react";
import axios from "axios";
function  Courses() {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const URL = "http://localhost:4000/api/courses"; 
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  const location = useLocation();
  const [setShowExtraBreadcrumb] = useState(false);
  const handleShowExtraBreadcrumb = () => {
    setShowExtraBreadcrumb(true);
  };
  let breadcrumbText = "Home"; 

  if (location.pathname.includes("Modules")) {
    breadcrumbText = "Modules";
  } else if (location.pathname.includes("/Assignments")) {
    breadcrumbText = "Assignments";
  } else if (location.pathname.includes("/Grades")) {
    breadcrumbText = "Grades";
  }

  return (
    <div style={{marginLeft: "20px", marginTop: "10px", }}>
        <div style={{borderBottom: "1px solid #ddd", height:"45px"}}>
            <div className="float-end">
                    <button className="btn btn-secondary c dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"#ddd", border:"#ddd", color:"black;"}}>
                        <FontAwesomeIcon icon={faGlasses} />
                        Student View
                    </button>
            </div>
            <div className="breadcrumb" style={{paddingBottom: "20px"}}>
                <FontAwesomeIcon icon={faBars} style={{ fontSize: '25px', color: '#B22222' }} />
                <span className="breadcrumb-item" style={{ fontSize: '18px', display: 'flex', alignItems: 'center', marginLeft: "50px"}}>
                    <a href="http://google.com" style={{ textDecoration: 'none', color: '#B22222' }}>
                    {course.name}
                    </a>
                </span>
                <li class="breadcrumb-item active" style={{color: "black", fontSize: "14px", display:"flex", alignItems: "center", ariaCurrent:"page"}}>{breadcrumbText}</li>
            </div>
        </div>
        <CourseNavigation />
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor onShowExtraBreadcrumb={handleShowExtraBreadcrumb}/>}
            />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>

    </div>
  );
}
export default Courses;