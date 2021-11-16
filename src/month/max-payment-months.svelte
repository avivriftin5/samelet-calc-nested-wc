<script>
    import { UserSessionData } from '../stores/user-session-data.js';
    export let months;
    export let text;
    export let rate_over_prime;
 
    $: isSelected = $UserSessionData["max_months"] == months;
 
 
    const setMontlyAmount = ()=>{
        let monthInteger = parseInt($UserSessionData["max_months"]);
        let monthAmountWithoutIntrest =  $UserSessionData["max_funding"]/monthInteger;
        let interest = $UserSessionData["prime"] + rate_over_prime;
        let SinglePercentageOfOriginal = monthAmountWithoutIntrest/100;
        let amountOfPercentage = SinglePercentageOfOriginal * interest;
         $UserSessionData["max_monthly_funding"] = monthAmountWithoutIntrest + amountOfPercentage;
         $UserSessionData["finalMaxAmount"] = $UserSessionData["max_monthly_funding"] * monthInteger;
    }
 
 
    const handleItemClick = ()=>{
        $UserSessionData["max_months"] = months;
        setMontlyAmount();
    }
 </script>
 <style src="./max-payment-months.css">
 
 </style>
 <a on:click={handleItemClick} href={'#'}>
     <div class="wrapper">
         {#if isSelected}
             <div class="bubbleContainer">
                 <span>{months}</span>
             </div>
             <div class="arrowDown"></div>
         {:else}  
             <div class="topspace">
             </div> 
         {/if}    
         <div class="{isSelected ? 'greenLine' : 'grayLine'}"></div>
         <div class="textLine">
             {text}
         </div>
 
     </div>
 </a>