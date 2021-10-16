mapboxgl.accessToken = "pk.eyJ1IjoiYmVybmljZXdhd2VydSIsImEiOiJja3V0dXdqenowODBqMndxbzNqbjN1ODhlIn0.S83TFcr3tEMWYCqqDeoMCw"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([1.2921, 36.8219])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 10
    })

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    let directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })

    map.addControl(directions, "top-left")
}