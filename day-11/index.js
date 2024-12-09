



const url = "https://restcountries.com/v3.1/all";

async function fetchData() {
    try{
        const response = await fetch(ur);
        const data = await response.json();
        console.log(data);


      }  catch (error) {
            console.log("---------error----:",error.message);
        }

    }