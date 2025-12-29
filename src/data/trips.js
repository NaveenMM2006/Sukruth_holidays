// const trips = [
//   {
//     id: 1,
//     source: "Bangalore",
//     destination: "Goa",
//     price: "₹15,000",
//     days: "4 Days / 3 Nights",
//     route: "Bangalore → Hubli → Goa",
//     people: "2–6",
//     image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
//   },
//   {
//     id: 2,
//     source: "Delhi",
//     destination: "Kashmir",
//     price: "₹35,000",
//     days: "6 Days / 5 Nights",
//     route: "Delhi → Srinagar → Gulmarg",
//     people: "2–4",
//     image: "https://images.unsplash.com/photo-1548013146-72479768bada"
//   },
//   {
//     id: 3,
//     source: "Chennai",
//     destination: "Kerala",
//     price: "₹18,000",
//     days: "5 Days / 4 Nights",
//     route: "Chennai → Kochi → Munnar",
//     people: "2–5",
//     image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944"
//   },
//   {
//     id: 3,
//     source: "Athani",
//     destination: "Honavvar",
//     price: "₹18,000",
//     days: "5 Days / 4 Nights",
//     route: "",
//     people: "2–5",
//     image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944"
//   }
// ];

// export default trips;
const trips = [
  {
    id: 1,
    source: "Bangalore",
    destination: "Goa",
    price: "₹15,000",
    days: "4 Days / 3 Nights",
    people: "2–6",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    route: [
      "Bangalore",
      "Hubli",
      "Dharwad",
      "Goa"
    ],
    places: [
      "Jog Falls",
      "Yana Caves",
      "Gokarna Beach"
    ]
  },
  {
    id: 2,
    source: "Delhi",
    destination: "Kashmir",
    price: "₹35,000",
    days: "6 Days / 5 Nights",
    people: "2–4",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    route: [
      "Delhi",
      "Jammu",
      "Srinagar",
      "Gulmarg"
    ],
    places: [
      "Dal Lake",
      "Pahalgam",
      "Gulmarg Gondola"
    ]
  },
  {
    id: 2,
    source: "Athani",
    destination: "Hubli",
    price: "₹5,000",
    days: "6 Days / 5 Nights",
    people: "2–4",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    route: [
      "Delhi",
      "Jammu",
      "Srinagar",
      "Gulmarg"
    ],
    places: [
      "Dal Lake",
      "Pahalgam",
      "Gulmarg Gondola"
    ]
  }
];

export default trips;
