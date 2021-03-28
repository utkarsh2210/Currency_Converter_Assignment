import React from "react";

const keys = [
  { countryName: "Canadian dollar", currencyName: "CAD" },
  { countryName: "Hong Kong dollar", currencyName: "HKD" },
  { countryName: "Icelandic króna", currencyName: "ISK" },
  { countryName: "Philippine peso", currencyName: "PHP" },
  { countryName: "Danish krone", currencyName: "DKK" },
  { countryName: "Hungarian forint", currencyName: "HUF" },
  { countryName: "Czech Koruna", currencyName: "CZK" },
  { countryName: "Australian dollar", currencyName: "AUD" },
  { countryName: "Romanian leu", currencyName: "RON" },
  { countryName: "Swedish Krona", currencyName: "SEK" },
  { countryName: "Indonesian rupiah", currencyName: "IDR" },
  { countryName: "Indian rupee", currencyName: "INR" },
  { countryName: "Brazilian real", currencyName: "BRL" },
  { countryName: "Russian ruble", currencyName: "RUB" },
  { countryName: "Croatian kuna", currencyName: "HRK" },
  { countryName: "Japanese yen", currencyName: "JPY" },
  { countryName: "Thai baht", currencyName: "THB" },
  { countryName: "Swiss Franc", currencyName: "CHF" },
  { countryName: "Euro", currencyName: "EUR" },
  { countryName: "Singapore dollar", currencyName: "SGD" },
  { countryName: "Polish złoty", currencyName: "PLN" },
  { countryName: "Bulgarian lev", currencyName: "BGN" },
  { countryName: "Turkish lira", currencyName: "TRY" },
  { countryName: "Renminbi", currencyName: "CNY" },
  { countryName: "Norwegian krone", currencyName: "NOK" },
  { countryName: "New Zealand dollar", currencyName: "NZD" },
  { countryName: "South African rand", currencyName: "ZAR" },
  { countryName: "United States dollar", currencyName: "USD" },
  { countryName: "Mexican peso", currencyName: "MXN" },
  { countryName: "Israeli Shekel", currencyName: "ILS" },
  { countryName: "Pound sterling", currencyName: "GBP" },
  { countryName: "South Korean won", currencyName: "KRW" },
  { countryName: "Malaysian Ringgit ", currencyName: "MYR" },
];

function CountryNames() {
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">COUNTRY</th>
            <th scope="col">CURRENCY</th>
          </tr>
        </thead>
        <tbody>
          {keys.map((ele, index) => {
            return (
              <tr key={index}>
                <td>{ele.countryName}</td>
                <td>{ele.currencyName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CountryNames;
