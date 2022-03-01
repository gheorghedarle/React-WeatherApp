import { useEffect, useState } from "react";

export const useLocation = () => {
  const [location, setLocation] = useState<GeolocationPosition>();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          setLocation(position);
        },
        () => {
          console.log("Error - Location");
        }
      );
    }
  }, []);

  return { location };
};
