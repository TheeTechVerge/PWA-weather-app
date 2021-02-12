import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";

const API_KEY = "0ceab143a4aea3426c6e2a2de333dadf";

export const fetchWeather = async (query) => {
	const { data } = await axios.get(URL, {
		params: {
			q: query,
			units: "metric",
			APPID: API_KEY,
		},
	});

	return data;
};

