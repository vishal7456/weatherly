# Weather Dashboard

A responsive weather dashboard web application built with React that provides real-time weather data and forecasts. 

## Features

- **Responsive Design**: 3-column layout (1:4:1 ratio) that adapts to different screen sizes
- **Real-time Weather Data**: Integration with WeatherAPI.com for current conditions and forecasts
- **Current Weather**: Temperature, conditions, wind speed, humidity, and UV index
- **5-Day Forecast**: Daily weather predictions with high/low temperatures
- **Search Functionality**: Look up weather by city name
- **Geolocation Support**: Get weather for your current location
- **Unit Toggle**: Switch between Celsius and Fahrenheit
- **Additional Widgets**: Clock, location information, and weather tips
- **Multiple Pages**: Dashboard, About, and Settings
- **Modern UI**: Card-based design with smooth transitions and animations



## Project Structure

```
src/
├── assets/         # Images and static assets
├── components/     # Reusable UI components
│   ├── Layout/     # Layout components
│   ├── Navigation/ # Navigation components
│   ├── Weather/    # Weather-related components
│   └── Widgets/    # Widget components
├── context/        # React Context for state management
├── pages/          # Page components
│   ├── About/      # About page
│   ├── Dashboard/  # Main dashboard page
│   └── Settings/   # Settings page
├── services/       # API services
└── styles/         # Global styles
```

## Technologies Used

- **React**: Frontend library for building user interfaces
- **React Router**: For navigation between pages
- **Styled Components**: For component-specific styling
- **Axios**: For API requests
- **WeatherAPI.com**: For weather data
- **Font Awesome**: For icons
- **Context API**: For state management

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
