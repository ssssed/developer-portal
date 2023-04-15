import { useState } from "react";
import api from "../api";
import { FetchGeolocate } from "../types";

interface Geolocate {
  lat: number;
  lon: number;
}

export const useGeolocate = () => {
  const [geolocate, setGeolocate] = useState(
    sessionStorage.getItem("geolocate")
  );

  const handleUpdateGeolocate = (updated: string) => {
    sessionStorage.removeItem("geolocate");
    sessionStorage.setItem("geolocate", updated);
    setGeolocate(updated);
  };

  if (!geolocate) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const data = await api.post<FetchGeolocate>(
          "4_1/rs/geolocate/address",
          {
            lat,
            lon,
          }
        );
        const city = data?.suggestions[0]?.data.city;
        handleUpdateGeolocate(city);
        return city;
      },
      () => console.error("Не удалось определить текущую геолокацию")
    );
  }
  return geolocate;
};
