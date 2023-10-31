import ModuleList from "./ModuleList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck, faPlus, faEllipsisV} from "@fortawesome/free-solid-svg-icons";
function Modules() {
  return (
    <div >
        <div class="buttonset" style={{width:"100%", height:"100px"}}>
            <div class="float-end" style={{paddingBottom:"20px", borderBottom: "1.5px solid #ddd"}}>
                <button class="btn btn-secondary dropdown-toggle" style={{backgroundColor: "#ddd", border: "#ddd", color:"black", marginLeft:"5px", marginTop:"20px"}}>Collapse All</button>
                <button class="btn btn-secondary" style={{backgroundColor:"#ddd", border: "#ddd", color:"black", marginLeft:"5px", marginTop:"20px"}}>View Progress</button>
                <button class="btn b tn-secondary" style={{backgroundColor:"#ddd", border: "#ddd", color:"black", marginLeft:"5px", marginTop:"20px"}}><FontAwesomeIcon icon={faCircleCheck} style={{ color: "green" }} /> Publish All</button>
                <button class="btn btn-danger" style={{backgroundColor:"#B22222", border: "white", color:"white", marginLeft:"5px", marginTop:"20px"}}><FontAwesomeIcon icon={faPlus} />  Module</button>
                <button class="btn btn-secondary"style={{height:"36px", backgroundColor:"#ddd", border: "#ddd", color:"black", marginLeft:"5px", marginTop:"20px"}}><FontAwesomeIcon icon={faEllipsisV} /> </button>
            </div>
        </div>
      <ModuleList />
    </div>
  );
}
export default Modules;