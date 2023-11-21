import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useDispatch } from "react-redux"
 
 
 
function Login() {
    var dispatch = useDispatch()
    var [user,setUser] = useState({})
    var [error,setError]= useState()
    var navigate = useNavigate()
 
  function handleNameText(event) {
    user.name = event.target.value;
  }
  function handleEmailText(event) {
    user.email = event.target.value;
    setUser(user)
  }
  function handlePassText(event) {
    user.password = event.target.value;
    setUser(user)
  }
 
  function loggingin() {
    axios({
      url: "http://localhost:7000/login",
        method:"post",
        data:user
      }).then((response)=>{
        console.log("Response from login api" , response.data)
        if(response.data.token){
             dispatch({
              type:"LOGIN_SUCCESS"
             })
            localStorage.token = response.data.token
            navigate("/")
            window.location.reload()
        }
        else{
            setError("Invalid Credentials")
        }
      }, (error)=>{
        console.log("Error from login api is" ,error)
      })
 
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
          <div class="col-lg-12 col-xl-11" >
            <div class="card text-black" style={{ "border-radius": "25px","boxShadow":"2px 1px 30px 3px lightblue","background":"lightgrey" }}>
              <div class="card-body p-md-5" >
                <div class="row justify-content-center" >
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <div class="d-flex flex-row align-items-center mb-4">
                    </div>
                    {error}
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Login
                    </p>
 
                    <form class="mx-1 mx-md-4">
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
                          onClick={loggingin}
                          class="btn btn-primary btn-lg"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://source.unsplash.com/featured/?pc-games"
                      style={{"width":"700px","height":"400px" ,"boxShadow":"2px 1px 30px 3px red","objectFit":"cover"}}
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
 
export default Login;
