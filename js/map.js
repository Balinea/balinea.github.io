var map_wrapper = 'map_container';	
var longitude = 48.8693374;
var latitude = 2.3447865;
var bubble_content =	"<p class='map_contacts'>" +
						"<span>Adresse : </span>" +
						"23, rue des jeûneurs - 75002 PARIS" +
						"</p>";





function initialize() {
	var mapOptions = {
		zoom: 13,
		center: new google.maps.LatLng(longitude, latitude),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		streetViewControl:false,
		scrollwheel : false,
		zoomControlOptions: {
	      style: google.maps.ZoomControlStyle.SMALL
	    }
	};

	var map = new google.maps.Map(document.getElementById(map_wrapper),mapOptions);

	var marker = new google.maps.Marker({
	  position:  new google.maps.LatLng(longitude, latitude),
	  map: map,
	  icon     : "img/marker.png"
	});

	var infowindow = new google.maps.InfoWindow({
			content: bubble_content
		});

	google.maps.event.addListener(marker, 'click', function() {
	  infowindow.open(map,marker);
	});
}

google.maps.event.addDomListener(window, 'load', initialize);
