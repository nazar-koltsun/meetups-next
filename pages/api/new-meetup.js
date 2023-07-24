const handler = (req, res) => {
  if (req.status === 'POST') {
    const data = req.body;

    const { title, image, address, description } = data;
  }
};

export default handler;
