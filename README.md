<img src="https://github.com/gheorghedarle/React-WeatherApp/blob/master/screenshots/icon.png" width="96" />

# React Weather App

![MIT License](https://img.shields.io/github/license/gheorghedarle/React-WeatherApp)

[**DEMO with mock data**](https://gheorghedarle.github.io/React-WeatherApp/)

**Weather App** is a simple weather app developed in typescript using React, HTML and SASS. The app allows you to see the weather from your current location or another location around the globe using **OpenWeather Api** and **Google Maps Api**. Using **One Call API** the app displays the current weather, 24 hours and 6 days forecast. You can change the unit system from metric to imperial. The app is available in **light** and **dark mode**.

If you like this repository you can support me on

<a href="https://www.buymeacoffee.com/gheorghedarle" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-1.svg" alt="Buy Me A Coffee" width="175"></a>

#### Light mode

<img src="https://github.com/gheorghedarle/React-WeatherApp/blob/master/screenshots/light_mode.png?raw=true" Width="1620" />

#### Dark mode

<img src="https://github.com/gheorghedarle/React-WeatherApp/blob/master/screenshots/dark_mode.png?raw=true" Width="1620" />

## Libraries

- [React](https://github.com/facebook/react)
- [Axios](https://github.com/axios/axios) (API Calls)
- [Font Awesome](https://github.com/FortAwesome/Font-Awesome) (Icons)
- [React Error Boundary](https://github.com/bvaughn/react-error-boundary) (Error Handling)
- [React Indiana Drag Scroll](https://github.com/norserium/react-indiana-drag-scroll) (Scroll on drag)
- [Github Pages](https://github.com/tschaub/gh-pages) (Deploy)

## Setup

Create a file called **.env** in the root of the React-WeatherApp project. Add the following code in the file.

```
REACT_APP_OPENWEATHER_API_BASEURL = "https://api.openweathermap.org/data/2.5/onecall"
REACT_APP_OPENWEATHER_API_KEY = "YOUR_OPENWEATHERAPI_KEY"
REACT_APP_GEOLOCATION_GEOCODE_BASEURL = "https://maps.googleapis.com/maps/api/geocode/json"
REACT_APP_GEOLOCATION_API_KEY = "YOUR_GOOGLEMAPSAPI_KEY"
```

The app is using **One Call API** from OpenWeather API. To start the project you need an **account** and **OpenWeather API Key**. You can signup and get the key from [here](https://openweathermap.org/api).

The app is using **Geocoding** and **Reverse Geocoding** from Google Maps API. To start the project you need a **google account** and **Google Maps API Key**. You can get the key from [here](https://developers.google.com/maps/documentation/geocoding/overview).

To use real data, change the flag **useMockData** to false from **Container.tsx**.

## Resources

Illustrations are from [Freepik](https://www.freepik.com/)

## Other versions

[Xamarin-WeatherApp](https://github.com/gheorghedarle/Xamarin-WeatherApp) - developed in **Xamarin**
