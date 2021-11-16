<svelte:options tag="svelte-custom-element" />


<script>
	import MaxContent from './content/max-content.svelte';
    // import Modal from 'svelte-simple-modal'; 
	import { onMount } from 'svelte';

	 export let total=60000;
	export let rate_over_prime=2.75;
	export let prime = 1.6;
    export let maxFundingPrecentage=80
	export let minimumCache=1500
	export let maxFunding=58500;
	export let months=24; 


	let isFontLoaded=false


	onMount(async () => {
		console.log('the component has mounted');
	
		const fonts = ["fbspoileren-bold-webfont","fbspoileren-regular-webfont","FbSpoiler-Lightwebfont"];

		let fontsLoadedCounter = 0;

		 	fonts.map(font=>{

        let fontName = font
        let fontURL = `url(${fontName}.ttf)`;

        var f = new FontFace(fontName, fontURL);

          f.load().then(function(loadedFace) {			
            document.fonts.add(loadedFace);
            fontsLoadedCounter+=1;
          }); 
        
        });          

        while (true) {
          if (fontsLoadedCounter==fonts.length) {
          break;
          } else {
          // Delay before running the next loop iteration:
          await new Promise(resolve => setTimeout(resolve, 3000));
          }
      } 

			isFontLoaded=true;

		        

	});

</script>
 {#if isFontLoaded} 
<!-- <Modal>   -->
     <MaxContent {total} max_funding_precentage={maxFundingPrecentage} {rate_over_prime} minimum_cache={minimumCache} max_funding={maxFunding}{months} {prime}/> 
<!-- </Modal> -->
 {/if}


<style global type="text/scss" lang="scss" src="./index.scss">
</style>
