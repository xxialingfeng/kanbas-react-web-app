import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck, faPlus, faEllipsisV, faGripVertical, faCaretRight, faCaretDown} from "@fortawesome/free-solid-svg-icons";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group" style={{marginTop:"10px", width:"100%"}}>
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item"
           style={{marginTop:"30px", height:"70px", backgroundColor:"#ddd", fontFamily: "Verdana, Arial, Helvetica, sans-serif", display:"flex", alignItems:"center", justifyContent:"space-between"}}
           >
            <div>
                <FontAwesomeIcon icon={faGripVertical} style={{marginRight:"5px"}} />
                <FontAwesomeIcon icon={faCaretRight} />
                <span class="ps-3">{module.name}</span>
            </div>
            <div class="float-end">
                <FontAwesomeIcon icon={faCircleCheck} style={{color: "green", marginLeft:"5px"}}/>
                <FontAwesomeIcon icon={faCaretDown} style={{marginLeft:"2px"}}/>
                <FontAwesomeIcon icon={faPlus} style={{marginLeft:"15px"}}/>
                <FontAwesomeIcon icon={faEllipsisV}style={{marginLeft:"15px"}}/>
            </div>
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;