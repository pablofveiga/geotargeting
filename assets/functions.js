// 1.- ASK IF VISITED
let visited = localStorage.getItem("visitedOnce");
let targetURL = localStorage.getItem("favCountry");

// NUNCA HA (estado/guardado opciones) EN LA PÁGINA	y se REDIRIGIRÁ a su Región IP
if ( visited == null || visited == undefined) {

	// URLS DE DESTINO
	const MAPPINGS = {
		ES: 'http://localhost/redirecciones/',
	    CO: 'http://localhost/redirecciones/co/',
	    MX: 'http://localhost/redirecciones/mx/',
	    RO: 'http://localhost/redirecciones/gg',
	};

// NO COPIAR!!! ---> MODO chungo de PIllar IP COUNTRY
	fetch('https://api.ipregistry.co/?key=6vch6riqf6tecd')
	    .then(function(response) { return response.json(); })
	    .then(function(payload) {
// NO COPIAR!!! ---> MODO chungo de PIllar IP COUNTRY

	// VARIABLE A SOBREESCRIBIR CON LA DE CF
    const userCountryCode = payload['location']['country']['code'];


    // CODIGO BUENO	        
    let redirectionUrl = MAPPINGS[userCountryCode];
    // SI NO ESTA EN LA LISTA
    if (!redirectionUrl) {
        redirectionUrl = 'http://localhost/redirecciones/en/';
    }
    // EJECUTAR REDIRECCION
    localStorage.setItem("visitedOnce","true");
    window.location.href = redirectionUrl;


// NO COPIAR!!! ---> Es el manejo de errores de la API
	    }).catch(function (error) {
	    	console.error("Handle errors here", error);
	    });
// NO COPIAR!!! ---> Es el manejo de errores de la API


} 

else {

}

// POPUP
/*
Ahora solo guarda/sobreescribe el valor en localstorage mienrtas esté el checbox activo
*/
function languageSelector(e){
	e.stopPropagation();
	let checkBox = document.getElementById("guardarPais");
	if (checkBox.checked) {	
		if (e.target.dataset.country == "spanish") {
			console.log("espanis");
			localStorage.setItem("favCountry","spain");
		}
		if (e.target.dataset.country == "colombian") {
			console.log("colombian");
			localStorage.setItem("favCountry","colombia");
		}
		if (e.target.dataset.country == "mexican") {
			console.log("mexican");
			localStorage.setItem("favCountry","mexico");
		}
		if (e.target.dataset.country == "international") {
			console.log("international");
			localStorage.setItem("favCountry","english");
		}
	}
}
document.getElementById("languageBox").addEventListener("click", languageSelector);