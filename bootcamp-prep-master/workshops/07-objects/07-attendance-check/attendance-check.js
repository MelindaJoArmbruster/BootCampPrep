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
  let inAttendance = [];

  for (let i = 0; i < classRoom.length; i++) {
    let currentStudent = classRoom[i];
    let studentArrayOfKey = Object.keys(currentStudent);
    let studentName = studentArrayOfKey[0];
    let arrayOfDays = currentStudent[studentName];
    for (let j = 0; j < arrayOfDays.length; j++) {
      let dayOfWk = Object.keys(arrayOfDays[j])[0];
      let attended = arrayOfDays[j][dayOfWk];
      if (dayOfWk === day && attended === true) {
        inAttendance.push(studentName);
      }
    }
  }
  return inAttendance;
}
//cycle thru classRoom array
//for each object in the array, get the only key(name)
//the value of that key is an array
//cycle thru the array of objects to get the object with the
//key = day we are looking for
//evaluate the boolean for that day
//if true, add to resultant array
