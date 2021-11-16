<script>
    import { UserSessionData } from '../stores/user-session-data.js';

    export let slider_type;
    export let rate_over_prime;
    export let calc_bubble_left_position;

    let priceChangeFactor = 10;

    let sliderLeftString = `${slider_type}_bubble_left`;
    

    let otherSliderType = slider_type=="max_cache" ? "max_funding" : "max_cache";


    

    const IncreasePrice = ()=>{
        $UserSessionData[slider_type] += priceChangeFactor;
         $UserSessionData[otherSliderType] -= priceChangeFactor;
         calc_bubble_left_position();
         setMontlyAmount();

    }

    const reducePrice = ()=>{
        $UserSessionData[slider_type] -= priceChangeFactor;
         $UserSessionData[otherSliderType] += priceChangeFactor;
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

</script>

<style src="./range-bubble.css">
</style>

<div style="margin-right:{$UserSessionData[sliderLeftString]}">
    <div class="buttonAndText">
        <div class="round-button">
            <div class="round-button-circle">
                <a on:click={IncreasePrice} class="round-button-a" href={'#'}>+</a>
            </div>
        </div>
        <div>
            <span>&#8362;&nbsp;{$UserSessionData[slider_type].toLocaleString()}</span>
            
        </div>
        <div class="round-button">
            <div class="round-button-circle">
                <a on:click={reducePrice} class="round-button-a" href={'#'}>-</a>
            </div>
        </div>

    </div>
    <div class="arrowContainer">
        <div class="arrowDown"></div>
    </div>
</div>