async function fetchData(url){
    const response = await fetch(url);
    const jsonData = await response.json()
    return jsonData    
}


let displayCosmic = document.querySelector(".displayCosmic");


async function searchMovie (){    
    let search = document.querySelector(".search").value;

    let response =  await fetchData(` https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&apikey=5c1c8093e0943a61cd325e65e7cadb6b&hash=432441970b33138aaa8cf3f71db35837bc36e9c5
    `);
    //console.log(response);

    let data = response["data"];
    let result = data["results"];

    for(let i=0; i<result.length; i++){
        let div = document.createElement("div");
        
        let name = document.createElement("h1");
        name.innerHTML=result[i].name;
        div.append(name);
        displayCosmic.append(div);
        
    }
}