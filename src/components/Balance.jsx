import { useGlobalContext } from "../hook/useGlobalHook";

export const Balance = () => {
  const { transactions } = useGlobalContext();

  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="flex justify-between items-center">
      <h3>Your Balance</h3>

      <h1 className="text-2xl font-bold">{total}</h1>
    </div>
  );
};
