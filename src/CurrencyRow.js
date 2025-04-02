  // filepath: c:\Users\Huawei\Downloads\currencyconverter\src\CurrencyRow.js
  import React from 'react';
  import { useQuery } from '@tanstack/react-query';
  
  export default function CurrencyRow(props) {
    const { selectedCurrency, onChangeCurrency, onChangeAmount, amount } = props;
  
    // Fetch currency options using React Query
    const { data: currencyOptions, isLoading, error } = useQuery({
      queryKey: ['currencyOptions'], // Unique key for the query
      queryFn: async () => {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD'); // Example API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return Object.keys(data.rates); // Assuming the API returns rates as an object
      },
    });
  
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading currencies: {error.message}</p>;
  
    return (
      <div className="container">
        <input type="number" className="input" value={amount} onChange={onChangeAmount} />
        <select value={selectedCurrency} onChange={onChangeCurrency}>
          {currencyOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }