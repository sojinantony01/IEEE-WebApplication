let a = 10;
let b = 200;

document.getElementById("sum").innerHTML = a + b;



let productName = "Dog";
let productImage = "picsum.photos/id/237/200/300";

const printProduct = () => {
    let productBox = document.getElementById("product_box");
    let products = []
    productBox.innerHtml = "";
    for(let i = 0; i< 50; i++) {             
        products.push(`<div class="product_card_container">
                <div class="product_card">
                    <img src="https:${productImage}" />
                    <div class="product_details">
                        <div class="product_name">
                            ${productName}
                        </div>
                        <div class="product_price">
                            2000$
                        </div>
                    </div>
                </div>
            </div>`);
    };    
    productBox.innerHTML = products.join("");
}

printProduct()
