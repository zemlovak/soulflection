import { useState, useEffect } from "react";
import { supabase } from "../Supabase/supabaseClient";
import { useAuth } from "../context/AuthContext";

export const SettingsPage = () => {
  const { user } = useAuth();
  const [isDisabled, setIsDisabled] = useState(true);

  const [userData, setUserData] = useState({
    name: `${user.user_metadata.name}`,
    surname: `${user.user_metadata.surname}`,
    email: `${user.email}`,
    password: `${user.user_metadata.sub}`,
  });

  return (
    <div className="px-8 py-8 mb-8 sm:px-12 bg-cyan-dark bg-opacity-25 rounded-xl grid gap-2 grid-cols-1 text-white">
      <form className="min-w-full mx-48">
        <div>
          <label className="form-label">name</label>
          <input
            className={`max-w-48 bg-transparent text-cyan-ultradark ${
              !isDisabled ?? form - field
            }`}
            type="text"
            placeholder={`${userData.name}`}
            disabled
          />
          <button
            className="inline-block ml-2"
            onClick={(e) => {
              e.preventDefault;
              setIsDisabled((prev) => {
                !prev;
              });
              console.log(isDisabled);
            }}
          >
            Edit
          </button>
        </div>
        <div>
          <label className="form-label">surname</label>
          <input
            className="bg-transparent text-cyan-ultradark"
            type="text"
            placeholder={`${userData.surname}`}
            disabled
          />
          <button
            className="inline-block ml-2"
            onClick={(e) => {
              e.preventDefault;
              setIsDisabled((prev) => {
                !prev;
              });
              console.log(isDisabled);
            }}
          >
            Edit
          </button>
        </div>
        <div>
          <label className="form-label">e-mail</label>
          <input
            className="bg-transparent text-cyan-ultradark"
            type="text"
            placeholder={`${userData.email}`}
            disabled={isDisabled}
          />
          <button
            className="inline-block ml-2"
            onClick={(e) => {
              e.preventDefault;
              setIsDisabled((prev) => {
                !prev;
              });
              console.log(isDisabled);
            }}
          >
            Edit
          </button>
        </div>

        <button className="mt-8 mr-8 font-bold" type="reset">
          Discard
        </button>
        <button className="cta-btn" type="submit">
          SAVE CHANGES
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
