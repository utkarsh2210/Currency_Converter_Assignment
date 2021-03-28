import React from "react";

function CurrencyConversion({
  baseCurrency,
  changeBaseCurrency,
  currencyChoice,
  convertToCurrency,
  changeConvertToCurrency,
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
            value={baseCurrency}
            onChange={changeBaseCurrency}
            style={{
              fontSize: "1rem",
              width: "100px",
              backgroundColor: "rgb(246, 233, 210)",
            }}
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
              You can select upto 4 currencies<br></br>Press{" "}
              <strong>Ctrl</strong> while you select multiple currencies
            </p>
          </h3>

          <select
            className="ui fluid"
            multiple
            onChange={changeConvertToCurrency}
            style={{
              fontSize: "1rem",
              width: "100px",
              backgroundColor: "rgb(246, 233, 210)",
            }}
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
          style={{ fontSize: "15px", backgroundColor: "rgb(246, 233, 210)" }}
        ></input>
      </form>

      {/* To display the result of the currency conversion in case user selects multiple target currencies */}
      {convertToCurrency.map((converted, i) => (
        <p id="result-text" key={i}>
          {baseAmount} {baseCurrency} = {result[i]} {converted}
        </p>
      ))}
    </div>
  );
}

export default CurrencyConversion;
