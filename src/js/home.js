var map;
var infowindow;
let cont = 0;
let tr;
window.onload = function() {
	let range = document.getElementById('range').value;
  	initMap(range);

};

function initMap(range){// Creamos un mapa con las coordenadas actuales
   	navigator.geolocation.getCurrentPosition(function(pos) {
	   	lat = pos.coords.latitude;
	   	lon = pos.coords.longitude;
	   	var myLatlng = new google.maps.LatLng(lat, lon);
	   	var mapOptions = {
	     	center: myLatlng,
	     	zoom: 14,
	     	mapTypeId: google.maps.MapTypeId.roadmap,
	     	minPriceLevel:0
	   	};
	   	map = new google.maps.Map(document.getElementById("mapa"),  mapOptions);
	   	// Creamos el infowindow
	   	infowindow = new google.maps.InfoWindow();
	   	// Especificamos la localización, el radio y el tipo de lugares que queremos obtener
	   	//console.log(range);
	   	var request = {
	     	location: myLatlng,
	     	radius: range,
	     	types: ['restaurant']
	   	};

	   	// Creamos el servicio PlaceService y enviamos la petición.
	   	var service = new google.maps.places.PlacesService(map);
	   	
	   	service.nearbySearch(request, function(results, status) {
	   		//console.log(google.maps.places);
	     	if (status === google.maps.places.PlacesServiceStatus.OK) {
	       		for (var i = 0; i < results.length; i++) {
	         		crearMarcador(results[i],i);
	       		}
	     	}
	   	});
 	});
}

function crearMarcador(place,contador){
 	// Creamos un marcador
 	//console.log(place);
   	var marker = new google.maps.Marker({
    	map: map,
    	draggable: true,
    	animation: google.maps.Animation.BOUNCE,
     	position: place.geometry.location,
     	title: place.name
   	});

 	// Asignamos el evento click del marcador
   	google.maps.event.addListener(marker, 'click', function() {
     	infowindow.setContent(place.name);
     	infowindow.open(map, this);
   	});
   	createTable(place,contador);
}

let rangeSelector = document.getElementById('range');
rangeSelector.addEventListener("click", function(){
	document.getElementById('tableImg').innerHTML= '';
	cont =0;
    initMap(rangeSelector.value);
});

function createTable(place,contador){
	let icon = '';
	if (place.photos) {
		icon = place.photos[0].getUrl({'maxWidth': 350, 'maxHeight': 350});
	}
	//console.log(place);
	/*console.log(cont);*/
	let table = document.getElementById('tableImg');
	if(contador===cont){
		cont=cont+5;
		tr = document.createElement('tr');
	}else{
		let td = document.createElement('td');
		let img = document.createElement('img');
		let span = document.createElement('span'); 
		var nameSpan = document.createTextNode(place.name);
		img.setAttribute("src", icon);
		img.setAttribute("width", "304");
    	img.setAttribute("height", "228");
		img.setAttribute('onclick','showmodal("'+place.place_id+'");');
		span.appendChild(nameSpan)
		td.appendChild(span)
		td.appendChild(img)
		tr.appendChild(td);
	}
	
	table.appendChild(tr);
}

function closemodal(){
	console.log('cerrar');
	document.getElementById('modalBody').innerHTML= '';
	var modal = document.getElementById('exampleModal');
	modal.style.display = "none";
	let rangeSelector = document.getElementById('range');
	initMap(rangeSelector.value);
}

function showmodal(idplace){
	var modal = document.getElementById('exampleModal');
	loadDetails(idplace);
	modal.classList.add("show");
	modal.style.display = "block";
}
function loadDetails(idplace){
	navigator.geolocation.getCurrentPosition(function(pos) {
	   	lat = pos.coords.latitude;
	   	lon = pos.coords.longitude;
	   	var myLatlng = new google.maps.LatLng(lat, lon);
	   	var mapOptions = {
	     	center: myLatlng,
	     	zoom: 14,
	     	mapTypeId: google.maps.MapTypeId.roadmap,
	     	minPriceLevel:0
	   	};
	   	map = new google.maps.Map(document.getElementById("mapa"),  mapOptions);
	   	// Creamos el infowindow
	   	infowindow = new google.maps.InfoWindow();
	   	// Especificamos la localización, el radio y el tipo de lugares que queremos obtener
	   	var request = {
	     	location: myLatlng,
	     	radius: range,
	     	types: ['restaurant']
	   	};

	   	// Creamos el servicio PlaceService y enviamos la petición.
	   	var service = new google.maps.places.PlacesService(map);
	   	
	   	service.getDetails({
		   	placeId: idplace
		 	}, function (placeDetails, status) {
		 	if (status == google.maps.places.PlacesServiceStatus.OK) {
		 		//console.log(placeDetails);

		   		//alert(placeDetails.formatted_address);
		   		let modalBody = document.getElementById('modalBody');
		   		//
		   		
		   		let number ='';
		   		let website ='';
		   		let horarios = '';
		   		if (typeof placeDetails.formatted_phone_number != 'undefined'){
		   			number ='<div>'+placeDetails.formatted_phone_number+'</div>';
		   		}
		   		if (typeof placeDetails.website != 'undefined'){
		   			website ='<div>'+placeDetails.website+'</div>';
		   		}
		   		let container = '<div>'+placeDetails.formatted_address+'</div>'
		   					+'<div>'+placeDetails.name+'</div>'
					   		+'<div>'+placeDetails.rating+'</div>'
							+website+number;
		   		//console.log(placeDetails.opening_hours.weekday_text);
		   		if(typeof placeDetails.opening_hours.weekday_text != 'undefined'){
		   			container+='<div>HORARIOS:<div>';
		   			placeDetails.opening_hours.weekday_text.forEach(function(element) {
					  //console.log(element);
					  container+=' '+element;
					});
					container+='</div></div>';
		   		}
		   		
		   		modalBody.innerHTML =container;
		   		
			}
		 });
 	});
}