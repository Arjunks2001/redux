import React from "react";
import notify from "../../../../Assets/Icons/notify.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/signup");
    console.log("hi")
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg mt-2  ">
        <div class="container-fluid mb-5">
          <a></a>
          <h4 className="std_logo rounded-5 px-3 py-1 mt-3 ms-lg-3 ">
            {" "}
            <font color="#16FFBB">L</font>
            <font color="#16FFBB">o</font>
            <font color="#00FFF5">b</font>
            <font color="#00FFF5">s</font>
            <font color="#3EBAFF">t</font>
            <font color="#3EBAFF">e</font>
            <font color="#6074FF">r </font>{" "}
          </h4>
          <div>
                <img
                  src={notify}
                  alt=""
                  className="ms-5 d-block d-lg-none std_notify rounded-5 p-2"
                  width={40}
                ></img>
              </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse  " id="navbarSupportedContent">
            <div class="navbar-nav   std_navbar_buttons  mx-auto mb-2 d-flex align-items-center mt-5  mb-lg-0 gap-lg-5 gap-2 mt-lg-2">
              <div class="dropdown">
                <a
                  class=" nav-link text-center py-1 px-lg-4 px-5   std_events rounded-4 me-2  "
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Events
                </a>
                <ul
                  class="dropdown-menu bg-transparent std_list  border-0 "
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <div className="col-lg-7 col-11">
                    <a class="dropdown-item rounded-5 mb-2  text-center  " href="#">
                      Event 1 
                    </a>
                    </div>
                  </li>
                  <li>
                  <div className="col-lg-7 col-11">
                    <a class="dropdown-item rounded-5 mb-2  text-center  " href="#">
                      Event 1 
                    </a>
                    </div>
                  </li>
                  <li>
                  <div className="col-lg-7 col-11">
                    <a class="dropdown-item rounded-5 mb-2  text-center  " href="#">
                      Event 1 
                    </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="dropdown">
                <a
                  class=" nav-link text-center py-1 px-lg-4 px-5 w-100  std_events rounded-4 me-2  "
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blogs
                </a>
                <ul
                  class="dropdown-menu bg-transparent std_list w-100  border-0 "
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                  <div className="col-lg-7 col-11">
                    <a class="dropdown-item rounded-5 mb-2  text-center  " href="#">
                      Event 1 
                    </a>
                    </div>
                  </li>
                  <li>
                  <div className="col-lg-7 col-11">
                    <a class="dropdown-item rounded-5 mb-2  text-center  " href="#">
                      Event 1 
                    </a>
                    </div>
                  </li>
                  <li>
                  <div className="col-lg-7 col-11">
                    <a class="dropdown-item rounded-5 mb-2  text-center  " href="#">
                      Event 1 
                    </a>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <li class="nav-item">
                <a class="nav-link px-lg-4 px-5 py-1 w-100  rounded-4" href="#">
                  Blogs
                </a>
              </li> */}
              {/* <li class="nav-item">
                <a class="nav-link px-lg-4 px-5 w-100 py-1  rounded-4" href="#">
                  Collabs
                </a>
              </li> */}
              <div class="dropdown">
                <a
                  class=" nav-link text-center py-1 px-lg-4 px-5 w-100  std_events rounded-4 me-2  "
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Collabs
                </a>
                <ul
                  class="dropdown-menu bg-transparent std_list w-100  border-0 "
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                  <div className="col-lg-8 ">
                    <a class="dropdown-item rounded-5 mb-2  text-center  " href="#">
                      Event 1 
                    </a>
                    </div>
                  </li>
                  <li>
                  <div className="col-lg-8">
                    <a class="dropdown-item rounded-5 mb-2  text-center  " href="#">
                      Event 1 
                    </a>
                    </div>
                  </li>
                  <li>
                  <div className="col-lg-8  ">
                    <a class="dropdown-item rounded-5 mb-2  text-center  " href="#">
                      Event 1 
                    </a>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <li class="nav-item">
                <a
                  class="nav-link px-lg-4 px-5 w-100  py-1  rounded-4 "
                  aria-disabled="true"
                >
                  Campus
                </a>
              </li> */}
              <div class="dropdown">
                <a
                  class=" nav-link text-center py-1 px-lg-4 px-5 w-100  std_events rounded-4 me-2  "
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Campus
                </a>
                <ul
                  class="dropdown-menu bg-transparent std_list w-100  border-0 "
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                  <div className="col-lg-8 ">
                    <a class="dropdown-item rounded-5 mb-2  text-center  " href="#">
                      Event 1 
                    </a>
                    </div>
                  </li>
                  <li>
                  <div className="col-lg-8 ">
                    <a class="dropdown-item rounded-5 mb-2  text-center  " href="#">
                      Event 1 
                    </a>
                    </div>
                  </li>
                  <li>
                  <div className="col-lg-8 ">
                    <a class="dropdown-item rounded-5 mb-2  text-center  " href="#">
                      Event 1 
                    </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="dropdown">
                <a
                  class=" nav-link text-center py-1 px-lg-4 px-5 w-100  std_events rounded-4 me-2  "
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 More
                </a>
                <ul
                  class="dropdown-menu bg-transparent std_list w-100  border-0 "
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                   <div className="col-lg-7">
                   <a class="dropdown-item rounded-5 mb-2 text-center " href="/about">
                      About
                    </a>
                   </div>
                  </li>
                  <li>
                   <div className="col-lg-7">
                   <a class="dropdown-item rounded-5 p-1 px-2 mb-2  text-center" href="/support">
                      Support
                    </a>
                   </div>
                  </li>
                
                 
                </ul>
              </div>
              
            </div>

            <div class=" d-flex justify-content-lg-between mt-3 justify-content-center" role="search">
              <div>
                <img
                  src={notify}
                  alt=""
                  className="me-4 d-none d-lg-block std_notify rounded-5 p-2"
                  width={40}
                ></img>
              </div>

              <div class="mt-2">
                <a class="std_sign_up py-2  px-4 ms-2 text-decoration-none  rounded-4 me-2  "  href="/signup">
                  Signup/Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
