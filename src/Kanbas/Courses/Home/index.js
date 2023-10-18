import ModuleList from "../Modules/ModuleList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck, faPlus, faEllipsisV, faBan, faFileImport, faUpload, faBullseye, faMagnifyingGlassChart, faBullhorn, faBell, faCircleInfo, faXmark, faCalendarDays, faChevronDown} from "@fortawesome/free-solid-svg-icons";
function Home() {
    return (
      <div className="d-flex">
        <div class="buttonset" style={{width:"100%", height:"100px"}}>
            <div class="float-end" style={{paddingBottom:"20px", borderBottom: "1.5px solid #ddd"}}>
                <button class="btn btn-secondary dropdown-toggle" style={{backgroundColor: "#ddd", border: "#ddd", color:"black", marginLeft:"5px", marginTop:"20px"}}>Collapse All</button>
                <button class="btn btn-secondary" style={{backgroundColor:"#ddd", border: "#ddd", color:"black", marginLeft:"5px", marginTop:"20px"}}>View Progress</button>
                <button class="btn b tn-secondary" style={{backgroundColor:"#ddd", border: "#ddd", color:"black", marginLeft:"5px", marginTop:"20px"}}><FontAwesomeIcon icon={faCircleCheck} style={{ color: "green" }} /> Publish All</button>
                <button class="btn btn-danger" style={{backgroundColor:"#B22222", border: "white", color:"white", marginLeft:"5px", marginTop:"20px"}}><FontAwesomeIcon icon={faPlus} />  Module</button>
                <button class="btn btn-secondary"style={{height:"36px", backgroundColor:"#ddd", border: "#ddd", color:"black", marginLeft:"5px", marginTop:"20px"}}><FontAwesomeIcon icon={faEllipsisV} /> </button>
            </div>
            <ModuleList />
        </div>
        <div style={{width:"400px"}}>
            <div clasName="d-none d-lg-block" style={{paddingLeft:"20px"}}>
                    <p style={{fontSize:"20px", marginTop:"20px"}}>Course Status</p>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item list-group-item-light"><FontAwesomeIcon icon={faBan} style={{color:"grey"}}/> Unpublish</li>
                        <li class="list-group-item list-group-item-success"><FontAwesomeIcon icon={faCircleCheck} style={{color:"white"}}/> Published</li>
                    </ul>
                    <ul class="list-group" style={{paddingTop:"10px", paddingRight:"20px"}}>
                        <li class="list-group-item list-group-item-secondary"><FontAwesomeIcon icon={faFileImport}/> Import Existing Content</li>
                        <li class="list-group-item list-group-item-secondary"><FontAwesomeIcon icon={faUpload}/> Import from Commons</li>
                        <li class="list-group-item list-group-item-secondary"><FontAwesomeIcon icon={faBullseye}/> Choose Home Page</li>
                        <li class="list-group-item list-group-item-secondary"><FontAwesomeIcon icon={faMagnifyingGlassChart}/> View Course Stream</li>
                        <li class="list-group-item list-group-item-secondary"><FontAwesomeIcon icon={faBullhorn}/> New Announcement</li>
                        <li class="list-group-item list-group-item-secondary"><FontAwesomeIcon icon={faMagnifyingGlassChart}/> New Analytics</li>
                        <li class="list-group-item list-group-item-secondary"><FontAwesomeIcon icon={faBell}/> View Course Notification</li>
                    </ul>
                    <div class="row" style={{paddingTop:"20px", paddingBottom:"10px", borderBottom: "1px solid #ddd"}}>
                            <span style={{fontWeight:"bold", fontSize:"14px"}}>To Do</span>
                    </div>
                    <div class="d-flex" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                            <div class="d-flex" style={{width:"40px"}}><FontAwesomeIcon icon={faCircleInfo} style={{color:"#B22222"}}/></div>
                            <div style={{marginTop:"10px"}}>
                                <span style={{fontSize:"12px", color: "#B22222"}}>Grade A1 HTML + ENV</span>
                                <br/>
                                <span style={{fontSize:"10px"}}>100 points - Sep 18 at 23:59pm</span>
                            </div>
                            <div class="d-flex" style={{width:"20px", marginLeft:"20px"}}><FontAwesomeIcon icon={faXmark}/></div>
                    </div>
                    <div style={{paddingTop:"20px", paddingBottom:"10px", borderBottom: "1px solid #ddd"}}>
                        <span style={{fontWeight:"bold", fontSize:"14px"}}>Coming Up</span>
                        <div class="float-end">
                            <FontAwesomeIcon icon={faCalendarDays}/>
                            <span style={{color:"#B22222", fontSize:"12px"}}>View Calendar</span>
                        </div>
                    </div>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <div style={{width:"40px"}}>
                            <FontAwesomeIcon icon={faCalendarDays}/>
                        </div>
                        <div style={{marginTop:"10px"}}>
                            <span style={{fontSize:"12px", color: "#B22222"}}>Lecture</span>
                            <br/>
                            <span style={{fontSize:"10px", color:"grey"}}>CS4550.12631.202410</span>
                            <br/>
                            <span style={{fontSize:"10px", color:"grey"}}>Set 11 at 11:45 am</span>
                        </div>

                    </div>
                                   

                    <span style={{fontSize:"12px", color:"#B22222"}}>12 more in the next week...</span>

                </div>
        </div>
    
      </div>
    );
  }
  export default Home;