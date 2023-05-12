import { useGlobalContext } from "../hook/useGlobalHook";

export const IncomeExpenses = () => {
  const { transactions } = useGlobalContext();

  const amount = transactions?.map((transaction) => transaction.amount);

  const income = amount
    ?.filter((item) => item > 0)
    .reduce((acc, value) => (acc += value), 0)
    .toFixed(2);
  const expense =
    amount
      ?.filter((item) => item < 0)
      .reduce((acc, value) => (acc += value), 0)
      .toFixed(2) * -1;

  return (
    <>
      <div className="flex justify-between my-2">
        <h4>Income</h4>
        <p>{income}</p>
      </div>

      <div className="flex justify-between my-2">
        <h4>Expense</h4>
        <p>{expense}</p>
      </div>
    </>
  );
};
