import React, { useEffect, useState } from "react";
import "./App.css";
import CurrencyConversion from "./CurrencyConversion";
import CountryNames from "./CountryNames";
import CurrencyRates from "./CurrencyRates";

function App() {
  const [baseCurrency, setBaseCurrency] = useState("GBP");
  const [convertToCurrency, setConvertToCurrency] = useState([]);
  const [baseAmount, setBaseAmount] = useState(100);
  const [ratesAndCurrencies, setRatesAndCurrencies] = useState({
    rates: [],
    currencies: [],
    apiResult: [],
  });

  useEffect(() => {
    callAPI(baseCurrency);
  }, []);

  const callAPI = (base) => {
    const api = `https://api.exchangeratesapi.io/latest?base=${base}`;

    fetch(api)
      .then((results) => {
        return results.json();
      })
      .then((data) =>
        setRatesAndCurrencies({
          rates: data["rates"],
          currencies: Object.keys(data["rates"]),
        })
      );
  };

  const changeBaseCurrency = (e) => {
    setBaseCurrency(e.target.value);
    callAPI(e.target.value);
  };

  const changeConvertToCurrency = (e) => {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    if (value.length > 4) {
      alert("Please Select upto 4 currencies!");
      return;
    }
    setConvertToCurrency(value);
  };

  const changeBaseAmount = (e) => {
    setBaseAmount(e.target.value);
  };

  const getConvertedCurrency = (baseAmount, convertToCurrency, rates) => {
    return Number.parseFloat(baseAmount * rates[convertToCurrency]).toFixed(2);
  };

  const { rates, currencies } = ratesAndCurrencies;

  const currencyChoice = currencies.map((currency) => (
    <option key={currency} value={currency}>
      {" "}
      {currency}{" "}
    </option>
  ));

  const result = convertToCurrency.map((destCurrencies) =>
    getConvertedCurrency(baseAmount, destCurrencies, rates)
  );

  console.log("ApiResult", ratesAndCurrencies.apiResult);

  return (
    <div className="App">
      <div
        className="d-flex flex-row justify-content-around align-items-center"
        style={{
          backgroundColor: "black",
          height: "50px",
          boxShadow: "0px 0px 12px 4px black",
        }}
      >
        <div className="mr-4" style={{ color: "wheat", fontSize: "1.4rem" }}>
          COUNTRY NAMES<div className="d-flex flex-column"></div>
          <i
            style={{ color: "white" }}
            className="fas fa-long-arrow-alt-down"
          ></i>
        </div>
        <div className="mr-4" style={{ color: "wheat", fontSize: "1.4rem" }}>
          CURRENCY CONVERTER
        </div>
        <div className="mr-4" style={{ color: "wheat", fontSize: "1.4rem" }}>
          RATES<div className="d-flex flex-column"></div>
          <i
            style={{ color: "white" }}
            className="fas fa-long-arrow-alt-down"
          ></i>
        </div>
      </div>
      <div
        className="d-flex flex-row justify-content-around align-items-center"
        style={{ height: "100vh" }}
      >
        <div
          className="p-1 countryCurrenyNames"
          style={{
            minWidth: "300px",
            maxHeight: "500px",
            boxShadow: "0px 0px 12px 4px black",
            backgroundColor: "wheat",
          }}
        >
          <CountryNames />
        </div>

        <div
          className="p-4"
          style={{
            minWidth: "500px",
            boxShadow: "0px 0px 12px 4px black",
            backgroundColor: "wheat",
          }}
        >
          <CurrencyConversion
            baseCurrency={baseCurrency}
            changeBaseCurrency={changeBaseCurrency}
            currencyChoice={currencyChoice}
            convertToCurrency={convertToCurrency}
            changeConvertToCurrency={changeConvertToCurrency}
            baseAmount={baseAmount}
            changeBaseAmount={changeBaseAmount}
            result={result}
          />
        </div>

        <div
          className="p-1 countryCurrenyNames"
          style={{
            minWidth: "300px",
            maxHeight: "500px",
            boxShadow: "0px 0px 12px 4px black",
            backgroundColor: "wheat",
          }}
        >
          <CurrencyRates rates={rates} baseCurrency={baseCurrency} />
        </div>
      </div>
    </div>
  );
}

export default App;
