let a = 10;
let b = 200;

document.getElementById("sum").innerHTML = a + b;



let productName = "Dog";
let productImage = "picsum.photos/id/237/200/300";

const printProduct = () => {
    let productBox = document.getElementById("product_box");
    let products = []
    const data = [{
        name: "apple",
        price: 2000
    },
    {
        name: "apple -2",
        price: 300
    },
    {
        name: "apple -3",
        price: 20
    },
    {
        name: "apple -4",
        price: 2
    },
    {
        name: "apple -5",
        price: 4
    },
    {
        name: "apple -6",
        price: 5
    }]
    productBox.innerHtml = "";
    data.forEach((item, i) => {
        products.push(`<div class="product_card_container">
        <div class="product_card">
            <img src="https:${productImage}" />
            <div class="product_details">
                <div class="product_name">
                    ${item.name}
                </div>
                <div class="product_price">
                    ${item.price}
                </div>
            </div>
        </div>
    </div>`);
    })              
    productBox.innerHTML = products.join("");
}

printProduct()
