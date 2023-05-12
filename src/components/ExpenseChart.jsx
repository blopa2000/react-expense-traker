import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalContext } from "../hook/useGlobalHook";
export const ExpenseChart = () => {
  const { transactions } = useGlobalContext();

  const totalIncomes = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpenses =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const totalExpensesPercentage = Math.round((totalExpenses / totalIncomes) * 100);

  const totalIncomesPercentage = 100 - totalExpensesPercentage;

  return (
    <VictoryPie
      colorScale={["#e74c3c", "#2ecc71"]}
      data={[
        { x: "Expenses", y: totalExpensesPercentage },
        { x: "Incomes", y: totalIncomesPercentage },
      ]}
      animate={{ duration: 2000 }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={<VictoryLabel angel={45} style={{ fill: "white" }} />}
    />
  );
};
