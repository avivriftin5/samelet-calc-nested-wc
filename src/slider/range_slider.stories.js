import RangeSlider from './range_slider.svelte'

export default { title: 'RangeSlider' }

export const RangeSliderStory = () => ({
  Component: RangeSlider,
})

export const RangeSliderStoryWithProps = () => ({
  Component: RangeSlider,
  props: {
    slider_type: '',
    rate_over_prime:2.75,
  },
})
