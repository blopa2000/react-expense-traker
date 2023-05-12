import { Context } from "../context/GlobalState";
import { useContext } from "react";

export const useGlobalContext = () => useContext(Context);
