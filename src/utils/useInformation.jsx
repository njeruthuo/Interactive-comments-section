import { useState } from "react";
import users from "../data.json";

const useInformation = () => {
  const [dataFeed, setDataFeed] = useState(users);
  return { dataFeed, setDataFeed };
};
export default useInformation;
