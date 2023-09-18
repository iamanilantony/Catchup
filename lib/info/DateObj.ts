const daysOfWeek = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ];
const dateObj = [-8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    .map((e) => {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() - e);
      return {
        day: daysOfWeek[currentDate.getDay()],
        date: currentDate.getDate().toString()
      };
    })
    .reverse();

    export default dateObj;