

const formatCurrency = (value) => {
  return value.toLocaleString('pt-pt', { style:'currency', currency: 'EUR'})
}


export {formatCurrency}