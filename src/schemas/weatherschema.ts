import { z } from 'zod';

/**
 * 1. DAILY WEATHER RESPONSE SCHEMA
 * Handles multi-day timelines containing nested min/max temperatures,
 * sun/moon phases, and top-level optional fields like rain.
 */
export const dailyWeatherResponseSchema = z.object({
  lat: z.number(),
  lon: z.number(),
  timezone: z.string(),
  timezone_offset: z.number(),
  data: z.array(
    z.object({
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


/**
 * 2. CURRENT WEATHER RESPONSE SCHEMA
 * Handles the single-snapshot current weather condition.
 */
export const currentWeatherResponseSchema = z.object({
  lat: z.number(),
  lon: z.number(),
  timezone: z.string(),
  timezone_offset: z.number(),
  data: z.array(
    z.object({
      dt: z.number(),
      sunrise: z.number(),
      sunset: z.number(),
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
    })
  ),
});

export type CurrentWeatherResponse = z.infer<typeof currentWeatherResponseSchema>;


/**
 * 3. HOURLY WEATHER RESPONSE SCHEMA
 * Handles chronological hourly intervals, featuring a precipitation probability (pop).
 */
export const hourlyWeatherResponseSchema = z.object({
  lat: z.number(),
  lon: z.number(),
  timezone: z.string(),
  timezone_offset: z.number(),
  data: z.array(
    z.object({
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