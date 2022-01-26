import React from "react";
import UsersList from "../../components/UsersList";
import UsersRegister from "../../components/UsersRegister";
import UsersDataProvider from "../../contexts/UsersDataContext";
import "./styles.css";

export default function Main() {
  return (
    <UsersDataProvider>
      <div className="container-main">
        <UsersRegister />

        <UsersList />
      </div>
    </UsersDataProvider>
  );
}
