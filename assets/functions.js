
// ASK IF VISITED
let visited = localStorage.getItem("visitedOnce");
let targetURL = localStorage.getItem("favCountry");

if ( visited == null || visited == undefined) {
	// NUNCA HA (estado/guardado opciones) EN LA PÁGINA		
	// HACER REDIRECCIÓN
	const MAPPINGS = {
		ES: 'http://localhost/redirecciones/',
	    CO: 'http://localhost/redirecciones/co/',
	    MX: 'http://localhost/redirecciones/mx/',
	    RO: 'http://localhost/redirecciones/gg',
	};
	fetch('https://api.ipregistry.co/?key=6vch6riqf6tecd')
	    .then(function(response) { return response.json(); })
	    .then(function(payload) {
	        const userCountryCode = payload['location']['country']['code'];
	        
	        let redirectionUrl = MAPPINGS[userCountryCode];

	        // SI NO ESTA EN LA LISTA
	        if (!redirectionUrl) {
	            redirectionUrl = 'http://localhost/redirecciones/en/';
	        }
	        // EJECUTAR REDIRECCION
	        localStorage.setItem("visitedOnce","true");
	        window.location.href = redirectionUrl;

	    }).catch(function (error) {
	    	console.error("Handle errors here", error);
	    });

} else {
	// SI HA ESTADO EN LA WEB		
	const MAPPINGS2 = {
		spain: 'http://localhost/redirecciones/',
	    colombia: 'http://localhost/redirecciones/co/',
	    mexico: 'http://localhost/redirecciones/mx/',
	    english: 'http://localhost/redirecciones/en/',
	};

	let favChoice = localStorage.getItem("favCountry");
	let favRedirectionUrl = MAPPINGS2[favChoice];
    
    if (!favRedirectionUrl) {
        favRedirectionUrl = 'http://localhost/redirecciones/en/';
    }

    localStorage.setItem("visitedOnce","true");
    // window.location.href = favRedirectionUrl;

/*
	console.log("ya has estado aquí "+favRedirectionUrl);
	// COMPROBAR SI HA SELECCIONADO IDIOMA
	if (targetURL == "colombia") {
		// GOTO COLOMBIA
		localStorage.setItem("visitedOnce","true");
		// window.location.href = "http://localhost/redirecciones/co/";
		console.log("cacafuti")
	} else if (targetURL == "mexico") {
		// GOTO MEXICO
		localStorage.setItem("visitedOnce","true");
		// window.location.href = "http://localhost/redirecciones/mx/";
	} else if (targetURL == "spain") {
		// GOTO SPAIN
		localStorage.setItem("visitedOnce","true");
		// window.location.href = "http://localhost/redirecciones/";
	} else if (targetURL == "english") {
		// GOTO ENGLISH
		localStorage.setItem("visitedOnce","true");
		// window.location.href = "http://localhost/redirecciones/en/";
	}

*/

}

// POPUP
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