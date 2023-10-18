import { Link, useParams, useLocation } from "react-router-dom";
import './style.css'
function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const activeLink = links.find((link) => pathname.includes(link)) || "Home";
  return (
    <div className="list-group" style={{ width: 250  }}>
      <span style={{fontSize: "12px", fontFamily: "Verdana, Arial, Helvetica, sans-serif", margin:"15px", paddingLeft: "20px"}}>202410_1 Fall 2023 Sems...</span>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"} custom-link` }
          style={{
            color: link === activeLink ? "black" : "#B22222",
            fontFamily: "Verdana, Arial, Helvetica, sans-serif",
            border: "none",
            borderLeft: link === activeLink ? "2px solid black" : "none",
            paddingLeft: "5px",
            textDecoration: "none", // 移除下划线
            outline: "none", // 移除点击时的边框
          }}
          >
          {link}
        </Link>
      ))}
    </div>
  );
}


export default CourseNavigation;