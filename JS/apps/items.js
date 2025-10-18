let item1={
    id:101,
    img:"../../images/Laptop.jpg",
    price:50000,
    brand:"Hp Pavillion",
    qty:1,
}

let item2={
    id:102,
    img:"../../images/mobiles.jpg",
    price:50000,
    brand:"Apple",
    qty:1,
}

let item3={
    id:103,
    img:"../../images/Apple_watch.png",
    price:50000,
    brand:"Apple watch",
    qty:1,
}

let item4={
    id:104,
    img:"../../images/Electronics.jpg",
    price:50000,
    brand:"Electonics Gadget",
    qty:1,
}


   let products=[item1,item2,item3,item4];
   let copyProd=[...products];
   let sectionEle=document.getElementById("product-container");
   function displayItem(items){
    if(items.length==0){
        return;
    }

    sectionEle.innerHTML=""
    for(let item of items){
       sectionEle.innerHTML+=`<div class="product">
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

   }

   displayItem(products);


   function qtyInc(id){
    Updatearr=[];
    for(let item of copyProd){
        if(item.id==id){
            let obj={...item,qty:++item.qty};
            Updatearr.push(obj);
        }else{
            Updatearr.push(item);
        }
        displayItem(Updatearr);
    }
}
console.log(products);
console.log(copyProd)

    function qtyDec(id){
       decarr= copyProd.map((item)=>{
            if(item.id==id)
                return {...item,qty:(item.qty>1)?--item.qty:1};
            else return item;
        })
       displayItem(decarr); 
    }
    
   