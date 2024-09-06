const generateUniqueId = () => Date.now();

const waterBodies = [
  {
    id: generateUniqueId(),
    name: "Pacific Ocean",
    location: "Between Asia/Australia and the Americas",
    size: "63,800,000 square miles",
    freshOrSalty: "Salty",
  },
  {
    id: generateUniqueId(),
    name: "Atlantic Ocean",
    location: "Between the Americas and Europe/Africa",
    size: "41,100,000 square miles",
    freshOrSalty: "Salty",
  },
  {
    id: generateUniqueId(),
    name: "Indian Ocean",
    location: "Between Africa, Asia, Australia, and the Indian subcontinent",
    size: "27,240,000 square miles",
    freshOrSalty: "Salty",
  },
  {
    id: generateUniqueId(),
    name: "Southern Ocean",
    location: "Encircles Antarctica",
    size: "7,848,000 square miles",
    freshOrSalty: "Salty",
  },
  {
    id: generateUniqueId(),
    name: "Arctic Ocean",
    location:
      "Around the Arctic region, north of Europe, Asia, and North America",
    size: "5,427,000 square miles",
    freshOrSalty: "Salty",
  },
  {
    id: generateUniqueId(),
    name: "Lake Baikal",
    location: "Siberia, Russia",
    size: "5,662 square miles",
    freshOrSalty: "Fresh",
  },
  {
    id: generateUniqueId(),
    name: "Lake Superior",
    location: "North America (USA/Canada border)",
    size: "31,700 square miles",
    freshOrSalty: "Fresh",
  },
  {
    id: generateUniqueId(),
    name: "Lake Victoria",
    location: "East Africa (Tanzania, Uganda, Kenya)",
    size: "26,600 square miles",
    freshOrSalty: "Fresh",
  },
  {
    id: generateUniqueId(),
    name: "Caspian Sea",
    location: "Between Europe and Asia",
    size: "143,000 square miles",
    freshOrSalty: "Salty",
  },
  {
    id: generateUniqueId(),
    name: "Lake Huron",
    location: "North America (USA/Canada border)",
    size: "23,000 square miles",
    freshOrSalty: "Fresh",
  },
];

export default waterBodies;
