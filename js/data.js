const data = {
    "MG": [{ "slug": "belo-horizonte", "nome": "Belo Horizonte", "num": 20 }],
    "SP": [{ "slug": "sao-paulo", "nome": "São Paulo", "num": 40 }]
}
var selectState = document.querySelector('select[id=state');
// populate select with data structure
selectState.options[selectState.options.length] = new Option('---', '---')
for (var key in data) {
    selectState.options[selectState.options.length] = new Option(key, key)
}

// populate select with data structure
let selectMunicipies = document.querySelector('select[id=municipie]');
selectMunicipies.options[selectMunicipies.options.length] = new Option('---', '---')
for (var key of Object.keys(data)) {
    for (var city of data[key]) {
        selectMunicipies.options[selectMunicipies.options.length] = new Option(city.nome, city.slug)
    }
}

document.querySelector('select[id=municipie]').addEventListener('change', function() {
        const state = data[selectState.options[selectState.selectedIndex].value]
        console.log(this.value);
        console.log('state', state);
        var municipie = state.find(x => x.slug === this.value)
        console.log('find', find)
        document.querySelector('input[id=module]').value = municipie.num;
    })
