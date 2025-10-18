let a=10;
var b=20;
b=30;
{
    let a=30;
    var b=40;
    console.log("block Scope=",a,b);
}

 console.log("Outside block scope=",a,b);