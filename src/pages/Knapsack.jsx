import React, { useState } from "react";
import Layout from "../components/Layout";

const Knapsack = () => {
  const [wts, setWts] = useState("");
  const [profits, setProfits] = useState("");
  const [totalW, setTotalW] = useState("");
  const [result, setResult] = useState(0);
  function knapSack(W, wt, val, n) {
    // Making and initializing dp array
    var dp = Array(W + 1).fill(0);

    for (let i = 1; i < n + 1; i++) {
      for (let w = W; w >= 0; w--) {
        if (wt[i - 1] <= w)
          // Finding the maximum value
          dp[w] = Math.max(dp[w], dp[w - wt[i - 1]] + val[i - 1]);
      }
    }

    // Returning the maximum value of knapsack
    return dp[W];
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const ws = wts.split(",").map(Number);
    const ps = profits.split(",").map(Number);
    const totalWeight = Number(totalW);
    let ans = knapSack(totalWeight, ws, ps, ws.length);
    setResult(ans);
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mt-4">Knapsack Problem</h1>
      <div className="mx-auto px-6 md:mt-52 text-lg">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
          <label className="my-2 text-center">
            Weights:
            <input
              type="text"
              value={wts}
              className="mt-2 rounded outline ml-11"
              onChange={(e) => setWts(e.target.value)}
            />
          </label >
          <label className="my-2 text-center">
            Profits:
            <input
              type="text"
              value={profits}
              className="mt-2 rounded outline ml-14"
              onChange={(e) => setProfits(e.target.value)}
            />
          </label>
          <label className="my-2 text-center">
            Total Weight:
            <input
              type="text"
              value={totalW}
              className="mt-2 rounded outline ml-2"
              onChange={(e) => setTotalW(e.target.value)}
            />
          </label>
          </div>
          
          <button className="btn btn__login ml-6  text-black w-16 my-3 rounded hover:bg-black hover:text-white outline "type="submit">Submit</button>
        </form>
        <p className="font-bold">Max profit: {result}</p>
      </div>
    </Layout>
  );
};

export default Knapsack;
