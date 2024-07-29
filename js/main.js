// function apiData(){
// let xhttp= new XMLHttpRequest;
// xhttp.onreadystatechange= function(){

// if(this.readyState==4 && this.status==200){
// let api =xhttp.responsetext;

// document.getElementById("dataApi").innerHTML=`




// <img src="${api[0].url}" alt="product img">
// <h2>${api[0].id}</h2>
// <h6>${api[0].title}</h6>






// `
// }




// }

// xhttp.open('GET',"https://jsonplaceholder.typicode.com/photos",true)

// xhttp.send()




// }
// apiData()
// ==================================================
// fetch('https://fakestoreapi.com/products')
// .then(function(ele){
// return ele.json()

// }).then(function(result){

// document.querySelector(".dataApi img").src=result[0].image
// document.querySelector(".dataApi h2").innerHTML=result[0].title
// document.querySelector(".dataApi h6").innerHTML=result[0].description



// })

// =========================================
async function getData(){
let ele= await fetch('https://fakestoreapi.com/products')
let result= await ele.json()
let cartona=''
let counter=''
for(let i=0 ; i<result.length ; i++){

     cartona = `


    <div class=" col-md-3 card main-section" >
    <div class="">
    <img src="${result[i].image}" class="img-fluid card-img-top" >
    <div class="card-body">
    <h5 class="card-title">${result[i].title}</h5>
         <p class="card-text">${result[i].description}</p>
    </div>
    </div>
  </div>




       `
       counter+=cartona
}

 document.querySelector(".dataApi").innerHTML= counter




}
getData()