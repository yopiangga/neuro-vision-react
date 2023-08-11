import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  // const [user, setUser] = useState(null);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "example@email.com",
    role: "operator",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
