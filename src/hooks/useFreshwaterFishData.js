import { useContext } from "react";

import { FreshwaterFishDataContext } from "../context/freshwaterFishDataContext";

const useFreshwaterFishData = () => {
  const { freshwaterFishData } = useContext(FreshwaterFishDataContext);

  return { freshwaterFishData };
};

export default useFreshwaterFishData;
