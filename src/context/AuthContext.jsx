import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../Supabase/supabaseClient";

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
  const slugNum = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
  console.log(slugNum);
  const slug = `${name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}-${surname
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")}-${slugNum}`;
  console.log(slug);

  const { data: singUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        surname,
        slug,
      },
    },
  });
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userUrl, setUserUrl] = useState(null);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN") {
        setIsLoggedIn(true);
        setUser(session.user);
        setUserName(session.user.user_metadata.name);
        setUserUrl(session.user.user_metadata.slug);

        navigate(`/${session.user.user_metadata.slug}`)
      }

      if (event === "SIGNED_OUT") {
        setIsLoggedIn(false);
        setUser(null);
        setUserName(null);
        setUserUrl(null);
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, user, userName, userUrl, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};
