import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
  
    const meetupsConnections = db.collection('meetups');
    const data = req.body;
    
    await meetupsConnections.insertOne(data);

    res.status(201).json({message: 'Meetup inserted'})
    client.close();
  }
};

export default handler;
