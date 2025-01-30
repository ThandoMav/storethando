import Product from '../../models/Product';
import User from '../../models/User';
import Freebie from '../../models/Freebie';
import Service from '../../models/Service';
import Post from '../../models/Post';
import data from '../../utils/data';
import db from '../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await Freebie.deleteMany();
  await Freebie.insertMany(data.freebies);
  await Service.deleteMany();
  await Service.insertMany(data.services);
  await Post.deleteMany();
  await Post.insertMany(data.posts);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
};
export default handler;
