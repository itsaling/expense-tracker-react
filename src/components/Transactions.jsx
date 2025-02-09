import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

export const Transactions = ({ transaction }) => {
  const { delTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => delTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};
