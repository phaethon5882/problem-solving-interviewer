function convertTemperature(celsius: number): number[] {
  return [toKelvin(celsius), toFahrenheit(celsius)];
}

function toKelvin(celsius: number) {
  return celsius + 273.15;
}

function toFahrenheit(celsius: number) {
  return celsius * 1.8 + 32;
}
