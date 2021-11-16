<script>
    // import MaxInfoModal from './max-info-modal.svelte';
    import RangeSlider from '../slider/range_slider.svelte';
    import MaxPaymentMonths from '../month/max-payment-months.svelte';
    import { UserSessionData } from '../stores/user-session-data.js';
    import { getContext } from 'svelte';
    import Tooltip from '../tooltip/tooltip.svelte';


      const  SAPPER_APP_MAX_URL  = "https://www.max.co.il/loans/calc";

    // const { open } = getContext('simple-modal');


    export let total;
    export let rate_over_prime;
    export let prime;
    export let max_funding_precentage;
    export let minimum_cache;
    export let max_funding;
    export let months;
    
    let initFund;

    if(max_funding_precentage==0 || max_funding_precentage > 100){
        max_funding_precentage=70;
    }

    let initFundDevider = 100/max_funding_precentage;
    
    $UserSessionData = {};
    $UserSessionData["maxTotal"] = total;
    $UserSessionData["prime"] = prime;
    initFund = $UserSessionData["maxTotal"]/initFundDevider;
    $UserSessionData["max_cache"] = initFund;
    $UserSessionData["max_funding"] = $UserSessionData["maxTotal"] - $UserSessionData["max_cache"];

    $UserSessionData["max_cache_range_max"] = total;
    $UserSessionData["max_cache_range_min"] = minimum_cache;
    $UserSessionData["max_funding_range_max"] = max_funding;
    $UserSessionData["max_funding_range_min"] = 0;


    if(months%12==0){
        $UserSessionData["max_months"]=months.toString();
    }else{
        $UserSessionData["max_months"] = "36";
    }


    let tooltipMessage="";
    let top = 0;
    let left = 0;
    let isShowToolTip = false;

    


   const setMontlyAmount = ()=>{
        if (typeof window !== 'undefined'){
            let monthInteger = parseInt($UserSessionData["max_months"]);
        let monthAmountWithoutIntrest =  $UserSessionData["max_funding"]/monthInteger;
        let interest = $UserSessionData["prime"] + rate_over_prime;
        let SinglePercentageOfOriginal = monthAmountWithoutIntrest/100;
        let amountOfPercentage = SinglePercentageOfOriginal * interest;
            $UserSessionData["max_monthly_funding"] = monthAmountWithoutIntrest + amountOfPercentage;
            $UserSessionData["finalMaxAmount"] = $UserSessionData["max_monthly_funding"] * monthInteger;
        }
       
   }

    setMontlyAmount();

    const chachIconClickHandler = (event)=>{
        // set  y based on actual click position (+ 10px ), width and height are fixed ( start with default)
         top = event.clientY  - 100;   
         left = event.clientX - 150;
         tooltipMessage = "סכום המזומן שברשותך לתשלום על הרכב";
         isShowToolTip = true;

        // open(MaxInfoModal, { message: "סכום המזומן שברשותך לתשלום על הרכב" }, { closeButton: false,styleWindow });

    }

    const FundingIconClickHandler = (event)=>{
        // set  y based on actual click position (+ 10px ), width and height are fixed ( start with default)
         top = event.clientY  - 100;   
         left = event.clientX - 150;
         tooltipMessage = "סכום הנדרש לך למימון העסקה";
         isShowToolTip = true;
        // open(MaxInfoModal, { message: "סכום הנדרש לך למימון העסקה" }, { closeButton: false,styleWindow });

    }

    const MonthlyIconClickHandler = (event)=>{
        // set  y based on actual click position (+ 10px ), width and height are fixed ( start with default)
         top = event.clientY  - 100;   
         left = event.clientX - 150;
         tooltipMessage =  "תקופת התשלומים שלי (בחודשים)";
         isShowToolTip = true;

        // open(MaxInfoModal, { message: "תקופת התשלומים שלי (בחודשים)" }, { closeButton: false,styleWindow });

    }

    const endPaymentClickHandler = (event)=>{
        // set  y based on actual click position (+ 10px ), width and height are fixed ( start with default)
         top = event.clientY  - 100;   
         left = event.clientX - 150;
         tooltipMessage =  "הסכום שנותר לך לשלם בסיום העסקה";
         isShowToolTip = true;
        // open(MaxInfoModal, { message: "הסכום שנותר לך לשלם בסיום העסקה" }, { closeButton: false,styleWindow });

    }

    const monhtlyPaymentClickHandler = (event)=>{
        // set  y based on actual click position (+ 10px ), width and height are fixed ( start with default)
        top = event.clientY  - 100;   
         left = event.clientX - 150;
         tooltipMessage =  "סכום ההחזר החודשי המשוער שלך";
         isShowToolTip = true;
        // open(MaxInfoModal, { message: "סכום ההחזר החודשי המשוער שלך" }, { closeButton: false,styleWindow });

    }

    const handleButtonClick = ()=>{
        //let maxURL = `viewIframe?back=max&url=${SAPPER_APP_MAX_URL}`;
       // goto(maxURL)
       let monthInteger = parseInt($UserSessionData["max_months"]);

       let totalAmount = parseInt($UserSessionData["max_funding"]);
       let maxURL = `https://www.max.co.il/loans/wizard/that-me?amount=${totalAmount}&payments=${monthInteger}&businessLoan=false`;
       window.open(maxURL);
    }


