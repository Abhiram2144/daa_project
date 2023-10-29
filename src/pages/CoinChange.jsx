import Layout from "../components/Layout";
import React, { useState } from "react";

const CoinChange = () => {
  const [coins, setCoins] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  function count(coins, amount) {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 0; i < coins.length; i++) {
      for (let j = coins[i]; j <= amount; j++) {
        dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
      }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const coinValues = coins.split(",").map(Number);
    const valueToChange = Number(amount);

    let ans = count(coinValues, valueToChange);
    setResult(ans);
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mt-4">Coin Change</h1>
      <div className="mx-auto px-6 md:mt-52 text-lg">
        
        <form onSubmit={handleSubmit} className="">
          <div className="flex flex-col">
          <label className="my-2 text-center">
            Coins:
            <input
              type="text"
              value={coins}
              className="rounded outline ml-6 mt-2"
              onChange={(e) => setCoins(e.target.value)}
            />
          </label>
          <label>
            Amount:
            <input
              type="text"
              value={amount}
              className="rounded outline ml-2 mt-2"
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          </div>
          
          <button className="btn btn__login ml-6  text-black w-16 my-3 rounded hover:bg-black hover:text-white outline " type="submit" >Submit</button>
        </form>
        <p className="font-bold">Minimum number of coins required: {result}</p>
      </div>
    </Layout>
  );
};

export default CoinChange;
