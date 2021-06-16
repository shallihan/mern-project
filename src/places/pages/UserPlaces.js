import PlaceList from "../components/PlaceList";
const PLACES = [
  {
    id: "54846",
    title: "SQIRL CAFE",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sequi illo nobis cum odio eaque!",
    imageURL:
      "https://lh3.googleusercontent.com/proxy/Mn6clpS2VSnJdOEYGNLBMJYnL2Hmws5NJeSwJY6V25gdi02QcU9cGukBc6vYUrWJ2yhXmvd5zKDQ7yqTvwBlYMGdTUSAcTMiPttfmb77aJygRydeLIa_",
    address: "720 N Virgil Ave, Los Angeles, CA 90029, United States",
    location: {
        lat: 11.1788135,
        lng: -140.5395463,
    },
    creator: "user1",
  },
  {
    id: "59854",
    title: "Circus Bakery",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, fuga?",
    imageURL:
      "https://willtravelforsnacks.files.wordpress.com/2020/01/circus_bakery_entrance.jpg?w=800",
    address: "63 Rue Galande, 75005 Paris, France",
    location: {
        lat: 48.8517544,
        lng: 2.3467823,
    },
    creator: "user2",
  },
];
const UserPlaces = () => {
  return <PlaceList items={PLACES}/>;
};

export default UserPlaces;
