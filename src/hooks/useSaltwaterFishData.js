import { useContext } from "react";

import { SaltwaterFishDataContext } from "../context/saltwaterFishDataContext";

const useSaltwaterFishData = () => {
  const { saltwaterFishData } = useContext(SaltwaterFishDataContext);

  return { saltwaterFishData };
};

export default useSaltwaterFishData;
