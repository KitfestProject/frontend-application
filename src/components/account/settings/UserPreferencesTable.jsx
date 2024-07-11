import { useState } from "react";
import { userInterests } from "@/components/data/StaticData";
import { ModalTransparent, ModalAlert } from "@/components";
import { BiEdit, BiPlus, BiTrash } from "react-icons/bi";
import { FaTriangleExclamation } from "react-icons/fa6";

const UserPreferencesTable = () => {
  const [showCreatePreferenceModal, setShowCreatePreferenceModal] =
    useState(false);
  const [showEditPreferenceModal, setShowEditPreferenceModal] = useState(false);
  const [editPreferenceData, setEditPreferenceData] = useState(null);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [interestData, setInterestData] = useState({
    name: "",
    icon: "",
    interests: [{ title: "" }],
  });
  const [warningTitle, setWarningTitle] = useState("");
  const [warningMessage, setWarningMessage] = useState("");

  const toggleShowCreatePreferenceModal = () => {
    setShowCreatePreferenceModal(!showCreatePreferenceModal);
  };

  const toggleShowEditPreferenceModal = () => {
    setShowEditPreferenceModal(!showEditPreferenceModal);
  };

  const toggleShowShowAlertModal = () => {
    setShowAlertModal(!showAlertModal);
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

  const handleSetPreferenceData = (data) => {
    return () => {
      setEditPreferenceData(data);
      toggleShowEditPreferenceModal();
    };
  };

  const addEditInterest = () => {
    setEditPreferenceData({
      ...editPreferenceData,
      interests: [...editPreferenceData.interests, { title: "" }],
    });
  };

  const removeEditInterest = (index) => {
    if (editPreferenceData.interests.length === 1) return;

    const newInterests = editPreferenceData.interests.filter(
      (_, i) => i !== index
    );
    setEditPreferenceData({ ...editPreferenceData, interests: newInterests });
  };

  const handleRemoveInterest = (interestId, preferenceId) => {
    toggleShowShowAlertModal();
    setWarningTitle("Are you sure you want to delete this interest?");
    setWarningMessage(
      "You are about to delete this interest from your preferences. This action cannot be undone."
    );

    console.log(interestId, preferenceId);
  };

  const handleEditInterest = (interestId, preferenceId) => {
    toggleShowShowAlertModal();
    setWarningTitle("Are you sure you want to update this interest?");
    setWarningMessage(
      "You are about to edit this interest from your preferences. This action cannot be undone."
    );
    console.log(interestId, preferenceId);
  };

  const handleUpdatePreference = (preferenceId) => {
    toggleShowShowAlertModal();
    setWarningTitle("Are you sure you want to update this preference?");
    setWarningMessage(
      "You are about to update this preference. This action cannot be undone."
    );
    console.log(preferenceId);
  };

  const handleDeletePreference = (preferenceId) => {
    toggleShowShowAlertModal();
    setWarningTitle("Are you sure you want to delete this preference?");
    setWarningMessage(
      "You are about to delete this preference. This action cannot be undone."
    );
    console.log(preferenceId);
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
        <div key={index} className="overflow-x-auto mt-5">
          <table className="min-w-full bg-white dark:bg-darkGray border rounded border-gray/30 dark:border-gray/50">
            <thead className="bg-primary text-white dark:bg-gray">
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray/30 dark:border-gray/50 bg-gray-100 dark:bg-gray-900 text-left text-xs leading-4 font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 border-b-2 border-gray/30 dark:border-gray/50 bg-gray-100 dark:bg-gray-900 text-left text-xs leading-4 font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Icon
                </th>
                <th className="px-6 py-3 border-b-2 border-gray/30 dark:border-gray/50 bg-gray-100 dark:bg-gray-900 text-left text-xs leading-4 font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Interests
                </th>
                {/* Actions */}
                <th className="px-6 py-3 border-b-2 border-gray/30 dark:border-gray/50 bg-gray-100 dark:bg-gray-900 text-xs leading-4 font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray/30 dark:border-gray/50">
                  {data.name}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray/30 dark:border-gray/50">
                  <img src={data.icon} alt={data.name} className="h-10 w-10" />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray/30 dark:border-gray/50">
                  <ul className="list-disc pl-5">
                    {data.interests.map((interest, index) => (
                      <li
                        key={index}
                        className="text-gray-700 dark:text-gray-300"
                      >
                        {interest.title}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray/30 dark:border-gray/50 place-content-baseline text-right">
                  <button
                    onClick={handleSetPreferenceData(data)}
                    className="text-slate-100 bg-orange-500 dark:bg-gray px-5 py-2 rounded hover:text-primary-dark"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
                    className="text-dark font-semibold dark:text-gray"
                  >
                    Preference Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={interestData.name}
                    onChange={handleInputChange}
                    className="w-full text-primary bg-[#F5F5F5] dark:bg-gray-700 p-2 rounded-md outline-none text-[15px]"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="preferenceIcon"
                    className="text-dark font-semibold dark:text-gray"
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
                    className="w-full text-primary bg-[#F5F5F5] dark:bg-gray-700 p-2 rounded-md outline-none text-[15px]"
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
                          className="text-dark dark:text-gray"
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
                            className="w-full text-primary bg-[#F5F5F5] dark:bg-gray-700 p-2 rounded-md outline-none text-[15px]"
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

      {showEditPreferenceModal && (
        <ModalTransparent onClose={toggleShowEditPreferenceModal}>
          <div className="w-[700px] bg-white dark:bg-darkGray rounded-lg shadow-lg dark:border dark:border-gray/30">
            <div className="bg-primary text-slate-200 w-full p-5 rounded-t-lg">
              <h5 className="text-2xl font-bold tracking-tighter text-slate-100">
                Edit Preference
              </h5>
            </div>

            <div className="h-full max-h-[600px] overflow-y-scroll relative pb-10">
              <div className="p-5">
                <div className="mb-5">
                  <label
                    htmlFor="preferenceName"
                    className="text-dark font-semibold dark:text-gray"
                  >
                    Preference Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={editPreferenceData.name}
                    onChange={handleInputChange}
                    className="w-full text-primary bg-[#F5F5F5] dark:bg-gray-700 p-2 rounded-md outline-none text-[15px]"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="preferenceIcon"
                    className="text-dark font-semibold dark:text-gray"
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
                    value={editPreferenceData.icon}
                    onChange={handleInputChange}
                    className="w-full text-primary bg-[#F5F5F5] dark:bg-gray-700 p-2 rounded-md outline-none text-[15px]"
                  />
                </div>

                <div className="border-t border-gray/30 pt-5">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="font-bold text-xl dark:text-gray">
                      Enter Multiple Preferences
                    </h5>
                    <button
                      onClick={addEditInterest}
                      className="bg-green-100 text-xs text-green-500 px-5 py-1 rounded-full flex items-center gap-2 shadow-md sticky top-[300px]"
                    >
                      <BiPlus />
                      Add Interest
                    </button>
                  </div>

                  {editPreferenceData.interests.map((interest, index) => (
                    <div key={index} className="mb-5">
                      <div className="w-full">
                        <label
                          htmlFor={`interest-${index}`}
                          className="text-dark dark:text-gray"
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
                            className="w-full text-primary bg-[#F5F5F5] dark:bg-gray-700 p-2 rounded-md outline-none text-[15px]"
                          />
                          <div className="flex gap-2 items-center">
                            {interest.id && (
                              <button
                                onClick={() =>
                                  handleEditInterest(
                                    interest.id,
                                    editPreferenceData.id
                                  )
                                }
                                className="bg-orange-100 text-orange-500 px-5 py-2 rounded"
                              >
                                <BiEdit />
                              </button>
                            )}

                            {interest.id ? (
                              <button
                                onClick={() =>
                                  handleRemoveInterest(
                                    interest.id,
                                    editPreferenceData.id
                                  )
                                }
                                className="bg-red-100 text-red-500 px-3 py-2 rounded-md flex items-center gap-1 shadow-md"
                              >
                                <BiTrash />
                              </button>
                            ) : (
                              <button
                                onClick={() => removeEditInterest(index)}
                                className="bg-red-100 text-red-500 px-3 py-2 rounded-md flex items-center gap-1 shadow-md"
                              >
                                <BiTrash />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex gap-2 items-center fixed bottom-0 left-0 w-full p-3 border-t border-gray/20 bg-white dark:bg-gray rounded-b-md">
                  <button
                    onClick={() =>
                      handleUpdatePreference(editPreferenceData.id)
                    }
                    className="bg-primary text-white px-5 py-2 rounded text-sm"
                  >
                    Update Preference
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      handleDeletePreference(editPreferenceData.id)
                    }
                    className="bg-red-100 text-red-500 py-2 px-5 rounded-md flex justify-center items-center gap-2 text-sm shadow-md"
                  >
                    Delete Preference
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ModalTransparent>
      )}

      {/* Modal */}
      {showAlertModal && (
        <ModalAlert onClose={toggleShowShowAlertModal}>
          <div className="p-5">
            <div className="flex justify-center items-center p-3 rounded">
              <FaTriangleExclamation className="text-red-500 text-6xl" />
            </div>

            <h1 className="text-lg font-bold text-dark dark:text-white text-center">
              {warningTitle}
            </h1>

            <p className="text-base text-gray dark:text-gray mt-2 text-center">
              {warningMessage}
            </p>

            <div className="flex justify-end mt-5">
              <button
                onClick={toggleShowShowAlertModal}
                className="text-lg text-gray-500 dark:text-gray-500 p-3 hover:bg-gray-100 dark:hover:bg-gray-100/50 rounded-full"
              >
                Cancel
              </button>
              <button
                onClick={() => {}}
                className="text-lg text-red-500 dark:text-red-500 p-3 hover:bg-red-100 dark:hover:bg-red-100/50 rounded-md"
              >
                Remove
              </button>
            </div>
          </div>
        </ModalAlert>
      )}
    </>
  );
};

export default UserPreferencesTable;
