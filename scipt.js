const carticon = document.querySelector('.carticon')
const addtocart9 = document.querySelector('.addtocart9')
const cartclose = document.querySelector('.cartclose')
console.log(carticon,addtocart9,cartclose);

const productCartArray = []

carticon.addEventListener('click' ,function (params) {
    // addtocart9.classList.toggle('open-cart')
    addtocart9.style.right = 0
})

cartclose.addEventListener('click',function (params) {
//     addtocart9.classList.remove('.open-cart')
addtocart9.style.right = "-100%"
})

document.addEventListener('DOMContentLoaded',loedEvent)

function loedEvent(params){
    const deleteicon = document.querySelectorAll('.ri-delete-bin-5-line')
    deleteicon.forEach(function (icon) {
        icon.addEventListener('click',removeProduct)
        // console.log(deleteicon);
        
    })
    const productcount = document.querySelectorAll('.productNos')
    productcount.forEach(function (input) {
    input.addEventListener("change",minus)
 })
 totalCalculation()  
}

function minus(params) {
  
    // alert('work')
 
    if (this.value < 1) {
        alert("product count cannot nagative value")
        this.value = 1
    } else if(this.value > 10){
        alert("out of stock")
        this.value = 10 
    }
    loedEvent()
}

function removeProduct(params) {
    const product = this.parentElement.parentElement

    console.log(product);
    

    const removeProductName = product.querySelector('.productname').innerText


    this.parentElement.parentElement.remove() 

    // console.log(removeProduct);

const findRemoveProductIndex = productCartArray.findIndex((product)=>product.productName === removeProduct)
// console.log(findRemoveProductIndex);

productCartArray.splice(findRemoveProductIndex,1)
console.log(productCartArray);

   loedEvent()
}

const productButtons = document.querySelectorAll('.pr-btn')

for (const btns of productButtons) {
btns.addEventListener("click", getProductInfo)}
function getProductInfo (params) {

    
const product = this.parentElement
const productName = product.querySelector('.prname').innerText
const productImage = product.querySelector('.productImage').src 
const price = product.querySelector('.price').innerText
// console.log(productName,productImage,price);
     
const productObj = {productName}    
// console.log(productobj);



const findProductIndex = productCartArray.findIndex((product)=>product.productName===productName) 

if (findProductIndex === -1) {
    productCartArray.push(productObj)
} else {
   return alert('product already in cart' )   
}
console.log(productCartArray);

console.log(findProductIndex);


const cartProduct = putProductInfo(productImage,productName,price)
const productContainer = document.querySelector('.productContainer')
// console.log(productContainer);

productContainer.innerHTML += cartProduct


loedEvent()
}




function putProductInfo(image,name,price) {
    return`
       <div class="cartProduct">
        <div class="cartProduct1">
        <div class="productImage12"> 
          <img src="${image}" alt=""></div>
          <div class="productall">
        <div class="productname">${name}</div>
        <div class="productsadd1">Size:1kg</div>
        <div class="productsadd2">Rich In: Vitamin C,</div>
        <div class="productsadd3">Container Type: Bundle</div>
        <div class="productprice"><h1 class = "total">${price}</h1><div class="totalprice1"> <h1></h1></div> </div> 
      </div>
    </div>
      <div class="plusbutton">
        <i class="ri-add-line"></i>
        <input type="number" name="" class="productNos" id="" value="1">
        <i class="ri-subtract-line"></i> 
        <i class="ri-delete-bin-5-line"></i>      
        </div>
       </div>
    `
}



function totalCalculation(params) {
    
    const cartProducts = document.querySelectorAll('.cartProduct')
    console.log(cartProducts);

    let cartTotal = 0

    for (const cProduct of cartProducts) {
        const count = parseInt(cProduct.querySelector('.productNos').value)
        const price = Number(cProduct.querySelector('.productprice h1').innerText.replace('$',''))
        // console.log(price*count);  
        

        document.querySelector('.totalprice1').innerText = price*count
        cartTotal += price*count 


        // console.log(price);
        
        
    }

    document.querySelector('.total-Price').innerHTML= cartTotal

    const notify = document.querySelector('.ri-shopping-cart-line')
    notify.innerHTML = productCartArray.length

    notify.style.opacity =productCartArray.length > 0 ? 1 : 0
}









