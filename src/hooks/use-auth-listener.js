import { useState, useEffect, useContext } from "react";
import FirebaseContext from "../context/firebase";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { getUserName } from "../actions/firebase";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const firebase = useContext(FirebaseContext);

  const updateUserName = async () => {
    updateProfile(firebase.auth.currentUser, {
      displayName: await getUserName(firebase.auth.currentUser),
    });
  };
  useEffect(() => {
    const listener = onAuthStateChanged(firebase.auth, (authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
        updateUserName();
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
    return () => listener();
  }, [firebase.auth]);
  return { user };
}
