import { useState } from "react";
import { supabase } from "../../Supabase/supabaseClient";
import { useAuth } from "../../context/AuthContext";

export const SettingsPage = () => {
  const { user } = useAuth();
  const [isDisabled, setIsDisabled] = useState({
    name: true,
    surname: true,
    email: true,
  });

  const originalUser = {
    name: `${user.user_metadata.name}`,
    surname: `${user.user_metadata.surname}`,
    email: `${user.email}`,
    password: `${user.user_metadata.sub}`,
  };

  const [userData, setUserData] = useState(originalUser);

  const discardEdits = () => {
    setUserData(originalUser);
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    const { data: saveChangesData, error: saveChangesError } =
      await supabase.auth.updateUser({
        email: userData.email,
        data: {
          name: userData.name,
          surname: userData.surname,
        },
      });
    if (saveChangesError) {
      console.error(saveChangesError);
    } else {
      alert("\nChanges were successfully saved!\n\nIt might take some time before they take effect.\nIf nothing happens, refresh the page.")
    }
  };

  return (
    <div className="px-8 py-8 mb-8 sm:px-12 bg-cyan-dark bg-opacity-25 rounded-xl grid gap-2 grid-cols-1 text-white">
      <form className="mx-auto" onSubmit={handleSaveChanges}>
        <div>
          <label className="form-label">name</label>
          <input
            className={`max-w-48 transition-all ease-in-out duration-[.65s] text-cyan-ultradark bg-transparent w-full text-cyan-ultradar py-3 ${
              !isDisabled.name ? "form-field" : ""
            }`}
            type="text"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            disabled={isDisabled.name}
          />
          <button
            className="inline-block ml-2"
            onClick={(e) => {
              e.preventDefault();
              setIsDisabled((prev) => ({ ...prev, name: !prev.name }));
            }}
          >
            {isDisabled.name ? "Edit" : "Close"}
          </button>
        </div>
        <div>
          <label className="form-label">surname</label>
          <input
            className={`max-w-48 transition-all ease-in-out duration-[.65s] bg-transparent w-full text-cyan-ultradark py-3 ${
              !isDisabled.surname ? "form-field" : ""
            }`}
            type="text"
            value={userData.surname}
            onChange={(e) =>
              setUserData({ ...userData, surname: e.target.value })
            }
            disabled={isDisabled.surname}
          />
          <button
            className="inline-block ml-2"
            onClick={(e) => {
              e.preventDefault();
              setIsDisabled((prev) => ({ ...prev, surname: !prev.surname }));
            }}
          >
            {isDisabled.surname ? "Edit" : "Close"}
          </button>
        </div>
        <div>
          <label className="form-label">e-mail</label>
          <input
            className={`max-w-48 transition-all ease-in-out duration-[.65s] bg-transparent w-full text-cyan-ultradark py-3 ${
              !isDisabled.email ? "form-field" : ""
            }`}
            type="text"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            disabled={isDisabled.email}
          />
          <button
            className="inline-block ml-2"
            onClick={(e) => {
              e.preventDefault();
              setIsDisabled((prev) => ({ ...prev, email: !prev.email }));
            }}
          >
            {isDisabled.email ? "Edit" : "Close"}
          </button>
        </div>

        <button
          className="mt-8 mr-8 font-bold"
          type="reset"
          onClick={discardEdits}
        >
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
