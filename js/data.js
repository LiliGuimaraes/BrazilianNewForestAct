const data = {
    "MG": [{ "slug": "belo-horizonte", "nome": "Belo Horizonte", "num": 20 }],
    "SP": [{ "slug": "sao-paulo", "nome": "São Paulo", "num": 40 }]
}

var selectState = document.querySelector('select[id=state');
// populate select state option with data structure
selectState.options[selectState.options.length] = new Option('---', '---')
for (var key in data) {
    selectState.options[selectState.options.length] = new Option(key, key)
}

// find municipies value inside the object
let selectMunicipies = document.querySelector('select[id=municipie]');
selectMunicipies.options[selectMunicipies.options.length] = new Option('---', '---')
for (var key of Object.keys(data)) {
    for (var city of data[key]) {
        selectMunicipies.options[selectMunicipies.options.length] = new Option(city.nome, city.slug)
    }
}

//onChange if it's isMinifundio
document.querySelector('select[id=municipie]').addEventListener('change', function() {
    let current = document.querySelector('select[id=fiscalModule]');
    let isMinifundio = current.options[current.selectedIndex].value == 'minifundio' ? true : false;
    console.log(this.value);
    console.log('state', state);
    var municipie = state.find(x => x.slug === this.value)
    console.log('find', find);
    if (isMinifundio) {
        document.querySelector('input[id=module]').value = municipie.num;
        document.querySelector('p[id=propertieClassification]').innerHTML = 'Minifundio';
        document.querySelector('p[id=app_margem_corrego]').innerHTML = '5 metros';
        document.querySelector('p[id=app_nascente]').innerHTML = '15 metros';
        document.querySelector('p[id=reseva_legal]').innerHTML = 'A mata que já existe na propriedade';

    }
})

//onChange if it's smallPropertie
document.querySelector('select[id=municipie]').addEventListener('change', function() {
    const state = data[selectState.options[selectState.selectedIndex].value]
    let current = document.querySelector('select[id=fiscalModule]');
    let isSmallPropertie = current.options[current.selectedIndex].value == 'smallPropertie' ? true : false;
    var municipie = state.find(x => x.slug === this.value)
    if (isSmallPropertie) {
        document.querySelector('input[id=module]').value = municipie.num;
        document.querySelector('p[id=propertieClassification]').innerHTML = 'pequena propriedade';
        document.querySelector('p[id=app_margem_corrego]').innerHTML = '8 metros';
        document.querySelector('p[id=app_nascente]').innerHTML = '15 metros';
        document.querySelector('p[id=reseva_legal]').innerHTML = 'A mata que já existe na propriedade';
    }
})

//onChange if it's medium and 2_mediumPropertie
document.querySelector('select[id=municipie]').addEventListener('change', function() {
    const state = data[selectState.options[selectState.selectedIndex].value]
    let current = document.querySelector('select[id=fiscalModule]');
    let isMediumPropertie = current.options[current.selectedIndex].value == 'mediumPropertie' ? true : false;
    var municipie = state.find(x => x.slug === this.value)
    if (isMediumPropertie) {
        document.querySelector('input[id=module]').value = municipie.num;
        document.querySelector('p[id=propertieClassification]').innerHTML = 'Média propriedade';
        document.querySelector('p[id=app_margem_corrego]').innerHTML = '15 metros';
        document.querySelector('p[id=app_nascente]').innerHTML = '15 metros';
        document.querySelector('p[id=reseva_legal]').innerHTML = 'A mata que já existe na propriedade';
    }
})

//onChange 2_mediumPropertie
document.querySelector('select[id=municipie]').addEventListener('change', function() {
    const state = data[selectState.options[selectState.selectedIndex].value]
    let current = document.querySelector('select[id=fiscalModule]');
    let is_2MediumPropertie = current.options[current.selectedIndex].value == '2_mediumPropertie' ? true : false;
    if (is_2MediumPropertie) {
        var municipie = state.find(x => x.slug === this.value)
        document.querySelector('input[id=module]').value = municipie.num;
        document.querySelector('p[id=propertieClassification]').innerHTML = 'Média propriedade';
        document.querySelector('p[id=app_margem_corrego]').innerHTML = '30 metros';
        document.querySelector('p[id=app_nascente]').innerHTML = '15 metros';
        document.querySelector('p[id=reseva_legal]').innerHTML = '20%, pode contar a APP';
    }
})


//onChange if it's isBigPropertie
document.querySelector('select[id=municipie]').addEventListener('change', function() {
    const state = data[selectState.options[selectState.selectedIndex].value]
    let current = document.querySelector('select[id=fiscalModule]');
    let isBigPropertie = current.options[current.selectedIndex].value == 'bigPropertie' ? true : false;
    var municipie = state.find(x => x.slug === this.value)
    if (isBigPropertie) {
        document.querySelector('input[id=module]').value = municipie.num;
        document.querySelector('p[id=propertieClassification]').innerHTML = 'grande latifúndio';
        document.querySelector('p[id=app_margem_corrego]').innerHTML = '30 metros';
        document.querySelector('p[id=app_nascente]').innerHTML = '15 metros';
        document.querySelector('p[id=reseva_legal]').innerHTML = '20%, pode contar a APP';
    }
})
