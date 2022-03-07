import axios from "axios";
import { useEffect, useState } from "react";

export const useLocation = () => {
  const apiKey = process.env.REACT_APP_GEOLOCA_API_KEY;

  const [location, setLocation] = useState<GeolocationPosition>();
  const [locality, setLocality] = useState<string>();
  const [country, setCountry] = useState<string>();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          setLocation(position);
          getLocationDetails(position);
        },
        () => {
          console.log("Error - Location");
        }
      );
    }
  }, []);

  const getLocationDetails = (position: GeolocationPosition) => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&result_type=locality&key=${apiKey}`
      )
      .then((res: any) => {
        if (res.data && res.data.results[0]) {
          const formattedAddress =
            res.data.results[0].formatted_address.split(",");
          setLocality(formattedAddress[0].replace(/\s/g, ""));
          setCountry(formattedAddress[1].replace(/\s/g, ""));
        }
      });
  };

  return {
    locality,
    country,
    location,
  };
};
