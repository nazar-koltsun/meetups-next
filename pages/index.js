import MeetupList from '../components/meetups/MeetupList.js';

const DYMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Frontend meet',
    image: 'https://s.dou.ua/storage-files/how-to-front-end.jpg',
    address: 'Lviv, Struyska 22',
  },
  {
    id: 'm2',
    title: 'Backend meet',
    image: 'https://s3.studytonight.com/curious/uploads/pictures/1631204081-106730.png',
    address: 'Ternopil, Russka 23',
  },
];

const HomePage = () => {
  return <MeetupList meetups={DYMMY_MEETUPS} />;
};

export default HomePage;
