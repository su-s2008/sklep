let shop = document.getElementById('shop');

let shopItemsData=[{ 
    id:"jfhgbvnscs",
    name:"Спортивний костюм",
    price:659.00,
    desc:,
    img: "../img/pop.jpg",

}, 
{
    id:"ioytrhndcv",
    name:"спортивний костюм ",
    price:659.00,
    desc:,
    img: "../img/pop1.jpeg",
}, 
{
    id:"wuefbncxbsn",
    name:"спортивний костюм з футболкою",
    price:520.00,
    desc:,
    img: "../img/OIP.jpg",
}, 
{
    id:"",
    name:"Casual Shirt",
    price:45,
    desc:,
    img: "../img/pop.jpg",
}] 

console.log(shop);


let generateShop=()=>{
    return (shop.innerHTML= shopItemsData.map((x)=>{
        return`
        <div class="shop" id="shop">
       <div class="item">
        <img width="220" src="../img/pop.jpg" alt="">
        <div class="details">
          <h3>Спортивний костюм</h3>
          <p></p> 
          <div class="price-quantity">
            <h2>659.00</h2>
            <div class="buttons">
                
                    <i class="bi bi-dash-lg"></i>
                    <div class="quantity">0</div>
                    <i class="bi bi-plus-lg"></i>
                    </div>
                    </div>
                    <div>
    <div class="item">
<img width="220" src="../img/pop1.jpg" alt="">
<h3>спортивний костюм </h3>
<p></p>
<div class="price-quantity">
    <h2>659.00</h2>
    <div class="buttons">
        <i class="bi bi-dash-lg"></i>
        <div class="quantity">0</div>
        <i class="bi bi-plus-lg"></i>
    </div> 
</div>
       </div>
       <div class="item">
        <img width="220" src="../img/OIP.jpeg" alt="">
        <h3>спортивний костюм з футболкою</h3>
        <p></p>
        <div class="price-quantity">
            <h2>520.00 </h2>
            <div class="buttons">
                <i class="bi bi-dash-lg"></i>
                    <div class="quantity">0</div>
                    <i class="bi bi-plus"></i>
            </div>
        </div>
       </div>
       <div class="item"></div> 
    </div>`
    }));
};

generateShop()