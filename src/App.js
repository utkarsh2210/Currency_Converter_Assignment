import React, { useEffect, useState } from "react";
import "./App.css";
import CurrencyConversion from "./CurrencyConversion";
import CountryNames from "./CountryNames";
import CurrencyRates from "./CurrencyRates";
import HeaderBar from "./HeaderBar";

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
    getCurrencyData(baseCurrency);
  }, []);

  const getCurrencyData = (base) => {
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
    getCurrencyData(e.target.value);
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

  return (
    <div className="App">
      <HeaderBar />

      <div
        className="d-flex flex-row justify-content-around align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="p-1 countryCurrenyNames">
          <CountryNames />
        </div>

        <div className="p-4 center-div">
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

        <div className="p-1 countryCurrenyNames">
          <CurrencyRates rates={rates} baseCurrency={baseCurrency} />
        </div>
      </div>
    </div>
  );
}

export default App;
