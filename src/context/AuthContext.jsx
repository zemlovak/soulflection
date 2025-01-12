import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

async function login({ email, password }) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

const logout = async () => {
  return await supabase.auth.signOut();
};

const register = async (email, password, name, surname) => {
  return await supabase.auth.signUp({
    email,
    password,
    name,
    surname,
  });
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);

  const getUserName = async (userId) => {
    const { data: profileData, error } = await supabase
      .from("profiles")
      .select("name")
      .eq("id", userId)
      .single();
    console.log("profileData:", profileData);
    return profileData.name;
  };

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN") {
        setIsLoggedIn(true);
        setUser(session.user);

        getUserName(session.user.id).then((name) => {
          console.log("name: (response)", name);
          setUserName(name);
        });
      }

      if (event === "SIGNED_OUT") {
        setIsLoggedIn(false);
        setUser(null);
        setUserName(null);
        console.log(userName);
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (userName !== null) {
      console.log("userName", userName);
      navigate(`/${userName}`);
    }
  }, [userName]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, user, userName, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};
