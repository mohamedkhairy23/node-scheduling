// setInterval(() => {
//   console.log("running a task every second");
// }, 1000);

const schedule = require("node-schedule");

// const jobEvery26Mins = schedule.scheduleJob("26 * * * * *", () => {
//   console.log("Running a task every 26 mins");
// });

// const jobEvery5Hours = schedule.scheduleJob("0 0-27 * * *", () => {
//   console.log("Running a task every 5 hours");
// });

// const jobEvery3Hours = schedule.scheduleJob("0 0-23 * * *", () => {
//   console.log("Running a task every 3 hours");
// });

// const jobEvery10Days = schedule.scheduleJob("0 0 0 1-31/10 *", () => {
//   console.log("Running a task every 10 days");
// });

// const jobEvery30Days = schedule.scheduleJob("0 0 0 1-31/30 *", () => {
//   console.log("Running a task every 30 days");
// });

// const jobEvery6Months = schedule.scheduleJob("0 0 0 1 1-12/6", () => {
//   console.log("Running a task every 6 months");
// });

// const jop = schedule.scheduleJob("* * * * * *", function (fireDate) {
//   console.log(
//     "This job was supposed to run at " +
//       fireDate +
//       ", but actually run at " +
//       new Date()
//   );
// });

//// const date = new Date(year, month, day, hour, mins, seconds);
// const date = new Date(2024, 7, 5, 3, 42, 0);
// const jobAtSpecificDate = schedule.scheduleJob(date, () => {
//   console.log("Running a task at specific date");
// });

//// specific recurrency rule scheduling
//// run every 42 minutes after the hour
// const rule = new schedule.RecurrenceRule();
// rule.minute = 42;
// const jobRunningEvery42Minutes = schedule.scheduleJob(rule, () => {
//   console.log("Running every 42 minutes after the hour");
// });

//// Job at 01:30AM every day of the week
// const jobAt01:30AMEveryDay = schedule.scheduleJob({ hour: 1, minute: 30, dayOfWeek: 0 }, () => {
//   console.log("Dinner time");
// });

//// set start time and end time
//// run after 5 seconds and stop after 10 seconds
// const startTime = new Date(Date.now() + 5000);
// const endTime = new Date(startTime.getTime() + 5000);
// const job = schedule.scheduleJob(
//   { start: startTime, end: endTime, rule: "*/1 * * * * *" },
//   () => {
//     console.log("Time for dinner");
//   }
// );

const jobEverySecond = schedule.scheduleJob("* * * * * * *", () => {
  console.log("Running a task every second");
});

setInterval(() => {
  schedule.gracefulShutdown();
  console.log("Graceful shutdown");
}, 10000); // 10 seconds
