//this is an array of object
const inputArray = [
  {
    skill: ["HTML", "CSS", "JS"],
    locCity: ["new york"],
    jobType: "Full-time",
    function: "IT-software",
  },
  {
    skill: ["Reactjs", "Nodejs", "git"],
    locCity: ["london"],
    jobType: "Full-time",
    function: "IT-software",
  },
  {
    skill: ["HTML", "CSS", "JS"],
    locCity: ["new york"],
    jobType: "Remote",
    function: "IT-software",
  },
  {
    skill: ["figma", "adobe XD"],
    locCity: ["seoul"],
    jobType: "Full-time",
    function: "Adminstration",
  },
];

//this is an array of items to be filtered from the inputArray
const input = ["Reactjs", "seoul"];

//this is the filtered array of object after the filter
const outputArray = [
  {
    skill: ["HTML", "CSS", "JS"],
    locCity: ["new york"],
    jobType: "Full-time",
    function: "IT-software",
  },
  {
    skill: ["HTML", "CSS", "JS"],
    locCity: ["new york"],
    jobType: "Remote",
    function: "IT-software",
  },
  {
    skill: ["figma", "adobe XD"],
    locCity: ["seoul"],
    jobType: "Full-time",
    function: "Adminstration",
  },
];


function hasSomeProps(obj, input) {
  return Object.values(obj).some((prop) =>
    input.some((search) => {
      if (Array.isArray(prop)) {
        return prop.includes(search);
      }

      return search === prop;
    })
  );
}

// const filterArray = inputArray.filter((obj) => hasSomeProps(obj, input));

// console.log(filterArray);

const arr = [[0,3], [3,6],[6,12],[12,15]]

const inpu = [3, 6]

const filtered = arr.filter(item => {
  return item.every((ele, index) => ele !== inpu[index])
})

console.log(filtered)