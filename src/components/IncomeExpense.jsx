
import React ,{useContext}from 'react'
import { GlobalContext } from '../context/GlobalState';

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);

  const totalp = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const totalm = amounts.filter(item => item <0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
       <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p  className="money plus">+${totalp}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p  className="money minus">-${Math.abs(totalm)}</p>
        </div>
      </div>

    </div>
  )
}

export default IncomeExpense
