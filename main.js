let BurgerMenu=document.getElementById("burger-menu");
let header=document.getElementById("header");
let categoriesCards=document.querySelectorAll(".categories .cards .card");
let productsSection=document.querySelector(".products");
let productsList=document.querySelector(".products .list");
let productCloseArrow=document.querySelector("#arrow-down");
const frag=document.createDocumentFragment();
let apiUrl="https://dummyjson.com/";
let categories={
    dresses:"womens-dresses",
    shoes:"womens-shoes",
    watches:"womens-watches",
    bags:"womens-bags",
    sunglasses:"sunglasses"
};
function CreateCard(){
    let card=document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML=`<div class="img">
        <img id="product-img" src="" alt="">
    </div>
    <div class="product-info">
        <div class="product-name-price">
            <h3 id="product-name"></h3>
            <h3 id="product-price"></h3>
        </div>
        <p id="product-desc"></p>
        <a href="#">add to cart</>
    </div>
    `;
    return card;
}
async function getProductsByCategorie(categorie){
    console.log(apiUrl+`category/${categories[categorie]}`);
    const response=await fetch(apiUrl+`products/category/${categories[categorie]}`);
    const data =await response.json();
    return (data.products);
}



//add Click event for each categorie card
categoriesCards.forEach((item)=>{
    item.addEventListener("click",()=>{
        productsList.innerHTML="";
        categorieName=item.getElementsByTagName("h3")[0].innerHTML;
        getProductsByCategorie(categorieName).then((data)=>{
            data.map((item)=>{
                const card=CreateCard();
                card.querySelector("#product-img").setAttribute("src",item.thumbnail);
                card.querySelector("#product-name").innerHTML=item.title;
                card.querySelector("#product-price").innerHTML=`<sup>$</sup>${item.price}`;
                card.querySelector("#product-desc").innerHTML=item.description;
                frag.appendChild(card);
            })
            productsList.appendChild(frag);
        })
        productsSection.classList.add("opened");
    });
});




// hand navbar open and close
BurgerMenu.addEventListener("click",()=>{
    header.classList.toggle("open");
});
productCloseArrow.addEventListener("click",()=>{
    productsSection.classList.remove("opened");
})