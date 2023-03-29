// With the help of promises
const joke = document.getElementById('joke');
const jokeBtn = document.querySelector('#jokeBtn'); 
const generatejokes = () => {
    joke.innerHTML = '<img src="./Spinner.svg" alt="spinner...">';
    const SetHeader = {
        headers: {
            Accept: "application/json"
        }
    }

    fetch('https://icanhazdadjoke.com', SetHeader)
        .then((res) => res.json())//to get  api from html formate to jsonformate
        .then((data)  => {
            joke.innerHTML = data.joke + "&#128514";
        }).catch((error) => {
            console.log(error);
        })
}


//with the  Async awit
// const generatejokes = async ()=>{//to convert function into async function

//     try{
//     const SetHeader ={
//         headers : {
//             Accept : "application/json"
//         }
//     }

//      const res = await fetch('https://icanhazdadjoke.com', SetHeader);
//      const data = await res.json();
//      jokes.innerHTML = data.joke;
// }catch(err){
//     console.log(`the error is ${err}`);
// }
// }

jokeBtn.addEventListener('click', generatejokes);
generatejokes();