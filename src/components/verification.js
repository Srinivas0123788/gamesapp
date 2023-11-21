import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import "./verification.css";
 
function Verification() {
  const location = useLocation();
  const { email } = location.state;
  const navigate = useNavigate();
 
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [verified, setVerified] = useState("");
 
  function handleOtp(event) {
    setOtp(event.target.value);
  }
 
  function verify() {
    axios({
      url: "http://localhost:7000/verifyUser",
      method: "post",
      data: {
        email: email,
        code: otp,
      },
    })
      .then((response) => {
        if (response.data.message === "User Verified successfully") {
          setVerified(" Verification Successful! You can now login and will be redirected to login page in 5 seconds");
          setTimeout(()=>{
            navigate("/login");
          },5000);
         
        } else {
          setError("Invalid verification code");
        }
      })
      .catch((error) => {
        setError("Invalid verification code or An error occurred while verifying.");
        console.error("Error verifying user:", error);
      });
  }
 
  return (
    <div className="container">
      <div>
        <div></div>
        <div ></div>
      </div>
      <div >
        <div >
          <h6 style={{"marginLeft":"50px"}}> Enter the code sent to your mail !</h6>
          {error && (
            <div className="alert"> {error} </div>
          )}
          {verified && (
            <div className="alert-success">
              {" "}
              {verified}
            </div>
          )}
          <div id="otp" >
            <input
              onChange={handleOtp}
              type="text"
              className="otp-input"
            />
          </div>
          <div >
            <button className="verifyButton" onClick={verify}>
              Validate
            </button>
          </div>
        </div>
        <div >
          <div className="resendd" >
            <span >Didn't Recieve the code? </span>
            <a href="#" >
                Resend !
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Verification;
 