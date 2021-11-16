import MaxPaymentMonths from './max-payment-months.svelte'

export default { title: 'MaxPaymentMonths' }

export const MaxPaymentMonthsStory = () => ({
  Component: MaxPaymentMonths,
})

export const MaxPaymentMonthsStoryWithProps = () => ({
  Component: MaxPaymentMonths,
  props: {
    months:36,
    text:"",
    rate_over_prime:2.75
  },
})
