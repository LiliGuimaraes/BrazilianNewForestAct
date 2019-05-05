const data = {
    "MG": [{ "slug": "belo-horizonte", "nome": "Belo Horizonte", "num": 20 }],
    "SP": [{ "slug": "sao-paulo", "nome": "São Paulo", "num": 40 }]
}

var selectState = document.querySelector('#state');
selectState.options[selectState.options.length] = new Option('---', '---')
for (var key in data) {
    selectState.options[selectState.options.length] = new Option(key, key)
}

let selectMunicipies = document.querySelector('#municipie');
selectState.addEventListener('change', function() {
    selectMunicipies.innerHTML = "";
    if (selectState.value == "---") return;
    selectMunicipies.options[selectMunicipies.options.length] = new Option('---', '---')
    for (var city of data[selectState.value]) {
        selectMunicipies.options[selectMunicipies.options.length] = new Option(city.nome, city.slug)
    }
})
document.querySelector('#fiscalModule').addEventListener('change', function() {
    // get selected state
    var state = undefined;
    if (selectState.value != "---")
        state = data[selectState.value];
    // get selected state
    var municipie = undefined;
    if (state)
        municipie = state.find(x => x.slug === selectMunicipies.value);
    if (municipie)
        document.querySelector('#module').innerHTML = municipie.num;
    if (this.value == "minifundio") {
        document.querySelector('#propertieClassification').innerHTML = 'Minifundio';
        document.querySelector('#app_margem_corrego').innerHTML = '5 metros';
        document.querySelector('#app_nascente').innerHTML = '15 metros';
        document.querySelector('#reseva_legal').innerHTML = 'A mata que já existe na propriedade';

    } else if (this.value == "smallPropertie") {
        document.querySelector('#propertieClassification').innerHTML = 'pequena propriedade';
        document.querySelector('#app_margem_corrego').innerHTML = '8 metros';
        document.querySelector('#app_nascente').innerHTML = '15 metros';
        document.querySelector('#reseva_legal').innerHTML = 'A mata que já existe na propriedade';

    } else if (this.value == "mediumPropertie") {
        document.querySelector('input[id=module]').value = municipie.num;
        document.querySelector('p[id=propertieClassification]').innerHTML = 'Média propriedade';
        document.querySelector('p[id=app_margem_corrego]').innerHTML = '15 metros';
        document.querySelector('p[id=app_nascente]').innerHTML = '15 metros';
        document.querySelector('p[id=reseva_legal]').innerHTML = 'A mata que já existe na propriedade';

    } else if (this.value == "2_mediumPropertie") {
        document.querySelector('input[id=module]').value = municipie.num;
        document.querySelector('p[id=propertieClassification]').innerHTML = 'Média propriedade';
        document.querySelector('p[id=app_margem_corrego]').innerHTML = '30 metros';
        document.querySelector('p[id=app_nascente]').innerHTML = '15 metros';
        document.querySelector('p[id=reseva_legal]').innerHTML = '20%, pode contar a APP';

    } else if (this.value == "bigPropertie") {
        document.querySelector('input[id=module]').value = municipie.num;
        document.querySelector('p[id=propertieClassification]').innerHTML = 'grande latifúndio';
        document.querySelector('p[id=app_margem_corrego]').innerHTML = '30 metros';
        document.querySelector('p[id=app_nascente]').innerHTML = '15 metros';
        document.querySelector('p[id=reseva_legal]').innerHTML = '20%, pode contar a APP';
    }
})
