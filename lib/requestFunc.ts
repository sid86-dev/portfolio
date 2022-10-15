import axios from "axios";

const getProjects = async () => {
  const res = await axios.get("/api/getProjects");
  return res.data;
};

export { getProjects };
