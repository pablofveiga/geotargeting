// CHECKEAR COOKIES DE LOCALSTORAGE
let visited = localStorage.getItem("visitedOnce");

if ( visited == null || visited == undefined) {
	// URLS DE DESTINO
	const MAPPINGS = {
		ES: 'https://secretcasinotips.com/',
	    CO: 'https://secretcasinotips.com/co/',
	    MX: 'https://secretcasinotips.com/mx/',
	    PE: 'https://secretcasinotips.com/pe/',
	};

	const userCountryCode = ""; // !!! VARIABLE DE COUNTRY-CODE de CLOUDFLARE

    let redirectionUrl = MAPPINGS[userCountryCode];
    // SI NO ESTA EN LA LISTA
    if (!redirectionUrl) {
        redirectionUrl = 'https://secretcasinotips.com/en/';
    }
    // EJECUTAR REDIRECCION
    localStorage.setItem("visitedOnce","true");
    window.location.href = redirectionUrl;
}