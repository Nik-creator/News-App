import React, { useState, useEffect } from 'react';

const useLocation = () => {
  const [error, setError] = useState<string | null>(null);
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [access, setAccess] = useState<boolean>(false);

  useEffect(
    () => {
      const options = {
        enableHighAccuracy: true,
        timeout: 8000,
        maximumAge: 0
      };
      const success = (position: any) => {
        setAccess(true);
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setLatitude(lat);
        setLongitude(lng);
      };
      const errorSuccess = (err: any) => {
        setAccess(false);
        setError(`ERROR-${err.code}:${err.message}`);
      };
      navigator.geolocation.getCurrentPosition(success, errorSuccess, options);
    }, []
  );
  return {
    error,
    access,
    latitude,
    longitude,
  };
};

export default useLocation;
