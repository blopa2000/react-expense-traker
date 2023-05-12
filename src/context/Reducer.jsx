export const actions = {
  ADD_TRANSACTION: "ADD_TRANSACTION",
  DELETE_TRANSACTION: "DELETE_TRANSACTION",
};
// eslint-disable-next-line react-refresh/only-export-components
export default (state, action) => {
  switch (action.type) {
    case actions.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case actions.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter((transaction) => transaction.id !== action.payload),
      };
    default:
      return state;
  }
};
