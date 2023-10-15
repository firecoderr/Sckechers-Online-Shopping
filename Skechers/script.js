const navbar =document.querySelector('.navbar');
const toggleBtn = document.querySelector('.toggle-btn');
const closeCart = document.querySelector('.close-cart');
const openCart = document.querySelector('.shopping-cart');
const cartBox = document.querySelector('.cart-box');





// TOGGLE SIDEBAR
toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('open');
    toggleBtn.classList.toggle('fa-bars');
    toggleBtn.classList.toggle('fa-xmark');
})

const toggleBtnLink = () => {
    document.querySelector('.navbar').classList.remove('open');
    toggleBtn.classList.toggle('fa-bars');
    toggleBtn.classList.toggle('fa-xmark');
}





// TOGGLE SHOPPING CART
cartArrayBox = [openCart, closeCart]
cartArrayBox.forEach((btn) => {
    btn.addEventListener('click', () => {
        cartBox.classList.toggle('open');
    })
})





// HEADER DARK THEME
const header = document.querySelector("header");

document.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        header.classList.add('dark-theme')
    } else {
        header.classList.remove('dark-theme');
    }
})





// SEARCH BAR
let products = [
    {
        id: 1,
        productName: "Nike Shoes",
        description: "Air Max",
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1c0eddc9-202f-4d84-b571-3d044f6d814f/dunk-high-retro-mens-shoes-dTVTCk.png",
        price: 897
    },
    {
        id: 2,
        productName: "Puma Shoes",
        description: "Green",
        image: "https://img.tatacliq.com/images/i8/437Wx649H/MP000000008800959_437Wx649H_202212040934021.jpeg",
        price: 3432
    },
    {
        id: 3,
        productName: "Adidas Shoes",
        description: "Green",
        image: "https://spraytown.com.ua/wp-content/uploads/2021/07/Adidas-Originals-Spezial-Grey.jpg",
        price: 5345
    },
    {
        id: 4,
        productName: "Gucci Shoes",
        description: "Green",
        image: "https://d2kff6nqiqc7ur.cloudfront.net/is/image/saks/0400013288573?wid=484&hei=646&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
        price: 3290
    },
    {
        id: 5,
        productName: "Versache Shoes",
        description: "Green",
        image: "https://www.courir.com/dw/image/v2/BCCL_PRD/on/demandware.static/-/Sites-master-catalog-courir/default/dw0a439c3f/images/hi-res/001507848_101.png?sw=600&sh=600&sm=fit&q=90",
        price: 5354
    },
    {
        id: 6,
        productName: "Reebock Shoes",
        description: "Green",
        image: "https://assets.ajio.com/medias/sys_master/root/20230103/3ic0/63b403c6aeb269659c21255e/-473Wx593H-469331557-blue-MODEL.jpg",
        price: 4243
    },
    {
        id: 7,
        productName: "Nike Shoes",
        description: "Green",
        image: "https://media.hypedc.com/products/0517faf8/dh2920-111_wht_01.jpg",
        price: 4234
    },
    {
        id: 8,
        productName: "Nike Shoes",
        description: "Green",
        image: "https://classic.cdn.media.amplience.net/i/hibbett/M1352_6000_main?w=300&h=300&img404=404&v=1",
        price: 4234
    },
    {
        id: 9,
        productName: "Nike Shoes",
        description: "Green",
        image: "https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dwb8463796/images/63495301/Rebel_63495301_blackwhite_hi-res.jpg?sw=750&sh=750&sm=fit&q=60",
        price: 4234
    },
    {
        id: 10,
        productName: "Nike Shoes",
        description: "Green",
        image: "https://i8.amplience.net/s/scvl/102502_227772_SET/1?fmt=auto&$webPlp$",
        price: 4234
    },
    {
        id: 11,
        productName: "Nike Shoes",
        description: "Green",
        image: "https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dwb6e605ea/images/57630701/Rebel_57630701_blackwhite_hi-res.jpg?sw=750&sh=750&sm=fit&q=60",
        price: 4234
    },
    {
        id: 12,
        productName: "Nike Shoes",
        description: "Green",
        image: "https://www.undergroundskateshop.com/cdn/shop/products/dsaasdfad_1024x1024.jpg?v=1645812198",
        price: 4234
    }
];
products = products.map(item => {
    return {
        ...item,
        button: "Add to cart"
    }
})

const categories = [...new Set(products.map((item) => {return item}))];

// input keyup
document.querySelector('#search-input').addEventListener('keyup', (e) => {
    // get value from search input
    const searchData = e.target.value.toLowerCase();

    // filter data according to the value
    const filterData = categories.filter((item) => {
        return item.productName.toLowerCase().includes(searchData) || item.description.toLowerCase().includes(searchData);
    })

    console.log(searchData, filterData);
    if (filterData.length > 0) {
        displayData(filterData);
    } else {
        document.querySelector('.product-list').innerHTML = `
            <h1 style="font-size: 2rem; text-align: center; display: block;">Not Found</1>
            <img src="https://cdn.pixabay.com/photo/2020/12/30/01/45/smile-5872116_640.png" style="margin-top: 20px; max-width: 200px; width: 100%;">
            `;
    }
})

