import React from "react";

const keys = [
  "Canadian dollar",
  "Hong Kong dollar",
  "Icelandic króna",
  "Philippine peso",
  "Danish krone",
  "Hungarian forint",
  "Czech Koruna",
  "Australian dollar",
  "Romanian leu",
  "Swedish Krona",
  "Indonesian rupiah",
  "Indian rupee",
  "Brazilian real",
  "Russian ruble",
  "Croatian kuna",
  "Japanese yen",
  "Thai baht",
  "Swiss Franc",
  "Euro",
  "Singapore dollar",
  "Polish złoty",
  "Bulgarian lev",
  "Turkish lira",
  "Renminbi",
  "Norwegian krone",
  "New Zealand dollar",
  "South African rand",
  "United States dollar",
  "Mexican peso",
  "Israeli Shekel",
  "Pound sterling",
  "South Korean won",
];

console.log("KEYS", keys);

function CountryNames({ countryCurrencies }) {
  let namesArray = [];

  for (var i = 0; i < keys.length; i++) {
    namesArray[keys[i]] = countryCurrencies[i];
  }

  console.log(namesArray);

  return (
    <div>
      {namesArray.map((ele, index) => (
        <div>
          {index + " "}:{" " + ele}
        </div>
      ))}
    </div>
  );
}

export default CountryNames;
