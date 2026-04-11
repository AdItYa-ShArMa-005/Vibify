import React, { useState } from "react";
import { useNavigate, } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setInitialLiked } from "../states/likedSongsSlice";
import { setInitialList } from "../states/songListSlice";

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const category = useSelector(state => state.Category.value);
    const songList = useSelector(state => state.songList.value);
    const currentSong = useSelector(state => state.currentSong.value);
    const likedSong = useSelector(state => state.likedSongs.value);
    const songPool = useSelector(state => state.songPool.value);


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
function convertToMinutes(timeStr) {
  let [time, modifier] = timeStr.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (modifier === "PM" && hours !== 12) {
    hours += 12;
  }
  if (modifier === "AM" && hours === 12) {
    hours = 0;
  }

  return hours * 60 + minutes;
}

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.email || !formData.password) {
    alert("Please fill all fields");
    return;
  }

  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });

  const currentMinutes = convertToMinutes(formattedTime);

  const filteredSongs = songPool.filter(song => {
    const songMinutes = convertToMinutes(song.timeStamp);

    let diff = Math.abs(currentMinutes - songMinutes);
    diff = Math.min(diff, 1440 - diff);

    return diff <= 240;
  });

  dispatch(setInitialLiked(songPool.filter(song => song.liked === true)));
  dispatch(setInitialList(filteredSongs));

  navigate("/MainArea");
};

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    gap: "10px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Login;