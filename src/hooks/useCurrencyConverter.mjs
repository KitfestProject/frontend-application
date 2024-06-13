import React from 'react'

const useCurrencyConverter = () => {
  function formatCurrency(amount) {
    const integerAmount = Math.floor(amount);
  
    const formatter = new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0 
    });
  
    return formatter.format(integerAmount);
  }

  return {formatCurrency}
}

export default useCurrencyConverter