import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    _id: "12", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });

  const addCourse = async () => {
    console.log("Course before adding:", course); 
    const response = await axios.post(URL, course);
    console.log("response from the server", response.data); 
    setCourses([
      ...courses,
      response.data, 
    ]);
    setCourse({...course});
    console.log("Course before adding:", courses); 
  };


  const deleteCourse = async (course) => {
    console.log("Course ID to delete:", course._id);
  
    try {
      await axios.delete(`${URL}/${course._id}`);
      setCourses(courses.filter((c) => c._id !== course._id));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };
  
  const updateCourse = async (course) => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };


    return (
      <Provider store={store}>
        <div className="d-flex">
          <KanbasNavigation />
          <div style={{width: "100%"}}>
              <Routes>
                  <Route path="/" element={<Navigate to="Dashboard" />} />
                  <Route path="Account" element={<h1>Account</h1>} />
                  <Route path="Dashboard" element={
                      <Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addCourse={addCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}/>
                    } />
                  <Route path="Courses/:courseId/*" element={
                        <Courses courses={courses} />} />
              </Routes>
          </div>
        </div>
      </Provider>

    );
  }
export default Kanbas;