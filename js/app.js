// this is my main funtion here... 
const mainFunction = () => {
    document.getElementById('user-button').addEventListener('click', () => {
        const userInput = document.getElementById('user-input');
        const userInputValue = userInput.value;
        fetchUrl(userInputValue);
    })
}
mainFunction();

//url fatch funtion here..
const fetchUrl = async (country) => {
    try {
        const res = await fetch(`https://coronavirus-19-api.herokuapp.com/countries/${country}`)
        const data = await res.json();
        showData(data);
    }
    catch (error) {
        const div = document.getElementById('errors');
        div.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
            <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </symbol>
        </svg>

        <div class="alert alert-danger d-flex align-items-center w-50 mx-auto" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
            <div>
                Your search result is not found, please input valid countries name. try again!
            </div>
        </div>
        `
    }
}

// data show funtionality here...
const showData = (countriesData) => {
    const interFace = document.getElementById('interface');
    const { active,
        cases,
        country,
        critical,
        casesPerOneMillion,
        deathsPerOneMillion,
        deaths,
        recovered,
        testsPerOneMillion,
        todayCases,
        todayDeaths,
        totalTests
    } = countriesData;
    if (countriesData === countriesData) {
        interFace.style.display = 'block'
        interFace.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">Country : ${country}</h5>
            <p class="card-text"><span class=" fw-bold">Cases : </span>${cases}</p>
            <p class="card-text"><span class=" fw-bold">TodayCases : </span>${todayCases}</p>
            <p class="card-text"><span class=" fw-bold">TodayDeaths : </span>${todayDeaths}</p>
            <p class="card-text"><span class=" fw-bold">Critical : </span>${critical}</p>
            <p class="card-text"><span class=" fw-bold">Active : </span>${active}</p>
            <p class="card-text"><span class=" fw-bold">Recovered : </span>${recovered}</p>
            <p class="card-text"><span class=" fw-bold">TotalTests : </span>${totalTests}</p>
            <p class="card-text"><span class=" fw-bold">Deaths : </span>${deaths}</p>
            <p class="card-text"><span class=" fw-bold">Cases PerOne Million : </span>${casesPerOneMillion}</p>
            <p class="card-text"><span class=" fw-bold">Deaths PerOne Million : </span>${deathsPerOneMillion}</p>
            <p class="card-text"><span class=" fw-bold">Tests PerOne Million : </span>${testsPerOneMillion}</p>
        </div>
       `
    }
}