// display data in the product list
const displayData = (items) => {
    document.querySelector('.product-list').innerHTML = items.map((item) => {
        return `
            <div class="product" data-target="${item.id}" onclick="activePopUpProduct('${item.id}')">
                <div class="product-image-container">
                    <img class="product-image" src="${item.image}" alt="${item.image}">
                </div>

                <h1 class="product-name">${item.productName}</h1>
                <h2 class="product-desc">${item.description}</h2>
                <h2 class="product-price">TJS ${item.price.toLocaleString("en-US")}</h2>
            </div>
        `;
    }).join('');
}
displayData(categories);





// PRODUCT POP UP CART
function activePopUpProduct(productId) {
    console.log(categories[productId-1]);

    document.querySelector('.product-pop-up').innerHTML = `
            <div class="product-pop-up-close">
                <button onclick="closePopUpProduct()">
                    <i class="fa-solid fa-arrow-left"></i>
                    Назад к товарам
                </button>

                <li class="fa-solid fa-xmark" onclick="closePopUpProduct()"></li>
            </div>

            <div class="product-pop-up-container">
                <div class="product-pop-up-image">
                    <img src="${categories[productId-1].image}" alt="image">
                </div>

                <div class="product-information">
                    <h1 class="title">
                        ${categories[productId-1].productName}
                    </h1>

                    <h2 class="price">
                        TJS ${categories[productId-1].price.toLocaleString("en-US")}
                    </h2>

                    <div class="sizes">
                        <label for="sizes">Размеры</label>
                        <select id="sizes">
                            <option value="volvo">38</option>
                            <option value="saab">39</option>
                            <option value="opel">40</option>
                            <option value="audi">42</option>
                        </select>
                    </div>

                    <p class="description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, libero? Quibusdam rem nulla mollitia id totam recusandae. Tenetur modi natus hic sunt illum blanditiis quis dolorum, aliquam repellat vel reiciendis!
                    </p>

                    <button class="add-to-cart-btn" onclick="addToCart(${categories[productId-1].id})">
                        Добавить в корзину
                    </button>
                </div>
            </div>
    `
    document.querySelector('.product-pop-up').classList.toggle('open');
}

function closePopUpProduct() {
    document.querySelector('.product-pop-up').classList.toggle('open');
}





// CHECKOUT FUNCTION
const checkout = () => {
    const checkout = document.querySelector('.checkout');
    const checkoutBtn = document.querySelector('.btn-to-checkout');
    const closeCheckout = document.querySelector('.close-checkout');
    

    [checkoutBtn, closeCheckout].forEach((item) => {
        item.addEventListener("click", () => {
            
            if (cartList.length > 0) {
                checkout.classList.toggle('open')
            } else {
                window.alert('Ваша корзина пуста!')
            }

        });
    })
}
checkout();





// BACK TO TOP FUNCTION
const backToTop = () => {
    const btn = document.querySelector('a.back-to-top');
    
    document.addEventListener('scroll', () => {
        if (window.scrollY > 1500) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    })
}
backToTop();





// ADD TO THE CART
let cartList = JSON.parse(localStorage.getItem('Cart List')) || [];

const cartItemContainer = document.querySelector('.cart-item-container');

// ==========
const addToCart = (id) => {
    if (cartList.some((product) => product.id === id)) {
        window.alert('Такой товар уже добавлен в корзину!');
    } else {
        const item = products.find((product) => product.id === id);
        cartList.push({
            ...item,
            units: 1,
            total: item.price * item.units
        });

        console.log(cartList);

        // Total Price after add to cart
        const totalPrice = cartList.reduce((total, prices) => total + prices.price, 0);
        document.querySelector('.total-price').innerHTML = `TJS ${totalPrice.toLocaleString("en-US")}`;
        console.log(totalPrice)

        // Item Counter
        const itemCounter = cartList.reduce((total, prices) => total + prices.units, 0);
        document.querySelector('.shopping-cart').innerHTML += `
            <span class="card-item-counter">${itemCounter}</span>
        `

        // Save items to the local storage
        localStorage.setItem('Cart List', JSON.stringify(cartList));
        console.log(cartList);

        console.log("Local Storage: " + JSON.parse(localStorage.getItem('Cart List')));

        update();

        document.querySelector('.product-pop-up').classList.toggle('open');
    }
}




