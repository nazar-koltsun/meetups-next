import { MongoClient, ObjectId } from 'mongodb';

const getMongoDbClient = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URI);

  return client;
}

const connectMongoDb = async () => {
  const client = await getMongoDbClient();
  const db = client.db();

  return db;
}

const disconnectMongoDb = async () => {
  const client = await getMongoDbClient();

  client.close();
}

export const getAllMeetups = async () => {
  const db = await connectMongoDb();

  const meetupsConnections = db.collection('meetups');

  const meetupsData = await meetupsConnections.find().toArray();

  const meetups = meetupsData.map(meetup => ({
    title: meetup.title,
    address: meetup.address,
    image: meetup.image,
    id: meetup._id.toString()
  }));

  disconnectMongoDb();

  return meetups;
}

export const getMeetupById = async (meetupId) => {
  const db = await connectMongoDb();

  const meetupsConnections = db.collection('meetups');

  const objectId = new ObjectId(meetupId);
  const meetupData = await meetupsConnections.findOne({_id: objectId});

  const meetup = {
    title: meetupData.title,
    address: meetupData.address,
    image: meetupData.image,
    id: meetupData._id.toString()
  };

  disconnectMongoDb();

  return meetup;
} 
