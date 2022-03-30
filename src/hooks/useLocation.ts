import axios from "axios";
import { useEffect, useState } from "react";
import { EmptyLocationModel, LocationModel } from "../models";

export const useLocation = (locationName: string, useMockData: boolean) => {
  const apiKey = process.env.REACT_APP_GEOLOCATION_API_KEY;
  const geocodeBaseUrl = process.env.REACT_APP_GEOLOCATION_GEOCODE_BASEURL;

  const [location, setLocation] = useState<LocationModel>(EmptyLocationModel);

  useEffect(() => {
    if (locationName === "") {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos: GeolocationPosition) => {
            getLocationDetails(pos);
          },
          () => {
            console.log("Error - Location");
          }
        );
      }
    } else {
      console.log(locationName);
    }
  }, [locationName]);

  const getLocationDetails = (position: GeolocationPosition) => {
    axios
      .get(
        `${geocodeBaseUrl}?latlng=${position.coords.latitude},${position.coords.longitude}&result_type=locality&key=${apiKey}`
      )
      .then((res: any) => {
        if (res.data && res.data.results[0]) {
          const formattedAddress =
            res.data.results[0].formatted_address.split(",");
          setLocation({
            ...location,
            position: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
            locality: formattedAddress[0].replace(/\s/g, ""),
            country: formattedAddress[1].replace(/\s/g, ""),
          });
        }
      });
  };

  return {
    location,
  };
};
