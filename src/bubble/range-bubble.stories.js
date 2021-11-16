import RangeBubble from './range-bubble.svelte'

export default { title: 'RangeBubble' }

export const RangeBubbleStory = () => ({
  Component: RangeBubble,
})

export const RangeBubbleStoryWithProps = () => ({
  Component: RangeBubble,
  props: {
    slider_type: '',
    rate_over_prime:2.75,
    calc_bubble_left_position
  },
})
