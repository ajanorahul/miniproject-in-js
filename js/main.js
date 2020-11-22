document.getElementById("output").style.visibility = "hidden";
let input = document.getElementById('input');
input.addEventListener('input', function(e){

    document.getElementById("output").style.visibility = "visible";
    let pounds = e.target.value;
    document.getElementById('gramsOutput').innerHTML = pounds/0.0022046;
    document.getElementById('kiloOutput').innerHTML = pounds/2.2046;
    document.getElementById('ouncesOutput').innerHTML = pounds*16;
    

});