const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
        if (response.status === 200) {
            const data = await response.json()
            return data.puzzle
        } else {
            throw new Error('Unable to fetch puzzle')
        }  
}

const getCountry = async (countryCode) => {
    const response = await fetch(`http://restcountries.eu/rest/v2/all`)
        if (response.status === 200) {
            const data = await response.json()
            return data.find((country) => country.alpha2Code === countryCode)
        } else {
            throw new Error('Unable to fetch puzzle')
        }
}

const getLocation = async () => {
    const response = await fetch(`https://ipinfo.io/json?token=9d5e673c827262`)
        if (response.status === 200) {
            const data = await response.json()
            return data
        } else {
            throw new Error('Unable to fetch location')
        }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
}











// const countryRequest = new XMLHttpRequest()

//     countryRequest.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             resolve(country)
//         } else if (e.target.readyStatet === 4) {
//             reject('Unable to fetch data')
//         }
//     })

//     countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//     countryRequest.send()