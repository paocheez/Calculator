const o_Price = 100;
const discount = 15;

function calcDiscount(price,disc){
    const moneyDiscount = 100 - disc;
    const f_Price = (price * moneyDiscount) / 100;

    return f_Price;
}

function GetDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");
    const priceValue = inputPrice.value;
    const discountValue = inputDiscount.value;

    const finalPrice = calcDiscount(priceValue,discountValue);

    const lastPrice = document.getElementById("LastPrice");
    lastPrice.innerText = finalPrice;
}

function Autocomplete1(){
    const inputCoupon = document.getElementById("Code1");
    const couponValue = inputCoupon.value;

    LastPriceCoupon.innerText = "CODESC20";
    return DiscountCoupon(couponValue);
}
function Autocomplete2(){
    const inputCoupon = document.getElementById("Code2");
    const couponValue = inputCoupon.value;

    LastPriceCoupon.innerText = "CODESC35";    
    return DiscountCoupon(couponValue);
}
function Autocomplete3(){
    const inputCoupon = document.getElementById("Code3");
    const couponValue = inputCoupon.value;

    LastPriceCoupon.innerText = "CODESCNUEVOUSUARIO";
    return DiscountCoupon(couponValue);
}

function DiscountCoupon(couponValue){
    const inputDiscountCoupon = document.getElementById("LastPriceCoupon");
    const couponDiscValue = inputDiscountCoupon.innerHTML;

    const inputPrice = document.getElementById("InputPriceCoupon");
    const priceValue = inputPrice.value;
    if (couponDiscValue==="CODESC20"){      
        const moneyDiscount = 100 - 20;
        const l_PriceCoupon = (priceValue * moneyDiscount) / 100;
        FinalPriceCoupon.innerText = l_PriceCoupon;
    }else if (couponDiscValue==="CODESC35"){
        const moneyDiscount = 100 - 30;
        const l_PriceCoupon = (priceValue * moneyDiscount) / 100;
        FinalPriceCoupon.innerText = l_PriceCoupon;
    }else{
        const moneyDiscount = 100 - 50;
        const l_PriceCoupon = (priceValue * moneyDiscount) / 100;
        FinalPriceCoupon.innerText = l_PriceCoupon;
    }
}