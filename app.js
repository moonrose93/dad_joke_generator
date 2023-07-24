const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey ="uZhrMc3NNe79A1cbQY6xkARsHLJlqfvykH3cYY9Y";

const apiURL ="https://api.api-ninjas.com/v1/dadjokes?limit=1";
const options = {
    method: "GET",
    headers:{
        "X-Api-Key": apiKey,
    },
};

async function getJoke(){
    jokeEl.innerHTML = "Updating"
    btnEl.disabled = true;
    btnEl.innerHTML = "Loading..."
    const response = await fetch(apiURL,options);
    const data = await response.json();
    console.log(data[0].joke);//finding the elements in the console and targeting the object joke
    jokeEl.innerText = data[0].joke;//converting the joke element txt with the data 
    btnEl.disabled = false;
    btnEl.innerHTML = "Tell me a joke";
}


btnEl.addEventListener("click", getJoke)