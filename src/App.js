import React, { useEffect, useState } from "react";
import "./App.css";
import CurrencyConversion from "./CurrencyConversion";
import CountryNames from "./CountryNames";

function App() {
  const [baseCurrency, setBaseCurrency] = useState("GBP");
  const [convertToCurrency, setConvertToCurrency] = useState([]);
  const [baseAmount, setBaseAmount] = useState(100);
  const [ratesAndCurrencies, setRatesAndCurrencies] = useState({
    rates: [],
    currencies: [],
  });

  // let valueArray = [];

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

    // valueArray = value;
    setConvertToCurrency(value);
  };

  // const handleConversion = (e) => {
  //   // e.preventDefault();
  //   // console.log(valueArray);
  //   // setConvertToCurrency(valueArray);
  // };

  const changeBaseAmount = (e) => {
    setBaseAmount(e.target.value);
  };

  const getConvertedCurrency = (baseAmount, convertToCurrency, rates) => {
    return Number.parseFloat(baseAmount * rates[convertToCurrency]).toFixed(3);
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

  console.log(currencies);
  return (
    <div className="App">
      <div
        className="d-flex flex-row justify-content-around align-items-center"
        style={{ height: "100vh" }}
      >
        <div
          className="p-4"
          style={{ border: "1px solid black", width: "350px" }}
        >
          <CountryNames countryCurrencies={currencies} />
        </div>
        <div
          className="p-4"
          style={{ border: "1px solid black", width: "350px" }}
        >
          <CurrencyConversion
            baseCurrency={baseCurrency}
            changeBaseCurrency={changeBaseCurrency}
            currencyChoice={currencyChoice}
            convertToCurrency={convertToCurrency}
            changeConvertToCurrency={changeConvertToCurrency}
            // handleConversion={handleConversion}
            baseAmount={baseAmount}
            changeBaseAmount={changeBaseAmount}
            result={result}
          />
        </div>
        <div
          className="p-4"
          style={{ border: "1px solid black", width: "350px" }}
        >
          <p>23432423</p>
          <p>dasdadasd213sd</p>
        </div>
      </div>
    </div>
  );
}

export default App;
