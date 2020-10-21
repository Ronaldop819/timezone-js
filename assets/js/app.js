window.addEventListener('load', ()=>{
    let long;
    let lat;

    if(navigator.goolocation){
        navigator.goolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
        });
    }
});