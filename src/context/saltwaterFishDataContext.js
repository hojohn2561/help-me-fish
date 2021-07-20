import React, { useEffect, useState } from "react";
import data from "../api/data";

const SaltwaterFishDataContext = React.createContext();

const SaltwaterFishDataProvider = ({ children }) => {
  const [saltwaterFishData, setSaltwaterFishData] = useState([]);

  // Upon initial use of this context, get fish data wishlist from backend
  useEffect(() => {
    getSaltwaterFishDataFromBackend();
  }, []);

  // Make API call to get user's wishlist from backend and update/reset the state/context
  const getSaltwaterFishDataFromBackend = async () => {
    const saltwaterFishData = await data.getFish("saltwater");
    console.log(saltwaterFishData);
    setSaltwaterFishData(saltwaterFishData);
  };

  return (
    <SaltwaterFishDataContext.Provider
      value={{ saltwaterFishData, setSaltwaterFishData }}
    >
      {children}
    </SaltwaterFishDataContext.Provider>
  );
};

export { SaltwaterFishDataContext, SaltwaterFishDataProvider };
