import MeetupList from '../components/meetups/MeetupList.js';
import { getAllMeetups } from '../helpers/api.js';

const HomePage = ({ meetups }) => {
  return <MeetupList meetups={meetups} />;
};

export async function getStaticProps() {
  const meetups = await getAllMeetups();

  return {
    props: { meetups },
  };
}

export default HomePage;
