//variables
const generalBtn = document.getElementById("General");
const businessBtn = document.getElementById("Business");
const sportBtn = document.getElementById("Sports");
const techBtn = document.getElementById("Technology");
const entertainmentBtn = document.getElementById("Entertainment");
const newsquery = document.getElementById("newsquery");
const searchBtn = document.getElementById("searchbtn");
const newstype = document.getElementById("newstype");
const newsdetails = document.getElementById("newsdetails");
const sortby =document.querySelector(".form-select")


var newsarr=[];

const API_KEY="affc6d2b8fdc437daca29a77b97ec8bc"
const HEADLINES_NEWS="https://newsapi.org/v2/top-headlines?country=us&apiKey="
const GENERAL_NEWS="https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey="
const BUSINESS_NEWS="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey="
const SPORTS_NEWS="https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey="
const TECH_NEWS="https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey="
const ENTERTAINMENT_NEWS="https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey="
const search_NEWS="https://newsapi.org/v2/everything?q="







window.onload = function() {
    fetchHeadlines();
};

sortby.addEventListener("change",function(){

    sortNewsArticles();
  });
  


generalBtn.addEventListener("click",function(){

    fetchGeneralNews();

});

businessBtn.addEventListener("click",function(){

    fetchBusinessNews();

});

sportBtn.addEventListener("click",function(){
    
    fetchSportsNews();

});

techBtn.addEventListener("click",function(){

    fetchTechNews();

});

entertainmentBtn.addEventListener("click",function(){

    fetchEntertainmentNews();

});

searchBtn.addEventListener("click",function(){

    fetchQueryNews();

});


/////////////////////////////////////////////////////////////////////////////////////////////////



const fetchHeadlines= async()=>{

    const response= await fetch(HEADLINES_NEWS+API_KEY);
    newsarr=[];
    if(response.status >=200 && response.status <300){
        const myjson = await response.json();
        console.log(myjson);
        newsarr=myjson.articles;
    } else{
        console.log(response.status,response.statusText);

    }
    displayNews();

}



const fetchGeneralNews= async()=>{

    const response= await fetch(GENERAL_NEWS+API_KEY);
    newsarr=[];
    if(response.status >=200 && response.status <300){
        const myjson = await response.json();
        console.log(myjson);
        newsarr=myjson.articles;
    } else{
        console.log(response.status,response.statusText);

    }
    displayNews();

}


const fetchBusinessNews= async()=>{

    const response= await fetch(BUSINESS_NEWS+API_KEY);
    newsarr=[];
    if(response.status >=200 && response.status <300){
        const myjson = await response.json();
        console.log(myjson);
        newsarr=myjson.articles;
    } else{
        console.log(response.status,response.statusText);

    }
    displayNews();

}


const fetchSportsNews= async()=>{

    const response= await fetch(SPORTS_NEWS+API_KEY);
    newsarr=[];
    if(response.status >=200 && response.status <300){
        const myjson = await response.json();
        console.log(myjson);
        newsarr=myjson.articles;
    } else{
        console.log(response.status,response.statusText);

    }
    displayNews();

}


const fetchTechNews= async()=>{

    const response= await fetch(TECH_NEWS+API_KEY);
    newsarr=[];
    if(response.status >=200 && response.status <300){
        const myjson = await response.json();
        console.log(myjson);
        newsarr=myjson.articles;
    } else{
        console.log(response.status,response.statusText);

    }
    displayNews();

}


const fetchEntertainmentNews= async()=>{

    const response= await fetch(ENTERTAINMENT_NEWS+API_KEY);
    newsarr=[];
    if(response.status >=200 && response.status <300){
        const myjson = await response.json();
        console.log(myjson);
        newsarr=myjson.articles;
    } else{
        console.log(response.status,response.statusText);

    }
    displayNews();

}


const fetchQueryNews= async()=>{

    if(newsquery.value==null){
        return;
    }

    const response= await fetch(search_NEWS+encodeURIComponent(newsquery.value)+"&apiKey="+API_KEY);
    newsarr=[];
    if(response.status >=200 && response.status <300){
        const myjson = await response.json();
        console.log(myjson);
        newsarr=myjson.articles;
    } else{

        console.log(response.status,response.statusText);

    }
    displayNews();

}


////////////////////////////////////////////////////////////////////////////////////

function sortNewsArticles() {
    const sortby =document.getElementById("sortby").value
    newsarr=myjson.articles;
    if (sortby === 'Date') {
      newsarr.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    } else if (sortby === 'Relevancy') {
      newsarr.sort((a, b) => b.relevancy.localeCompare(a.relevancy));
    } else if (sortby === 'Popularity') {
      newsarr.sort((a, b) => b.popularity - a.popularity);
    }
    
    displayNews();
  };
  




function displayNews(){

    newsdetails.innerHTML="";

    if(newsarr.length ==0){

        newsdetails.innerHTML="<h5>Not Found.</h5>"
        return;
    }






    newsarr.forEach(news => {

        var date = news.publishedAt.split("T");
        
        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";
        col.style.margin = "50px";
        col.style.borderRadius = "30px";



        var card = document.createElement('div');
        card.className = "p-2";
        card.style.margin = "10px";

        var image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        if (news.urlToImage) {
            image.src = news.urlToImage;
          } else {
            image.src = "images/Image_not_available.png";
          }

        var cardbody=document.createElement('div');
        cardbody.style.margin = "20px";



        var newsHeading=document.createElement('h5');
        newsHeading.className='card-title'
        newsHeading.innerHTML=news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="btn btn-primary";
        link.style.backgroundColor = "midnightblue";
        link.style.position = "absolute";
        link.style.bottom = "0";
        link.style.left = "0";
        link.style.margin = "10px";
        link.style.borderRadius = "30px";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        cardbody.appendChild(newsHeading);
        cardbody.appendChild(dateHeading);
        cardbody.appendChild(discription);
        cardbody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardbody);

        col.appendChild(card);

        newsdetails.appendChild(col);



    });    





}



  