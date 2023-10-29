import React, { useState } from "react";
import Layout from "../components/Layout";
import "../components/navbar.scss";

const Fibonacci = () => {
  const [num, setNum] = useState(0);
  const [ans, setAns] = useState(0);
  function fib(n) {
    if (n < 0) return -1;
    let a = 0,
      b = 1,
      c,
      i;
    if (n === 0) return a;
    for (i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mt-4">Nth Fibonacci Problem</h1>
      <div className="mx-auto px-6 md:mt-56 text-lg">
        <p>Enter a number to find the nth fibonacci number</p>
        <div className="my-3">
          <input type="number" className="mt-2 rounded outline" onChange={(e) => setNum(e.target.value)} />
          <button className="btn btn__login ml-6  text-black w-16 my-3 rounded hover:bg-black hover:text-white outline " onClick={() => setAns(fib(num))}>Find</button>
        </div>
        
        <h1 className="font-bold text-xl">Answer : {ans}</h1>
      </div>
    </Layout>
  );
};

export default Fibonacci;
