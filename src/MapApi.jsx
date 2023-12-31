import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';
import { useCallback, useState } from 'react';
import API_KEY from './env';


const containerStyle = {
  width: '900px',
  height: '400px',
};


const center = {
  lat: 40.705272,
  lng: -74.013968,
};

export default function MapApp() {
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)

  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */ }
        <Marker
      position={{ lat: 40.705272, lng: -74.013968 }}
    />
        <></>
      </GoogleMap>
  ) : <></>
}