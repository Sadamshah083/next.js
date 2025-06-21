"use client";

import React, { useState } from "react";

const page = () => {
  const [cost, setCost] = useState("");
  const [expense, setExpense] = useState("");
  const [dataArray, setDataArray] = useState([]);
  const [income, setIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  const handleCost = (e: any) => {
    setCost(e.target.value);
  };

  const handleExpense = (e: any) => {
    setExpense(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setDataArray([...dataArray, { cost: Number(cost), expense }]);

    if (Number(cost) < 0) {
      setTotalExpense((prevsub) => prevsub + Number(cost));
      setBalance((prevbalance) => prevbalance + Number(cost));
    } else {
      setIncome((prevIncome) => prevIncome + Number(cost));
      setBalance((prevbalance) => prevbalance + Number(cost));
    }
    setExpense("");
    setCost("");
  };

  return (
    <div className="w-[70vw] flex-col flex items-center gap-6 mx-auto justify-center p-6">
      <h1 className="bg-green-500 text-2xl text-white w-[20vw] p-4 rounded-xl shadow-lg text-center font-bold tracking-wide">
        Expense Tracker
      </h1>

      <div className="w-[45vw] text-center p-6 bg-white rounded-xl shadow-lg space-y-4">
        <h2 className="text-xl font-bold bg-blue-400 text-white py-2 rounded-md">
          Balance: <span className="text-white">{balance}</span>
        </h2>

        <div className="flex justify-between w-full h-[10vh] border-2 rounded-lg p-4 bg-gray-50">
          <div className="flex-1 text-center">
            <p>
              <span className="block text-sm font-medium text-green-600">
                Income
              </span>
              <span className="text-xl font-bold text-green-800">{income}</span>
            </p>
          </div>

          <div className="flex-1 text-center border-l border-gray-300">
            <p>
              <span className="block text-sm font-medium text-red-600">
                Expense
              </span>
              <span className="text-xl font-bold text-red-600">
                {totalExpense}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-amber-100 w-[55vw] gap-4 items-center p-6 rounded-xl shadow-lg">
        <h2 className="text-lg font-semibold w-full text-center text-white bg-amber-600 py-2 rounded-md">
          New Transaction
        </h2>

        <input
          type="text"
          placeholder="Expense"
          value={expense}
          onChange={handleExpense}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <input
          type="number"
          placeholder="Cost"
          value={cost}
          onChange={handleCost}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition duration-200 shadow-md"
          onClick={handleSubmit}
        >
          Add Transaction
        </button>
      </div>

      <div className="w-[55vw] mt-6 bg-white p-4 rounded-xl shadow-md">
        <div className="text-center w-full text-lg font-bold text-gray-700 mb-2">
          Transaction History
        </div>

        <div className="space-y-2">
          {dataArray.map((e, index) => {
            const isIncome = e.cost >= 0;
            return (
              <div
                key={index}
                className={`text-white px-4 py-2 rounded-md shadow-sm ${
                  isIncome ? "bg-green-500" : "bg-red-600"
                }`}
              >
                {e.expense}: {e.cost}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
