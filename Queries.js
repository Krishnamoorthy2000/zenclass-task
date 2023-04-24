//* 1)Find all the topics and tasks which are thought in the month of October.
db.Tasks.aggregate([
  //?  match tasks with deadline in October
  {
    $match: {
      deadline: { $gte: ISODate("2020-10-01"), $lte: ISODate("2020-10-31") },
    },
  },
  //? Project only the relevant fields
  {
    $project: { _id: 0, task_id: 1, task_name: 1, deadline: 1 },
  },
  //? Perform a union with the topics collection
  {
    $unionWith: {
      coll: "Topics",
      pipeline: [
        //?  match topics with date in October
        {
          $match: {
            date: { $gte: ISODate("2020-10-01"), $lte: ISODate("2020-10-31") },
          },
        },
        //?  Project only the relevant fields
        {
          $project: { _id: 0, topic_id: 1, topic_name: 1, date: 1 },
        },
      ],
    },
  },
]);

// ----------------------------------------------------

//* 2)Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020.
db.Company_Drives.find({
  date: { $gt: ISODate("2020-10-15"), $lt: ISODate("2020-10-31") },
});

// ----------------------------------------------------

//* 3)Find all the company drives and students who are appeared for the placement.
db.Company_Drives.aggregate([
  //? lookup and join the Company_Drives with Users collections...
  {
    $lookup: {
      from: "Users",
      localField: "students",
      foreignField: "user_name",
      as: "Placed",
    },
  },
  //? unwind the placed students in the Company_Drives...
  {
    $unwind: {
      path: "$Placed",
    },
  },
  //? project the relevant fields...
  {
    $project: {
      _id: 0,
      company_name: 1,
      date: 1,
      "Placed.user_name": 1,
      "Placed.email": 1,
    },
  },
]);

// ----------------------------------------------------

//* 4)Find the number of problems solved by the user in codekata.
db.Users.aggregate([
  //? lookup and join the Users with Codekata_problems collection...
  {
    $lookup: {
      from: "Codekata_Problems",
      localField: "user_id",
      foreignField: "problem_id",
      as: "solved_by_users",
    },
  },
  //? project the relevant fields...
  {
    $project: {
      _id: 0,
      user_id: 1,
      user_name: 1,
      "solved_by_users.problem_name": 1,
      "solved_by_users.solved": 1,
    },
  },
]);

// ----------------------------------------------------

//* 5)Find all the mentors with who has the mentee's count more than 15.
db.Mentors_Collection.find({ mentees_count: { $gt: 15 } });

// ----------------------------------------------------

//* 6)Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020.
db.Users.aggregate([
  //? lookup and join the Users with Tasks collection...
  {
    $lookup: {
      from: "Tasks",
      localField: "user_id",
      foreignField: "task_id",
      as: "task_completion",
    },
  },
  //? project the relevant fields...
  {
    $project: {
      _id: 0,
      user_name: 1,
      "task_completion.task_name": 1,
      "task_completion.status": 1,
      "task_completion.deadline": 1,
    },
  },
  //? match the tasks which are submitted...
  {
    $match: {
      "task_completion.status": {
        $eq: "submitted",
      },
    },
  },
  //? Again, match the tasks which are submitted between the 15-10-2020 to 31-10-2020...
  {
    $match: {
      "task_completion.deadline": {
        $gt: ISODate("2020-10-01"),
        $lt: ISODate("2020-10-31"),
      },
    },
  },
]);
// ----------------------------------------------------
