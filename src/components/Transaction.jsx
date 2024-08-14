import React ,{useContext}from 'react'
import { GlobalContext } from '../context/GlobalState';
const Transaction = ({transaction}) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign=transaction.amount>0? "+":"-";
  const amount=sign+'$'+Math.abs(transaction.amount)
  return (
    
      <li className={transaction.amount>0?"plus":"minus"}>
          {transaction.text} <span>{amount}</span><button className="delete-btn" onClick={()=>deleteTransaction (transaction.id)}>x</button>
        </li> 
    
  )
}

export default Transaction
