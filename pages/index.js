import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList.js';

const HomePage = ({ meetups }) => {
  return <MeetupList meetups={meetups} />;
};

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();

  const meetupsConnections = db.collection('meetups');

  const meetupsData = await meetupsConnections.find().toArray();
  
  const meetups = meetupsData.map(meetup => ({
    title: meetup.title,
    address: meetup.address,
    image: meetup.image,
    id: meetup._id.toString()
  }));

  client.close();

  return {
    props: { meetups },
  };
}

export default HomePage;
