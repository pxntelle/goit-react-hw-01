import style from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  const rowStyles = {
    invoice: { backgroundColor: "#f5f5f5" },
    payment: { backgroundColor: "#e6ffe6" },
    withdrawal: { backgroundColor: "#ffe6e6" },
    deposit: { backgroundColor: "#ffffcc" },
  };

  return (
    <table className={style.table}>
      <thead>
        <tr className={style.tableHeader}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          const rowStyle = rowStyles[item.type] || {};

          return (
            <tr key={item.id} style={rowStyle}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
