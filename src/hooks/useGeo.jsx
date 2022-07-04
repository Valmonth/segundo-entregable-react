import { useGeolocated } from "react-geolocated";

export const Weather = () => {
    const { coords } =  useGeolocated();
    console.log(coords?.latitude);
}