const data = {
        "MG": [{ "Belo Horizonte": 20 }],
        "SP": [{ "São Paulo": 20 }]
    }
    
var selectState = document.querySelector('select[id=country');
// populate select with data structure
for (key in data) {
    selectState.options[selectState.options.length] = new Option(key, key)
}

var selectMunicipies = document.querySelector('select[id=state');


// populate select with data structure
for (key in data) {
    console.log("key", key)
    for (city of data[key]) {
        console.log("city", city)
        selectMunicipies.options[selectMunicipies.options.length] = new Option('city', city)

    }
}
