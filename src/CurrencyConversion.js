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
        <fieldset>
          <select
            className="selectClass"
            value={baseCurrency}
            onChange={changeBaseCurrency}
            style={{ fontSize: "1rem", width: "100px" }}
          >
            {currencyChoice}
            <option>{baseCurrency}</option>
          </select>

          <h3>
            <div className="instuction-symbol">
              <i
                style={{ fontSize: "15px" }}
                className="fas fa-exclamation-circle mr-1"
              ></i>
            </div>
            Convert to:{" "}
            {convertToCurrency.length >= 2
              ? convertToCurrency + ","
              : convertToCurrency}
            <p className="instruction-text">
              You Can Select upto 5 currencies<br></br>Press Ctrl while you
              select multiple currencies
            </p>
          </h3>

          <select
            className="ui fluid selectClass"
            multiple
            onChange={changeConvertToCurrency}
            style={{ fontSize: "1rem", width: "100px" }}
          >
            {currencyChoice}
          </select>
        </fieldset>
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
