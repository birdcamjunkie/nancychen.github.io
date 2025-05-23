import moment from "moment";

export default function (value) {
  const dateObject = moment(value);
  return `${dateObject.format("Do")} of ${dateObject.format("MMMM YYYY")}`;
}
