async function getProduct(){

    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    console.log(products);

  const  result = products.map( function(product){
  return `
  <div class "product"> 
  <img src="${product.image}"/>
  <h2>${product.title}</h2>
  <h2>${product.price}</h2>
  </div>

 
  
  `

  }).join('')

  document.querySelector('.products').innerHTML = result;
}



getProduct();