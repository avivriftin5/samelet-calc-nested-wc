<script>
    import Close from '../close/close.svelte';    
    import { fade } from 'svelte/transition';

    export let message="נסיון לנסיון";
    export let top = 100;
    export let left = 300;
    export let isShowToolTip;

    let arrowTop = top + 65;
    let arrowLeft = left + 140;
   
    const handleClose =()=>{
        isShowToolTip=false;
    }
   </script>
   <style src="./tooltip.css">
  
   </style>

   <div transition:fade>

    <div class="toolTipWraraper" style=" top:{top}px;left:{left}px;">
    
    <div class="mainText">
        {message}
    </div>
    <div>
        <Close on:click={handleClose}/>
    </div>
    </div>
    <div class="arrow-down"  style=" top:{arrowTop}px;left:{arrowLeft}px;"></div>
 </div>