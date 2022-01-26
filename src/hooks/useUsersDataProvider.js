import { useState } from "react";

export default () => {
  const [usersData, setUsersData] = useState([]);
  const [userInEditing, setUserInEditing] = useState(false);

  function handleDeleteUser(userId) {
    const localUsersData = [...usersData];

    const index = localUsersData.findIndex((item) => item.id === userId);

    localUsersData.splice(index, 1);

    setUsersData(localUsersData);
  }

  return {
    usersData,
    setUsersData,
    userInEditing,
    setUserInEditing,
    handleDeleteUser,
  };
};
