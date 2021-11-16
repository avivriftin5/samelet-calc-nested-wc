import MaxContent from './max-content.svelte'

export default { title: 'MaxContent' }

export const MaxContentStory = () => ({
  Component: MaxContent,
})

export const MaxContentStoryWithProps = () => ({
  Component: MaxContent,
  props: {
    total:0,
    rate_over_prime:2.75,
    prime:1.6,
    max_funding_precentage:50,
    minimum_cache:0,
    max_funding:0,
    months:36
  },
})
