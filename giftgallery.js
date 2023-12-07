let image = document.querySelector(".slider")
let image1 = "https://cdn.igp.com/f_auto,q_auto,t_pnopt32prodlp/banners/anniversary_d_igp_banner_20230626.jpg"
let image2 = "https://cdn.igp.com/f_auto,q_auto,t_pnopt32prodlp/banners/cakes_d_igp_banner_20230626.jpg"
let image3 = "https://cdn.igp.com/f_auto,q_auto,t_pnopt32prodlp/banners/flowers_d_igp_banner_20230626.jpg"


function changeImg(){
    let random = Math.ceil(Math.random()*3)
    if(random ==1){
        image.setAttribute("src",image1)
    }
    if(random == 2){
        image.setAttribute("src",image2)
    }
    if(random == 3){
        image.setAttribute("src",image3)
    }
    console.log(random)
}

let interval = setInterval(()=>{
    changeImg()
},2000)