import React, { useEffect, useState } from "react";
import data from "../api/data";

const FreshwaterFishDataContext = React.createContext();

const FreshwaterFishDataProvider = ({ children }) => {
  const [freshwaterFishData, setFreshwaterFishData] = useState([]);

  // Upon initial use of this context, get fish data wishlist from backend
  useEffect(() => {
    getFreshwaterFishDataFromBackend();
  }, []);

  // Make API call to get user's wishlist from backend and update/reset the state/context
  const getFreshwaterFishDataFromBackend = async () => {
    const freshwaterFishData = await data.getFish("freshwater");
    setFreshwaterFishData(freshwaterFishData);
  };

  return (
    <FreshwaterFishDataContext.Provider
      value={{ freshwaterFishData, setFreshwaterFishData }}
    >
      {children}
    </FreshwaterFishDataContext.Provider>
  );
};

export { FreshwaterFishDataContext, FreshwaterFishDataProvider };
