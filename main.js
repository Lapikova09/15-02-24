const data = [{
    "name": "DROPSET TRAINER SHOES",
    "size": [38, 41, 42, 43, 44, 45, 46, 47],
    "color": ["blue", "green"],
    "price": 125,
    "icon": "Rectangle 8.png"
},
{
    "name": "ULTRABOOST 1.0 MIAMI Green",
    "size": [38, 41, 42, 43, 44, 45, 46, 47],
    "color": "green",
    "price": 125,
    "icon": "tr1.png"
},
{
    "name": "ADIDAS OZELIA SHOES Green",
    "size": [38, 41, 42, 43, 44, 45, 46, 47],
    "color": "green",
    "price": 125,
    "icon": "tr2.png"
},
{
    "name": "ADIDAS 4DFWD 2 RUNNING SHOES",
    "size": [38, 41, 42, 43, 44, 45, 46, 47],
    "color": ["orange", "green"],
    "price": 125,
    "icon": "tr3.png"
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [38, 41, 42, 43, 44, 45, 46, 47],
    "color": ["blue", "white"],
    "price": 125,
    "icon": "tr8.png"
}]

const page={
    'trainlist': document.querySelector('.train_list'),


}



function show_trainers(element){
    for(let i = 0; i > 4; i++){
        let card = document.createElement('li')
        card.innerHTML = `  <img src="/img/${element[i].icon}" alt="">
                            <div>${element[i].name}</div>
                            <a href="product_page.html"><button><img src="/img/Button (2).png" alt=""></button></a>`
        page.trainlist.appendChild(card)     
        console.log(card)               
    }
}


(()=> {
    show_trainers(data);
})()