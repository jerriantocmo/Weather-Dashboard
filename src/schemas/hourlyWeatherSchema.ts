import z from "zod";

export const hourlyWeatherResponseSchema = z.object({
  lat: z.number(),
  lon: z.number(),
  timezone: z.string(),
  timezone_offset: z.number(),
  data: z.array(
    z.object({
        type: z.literal('hourly').default('hourly'),
      dt: z.number(),
      temp: z.number(),
      feels_like: z.number(),
      pressure: z.number(),
      humidity: z.number(),
      dew_point: z.number(),
      uvi: z.number(),
      clouds: z.number(),
      visibility: z.number(),
      wind_speed: z.number(),
      wind_deg: z.number(),
      wind_gust: z.number(),
      weather: z.array(
        z.object({
          id: z.number(),
          main: z.string(),
          description: z.string(),
          icon: z.string(),
        })
      ),
      pop: z.number(),
    })
  ),
  prev: z.string().url(),
  next: z.string().url(),
});

export type HourlyWeatherResponse = z.infer<typeof hourlyWeatherResponseSchema>;