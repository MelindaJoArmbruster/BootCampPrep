let classRoom = [
  {
    Marnie: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: true },
      { Thursday: true },
      { Friday: true },
    ],
  },
  {
    Lena: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: false },
      { Friday: true },
    ],
  },
  {
    Shoshanna: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
      { Friday: false },
    ],
  },
  {
    Jessa: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: false },
      { Thursday: false },
      { Friday: true },
    ],
  },
];

function attendanceCheck(day) {
  let inAttendance = []; //declare an empty array to receive student names

  for (let i = 0; i < classRoom.length; i++) {
    // cycle thru classRoom array
    let currentStudent = classRoom[i]; // set the individual elements in classRoom array to currentstudent Object
    let studentName = Object.keys(currentStudent)[0]; // set the only key for that student to the student's name
    let arrayOfDays = currentStudent[studentName]; // set the value of the student's name to be an array of objects (days)

    for (let j = 0; j < arrayOfDays.length; j++) {
      // cycle thru the elements (objects) of the inner array
      let dayOfWk = Object.keys(arrayOfDays[j])[0]; // set the only key for each object to the day of the week
      let attended = arrayOfDays[j][dayOfWk]; // set the value (boolean) of that day of the week to variable (attended)
      if (dayOfWk === day && attended === true) {
        //if the day of the week is equal the day we were passed and the value is true,
        inAttendance.push(studentName); // push that student's name into the array of those in attendance
      }
    }
  }
  return inAttendance;
}
