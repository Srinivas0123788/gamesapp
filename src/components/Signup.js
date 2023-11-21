import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
 
function Signup() {
  const navigate = useNavigate();
  var user = { name: "", email: "", password: "" };
  var [error, setError] = useState("");
  var [signedUp, setSignedUp] = useState(false);
 
  function handleNameText(event) {
    user.name = event.target.value;
  }
  function handleEmailText(event) {
    user.email = event.target.value;
  }
  function handlePassText(event) {
    user.password = event.target.value;
  }
 
  function register() {
    console.log();
    axios({
      url: "http://localhost:7000/register",
      method: "post",
      data: user,
    }).then((response) => {
        console.log("Response from signup api", response.data);
        if (response.data.message === "User Registered, verification mail sent") {
          setSignedUp("You are signed up!");
          setTimeout(()=>{
            navigate("/verification", { state: { email: user.email } });
          },2000);
        } else {
          setError("This Email is already registered with us!");
        }
      }).catch((error) => {
        if (error.response && error.response.status === 400) {
          setError("This Email is already registered with us!");
        } else {
          console.error("Error from api is", error);
          setError("This Email is already registered with us!");
        }
      });
  }
  return (  
    <section class="vh-100" style={{
        background: "hsla(356, 76%, 50%, 1)",
 
        background: "linear-gradient(90deg, hsla(356, 76%, 50%, 1) 0%, hsla(14, 63%, 36%, 1) 100%)",
       
        background: "-moz-linear-gradient(90deg, hsla(356, 76%, 50%, 1) 0%, hsla(14, 63%, 36%, 1) 100%)",
       
        background: "-webkit-linear-gradient(90deg, hsla(356, 76%, 50%, 1) 0%, hsla(14, 63%, 36%, 1) 100%)"
 
    }}>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{ "border-radius": "25px" ,"boxShadow":"2px 1px 30px 3px lightblue","background":"lightgrey"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
              {error && (
                    <div  style={{ "border":"1px solid hotpink","padding":"2px","margin":"2px" ,"textAlign":"center"}}>
                      {error}{" "}
                    </div>
                  )}
                  {signedUp && (
                    <div style={{ "border":"1px solid hotpink","padding":"2px","margin":"2px" ,"textAlign":"center"}}>
                      {signedUp}
                    </div>
                  )}
                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>

                <form class="mx-1 mx-md-4">
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input
                        onChange={handleNameText}
                        type="text"
                        id="form3Example1c"
                        class="form-control"
                      />
                      <label class="form-label" for="form3Example1c">
                        Your Name
                      </label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input
                        onChange={handleEmailText}
                        type="email"
                        id="form3Example3c"
                        class="form-control"
                      />
                      <label class="form-label" for="form3Example3c">
                        Your Email
                      </label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input
                        onChange={handlePassText}
                        type="password"
                        id="form3Example4c"
                        class="form-control"
                      />
                      <label class="form-label" for="form3Example4c">
                        Password
                      </label>
                    </div>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button
                      type="button"
                      onClick={register}
                      class="btn btn-primary btn-lg"
                    >
                      Register
                    </button>
                    
                    <Link to="/login" style={{"marginLeft":"10px"}}>
                        <button
                          style={{"background":"brown","color":"white","display":"inline","width":"100px","height":"50px"}}
                        ><b>
                          Login
                          </b>
                        </button>
                    </Link>
                  </div>
                
                </form>
              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img
                  src="https://images.nvidia.com/geforce-com/international/images/geforce-now/geforce-now-gamewall-v2.png"
                  style={{"boxShadow":"2px 1px 30px 3px red"}}
                  class="img-fluid"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);
}
    
      
 
export default Signup;

