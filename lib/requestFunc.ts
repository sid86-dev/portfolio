import axios from "axios";

const getProjects = async () => {
  const res = await axios.get("/api/getProjects");
  console.log(res.data)
  return res.data;
};

export { getProjects };
