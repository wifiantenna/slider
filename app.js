const dishes = [
 
{name:'Pizza',
image: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_797,q_75,w_2000/v1/clients/newyorkstate/838f0205_b914_48f2_96a0_0ce77623a71b_fa44e32e-78ee-4bc0-9e40-a9a9a98ed5ca.jpg",
link:"https://www.simplyrecipes.com/recipes/homemade_pizza/"
},
{
  name:'The Best Tofu for Scrambles',
image: "https://www.simplyrecipes.com/thmb/9N--UL8j_VqDGs_3E0nn8RYH9kk=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Spinach-Tofu-Scramble-LEAD-4-932c70c44636451da8505f48f34dd1e7.jpg",
link:"https://www.simplyrecipes.com/spinach-tofu-scramble-recipe-5215978"
},
{
  name:'Green Goddess Deviled Eggs',
image: "https://www.simplyrecipes.com/thmb/VxCBgXSIP7Sn7z5AzzOVKyfSzng=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__04__Green-Goddess-Deviled-Eggs-LEAD-2-bae42d40102b466ea46e02e33b3237a0.jpg",
link:"https://www.simplyrecipes.com/recipes/green_goddess_deviled_eggs/"
},
];

function slider(e){
  document.querySelector(".card-img-top").setAttribute("src",dishes[e].image)
  document.querySelector('.card-title').textContent = dishes[e].name
  document.querySelector('.card-link').setAttribute("href", dishes[e].link)
}


setInterval(init,4000)
function init(){
    var randomImg=Math.floor(Math.random()* dishes.length);
    console.log(randomImg)
    slider(randomImg)
}
