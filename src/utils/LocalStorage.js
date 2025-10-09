import { toast } from "react-toastify";

// * Get Data
export const getLocalStorage = () => {
  const data = localStorage.getItem("installedApp");
  return data ? JSON.parse(data) : [];
};

// * Set Data
export const setLocalStorage = (appData) => {
  const beforeData = getLocalStorage();

  const isDuplicate = beforeData.some((appInfo) => appInfo.id === appData.id);
  if (isDuplicate) {
    return toast("Already installed");
  }

  const updatedData = [...beforeData, appData];
  localStorage.setItem("installedApp", JSON.stringify(updatedData));
};

// * Remove Data
export const removeData = (id) => {
  const beforeData = getLocalStorage();

  const currentData = beforeData.filter((aInfo) => aInfo.id !== id);
  localStorage.setItem("installedApp", JSON.stringify(currentData));
};
