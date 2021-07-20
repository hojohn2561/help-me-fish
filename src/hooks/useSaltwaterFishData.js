import { useContext } from "react";

import { SaltwaterFishDataContext } from "../context/saltwaterFishDataContext";

const useSaltwaterFishData = () => {
  const { saltwaterFishData } = useContext(SaltwaterFishDataContext);
  console.log(saltwaterFishData);

  return { saltwaterFishData };
};

export default useSaltwaterFishData;
