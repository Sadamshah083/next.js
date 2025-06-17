"use client";

import React, { useState } from "react";

const page = () => {
  const [cost, setCost] = useState("");
  const [expense, setExpense] = useState("");
  const [dataArray, setDataArray] = useState([]);
  const [income, setIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  //const [myObject, setMyObject] = useState({ cost: 0, expense: "" });
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

  const handleIncome = () => {};
  return (
    <div className=" w-[70vw] flex-col flex items-center gap-2 mx-auto justify-center">
      <h1 className="bg-green-500 text-2xl text-white  w-[20vw] p-4 rounded-xl shadow-md text-center">
        Expense Tracker
      </h1>
      <div className="w-[45vw] text-center items-center p-4 bg-white rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-4 bg-blue-400">
          Balance:{balance}
        </h2>
        <div className="flex justify-between w-[40vw] h-[10vh] border-2   rounded-lg p-4 bg-gray-50">
          <div className="flex-1 text-center justify-between">
            <p className="text-center">
              <span className=" text-sm font-medium text-green-600">
                Income
              </span>
              <span className=" text-xl font-bold text-green-800">
                {income}
              </span>
            </p>
          </div>
          <div className="flex-1 text-center border-l">
            <p>
              <span className="text-sm font-medium text-red-600">Expense</span>
              <span className="text-xl font-bold text-red-600">
                {totalExpense}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex-col flex bg-amber-100 w-[55vw] gap-2 items-center ">
        <h2 className="flex-1 text-center w-full justify-between bg-amber-600">
          New Transaction
        </h2>
        <input
          type="text"
          placeholder="Expense"
          value={expense}
          onChange={handleExpense}
        />
        <input
          className="border-1"
          type="number"
          placeholder="Cost"
          value={cost}
          onChange={handleCost}
        />
        <button className="bg-blue-400 p-2 rounded-2xl" onClick={handleSubmit}>
          Add Transaction
        </button>
      </div>

      <div className=" w-[55vw]">
        <div className="text-center w-full font-bold">Transaction History</div>

        <div className="text-center w-full font-bold">
          List Items{" "}
          {dataArray.map((e, index) => {
            const isIncome = e.cost >= 0;
            return (
              <div
                key={index}
                className={`${isIncome ? "bg-green-500" : "bg-red-600"}`}
                // className={`${isIncome ? "bg-green-500" : "bg-red-500"}`}
              >
                {e.expense}
                {":"}
                {e.cost}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
