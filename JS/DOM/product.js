let item={
    id:101,
    img:"../../images/Laptop.jpg",
    price:50000,
    brand:"Hp Pavillion",
    qty:1,
}


let htmlSnippet=`<div class="product">
        <img src=${item.img} alt="">
        <h3 class="content">${item.brand}</h3>
        <h4 class="content">$ ${item.price}</h4>
         <h5 class="content">
             <button class="icon" onclick="qtyDec()" >➖</button>
             <span id="qty">${item.qty}</span>
             <button class="icon" onclick="qtyInc()">➕</button>
         </h5>
         <h6>grandTotal:$ <span id="total">${item.price*item.qty}</span></h6>
           

    </div>`;


    let sectionEle=document.getElementById("product-container");
    sectionEle.innerHTML=htmlSnippet;
    let qtyEle=document.getElementById("qty");
    let gtEle=document.getElementById("total");

    let qtylocal=localStorage.getItem("qty")



        function qtyInc(){
            item.qty++;
            qtyEle.textContent=item.qty;
            gtEle.textContent=item.qty*item.price;


        }
        
         function qtyDec(){
            if(item.qty>1){
                item.qty--;
                qtyEle.textContent=item.qty;
                gtEle.textContent=item.qty*item.price;
            }

            
            
        }
