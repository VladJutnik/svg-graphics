
var field_fo = $('#result_fo');
field_fo.on('click', function () {
    document.querySelector('.fo1').style.fill = $('.fo-1').val();
    document.querySelector('.fo2').style.fill = $('.fo-2').val();
    document.querySelector('.fo3').style.fill = $('.fo-3').val();
    document.querySelector('.fo4').style.fill = $('.fo-4').val();
    document.querySelector('.fo5').style.fill = $('.fo-5').val();
    document.querySelector('.fo6').style.fill = $('.fo-6').val();
    document.querySelector('.fo7').style.fill = $('.fo-7').val();
    document.querySelector('.fo8').style.fill = $('.fo-8').val();

    document.querySelector('#fo1').innerHTML = '1. Центральный ФО - '+ $('.val_fo-1').val();
    document.querySelector('#fo2').innerHTML = '2. Северо-Западный ФО - '+ $('.val_fo-2').val();
    document.querySelector('#fo3').innerHTML = '3. Южный ФО - '+ $('.val_fo-3').val();
    document.querySelector('#fo4').innerHTML = '4 - '+ $('.val_fo-4').val();
    document.querySelector('#fo5').innerHTML = '5. Приволжский ФО - '+ $('.val_fo-5').val();
    document.querySelector('#fo6').innerHTML = '6. Уральский ФО - '+ $('.val_fo-6').val();
    document.querySelector('#fo7').innerHTML = '7. Сибирский ФО - '+ $('.val_fo-7').val();
    document.querySelector('#fo8').innerHTML = '8. Дальневосточный ФО - '+ $('.val_fo-8').val();
});
window.onload = function () {
    document.querySelector('#one').onmouseout = function(e) {
        document.getElementById('one_path').style.opacity='0';
        this.style.color='black';
    }
    document.querySelector('#one').onmouseover = function(e) {
        document.getElementById('one_path').style.opacity='0.6';
        this.style.color='red';
    };
    document.querySelector('#two').onmouseout = function(e) {
        document.getElementById('two_path').style.opacity='0';
        this.style.color='black';
    }
    document.querySelector('#two').onmouseover = function(e) {
        document.getElementById('two_path').style.opacity='0.6';
        this.style.color='red';
    };
    document.querySelector('#three').onmouseout = function(e) {
        document.getElementById('three_path').style.opacity='0';
        this.style.color='black';
    }
    document.querySelector('#three').onmouseover = function(e) {
        document.getElementById('three_path').style.opacity='0.6';
        this.style.color='red';
    };
    document.querySelector('#four').onmouseout = function(e) {
        document.getElementById('four_path').style.opacity='0';
        this.style.color='black';
    }
    document.querySelector('#four').onmouseover = function(e) {
        document.getElementById('four_path').style.opacity='0.6';
        this.style.color='red';
    };
}