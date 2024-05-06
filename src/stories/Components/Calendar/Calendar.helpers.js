export const generateYears = (year = 1900) => {
  const years = [];
  if (year <= new Date().getFullYear()) {
    years.push(year);
    return years.concat(generateYears(year + 1));
  } else {
    return years;
  }
};

export const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
