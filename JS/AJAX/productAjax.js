

//fetching the data using AJAX
function fetchData()
{
    //1. Create XMLHttpRequest Object
    let xhr=new XMLHttpRequest();

    //2.Create Request
    xhr.open('GET','./product.json',true);

    //3.Send Request
    xhr.send();

    //4.Create Loader Msg
    xhr.addEventListener('progress',function()
    {
        document.getElementById('loader').innerHTML="Data Is Fetching.....";

        setTimeout(function()
        {
            document.getElementById('loader').remove();
        },1000)
    });

    //5.Once The Data Is Loaded
    xhr.addEventListener('load',function()
    {
        let getData=JSON.parse(xhr.responseText);//object
        let items=getData.products;
        

        //Display Products

function displayItem(items){
    if(items.length==0){
        return;
    }

    let eachProduct="";
    for(let item of items){
       eachProduct+=`<div class="product">
        <img src=${item.img} alt="">
        <h3 class="content">${item.brand}</h3>
        <h4 class="content">$ ${item.price}</h4>
         <h5 class="content">
             <button class="icon" onclick="qtyDec(${item.id})" >➖</button>
             <span id="qty">${item.qty}</span>
             <button class="icon" onclick="qtyInc(${item.id})">➕</button>
         </h5>
         <h6>grandTotal:$ <span id="total">${item.price*item.qty}</span></h6>
           

    </div>`;

    }
    document.getElementById("product-container").innerHTML=eachProduct;

   }

   displayItem(items);
    })


}
fetchData();