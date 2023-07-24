import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.status === 'POST') {
    const uri = "mongodb+srv://Nazar:841nazar1528@cluster0.z6lha8q.mongodb.net/meetups?retryWrites=true&w=majority";
    const client = await MongoClient.connect(uri);
    const db = client.db();
  
    const meetupsConnections = db.collection('meetups');
    const data = req.body;
    
    const result = await meetupsConnections.insertOne(data);

    client.close();

    res.status(201).json({message: 'Meetup inserted'})
  }
};

export default handler;
