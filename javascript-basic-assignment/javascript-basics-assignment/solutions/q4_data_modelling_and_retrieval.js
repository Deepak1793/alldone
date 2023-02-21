// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

const fruits = [
    { name: "Banana", color: "Yellow", pricePerKG: 50 },
    { name: "Sitafhal", color: "Green", pricePerKG: 50 },
    { name: "Apple", color: "Red", pricePerKG: 100 },
  ];
  const frutifil = (arr, filter) => {
    const details = arr.filter((fdata) => fdata.name === filter);
  //   console.log(details);
    const result =
      "The Name of Fruit is " +
      details[0].name +
      " & color  is " +
      details[0].color +
      "\nand Price is " +
      details[0].pricePerKG +
      ".";
      return result;
  };
  let userInput = frutifil(fruits, "Apple");
  console.log(userInput);