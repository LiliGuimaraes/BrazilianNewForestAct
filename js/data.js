const data = {
    "MG": [{ "slug": "belo-horizonte", "nome": "Belo Horizonte", "num": 20 }],
    "SP": [{ "slug": "sao-paulo", "nome": "São Paulo", "num": 20 }]
}
var selectState = document.querySelector('select[id=country');
// populate select with data structure
for (key in data) {
    selectState.options[selectState.options.length] = new Option(key, key)
}

var selectMunicipies = document.querySelector('select[id=state]');
var selectInputModule = document.querySelector('input[id=module]')

// populate select with data structure
for (var key of Object.keys(data)) {
    console.log("key", data[key])
    for (var city of data[key]) {
        console.log("city", city)
        selectMunicipies.options[selectMunicipies.options.length] = new Option(city.nome, city.slug)
        $('#module').text('O valor do módulo fiscal da sua região é de ' + city.num);
    }
}
