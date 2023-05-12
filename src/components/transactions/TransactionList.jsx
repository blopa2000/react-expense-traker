import { useGlobalContext } from "../../hook/useGlobalHook";
import { TransactionItem } from "./TransactionItem";

export const TransactionList = () => {
  const { transactions } = useGlobalContext();
  return (
    <>
      <h3 className="text-slate-300 text-xl font-bold block w-full">history</h3>
      <ul>
        {transactions?.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
};
