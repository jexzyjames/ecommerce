var tog = document.querySelector(".tog");
var drop = document.querySelector(".drop");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var image = document.getElementById("image");
var order = document.querySelector(".order");
var show = document.querySelector(".show");
var  menu = document.getElementById("menu");
var del = document.querySelector(".delete");
var info = document.querySelector(".info");
var name = document.querySelector("#name");
var check = document.querySelector(".check");
var minus = document.querySelector("#minus");
var plus = document.querySelector("#plus");
var btn = document.querySelector("#btn");
var update = document.querySelector("#update");
var zero = document.querySelector("#zero");
var Show = document.querySelector("#Show");
var dollar = document.querySelector(".dollar");

menu.addEventListener("click", function(){
    tog.classList.toggle("down");
    if(tog.classList.contains("down")){
        // var open = document.querySelector("#menu");
        menu.src = "icon-close.svg"
    }
    else{
        menu.src = "icon-menu.svg";
    }
})
const slide = [
     {
        id: 1,
        img: "image-product-1.jpg",
        name: "james ",

    },
     {
        id: 2,
        name: "james ",

        img: "image-product-4-thumbnail.jpg",
    },
        {
            id:3,
            name: "james ",

            img: "image-product-2.jpg",
        },
        {
            id:4,
            name: "james ",

            img: "image-product-3.jpg",
        },
        {
            id:5,
            name: "james ",

            img: "image-product-4.jpg",

        },
        {
            id:6,
            name: "james ",

            img: "image-product-1-thumbnail.jpg",

        },
        {
            id:7,
            name: "james ",

            img: "image-product-2-thumbnail.jpg",
        },
        {
            id:8,
            img: "image-product-3-thumbnail.jpg",
            name: "james ",

        },
        {
        id: 9,
        img: "image-product-4-thumbnail.jpg",

    },
    ]

    window.addEventListener('DOMContentLoaded', function () {
            getPerson();
        });
        let view = 0;
                // const icon = document.querySelector(".image");


        function getPerson() {
            const icon = document.querySelector(".image");
            var item = slide[view];
            icon.src = item.img;
            icon.textContent = item.name;
            

        }

        next.addEventListener("click", function(){
            // icon.src = "image-product-2.jpg";
            view++;
            console.log(`We are in the ${view}th image`)
            
            if(view > 9){
                view = 0;
            }
            else{
                getPerson();

            }
            // getPerson();
        })
        prev.addEventListener("click", function () {
            // icon.src = "image-product-2.jpg";
            view--;
            console.log(`We are in the ${view}th image`)
            if(view < 0){
                view = 10;
            }
            // getPerson();
            else{
                getPerson();

            }
        })  


    let count = 0;
    let price = 125;
        
order.onclick = function(){
    if(true){
        // show.style.display = "block";
        show.classList.add("open");
    }
    del.onclick = function () {
        if (show.classList.contains("show")){
            info.style.display = "none";
            check.style.display = 'none';
        }
        if(info.style.display = "none"){
            info.style.display = "block";
            info.innerHTML = "Your Cart is empty";
            info.style.textAlign = "center";
            info.style.marginBottom = "50px";

        }
}
    // else{
    //     show.classList.remove("open");

    // }
}


let all = document.querySelectorAll('.display');
console.log(all);

all.forEach( function(each){
    each.addEventListener('click',()=>{
        let pic = each.getAttribute('src')
        image.src = pic
    
    })
})


    plus.addEventListener('click', ()=>{
        count++;
        update.innerHTML = count;
        zero.innerHTML = count;
        dollar.innerHTML = "$" + price x count;
    console.log(count);

    })

    minus.addEventListener('click', ()=>{
        count--;
        update.innerHTML = count ;
        zero.innerHTML = count ;
        dollar.innerHTML = "$" + price x count;
    console.log(count);

    })
btn.addEventListener('click', ()=>{
    Show.style.display = 'flex';
    Show.innerHTML = count ;

})


