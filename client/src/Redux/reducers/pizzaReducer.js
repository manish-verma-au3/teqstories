import { actionTypes } from "../actions/actions";

//const uuidv1 = require("uuid/v1");

let allData = [
  {
    "name": "Margherita",
    "url": "https://b.zmtcdn.com/data/reviews_photos/196/e4da6674e03caecd575d598747309196_1511096638.jpg?output-format=webp",
    "price": 5,
    "ingredients": [
      "tomato",
      "mozzarella"
    ]
  },
  {
    "name": "Bufala",
    "url": "https://b.zmtcdn.com/data/pictures/chains/8/309208/86ebfe0a2e922a3e53d6593b19ac142b_featured_v2.jpg?output-format=webp",
    "price": 6,
    "ingredients": [
      "tomato",
      "mozarella di bufala"
    ]
  },
  {
    "name": "Romana",
    "url": "https://b.zmtcdn.com/data/pictures/chains/4/18671714/b629740e1a75859a3795116feb1d1a85_featured_v2.jpg?output-format=webp",
    "price": 5,
    "ingredients": [
      "tomato",
      "mozzarella"
    ]
  },
  {
    "name": "Diavola",
    "url": "https://b.zmtcdn.com/data/pictures/chains/4/301124/45f1f094b216ddeb778b4f688ba36b2e_featured_v2.jpg?output-format=webp",
    "price": 7.5,
    "ingredients": [
      "tomato",
      "mozzarella",
      "spicy salami"
    ]
  },
  {
    "name": "Pizza Bianca",
    "url": "https://b.zmtcdn.com/data/reviews_photos/e8d/77ac4c269e31259bec0d606626d9ae8d_1599146832.jpg?output-format=webp",
    "price": 5,
    "ingredients": [
      "mozzarella",
      "oregano",
      "anchovies"
    ]
  }
];

const pizzaReducer = (state = allData, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PIZZA:
      let allPizzaArray = JSON.parse(JSON.stringify(state));
      console.log(allPizzaArray);
      return allPizzaArray;

    default:
      return state;
  }
};

export default pizzaReducer;