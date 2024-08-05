# Weather App

**Note**: Ensure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions up to the "Creating a new application" step before proceeding.

## Table of Contents
- [Installation](#installation)
- [Starting the Application](#starting-the-application)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Improvements](#improvements)
- [App Demo](#app-demo)

## Installation

### Step 1: Install the Dependencies

First, you need to install all required dependencies. To install, run the following command from the _root_ of your React Native project:

```bash
npm i
```

To run the app on the iOS platform, you also need to setup the pods. For this, run the following command from the _root_ of your React Native project:

```bash
npm run pod-reset
```
## Starting the Application

### Step 2: Start the Metro Server

Start **Metro**, the JavaScript bundler that ships with React Native. Run the following script from the _root_  of your React Native project:

```bash
npm run start
```
### Step 3: Start Your Application

Let Metro Bundler run in its own terminal. Open a new terminal from the _root_  of your React Native project and run the following command to start your _Android_ or _iOS_ app:

#### For Android
```bash
npm run android
```

#### For iOS
```bash
npm run ios
```
## Testing

To run the unit tests, execute the following script to run all test cases:

```bash
npm run test
```
## Troubleshooting

If you encounter issues running the app, run the following script to clear all caches and reinstall everything from scratch:

```bash
npm run cleanNpm
```

If you encounter issues running the tests, run the following script to clear all caches:

```bash
npm run cleanTest
```

## Improvements

- **Autocomplete Feature**: Enhance functionality by providing an autocomplete feature for the input. Use the [WeatherAPI - Search/Autocomplete API](https://www.weatherapi.com/docs/#) to return matching cities and display them as dropdown options for easier selection.
- **Detailed Weather Forecast**: Display more detailed weather information, including forecasts for the next hours and days. Integrate with the [WeatherAPI - Forecast API](https://www.weatherapi.com/docs/#) and [OpenWeatherAPI - Forecast](https://openweathermap.org/api) services.

**Proper documentation of integration and flows have been added for better understanding and a quick start.**

## App Demo
https://github.com/user-attachments/assets/0a32616e-adfc-4c28-bc8f-4fe97d12e7f7