// REMOVE ITEMS FROM THE CART
const removeItemsFromTheCart = (id) => {
    cartList = cartList.filter(item => item.id !== id);

    cartList = cartList.map((item) => {
        return {
            ...item,
            units: item.units,
            total: item.price*item.units
        }
    })

    // cart item counter
    const itemCounter = cartList.reduce((total, units) => total + units.units, 0);
    // total price
    const totalPrice = cartList.reduce((total, prices) => total + prices.total, 0);

    document.querySelector('.total-price').innerHTML = `TJS ${totalPrice.toLocaleString("en-US")}.00`;
    // if total price is equal to 0
    if (totalPrice === 0) {
        document.querySelector('.total-price').innerHTML = `TJS ${totalPrice.toLocaleString("en-US")}.00`;
        console.log('total price is equal to 0')

        // cart item counter
        document.querySelector('.shopping-cart').innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`;
    } else {
        document.querySelector('.total-price').innerHTML = `TJS ${totalPrice.toLocaleString("en-US")}`;
        console.log(totalPrice);

        // cart item counter
        document.querySelector('.shopping-cart').innerHTML += `
        <span class="card-item-counter">${itemCounter}</span>
        `
    }
    console.log(totalPrice, itemCounter);
    

    // IT WORKS GREAT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    if (cartList.length === 0) {
        const cartItemContainer = document.querySelector('.cart-item-container');
        cartItemContainer.innerHTML = `<h1 style="text-align: center; color: red; padding-bottom: 20px; font-size: 1.1rem;">Ваша корзина пуста!</h1>`;
        console.log('deleted');
    } else {
        update();
    }

    // Save items to the local storage
    localStorage.setItem('Cart List', JSON.stringify(cartList));
    console.log(cartList);

    console.log("Local Storage: " + JSON.parse(localStorage.getItem('Cart List')));

    console.log("the last cart list: " + cartList);
}





// UPDATE
const update = () => {
    cartItemContainer.innerHTML = '';

    cartList.forEach((item) => {
        cartItemContainer.innerHTML += `
            <div class="cart-item">
                <div class="image-container">
                    <img src="${item.image}" alt="${item.productName}">
                </div>
                <div class="text">
                    <h1 class="title">${item.productName}</h1>
                    <h2 class="price">TJS ${item.price.toLocaleString("en-US")}</h2>
                </div>
                
                <div class="remove-container">
                    <div class="cart-item-quantity">
                        <button class="add" onclick="cartItemQuantity('add', ${item.id})">+</button>
                        <input type="number" value="${item.units}">
                        <button class="minus" onclick="cartItemQuantity('minus', ${item.id})">-</button>
                    </div>

                    <button class="remove-btn" onclick="removeItemsFromTheCart(${item.id})">Удалить</button>
                </div>
            </div>
        `
    })

    if (cartList.length > 0) {
        cartList = cartList.map((item) => {
            return {
                ...item,
                total: item.price * item.units
            }
        })
    }

    // cart item counter
    const itemCounter = cartList.reduce((total, prices) => total + prices.units, 0);
    if (itemCounter > 0) {
        document.querySelector('.shopping-cart').innerHTML += `
        <span class="card-item-counter">${itemCounter}</span>
        `
    } else {
        document.querySelector('.shopping-cart').innerHTML += `
        <span style="display: none;" class="card-item-counter"></span>
        `
    }


    // total price
    const totalPrice = cartList.reduce((total, prices) => total + prices.total, 0);

    if (cartList.length > 0) {
        document.querySelector('.total-price').innerHTML = `TJS ${totalPrice.toLocaleString("en-US")}.00`;
    } else {
        document.querySelector('.total-price').innerHTML = `TJS ${totalPrice.toLocaleString("en-US")}.00`;
    }
    console.log("total price: " + totalPrice);


    if (cartList.length === 0) {
        const cartItemContainer = document.querySelector('.cart-item-container');
        cartItemContainer.innerHTML = `<h1 style="text-align: center; color: red; padding-bottom: 20px; font-size: 1.1rem;">Ваша корзина пуста!</h1>`;
        console.log('deleted');
    }


    // Save items to the local storage
    localStorage.setItem('Cart List', JSON.stringify(cartList));
    console.log(cartList);
    console.log("Local Storage: " + JSON.parse(localStorage.getItem('Cart List')));
}
update();






// Cart Item Quantity Changer
const cartItemQuantity = (symbol, id) => {
    cartList = cartList.map((item) => {
        if (item.id === id) {
            if (symbol === 'add') {
                item.units++;
                update();
            } else if (symbol === 'minus' && item.units > 1) {
                item.units--;
                update();
            }
        }

        return {
            ...item,
            units: item.units,
            total: item.price*item.units
        }
    })

    // Total Cart after Quantity Changer
    const totalPrice = cartList.reduce((total, prices) => total + prices.total, 0);
    document.querySelector('.total-price').innerHTML = `TJS ${totalPrice.toLocaleString("en-US")}`;
    console.log(totalPrice);

    // Item Counter
    const itemCounter = cartList.reduce((total, prices) => total + prices.units, 0);
    document.querySelector('.shopping-cart').innerHTML += `
        <span class="card-item-counter">${itemCounter}</span>
    `

    // Save items to the local storage
    localStorage.setItem('Cart List', JSON.stringify(cartList));
    console.log(cartList);

    console.log("Local Storage: " + JSON.parse(localStorage.getItem('Cart List')));

    update();
}