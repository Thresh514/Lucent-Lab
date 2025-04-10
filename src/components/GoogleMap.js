"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

// 中心点坐标（你可以改成你要的经纬度）
const center = {
  lat: 42.318388,
  lng: -71.231981,
};

const darkMapStyle = [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#263c3f" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#38414e" }],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#212a37" }],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#2f3948" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#17263c" }],
    },
  ];

export default function MyMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap 
        mapContainerStyle={containerStyle} 
        center={center} 
        zoom={13} 
        options={{
            styles: darkMapStyle, // ✅ 默认启用深色模式
            disableDefaultUI: true, // 禁用默认UI
        }}>
      <Marker position={center}/>
      <button
        onClick={() =>
          window.open(
            "https://www.google.com/maps/dir/?api=1&destination=42.318388,-71.231981",
            "_blank"
          )
        }
        className="absolute bottom-6 right-4 bg-white text-black p-2.5 rounded-full"
      ><img src="/direction.svg" alt="directions" width={30} height={30}/>
      </button>
    </GoogleMap>
  );
}
