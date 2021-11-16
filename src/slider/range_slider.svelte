<script>
    import { UserSessionData } from '../stores/user-session-data.js';
    import RangeBubble from '../bubble/range-bubble.svelte'
    import { onMount } from 'svelte';

 
     export let slider_type;
     export let rate_over_prime;
      
    let sliderWidth;
     
 
     let otherSliderType = slider_type=="max_cache" ? "max_funding" : "max_cache";
 
      let sliderLeftString = `${slider_type}_bubble_left`;
 
     let otherSliderLeftString = `${otherSliderType}_bubble_left`;

    let minRangekey =  `${slider_type}_range_min`;
    let maxRangeKey = `${slider_type}_range_max`;
    let otherMinRangekey =  `${otherSliderType}_range_min`;
    let othermaxRangeKey = `${otherSliderType}_range_max`;
     
     
     let minRange = $UserSessionData[minRangekey];
     let maxRange = $UserSessionData[maxRangeKey];
     let otherMinRange =  $UserSessionData[otherMinRangekey];
     let otherMaxRange=  $UserSessionData[othermaxRangeKey];

    
     

 
     const calc_bubble_left_position = ()=>{
 
      
        const newPosition = getPixelsShift(slider_type);
        console.log("newPosition is " + newPosition);
        const newOtherPosition = getPixelsShift(otherSliderType);

         $UserSessionData[sliderLeftString] = `${newPosition}px`;
         $UserSessionData[otherSliderLeftString] = `${newOtherPosition}px`;
     }

     const getPixelsShift = (slider)=>{
         let sliderMinRangeKey = `${slider}_range_min`;
         let sliderMaxRangeKey =  `${slider}_range_max`;

         let sliderValue = $UserSessionData[slider];
         let sliderMin =   $UserSessionData[sliderMinRangeKey]
         let sliderMax =   $UserSessionData[sliderMaxRangeKey]

         let valueToMaxRange = sliderMax - sliderValue; // 12,000     
         let fullRange = sliderMax - sliderMin; // 58,500
         let relativeValueToFull = valueToMaxRange/fullRange; // 0.2
         let relativePrecentageFromeEnd = 1 -relativeValueToFull; // 0.79
         
        let gapInMeasuredWidth = 31; // exclude external gip bounderies , and size of bubble
        let widthToSet = sliderWidth - gapInMeasuredWidth // 380 - middle to end
        
        let actualXOverWidth;

        if(relativePrecentageFromeEnd >= 0.5){
            // positives from 0 - middle to 380 end
            let fullPositiveRange = 0.5; // 1 - 0.5
            let relativeToFull =  1 - relativePrecentageFromeEnd // 1 -0.79
            let actualPrecentage = relativeToFull/fullPositiveRange // 0.21 / 0.5 
            let precentageToUse = 1 - actualPrecentage;
            actualXOverWidth = widthToSet * precentageToUse;

        }else{
            // negatives from middle to 0 (380)
            let fullNegativeRange = 0.5; // 0.5 - 0
            let relativeToFull =  0.5 - relativePrecentageFromeEnd // 0.5 -0.2
            let actualPrecentage = relativeToFull/fullNegativeRange // 0.21 / 0.5 
            actualXOverWidth = widthToSet * actualPrecentage * -1;
        }


        //let gapFromMiddle = relativePrecentageFromeEnd - 0.5 // negetive numbers

         //let actualXOverWidth = sliderWidth * relativePrecentageFromeEnd // 0.79 X 411 = 326
         // let midPoint = 0.5 * sliderWidth // 411 * 0.5 = 205

         //let gapInPixels = actualXOverWidth - midPoint;
         //let reversedGapForMargin = -1 * gapInPixels;
         return actualXOverWidth

     }
 
     

     const updateOtherValues = ()=>{
         $UserSessionData[otherSliderType]=$UserSessionData["maxTotal"]-$UserSessionData[slider_type];
         calc_bubble_left_position();
 
         setMontlyAmount();
     }
 
 
    const setMontlyAmount = ()=>{
        let monthInteger = parseInt($UserSessionData["max_months"]);
        let monthAmountWithoutIntrest =  $UserSessionData["max_funding"]/monthInteger;
        let interest = $UserSessionData["prime"] + rate_over_prime;
        let SinglePercentageOfOriginal = monthAmountWithoutIntrest/100;
        let amountOfPercentage = SinglePercentageOfOriginal * interest;
         $UserSessionData["max_monthly_funding"] = monthAmountWithoutIntrest + amountOfPercentage;
         $UserSessionData["finalMaxAmount"] = $UserSessionData["max_monthly_funding"] * monthInteger;
 
    }

    onMount(() => {
      calc_bubble_left_position();
	});
 
 </script>
 <style src="./range_slider.css">
 
 </style>
 
 
  <div class="rangeSliderWrapper" >
     <RangeBubble {slider_type} {rate_over_prime} {calc_bubble_left_position}/>   
  </div>
  <div class="rangeSliderWrapper" bind:offsetWidth={sliderWidth} >
     <input type="range" min={minRange} max={maxRange} bind:value={$UserSessionData[slider_type]} on:input={updateOtherValues}>
  </div>
  <div class="minmaxWrapper">
     <div>{parseInt(maxRange).toLocaleString()}</div>
     <div>{minRange}</div>
  </div>