import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer";
export default function SignUp(){
    function handleSubmit(e){
        e.preventDefault();
        navigate("/Home");
    }
      const navigate = useNavigate();
      const [entry, setEntry] = useState("email");
      const [message, setMessage] = useState("");
    
      const [formData, setFormData] = useState({
        email: "",
        password: "",
        PhoneN:""
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
    return(
      <div>
        <div style={styles.container}>
          <div style={styles.loginbutton}>
          <p>Already have an account?</p>
          <button type="button" onClick={()=>navigate("/login")} className="bt">Login</button>
          </div>

        
        <form style={styles.form} onSubmit={handleSubmit}>
          <h1 style={styles.heading}>Welcome User </h1>
          <img src="/images/logo.png"></img>
          <div style={{fontSize : 15, color : "red", textAlign : "center"}}>
            <h3>This page is not authenticated so entering any credentials will work</h3>
          
          </div>
          
          {entry === "email" ? (
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          ) : (
            <input
              type="tel"
              name="phoneN"
              placeholder="Enter phone number"
              value={formData.phoneN}
              onChange={handleChange}
              style={styles.input}
              required
            />
          )}

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />

          {message && <div style={{fontSize : 15, color : "red", textAlign : "center"}}>{message}</div>}

          <button type="submit" style={styles.button} >
            Sign up
          </button>

          <p style={{ textAlign: "center", color: "white" }}>or</p>

          {entry === "email" ? (
            <button
              type="button"
              style={styles.toggleBtn}
              onClick={() => setEntry("ph")}
            >
              Continue with phone number
            </button>
          ) : (
            <button
              type="button"
              style={styles.toggleBtn}
              onClick={() => setEntry("email")}
            >
              Continue with Email
            </button>
          )}
        </form>
      
      </div>
      <Footer/>
    </div>
    )
}
const styles = {
  container: {
    display: "flex",
    height: "920px",
    width: "100vw",
    background: " radial-gradient(#1d3444 ,#1d3544) ",
    alignItems:"center",
    justifyContent:"center",
    position:"relative"
  },


  form: {
    display: "flex",
    flexDirection: "column",
    width: "350px",
    gap: "15px",
    padding: "30px",
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: "12px",
    backdropFilter: "blur(10px)",
  },

  heading: {
    color: "white",
    textAlign: "center",
  },

  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
  },

  button: {
    padding: "12px",
    background: "linear-gradient(45deg, #4facfe, #00f2fe)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  toggleBtn: {
    padding: "10px",
    background: "transparent",
    color: "#4facfe",
    border: "1px solid #4facfe",
    borderRadius: "8px",
    cursor: "pointer",
  },
  loginbutton:{
    position: "absolute",
    top:"10px",
    right:"10px",
    display:"flex",
    flexDirection:"row",
    gap:"15px",
    alignItems:"center",
    cursor:"pointer"
    

  },
  
};
