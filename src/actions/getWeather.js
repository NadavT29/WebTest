export const getWeather = () => {
    return async (dispatch) => {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=haifa&appid=cc777c16bd63896aa3d026b6eca166b7')

        const weatherResult = await response.json();
        console.log(weatherResult)
        return dispatch({
            type: "WEATHER",
            payload: { 
                temp: weatherResult?.main?.temp, 
                description: weatherResult.weather[0].description,
                name: weatherResult.name
            }
        })
    }
}