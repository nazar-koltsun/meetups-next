import MeetupList from '../components/meetups/MeetupList.js';
import { getAllMeetups } from '../helpers/api.js';
import Head from 'next/head';

const HomePage = ({ meetups }) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of highly active React meetups!" />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  )
};

export async function getStaticProps() {
  const meetups = await getAllMeetups();

  return {
    props: { meetups },
  };
}

export default HomePage;
