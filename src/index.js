const $ = require( "jquery" );
const fs = require('fs');

let langJson, text_1;

async function loadLang(langAbr) {
    await fs.readFile('lang/' + langAbr + '.json', (err, data) => {
        if (err) /* console.log(err); */ alert('Internal Error, can not load language, switching to default...');
        langJson = JSON.parse(data);
        console.log(langJson);
        document.getElementById('page-title').innerHTML = langJson.title;
        document.getElementById('h1-title').innerHTML = langJson.pages[0].h1_title;
        document.getElementById('footer').innerHTML = langJson.pages[0].footer;
    });

    await fs.readFile('lang/' + langAbr + '_text_1.txt', (err, data) => {
        if (err) console.log(err);
        text_1 = data;
        if ( text_1 != undefined ) document.getElementById('h1-text-1').innerHTML = text_1;
    });

    $('.lang-alert-main-cont').fadeOut(250);
}