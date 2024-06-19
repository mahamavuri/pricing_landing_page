const checkbox = document.getElementById("checkbox");
const professional = document.getElementById("professional");
const master = document.getElementById("master");
const basic = document.getElementById("basic");
const priceElements = [
    document.getElementById('professional'),
    document.getElementById('master'),
    document.getElementById('basic')
  ];
  
  let isUSD = true;
  const usdToInrRate = 83.10;

  
function updatePrice(element) {
    const basePrice = parseFloat(element.getAttribute('data-price')) || 0; // Default to 0 if attribute is not set
    const accessoryPrice = checkbox.checked ? 100 : 0;
    const totalPrice = basePrice + accessoryPrice;
    element.setAttribute('data-total-price', totalPrice);
  
    if (isUSD) {
      element.textContent = `$${totalPrice.toFixed(2)}`;
      basic.textContent=`$0`;
    } else {
      const totalPriceINR = totalPrice * usdToInrRate;
      element.textContent = ` ₹${totalPriceINR.toFixed(2)}`;
      basic.textContent=`₹0`;
    }
  }
  
  //price conversion into INR
function convertToINR() {
  isUSD = false;
    priceElements.forEach(element => updatePrice(element));
  }
  
  //price conversion into USD
  function convertToUSD() {
    isUSD = true;
    priceElements.forEach(element => updatePrice(element));
  }

checkbox.addEventListener("click", ()=>{
    priceElements.forEach(element => updatePrice(element));
})

priceElements.forEach(element => {
  element.addEventListener('click', () => {
    if (isUSD) {
      convertToINR();
    } else {
      convertToUSD();
    }
  });
});
