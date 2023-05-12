import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import Reducer, { actions } from "./Reducer";

const initialState = {
  transactions: [],
};

export const Context = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState, () => {
    const localData = localStorage.getItem("transactions");
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state));
  }, [state]);

  const addTransaction = (transactions) => {
    dispatch({
      type: actions.ADD_TRANSACTION,
      payload: transactions,
    });
  };

  const deleteTransaction = (idTransaction) => {
    console.log(idTransaction);
    dispatch({ type: actions.DELETE_TRANSACTION, payload: idTransaction });
  };

  return (
    <Context.Provider value={{ ...state, addTransaction, deleteTransaction }}>
      {children}
    </Context.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node,
};
