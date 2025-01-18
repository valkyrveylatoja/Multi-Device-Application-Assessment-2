function myFunction(){
    var element = document.body
    element.classList.toggle("darkmode");
}

function changeImage(){
    var img = document.getElementById('logo');
    if (img.src.includes('logoBLACK.png')) {
        img.src = 'Assets/logoGREEN.png';
    }
    else {
        img.src = 'Assets/logoBLACK.png';
    }
}