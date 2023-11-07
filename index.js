let firstName = "John"; console.log(typeof firstName)
let lastName = "Maguayer";  console.log(typeof lastName)
let contry = "USA";  console.log(typeof contry)
let city = "New York";  console.log(typeof city)
let Age = 39;  console.log(typeof Age)
let isMarried = "Yes";  console.log(typeof isMarried)
let year = 1984;  console.log(typeof year)

let DUI = prompt('what day is today?')
let day = DUI.toLowerCase();

switch(day){
    case 'monday':
        alert('monday')
        break;
    case 'tuesday':  
        alert('tuesday') 
        break;
    case 'wednesday':
        alert('wednesday')
        break;
    case 'thosday':
        alert('thosday')
        break;
    case 'friday':
        alert('friday')   
        break;
    case 'saturday':
        alert( 'saturday')
        break;
    case 'sunday':
        alert('sunday')
        break;
    default:
        prompt('what day is today?')
}