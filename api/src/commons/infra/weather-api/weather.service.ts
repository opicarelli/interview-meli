import { WeatherCityForecast, WaveCityForecast, WeatherProvider } from "./providers/weather-provider";

export class WeatherService {
    public provider: WeatherProvider;

    /**
     *
     * @param {WeatherProvider} provider Weather provider
     */
    constructor(provider: WeatherProvider) {
        this.provider = provider;
    }

    async getWeatherForecastByCity(
        cityCode: string,
        tryLoadWaveForecast?: boolean
    ): Promise<WeatherCityForecast | null> {
        return this.provider.getWeatherForecastByCity(cityCode, tryLoadWaveForecast);
    }
    async getWaveForecastByCity(cityCode: string, day: number): Promise<WaveCityForecast | null> {
        return this.provider.getWaveForecastByCity(cityCode, day);
    }
}
