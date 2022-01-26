import React, { createContext } from "react";
import useUsersDataProvider from "../hooks/useUsersDataProvider";

export const UsersDataContext = createContext({});

export default (props) => {
  const UsersDataProvider = useUsersDataProvider();
  return (
    <UsersDataContext.Provider value={UsersDataProvider}>
      {props.children}
    </UsersDataContext.Provider>
  );
};
