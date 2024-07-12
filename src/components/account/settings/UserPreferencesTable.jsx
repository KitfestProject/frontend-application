import { useState } from "react";
import { userInterests } from "@/components/data/StaticData";
import { ModalTransparent, ModalAlert, UserInterest } from "@/components";
import { BiPlus, BiTrash } from "react-icons/bi";
import { FaTriangleExclamation } from "react-icons/fa6";

const UserPreferencesTable = () => {
  const [showCreatePreferenceModal, setShowCreatePreferenceModal] =
    useState(false);
  const [interestData, setInterestData] = useState({
    name: "",
    icon: "",
    interests: [{ title: "" }],
  });

  const toggleShowCreatePreferenceModal = () => {
    setShowCreatePreferenceModal(!showCreatePreferenceModal);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "name" || name === "icon") {
      setInterestData({ ...interestData, [name]: value });
    } else {
      const newInterests = [...interestData.interests];
      newInterests[index][name] = value;
      setInterestData({ ...interestData, interests: newInterests });
    }
  };

  const addInterest = () => {
    setInterestData({
      ...interestData,
      interests: [...interestData.interests, { title: "" }],
    });
  };

  const removeInterest = (index) => {
    if (interestData.interests.length === 1) return;

    const newInterests = interestData.interests.filter((_, i) => i !== index);
    setInterestData({ ...interestData, interests: newInterests });
  };

  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-lg font-bold text-dark dark:text-slate-100">
          User Preferences
        </h1>
        <button
          onClick={toggleShowCreatePreferenceModal}
          className="text-primary hover:text-primary-dark"
        >
          Create New Preference
        </button>
      </div>

      {userInterests.map((data, index) => (
        // UserInterest component
        <UserInterest
          key={index}
          data={data}
          interestData={interestData}
          setInterestData={setInterestData}
        />
      ))}

      {showCreatePreferenceModal && (
        <ModalTransparent onClose={toggleShowCreatePreferenceModal}>
          <div className="w-[700px] bg-white dark:bg-darkGray rounded-lg shadow-lg dark:border dark:border-gray/30">
            <div className="bg-primary text-slate-200 w-full p-5 rounded-t-lg">
              <h5 className="text-2xl font-bold tracking-tighter text-slate-100">
                Create Preference
              </h5>
            </div>

            <div className="h-full max-h-[600px] overflow-y-scroll">
              <div className="p-5">
                <div className="mb-5">
                  <label
                    htmlFor="preferenceName"
                    className="text-dark font-semibold dark:text-gray text-sm"
                  >
                    Preference Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={interestData.name}
                    onChange={handleInputChange}
                    className="w-full text-primary bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-[15px]"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="preferenceIcon"
                    className="text-dark font-semibold dark:text-gray text-sm"
                  >
                    Preference Icon
                  </label>{" "}
                  <p className="text-gray dark:text-gray text-xs font-semibold mb-2">
                    Provide icon url i.e
                    (https://theatreke.co.ke/images/music-icon.png)
                  </p>
                  <input
                    type="text"
                    name="icon"
                    value={interestData.icon}
                    onChange={handleInputChange}
                    className="w-full text-primary bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-[15px]"
                  />
                </div>

                <div className="border-t border-gray/30 pt-5">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="font-bold text-xl dark:text-gray">
                      Enter Multiple Preferences
                    </h5>
                    <button
                      onClick={addInterest}
                      className="bg-green-100 text-xs text-green-500 px-5 py-1 rounded-full flex items-center gap-2 shadow-md sticky top-[300px]"
                    >
                      <BiPlus />
                      Add Interest
                    </button>
                  </div>

                  {interestData.interests.map((interest, index) => (
                    <div key={index} className="mb-5">
                      <div className="w-full">
                        <label
                          htmlFor={`interest-${index}`}
                          className="text-dark dark:text-gray text-sm font-semibold"
                        >
                          Interests ({index + 1})
                        </label>
                        <div className="flex justify-center items-center gap-2">
                          <input
                            type="text"
                            name="title"
                            value={interest.title}
                            onChange={(e) => handleInputChange(e, index)}
                            id={`interest-${index}`}
                            className="w-full text-primary bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-[15px]"
                          />

                          {index > 0 && (
                            <button
                              onClick={() => removeInterest(index)}
                              className="bg-red-100 text-red-500 px-3 py-2 rounded-md flex items-center gap-1 shadow-md"
                            >
                              <BiTrash />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <button className="bg-primary text-white px-5 py-2 rounded">
                    Create Preference
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ModalTransparent>
      )}
    </>
  );
};

export default UserPreferencesTable;
