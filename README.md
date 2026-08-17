# 30DayDevRush

A structured collection of software projects developed as part of a 30-day development challenge. The repository documents practical implementation across web development, programming, and software engineering, with each project focused on applying concepts through hands-on development.

## Projects

### 1. Weather App

A responsive weather application developed using HTML, CSS, and JavaScript. The application integrates the OpenWeather API to retrieve and present current weather information based on the user's selected city.

#### Key Features

- City-based weather search
- Real-time weather data retrieval
- Current temperature display
- Humidity information
- Wind speed information
- Dynamic weather condition icons
- Invalid city input handling
- Responsive user interface

#### Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- OpenWeather API

#### Project Structure

```text
weather_app/
├── images/
│   ├── clear.png
│   ├── clouds.png
│   ├── drizzle.png
│   ├── humidity.png
│   ├── mist.png
│   ├── rain.png
│   ├── search.png
│   ├── snow.png
│   └── wind.png
├── index.html
├── main.js
└── style.css
```

#### Getting Started

Clone the repository:

```bash
git clone https://github.com/YRshaurya/30DayDevRush.git
```

Navigate to the project directory:

```bash
cd 30DayDevRush/weather_app
```

Configure your OpenWeather API key in `main.js`, then open `index.html` in a web browser.

#### API

This project uses the OpenWeather Current Weather Data API to retrieve weather information.

For production deployments, API credentials should not be exposed directly in client-side source code. A restricted API key or backend/serverless proxy should be used where appropriate.

## Development

Each project in this repository is developed independently and maintained as part of the 30-day development challenge. Projects may evolve over time as new functionality, optimisations, and design improvements are introduced.

## License

This repository is licensed under the MIT License. See the `LICENSE` file for details.
