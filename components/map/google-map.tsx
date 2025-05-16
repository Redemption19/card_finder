'use client';

import { useEffect, useRef } from "react";
import Script from "next/script";

// Add type definitions for Google Maps
declare global {
  interface Window {
    initMap: () => void;
    google: {
      maps: {
        Map: any;
        Marker: any;
        InfoWindow: any;
        Animation: {
          DROP: number;
        };
      };
    };
  }
}

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Function to initialize the map
    const initMap = () => {
      if (!mapRef.current) return;
      
      // Coordinates for Accra, Ghana
      const accraCoordinates = { lat: 5.6037, lng: -0.1870 };
      
      // Create a new map instance
      const map = new window.google.maps.Map(mapRef.current, {
        center: accraCoordinates,
        zoom: 15,
        mapId: 'DEMO_MAP_ID', // Replace with your actual Map ID if you have one
        mapTypeControl: false,
        fullscreenControl: true,
        streetViewControl: false,
        zoomControl: true,
        styles: [
          {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [{ "color": "#f5f5f5" }]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{ "color": "#c9c9c9" }]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#9e9e9e" }]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{ "color": "#ffffff" }]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{ "color": "#dadada" }]
          }
        ]
      });
      
      // Add a marker for CardFinder GH headquarters
      const marker = new window.google.maps.Marker({
        position: accraCoordinates,
        map: map,
        title: "CardFinder GH Headquarters",
        animation: window.google.maps.Animation.DROP
      });
      
      // Add an info window for the marker
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; max-width: 200px;">
            <h3 style="margin: 0 0 10px; font-weight: bold; color: #1E40AF;">CardFinder GH</h3>
            <p style="margin: 0 0 5px;">14 Independence Avenue</p>
            <p style="margin: 0 0 5px;">Accra, Ghana</p>
            <p style="margin: 0; color: #F97316;">+233 30 212 3456</p>
          </div>
        `
      });
      
      // Open info window when marker is clicked
      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
      
      // Initially open the info window
      infoWindow.open(map, marker);
    };
    
    // Initialize map when the Google Maps script is loaded
    if (window.google && window.google.maps) {
      initMap();
    } else {
      // Google Maps script will call this function once loaded
      window.initMap = initMap;
    }
  }, []);
  
  return (
    <>
      <div ref={mapRef} className="w-full h-full rounded-xl" />
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBIbQ08Ts3yaf8qUABivjRPKB0L2yvnMGk&callback=initMap&libraries=places&v=weekly`}
        strategy="lazyOnload"
      />
    </>
  );
}
