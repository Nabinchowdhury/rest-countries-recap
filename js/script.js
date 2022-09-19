const loadCountries = () => {
    fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => displayCountries(data))
}
const displayCountries = (data) => {
    const countriesAll = document.getElementById('countries')
    const countriesHTML = data.map(country => getCountries(country))
    // console.log(countriesHTML[0])
    countriesAll.innerHTML = countriesHTML.join(" ")
}


const getCountries = (data) => {
    console.log(data)
    return `
<div class="country">
<h2>${data.name.common}</h2>
<img src="${data.flags.png}">
</div>
`

}

loadCountries()