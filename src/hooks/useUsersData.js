import { useContext } from "react";
import { UsersDataContext } from "../contexts/UsersDataContext";

export default () => {
  return useContext(UsersDataContext);
};
