import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure: "town",
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure: "village",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure: "city",
    },
  ];

  return (
    <div>
      <h2>Let's get Started!</h2>
      <div>
      {expenses.map((obj) => (
        <ExpenseItem
          title={obj.title}
          amount={obj.amount}
          date={obj.date}
          LocationOfExpenditure={obj.LocationOfExpenditure}
        ></ExpenseItem>
))}
      </div>
    </div>
  );
}

export default App;
