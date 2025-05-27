import React, { useState } from 'react';
import { useExpenseStore } from '../expenseStore';

const ExpenseApp = () => {
  const { expenses, addExpense, removeExpense } = useExpenseStore();
  const [description, setDescription] = useState<string>('');
  const [amount, setAmount] = useState<number | string>('');

  const handleAddExpense = () => {
    if (description.trim() === '' || amount == 0) {
      return;
    }
    addExpense({
      id: Date.now(),
      description,
      amount: Number(amount),
    });
    console.log('Expenses:::', expenses);

    setDescription('');
    setAmount('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg space-y-6 ">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-purple-700">
          Expenses App
        </h1>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Expense Description"
          className="border-1 w-full px-4 py-2 rounded-lg border-purple-400 focus:outline-none focus:border-2"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value === '' ? '' : Number(e.target.value))
          }
          placeholder="Amount"
          className="border-1 w-full px-4 py-2 rounded-lg border-purple-400 focus:outline-none focus:border-2"
        />
        <button
          className="w-full px-4 py-2 rounded-lg bg-purple-500 font-extrabold text-white"
          onClick={handleAddExpense}
        >
          Add Expense
        </button>
        <div>
          <ul>
            {expenses.map((expense) => (
              <li
                className="mb-2 flex justify-between items-center bg-blue-50 p-4 rounded-lg shadow-sm"
                key={expense.id}
              >
                {expense.description}: ৳{expense.amount.toFixed(2)}
                <button
                  className="bg-red-300 px-2 py-1 rounded-md"
                  onClick={() => removeExpense(expense.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className=" text-green-600 p-2 rounded-md font-extrabold text-center">
          Total: ৳{expenses.reduce((prev, current) => prev + current.amount, 0)}
        </div>
      </div>
    </div>
  );
};

export default ExpenseApp;
