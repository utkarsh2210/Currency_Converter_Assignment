import React from "react";

function CurrencyConversion({
  baseCurrency,
  changeBaseCurrency,
  currencyChoice,
  convertToCurrency,
  changeConvertToCurrency,
  handleConversion,
  baseAmount,
  changeBaseAmount,
  result,
}) {
  return (
    <div className="form-container">
      <form className="ui mini form">
        <h3>Convert from: {baseCurrency}</h3>
        <select
          value={baseCurrency}
          onChange={changeBaseCurrency}
          style={{ fontSize: "1rem", width: "100px" }}
        >
          {currencyChoice}
          <option>{baseCurrency}</option>
        </select>

        <h3>Convert to: {convertToCurrency}</h3>
        <select
          className="ui fluid"
          multiple
          onChange={changeConvertToCurrency}
          style={{ fontSize: "1rem", width: "100px" }}
        >
          {currencyChoice}
        </select>

        {/* <button onClick={handleConversion}>CONVERT</button> */}

        <h3>Amount:</h3>
        <input
          type="number"
          id="base-amount"
          defaultValue={baseAmount}
          onChange={changeBaseAmount}
        ></input>
      </form>

      {convertToCurrency.map((converted, i) => (
        <h2 id="result-text" key={i}>
          {baseAmount} {baseCurrency} is equal to {result[i]} {converted}
        </h2>
      ))}
    </div>
  );
}

export default CurrencyConversion;
