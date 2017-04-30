'use strict';

angular.module('myApp.travel', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/travel', {
    templateUrl: 'travel/travel.html',
    controller: 'travelCtrl'
  });
}])

.controller('travelCtrl', [function() {

}]);

/*
    function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap',
    };
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);
        
    // Multiple Markers
    var markers = [
        ['Presidential Suites, Punta Cana DR', 18.690674, -68.422102],
        ['Copely Square Hotel, Boston, MA', 42.348307, -71.078606],
        ['27 Restuarant & Bar, Miami Beach, FL', 25.804574, -80.126346]
        
    ];
                        
    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3 class="text-primary"><a href="https://photos.google.com/album/AF1QipNzlURSgyAZARHTu3nmzyc19zVMoWdAqsrGRJJa" class="text-primary">Punta Cana</a></h3>' +
        '<p class="text-primary">Presidential Suites Punta Cana by Lifestyle is set within the lush tropical area of Punta Cana, with a Caribbean hideaway vibe, and scrumptiously appointed one, two and three bedroom suites. Fully furnished living and kitchen area, with stainless steel appliances and designer furnishings set the standard for lavish comfort.</p>' +        '</div>'],
        ['<div class="info_content">' +
        '<h3 class="text-primary">The Copely Square Hotel</h3>' +
        '<p class="text-primary">Copley Square Hotel is Boston boutique at its best, reflecting that unmistakable originality, charm and character this town was built upon. Because it’s been around since 1891, the place feels more like a personality than a property. As a result, our staff is just as excited about delivering the authentic Boston experience as you are about living it while you’re here.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3 class="text-primary">Miami Beach</h3>' +
        '<p class="text-primary">Best cocktails ever.</p>' +
        '</div>']
    ];
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(3);
        google.maps.event.removeListener(boundsListener);
    });
    
} */
