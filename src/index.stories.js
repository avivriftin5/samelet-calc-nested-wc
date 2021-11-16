import CustomElement from './index.svelte'

export default { title: 'CustomElement' }

export const CustomElementStory = () => ({
  Component: CustomElement,
})

export const CustomElementStoryWithProps = () => ({
  Component: CustomElement,
   props: {
    total:60000,
	  rate_over_prime:2.75,
	  prime : 1.6,
    maxFundingPrecentage:80,
	  minimumCache:1500,
	  maxFunding:58500,
	  months:24
  }, 

})
