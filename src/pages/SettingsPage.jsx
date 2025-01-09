import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";

const SettingsPage = () => {
  const fetchOriginalValues = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select("name, surname, email")
      .single(); 
    if (error) throw error;
    return data;
  };

  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const [originalData, setOriginalData] = useState({});
  const [isEditing, setIsEditing] = useState({
    name: false,
    surname: false,
    password: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchOriginalValues();
      setUserData(data);
      setOriginalData(data);
    };
    fetchData();
  }, []);

  const handleEditToggle = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleInputChange = (field, value) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    await updateSupabase(userData);
    setOriginalData(userData);
    setIsEditing({ name: false, surname: false, password: false });
  };

  const handleDiscard = () => {
    setUserData(originalData);
    setIsEditing({ name: false, surname: false, password: false });
  };

  return (
    <form className="w-full">
      {["name", "surname", "email", "password"].map((field) => (
        <div className="form-row" key={field}>
          <label className="form-label">{field}</label>
          {isEditing[field] ? (
            <input
              type={field === "password" ? "password" : "text"}
              value={userData[field]}
              onChange={(e) => handleInputChange(field, e.target.value)}
            />
          ) : (
            <span>{userData[field] || "Not Set"}</span>
          )}
          <button className="btn" onClick={(e) => {e.preventDefault;handleEditToggle(field)}}>
            {isEditing[field] ? "Cancel" : "Edit"}
          </button>
        </div>
      ))}
      <div className="mt-4">
        <button className="cta-btn"
          onClick={handleSave}
          disabled={JSON.stringify(userData) === JSON.stringify(originalData)}
        >
          Save
        </button>
        <button className="btn"
          onClick={handleDiscard}
          disabled={JSON.stringify(userData) === JSON.stringify(originalData)}
        >
          Discard
        </button>
      </div>
    </form>
  );
};

export default SettingsPage;
