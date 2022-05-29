import images from './images';
export const destinations = [
  {
    id: 0,
    name: 'Skil Villa',
    img: images.skiVilla,
  },
  {
    id: 1,
    name: 'Climbing Hills',
    img: images.climbingHills,
  },
  {
    id: 2,
    name: 'Frozen Hills',
    img: images.frozenHills,
  },
  {
    id: 3,
    name: 'Beach',
    img: images.beach,
  },
];
const ratings = [
  {
    id: 1,
    label: '1 Star',
  },
  {
    id: 2,
    label: '2 Star',
  },
  {
    id: 3,
    label: '3 Star',
  },
  {
    id: 4,
    label: '4 Star',
  },
  {
    id: 4,
    label: '5 Star',
  },
];
const dummyData = {
  destinations,
  ratings,
};

export default dummyData;
