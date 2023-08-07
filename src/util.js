import moment from "moment";

export const formatDateFullForTitle = (time) => {
  return `${ moment(time).format('MMMM DD, YYYY') } at ${ moment(time).format('hh:mm A') }`;
};

export const formatDateShort = (time) => {
  return `${ moment(time).format('D/MM/YY') }`;
};

export const isToday = (time) => {
  const today = new Date();

  // 👇️ Today's date
  if (today.toDateString() === new Date(time).toDateString()) {
    return true;
  }

  return false;
};

export const formatTimeHoursAndMinutes = (time) => {
  return `${ moment(time).format('hh:mm A') }`;
};

export function truncate(str, n) {
  return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
};
