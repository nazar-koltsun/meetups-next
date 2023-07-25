import { useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList.js';

export const DYMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Frontend meet',
    image: 'https://s.dou.ua/storage-files/how-to-front-end.jpg',
    address: 'Lviv, Struyska 22',
    description: "The meetup description"
  },
  {
    id: 'm2',
    title: 'Backend meet',
    image: 'https://s3.studytonight.com/curious/uploads/pictures/1631204081-106730.png',
    address: 'Ternopil, Russka 23',
    description: "The meetup description"
  },
];

const HomePage = ({meetups}) => {
  return <MeetupList meetups={meetups} />;
};

export async function getStaticProps() {
  const meetups = DYMMY_MEETUPS;
  
  return { 
    props: { meetups },
  };
}

export default HomePage;

