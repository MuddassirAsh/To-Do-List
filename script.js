// adds elements dynamically
function addButton() {
    const container = document.getElementById('container')

    const containerTwo = document.createElement('div')
    containerTwo.classList.add('containerTwo')
    container.append(containerTwo)

    const userinput = document.getElementById('userinput')

    // creating input field dynamically and setting it's value to the 'original' user element value
    const inputElement = document.createElement('input')
    inputElement.type = 'text'
    inputElement.setAttribute('value', '')
    inputElement.classList.add('dynamic-input')
    inputElement.setAttribute('value', userinput.value.trim())
    inputElement.readOnly = true

    localStorage.setItem('numb', numb)    
    inputElement.setAttribute('dataset-numb', parseInt(localStorage.getItem('numb')))
    numb = parseInt(localStorage.getItem('numb')) + 1

    // localStorage --> numb, 0 | 
    

    const checkBox = document.createElement('input')
    checkBox.type = 'checkbox'

    // validating user entry
    // this could be more user friendly by adding a short message describing the exception
     if (inputElement.value === '') { 
         e.preventDefault()
     }

    // creating the remove icon dynamically 
    const spanElement = document.createElement('span')
    spanElement.classList.add('glyphicon','glyphicon-remove','removesign')

    // appends the created input element as well as  the remove icon into the parent's container following a breakline
    containerTwo.appendChild(inputElement)
    containerTwo.appendChild(spanElement)
    containerTwo.appendChild(checkBox)

    const newLine = document.createElement('br')
    newLine.classList.add('lineBreak')
    containerTwo.appendChild(newLine)

    // records all the values user has entered in localStorage
   list.push(containerTwo.innerHTML)
   localStorage.setItem('list', JSON.stringify(list))

    // clears the unique input element after addition of i  nput element
    userinput.value = ''
}   

    // runs the addButton function on click of the + icon
    document.getElementsByClassName('additionsign')[0].addEventListener('click', function() {
        addButton()
    })
    


// removes elements dynamically by evaluating whether or not element contains removesign class
function removeButton(e) {
    console.log(e)
    if (e.target.classList.contains('removesign'))  {
        e.target.parentElement.remove()

        // removes the associated localStorage key value pair
        numb = e.target.dataset.number
        list.splice(numb, 1)
        localStorage.setItem('list', JSON.stringify(list))
    }

}
// every single click executes the removeButton function
document.body.addEventListener('click', removeButton)


// checks checkbox when users checks it and adds styling to it respectively
function checkLine(e) {
    if (e.target.checked == true) {
        e.target.previousElementSibling.previousElementSibling.style.textDecoration = 'line-through'
        e.target.previousElementSibling.previousElementSibling.style.boxShadow =  '0 0 0 3px orange'
        e.target.previousElementSibling.previousElementSibling.style.backgroundColor =  '#EE9AE5' // pick something later
    }
    else if (e.target.checked == false ){
        e.target.previousElementSibling.previousElementSibling.style.textDecoration = 'unset'
        e.target.previousElementSibling.previousElementSibling.style.boxShadow =  'unset'
        e.target.previousElementSibling.previousElementSibling.style.backgroundColor =  'unset'
    }
      
}
// runs the function when user checks or unchecks a checkbox 
document.body.addEventListener('change', checkLine)

var list = JSON.parse(localStorage.getItem('list')) || []


if (localStorage.getItem('numb') !== null) {
    var numb = parseInt(localStorage.getItem('numb')) + 1 
}
else {
    var numb = 0
}

//var numb = JSON.parse(localStorage.getItem('list' + numb)


// stores data and updates elements dynmaically 
const containerWithin = document.getElementsByClassName('containerTwo')
function updateData() {
    for (i = 0; i < JSON.parse(localStorage.getItem('list')).length; i++) {
        const containerTwo = document.createElement('div')
        containerTwo.classList.add('containerTwo')
        container.append(containerTwo)
        containerTwo.innerHTML   = JSON.parse(localStorage.getItem('list'))[i]
    }
}

window.addEventListener('load', updateData)

// allows users to press enter as an alternative to pressing the submit icon 
userinput.onkeyup = function (e) {
    if (e.key == 'Enter') {
        addButton()
    }
}

// a dynamic greeting to the user based on the current day in EST 
var d = new Date()
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
document.getElementById('greeting').innerHTML = 'Happy'+ ' ' + days[d.getDay()]+ " " +"☕️"

const weatherdata = document.getElementById('weatherdata')
function success(param) {
    var lat = param.coords.latitude
    var long = param.coords.longitude

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=498e78645413a462079b552fb2684491`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
       var temperature = Math.round(data.main.temp)
       var location = data.name
       var icon = data.weather[0].icon
         weatherdata.innerHTML = `<img id='weather-icon' src='https://openweathermap.org/img/wn/${icon}@2x.png' alt='Weather Icon'> 
        <strong id='temp'> ${temperature}°C</strong> <br> ${location}` 
    })
}

navigator.geolocation.getCurrentPosition(success)   


//'https://openweathermap.org/img/wn/50n@2x.png' alt='Weather Icon'


// --------------- Tasks Still Needing To Be Completed --------------- 


// add nightmode 
// understanding this in annoymous
// validating userinput (prohibiting submissions with no text, maybe?)
// URL blocker
// Po Moderio timer
// api  
// demotivating quotes on the bottom
// notes section/diary for users to enter shit
// remembering user information through storing local sessions on the browser
// open weather api


// Issues with localStorage

// I have the keys and the values
// Now I need to be able to output them when user refreshers or exits  the page     
// what is windows.localStorage.myitems = asdasdada



//rest ful api ideas
//shit politicans say
// anime wallpaper or quotes
// uninspiring quotes
// understanding tihs keyword


// open weather API
// theysaidso API

// Philospher quotes API or Anime API or past presidents quotes

// how long does it take  create a curated listed of quotes is it manually done?

// promises and callback functions 
// add media queries for dark mode
