// catch all from HTML 
const city = document.getElementById('city');
const icons = document.getElementById('icon');
const Location = document.getElementById('location');
const temperature = document.getElementById('temperature');
const environment = document.querySelector('.lead');
// click submit button
document.getElementById('submit').addEventListener('click', () => {
    // API call
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&appid=101b8db392cedcff93fd559f5587be4a&units=metric')
        .then(response => response.json())
        .then(data => {
            // API data collection
            const icon = data['weather'][0]['icon']
            const name = data['name']
            const temp = data['main']['temp']
            const description = data['weather'][0]['description']
            // implement API data in HTML document
            icons.innerHTML = `<img src = "images/${icon}@2x.png">`
            Location.innerHTML = name
            temperature.innerHTML = temp
            environment.innerHTML = description
        })
        // if found error
        .catch(error => console.log(error))
})

