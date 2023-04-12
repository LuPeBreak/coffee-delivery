export const baseFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
})

export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  style: 'currency',
  currency: 'BRL',
})
