const url= "https://dummyjson.com/products?limit=100";
const table = document.querySelector("table tbody");

function FetchDataAndFillTable(){

    fetch(url)
    .then(response => response.json())
    .then(data =>{
        data.products.sort((a, b) => b.discountPercentage - a.discountPercentage);
        const topProducts = data.products.slice(0,10);
        topProducts.forEach(product => {

            const newRow = document.createElement("tr");

            const ProductTitle = document.createElement("td");
            ProductTitle.textContent = product.title;
            newRow.appendChild(ProductTitle);

            const ProductDiscount = document.createElement("td");
            ProductDiscount.textContent = product.discountPercentage + "%";
            newRow.appendChild(ProductDiscount);

            const ProductPrice = document.createElement("td");
            ProductPrice.textContent = product.price;
            newRow.appendChild(ProductPrice);

            const ProductImage = document.createElement("td");
            newImage = document.createElement("img");
            newImage.src = product.thumbnail;
            newImage.width = 300;
            newImage.height = 200;
            ProductImage.append(newImage);
            newRow.appendChild(ProductImage);

            table.appendChild(newRow);
        });
    });
}

FetchDataAndFillTable();

const list = document.querySelector("ol");

function FetchDataAndFillList(){

    fetch(url)
    .then(response => response.json())
    .then(data =>{
        data.products.sort((a, b) => a.price/a.rating - b.price/b.rating);
        const topPriceQualityProducts = data.products.slice(0,10);
        topPriceQualityProducts.forEach(product => {
            
            let qualityCoeff = product.price/product.rating;
            const testString = qualityCoeff.toFixed(3);
            newLi = document.createElement("li");
            newLi.textContent = product.title + " |||| " + "Quality Coefficient is: " + testString;
            list.appendChild(newLi);

        });
    })
}

FetchDataAndFillList();

const categoryCounts = {};

fetch(url)
.then(response => response.json())
.then(data =>{
    data.products.forEach((product) => {
        const category = product.category;
        categoryCounts[category] = (categoryCounts[category] || 0) + 1;
      });});

  console.log(categoryCounts);

const brands = ["Al Munakh", "Dry Rose", "L'Oreal Paris", "Fair & Clear", "Boho Decor", "Baking Food Items", "Dermive", "Flying Wooden", "LED Lights", "Bake Parlor Big", "Golden","Huawei", "fauji", "Apple", "Microsoft Surface", "Hemani Tea", "Infinix", "Impression of Acqua Di Gio", "ROREC White Rice", "Fog Scent Xpressio", "OPPO", "Samsung", "HP Pavilion", "Saaf & Khaas", "Lord - Al-Rehab", "luxury palace", "Royal_Mirage"]
