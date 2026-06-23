import z from "zod";

export const dailyWeatherResponseSchema = z.object({
  lat: z.number(),
  lon: z.number(),
  timezone: z.string(),
  timezone_offset: z.number(),
  data: z.array(
    z.object({
      type: z.literal('daily').default('daily'),
      dt: z.number(),
      sunrise: z.number(),
      sunset: z.number(),
      moonrise: z.number(),
      moonset: z.number(),
      moon_phase: z.number(),
      temp: z.object({
        day: z.number(),
        min: z.number(),
        max: z.number(),
        night: z.number(),
        eve: z.number(),
        morn: z.number(),
      }),
      feels_like: z.object({
        day: z.number(),
        night: z.number(),
        eve: z.number(),
        morn: z.number(),
      }),
      pressure: z.number(),
      humidity: z.number(),
      wind_speed: z.number(),
      wind_deg: z.number(),
      weather: z.any().nullable(), // Adjust to z.any().nullable() if actual elements are ever present
      clouds: z.number(),
      rain: z.number().optional(),
      uvi: z.number(),
    })
  ),
  prev: z.string().url(),
  next: z.string().url(),
});

export type DailyWeatherResponse = z.infer<typeof dailyWeatherResponseSchema>;

