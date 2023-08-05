const monthsShort = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec",
};

export const dateFormat = (date: string) => {
  const yearMonDateRegEx =
    /^[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
  if (date.match(yearMonDateRegEx)) {
    const [y, m, d] = date.split("-");
    return `${monthsShort[m as keyof typeof monthsShort]} ${d}, ${y}`;
  } else {
    return date;
  }
};
