/* eslint-disable react/prop-types */
import { useGlobalContext } from "../../hook/useGlobalHook";

export const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = useGlobalContext();
  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center ">
      <p className="text-sm">{transaction.description}</p>
      <div>
        <span>{transaction.amount}</span>
        <button
          className="bg-red-500 p-2 rounded-lg  my-1 mx-2 "
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
        >
          X
        </button>
      </div>
    </li>
  );
};
