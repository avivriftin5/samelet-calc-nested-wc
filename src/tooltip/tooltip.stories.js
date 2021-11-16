import Tooltip from './tooltip.svelte'

export default { title: 'Tooltip' }

export const TooltipStory = () => ({
  Component: Tooltip,
})

export const TooltipStoryWithProps = () => ({
  Component: Tooltip,
  props: {
    message:"",
    top:100,
    left:300,
    isShowToolTip
  },
})
