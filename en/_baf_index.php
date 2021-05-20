<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>INICIO HOME ENGLISH</title>
<style type="text/css">
	.caja {
		/*width: 80vw;*/
		height: 80vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #36a0b5;
	}
	h1 {
		font-size: 2.4em;
	}
	nav {
		display: flex;
		justify-content: flex-end;
	}
	nav a {
		font-size: 1.4em;
		margin: 0 20px;
	}
</style>

</head>
<body>
	<nav>
		<a href="../">ESPAÑA</a>
		<a href="../co/">COLOMBIA</a>
		<a href="../mx/">MEXICO</a>
		<a href="../en/">ENGLISH</a>
	</nav>
	<div class="caja">
		<h1>INICIO HOME ENGLISH</h1>
		<h2>You are in: <span  id="pais"></span></h2>		
	</div>
</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>



<script>
// $.getJSON('http://api.wipmania.com/jsonp?callback=?', function (data) {
//     document.getElementById("pais").innerHTML = data.address.country;
// });



// OTRO MODO
const MAPPINGS = {
    CO: 'http://localhost/redirecciones/co/',
    MX: 'http://localhost/redirecciones/mx/',
    RO: 'http://localhost/redirecciones/gg',
};

fetch('https://api.ipregistry.co/?key=tryout')
    .then(function(response) { return response.json(); })
    .then(function(payload) {
        const userCountryCode = payload['location']['country']['code'];
        let redirectionUrl = MAPPINGS[userCountryCode];

        if (!redirectionUrl) {
            redirectionUrl = 'http://localhost/redirecciones/'
        }

        window.location.href = redirectionUrl;
    }).catch(function (error) {
    	console.error("Handle errors here", error);
    });
	
// ASK IF VISITED
let visited = localStorage.getItem("isFirstTime");
let targetURL = localStorage.getItem("favCountry");

if ( visited == null || visited == undefined) {
	// NUNCA HA (estado/guardado opciones) EN LA PÁGINA
		
	// HACER REDIRECCIÓN
	// let userIP = 

} else {
	// SI HA ESTADO EN LA WEB

	// COMPROBAR SI HA SELECCIONADO IDIOMA
	if (targetURL == "colombia") {
		// GOTO COLOMBIA
	} else if (targetURL == "mexico") {
		// GOTO MEXICO
	} else if (targetURL == "spain") {
		// GOTO SPAIN
	} else if (targetURL == "english") {
		// GOTO ENGLISH
	} else {
		// GOTO ENGLISH
	}

}



</script>

</html>