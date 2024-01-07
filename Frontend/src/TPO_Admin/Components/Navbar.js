import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import TpoAdminContext from "../../context/TpoAdminstate";

const Navbar = () => {
    const img_src = "https://th.bing.com/th/id/R.9d32bec8058bd3595a63a08a8cc12ade?rik=9cCTin36GLU%2f5w&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_87237.png&ehk=hVpH%2bC7rwlA1j2KqxGpMs1sp9l0RgM0jjRJsJsvDoPc%3d&risl=&pid=ImgRaw&r=0";
    const { profile,fetchprofile,setprofile,loading,setloading } = useContext(TpoAdminContext);
    const navigate=useNavigate();
    const [user,setuser]=useState(sessionStorage.getItem('user'));
    const logout=()=>{
        sessionStorage.setItem('tocken','');
        sessionStorage.setItem('role','');
        setprofile({
            "_id": "",
            "username": "",
            "__v": 0
        });
        navigate('/login');
    };
    useEffect(()=>{
        setuser(sessionStorage.getItem('user'));
    },[])
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">GCEK</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/AllDrives">Ongoing Drives</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/PendingRequests">Pending Requests</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/RegisteredStudents">Registered Students</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/placement_stat">Placement Statistics</Link>
                            </li>
                        </ul>
                        <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle profile" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{display:"flex"}}>
                            <div className="profile mx-2">
                                <img className='profile_pic mx-2' src={img_src} style={{ height: "40px", width: "40px" }} />
                                <h6>{user}</h6>
                                </div>
                            </a>
                            <ul class="dropdown-menu mx-1">
                                <li><Link class="dropdown-item" to="">My Profile</Link></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><button class="dropdown-item" onClick={logout}>Logout</button></li>
                            </ul>
                        </div>
                        <div className="notifications mx-3">
                            <Link to='/notifications'><i class="fa fa-bell" style={{ fontSize: "30px" }}></i></Link>
                        </div>
                        {/* <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;