</script>
<style src="./max-content.css">


</style>

    {#if isShowToolTip}
    <Tooltip {top} {left} message={tooltipMessage} bind:isShowToolTip/>
    {/if}

    <div class="maintitle">
         <span>מחשבון סמלת</span>
    </div>
    <div class="linesContainer">
        <div>
            פה ניתן לתכנן בסימולטור את התשלום שלך
        </div>
        <div lineLocation="middle">
        ואף לקבל הצעה להלוואה בפריסה נוחה
        </div>
    </div>

    <div class="columnLayout">
     <div class="rightColumn">  
        <div class="titleAndRangeContainer">
            <div class="infoModalWrapper">

                <a  on:click={chachIconClickHandler}  href={'#'} class="iconContainer"><img src="i-icon.png" class="iIconImage" alt="" ></a>
                <span>סכום המקדמה/מזומן</span>
        
            </div>
            <div class="rangeSliderCWrapper">
                <RangeSlider slider_type="max_cache" {rate_over_prime}></RangeSlider>
            </div>
        </div>
        <div class="titleAndRangeContainer">
            <div class="infoModalWrapper">

                <a  on:click={FundingIconClickHandler}  href={'#'} class="iconContainer"><img src="i-icon.png"  class="iIconImage" alt=""></a>
                <span>סכום הנדרש למימון</span>

            </div>
            <div class="rangeSliderCWrapper">
                <RangeSlider slider_type="max_funding" {rate_over_prime}></RangeSlider>
            </div>
        </div>  
        <div class="titleAndRangeContainer"> 
            <div class="infoModalWrapper">

                <a  on:click={MonthlyIconClickHandler}  href={'#'} class="iconContainer"><img src="i-icon.png"  class="iIconImage" alt=""></a>
                <span>תשלומים חודשיים</span>
                
            </div>
            <div class="paymentMonthContainer">
                <MaxPaymentMonths months="60" text="5 שנים " {rate_over_prime}/>  
                <MaxPaymentMonths months="48" text="4 שנים "{rate_over_prime}/>  
                <MaxPaymentMonths months="36" text="3 שנים "{rate_over_prime}/> 
                <MaxPaymentMonths months="24" text="שנתיים"{rate_over_prime}/> 
                <MaxPaymentMonths months="12" text="שנה"{rate_over_prime}/> 
            </div>
        </div> 
     </div> 
     <div class="leftColumn">
    <div class="infoModalWrapperLeft">

        <a on:click={endPaymentClickHandler}  href={'#'} class="iconContainer"><img src="i-icon.png"  class="iIconImage" alt=""></a>
        <span>סכום להחזר בתום תקופת ההלוואה</span>
        
     </div>

    <div class="amountContainer">
        &#8362 {parseInt($UserSessionData["finalMaxAmount"]).toLocaleString()} 
    </div>

    <div class="infoModalWrapperLeftFinal">

        <a  on:click={monhtlyPaymentClickHandler}  href={'#'} class="iconContainer"><img src="i-icon.png"  class="iIconImage" alt=""></a>
        <span>סכום החזר חודשי</span>
        
    </div>

    <div class="amountContainer">
        &#8362 { parseInt($UserSessionData["max_monthly_funding"]).toLocaleString()} 
        </div>
        <div class="buttonContainer">
        <button on:click={handleButtonClick}>להגשת בקשה מהירה</button>
    </div>
  </div>
</div>   
    <div class="buttomrowContainer">
        <div class="bottomTextsContainer">
            <div class="greenTitle">ההצעה הינה בכפוף לאישור ולתנאי ההלוואה</div>
            <div class="greenTitle">הריבית המחושבת היא פריים +  {rate_over_prime} </div>
            <div class="greenTitle">בסיום התהליך וקבלת כל המסמכים תשלח קבלה</div>
        </div>
        <div class="logoContainer"><img src="menu_logo.png" alt=""></div>
    </div> 
