// onload = () => {
//     let geo = navigator.geolocation;
//     const geoCords = function(p) {
//         let lat = p.coords.latitude;
//         let lng = p.coords.longitude;
//         output.innerHTML = 
//             `Coordenadas: (${lat}; ${lng})`
//     }
//     const geoError = function(e) {
//         console.log(e);
//     }
//     geo.getCurrentPosition(geoCords, geoError);
// }

onload = () => {
    let geo = navigator.geolocation;
    const geoCords = function(p) {
        let lat = p.coords.latitude;
        let lng = p.coords.longitude;
        output.innerHTML = 
            `Coordenadas: (${lat}; ${lng})`
    }
    const geoError = function(e) {
        console.log(e);
    }
    let watchID = geo.watchPosition(geoCords, geoError);
    console.log(watchID);
    stWatch.onclick = () => {
        console.log(watchID);
        geo.clearWatch(watchID);
    }
}