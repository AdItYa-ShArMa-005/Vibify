import { useSelector } from "react-redux";

const songs = () => {
  console.log(useSelector((state) => state.songPool.value));
  return useSelector((state) => state.songPool.value);
}

export default songs;