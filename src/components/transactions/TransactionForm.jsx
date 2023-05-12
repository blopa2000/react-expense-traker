import { useState } from "react";
import { useGlobalContext } from "../../hook/useGlobalHook";

export const TransactionForm = () => {
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useGlobalContext();

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({ id: window.crypto.randomUUID(), description, amount: +amount });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter a description"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />
        <input
          type="number"
          step="0.01"
          placeholder="00.00"
          onChange={(e) => setAmount(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />
        <button className="bg-indigo-500 text-white px-3 py-2 rounded-lg block mb-2 w-full">
          Add Transaction
        </button>
      </form>
    </div>
  );
};
