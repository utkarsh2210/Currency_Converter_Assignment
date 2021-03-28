import React from "react";

function CurrencyRates({ baseCurrency, rates }) {
  let currencyName = Object.keys(rates);
  let currencyRate = Object.values(rates);

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th colSpan="2">Base Currency : {baseCurrency}</th>
          </tr>
          <tr>
            <th scope="col">Currency</th>
            <th scope="col">Rate</th>
          </tr>
        </thead>
        <tbody>
          {currencyName.map((ele, index) => {
            return (
              <tr key={index}>
                <td>{ele}</td>
                <td>{currencyRate[index].toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CurrencyRates;
