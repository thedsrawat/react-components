export const dateFromTimestamp = (date) =>
  date.toDate().toLocaleDateString("en-IN").replaceAll("/", "-");

export const timeFromTimestamp = (time) =>
  time.toDate().toLocaleTimeString("en-IN");
