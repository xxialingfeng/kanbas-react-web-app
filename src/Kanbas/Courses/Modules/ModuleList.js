import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import db from "../../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck, faPlus, faEllipsisV, faGripVertical, faCaretRight, faCaretDown} from "@fortawesome/free-solid-svg-icons";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  

  return (
    
    <ul className="list-group" style={{marginTop:"10px", width:"100%", fontFamily: "Verdana, Arial, Helvetica, sans-serif"}}>
      <li className="list-group-item" style={{ display: "flex", marginTop: "10px"}}>
        <div style={{width:"200px"}}>
          <input value={module.name} style={{width:"180px", marginBottom:"5px",  border:"1px solid #ddd", borderRadius:"0.5rem"}}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
          />
          <textarea value={module.description} style={{width:"180px",  border:"1px solid #ddd", borderRadius:"0.5rem"}}
            onChange={(e) =>  dispatch(setModule({ ...module, description: e.target.value }))}
          />
        </div>
        <div>
          <button className="btn" style={{backgroundColor:"#ddd", width:"100px"}}
           onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
          <button className="btn" style={{color:"white", backgroundColor:"green", width:"100px", marginLeft:"5px"}} onClick={() => dispatch(updateModule(module))}>
                Update
        </button>

        </div>
      </li>

      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item"
           style={{marginTop:"30px", height:"70px", backgroundColor:"#ddd", fontFamily: "Verdana, Arial, Helvetica, sans-serif", display:"flex", alignItems:"center", justifyContent:"space-between"}}
           >

            <div className="d-flex">
              <div className="d-flex" style={{alignItems:"center"}}>
                <FontAwesomeIcon icon={faGripVertical} style={{marginRight:"5px"}} />
                <FontAwesomeIcon icon={faCaretRight} />
              </div>
              <div>
                <span class="ps-3">{module.name}</span>
                <br/>
                <span class="ps-3">{module.description}</span>
              </div>
            </div>
            <div class="float-end">
                <FontAwesomeIcon icon={faCircleCheck} style={{color: "green", marginLeft:"5px"}}/>
                <FontAwesomeIcon icon={faCaretDown} style={{marginLeft:"2px"}}/>
                <button
                    onClick={() => dispatch(deleteModule(module._id))}
                    className="btn"
                    style={{backgroundColor:"#B22222", color:"white", marginLeft:"15px"}}
                    >
                    Delete
              </button>
              <button
                    onClick={() => dispatch(setModule(module))}
                    className="btn"
                    style={{backgroundColor:"green", color:"white", marginLeft:"5px"}}
                    >
                    Edit
              </button>
            </div>
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;