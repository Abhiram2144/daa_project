import React, { useState } from "react";
import Layout from "../components/Layout";

const MCM = () => {
  const [dArray, setDArray] = useState("");
  const [result, setResult] = useState(0);
  function MatrixChainOrder(p, n) {

    var m = Array(n)
      .fill(0)
      .map((x) => Array(n).fill(0));

    var i, j, k, L, q;

    for (i = 1; i < n; i++) m[i][i] = 0;

    // L is chain length.
    for (L = 2; L < n; L++) {
      for (i = 1; i < n - L + 1; i++) {
        j = i + L - 1;
        if (j === n) continue;
        m[i][j] = Number.MAX_VALUE;
        for (k = i; k <= j - 1; k++) {
          // q = cost/scalar multiplications
          q = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];
          if (q < m[i][j]) m[i][j] = q;
        }
      }
    }

    return m[1][n - 1];
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const p = dArray.split(",").map(Number);
    let ans = MatrixChainOrder(p, p.length);
    setResult(ans);
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mt-4">Matrix Chain Multiplication Problem Problem</h1>
      <div className="mx-auto px-6 md:mt-52 text-lg">
        <form onSubmit={handleSubmit}>
          <label className="my-2 text-center">
            Dimensions:
            <input
            className="mt-2 rounded outline ml-2"
              type="text"
              value={dArray}
              onChange={(e) => setDArray(e.target.value)}
            />
          </label>
          <button className="btn btn__login ml-6  text-black w-16 my-3 rounded hover:bg-black hover:text-white outline " type="submit">Submit</button>
        </form>
        <p className="font-bold">Minimum number of operations required is {result}</p>
      </div>
    </Layout>
  );
};

export default MCM;
