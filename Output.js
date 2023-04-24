//* 1)Find all the topics and tasks which are thought in the month of October.
//? OUTPUT:
[
  {
    task_id: 1,
    task_name: "Responsive_Web_Designs",
    deadline: ISODate("2020-10-01T00:00:00.000Z"),
  },
  {
    task_id: 2,
    task_name: "Price-Cards",
    deadline: ISODate("2020-10-12T00:00:00.000Z"),
  },
  {
    task_id: 3,
    task_name: "IMDB",
    deadline: ISODate("2020-10-16T00:00:00.000Z"),
  },
  {
    task_id: 4,
    task_name: "Web_Scrapper",
    deadline: ISODate("2020-10-23T00:00:00.000Z"),
  },
  {
    task_id: 5,
    task_name: "Hall_Booking",
    deadline: ISODate("2020-10-30T00:00:00.000Z"),
  },
  {
    topic_id: 1,
    topic_name: "JAVASCRIPT",
    date: ISODate("2020-10-28T00:00:00.000Z"),
  },
  {
    topic_id: 2,
    topic_name: "REACT-JS",
    date: ISODate("2020-10-21T00:00:00.000Z"),
  },
  {
    topic_id: 3,
    topic_name: "MYSQL",
    date: ISODate("2020-10-16T00:00:00.000Z"),
  },
];

// ----------------------------------------------------

//* 2)Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020.
//? OUTPUT:
[
  {
    _id: ObjectId("641fda9d9a08da4caa5b22d4"),
    drive_id: 3,
    company_name: "MIND_TREE",
    date: ISODate("2020-10-16T00:00:00.000Z"),
    students: "null",
  },
  {
    _id: ObjectId("641fda9d9a08da4caa5b22d5"),
    drive_id: 4,
    company_name: "ZOHO",
    date: ISODate("2020-10-23T00:00:00.000Z"),
    students: "null",
  },
  {
    _id: ObjectId("641fda9d9a08da4caa5b22d6"),
    drive_id: 5,
    company_name: "ACCENTURE",
    date: ISODate("2020-10-29T00:00:00.000Z"),
    students: ["Sabari", "Boss"],
  },
];

// ----------------------------------------------------

//* 3)Find all the company drives and students who are appeared for the placement.
//? OUTPUT:
[
  {
    company_name: "TCS",
    date: ISODate("2020-10-01T00:00:00.000Z"),
    Placed: { user_name: "Arun", email: "Arun@gmail.com" },
  },
  {
    company_name: "TCS",
    date: ISODate("2020-10-01T00:00:00.000Z"),
    Placed: { user_name: "Praveen", email: "Praveen@gmail.com" },
  },
  {
    company_name: "CTS",
    date: ISODate("2020-10-13T00:00:00.000Z"),
    Placed: { user_name: "Kumar", email: "Kumar@gmail.com" },
  },
  {
    company_name: "ACCENTURE",
    date: ISODate("2020-10-29T00:00:00.000Z"),
    Placed: { user_name: "Sabari", email: "sabari@gmail.com" },
  },
  {
    company_name: "ACCENTURE",
    date: ISODate("2020-10-29T00:00:00.000Z"),
    Placed: { user_name: "Boss", email: "Boss@gmail.com" },
  },
];
// ----------------------------------------------------

//* 4)Find the number of problems solved by the user in codekata.
//? OUTPUT :
[
  {
    user_id: 1,
    user_name: "Arun",
    solved_by_users: [{ problem_name: "Fibonacci", solved: "10" }],
  },
  {
    user_id: 2,
    user_name: "Praveen",
    solved_by_users: [{ problem_name: "Bubble Sort", solved: "5" }],
  },
  {
    user_id: 3,
    user_name: "Kumar",
    solved_by_users: [{ problem_name: "Strings", solved: "15" }],
  },
  {
    user_id: 4,
    user_name: "Sabari",
    solved_by_users: [{ problem_name: "Arrays", solved: "3" }],
  },
  {
    user_id: 5,
    user_name: "Boss",
    solved_by_users: [{ problem_name: "Functions", solved: "22" }],
  },
];

// ----------------------------------------------------

//* 5)Find all the mentors with who has the mentee's count more than 15.
//? OUTPUT:
[
  {
    _id: ObjectId("641f155d8dfcbfd0abbabb26"),
    name: "Mohan",
    mentees_count: 20,
  },
  {
    _id: ObjectId("641f155d8dfcbfd0abbabb28"),
    name: "Pooja",
    mentees_count: 24,
  },
  {
    _id: ObjectId("641f155d8dfcbfd0abbabb29"),
    name: "Rupan",
    mentees_count: 30,
  },
];

// ----------------------------------------------------

//* 6)Find the number of users who are absent and task is not submitted
//* between 15 oct-2020 and 31-oct-2020.
//? OUTPUT:
[
  {
    user_name: "Kumar",
    task_completion: [
      {
        task_name: "IMDB",
        deadline: ISODate("2020-10-16T00:00:00.000Z"),
        status: "submitted",
      },
    ],
  },
  {
    user_name: "Boss",
    task_completion: [
      {
        task_name: "Hall_Booking",
        deadline: ISODate("2020-10-30T00:00:00.000Z"),
        status: "submitted",
      },
    ],
  },
];
// ----------------------------------------------------
