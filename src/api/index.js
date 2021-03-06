import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async(country) => {
    let changeableUrl = country ? `${url}/countries/${country}` : url
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl)
        return { confirmed, recovered, deaths, lastUpdate }
    } catch (error) {
        console.error(error)
    }
}
export const fetchDailyData = async() => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        return modifiedData
    } catch (error) {

    }
}

export const fetchCountries = async() => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`)
        return countries.map(c => c.name)
    } catch (error) {

    }
}