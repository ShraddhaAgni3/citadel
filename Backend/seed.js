import mongoose from 'mongoose';
import { faker } from '@faker-js/faker';
import User from './models/user.js';

const MONGO_URI = 'mongodb+srv://shraddhaagni529:1234@citadel.eb3cs6s.mongodb.net/';
const colleges = ['IIT Delhi', 'IIT Bombay', 'IIT Madras', 'NIT Trichy', 'IIIT Hyderabad'];

async function seedDB() {
  try {
    await mongoose.connect(MONGO_URI);  // <-- no options needed here
    console.log("Connected to MongoDB ✅");
    await User.deleteMany();
    const users = [];

    for (let i = 0; i < 100; i++) {
      users.push({
        name: faker.person.fullName(),
        tags: [faker.person.jobTitle(), faker.hacker.verb(), faker.hacker.noun()],
        college: faker.helpers.arrayElement(colleges),
        degree: "B.Tech",
        year: faker.number.int({ min: 1, max: 4 }),
        photo: faker.image.avatar(),
        relation: "Friend"
      });
    }

    await User.insertMany(users);
    console.log("Seeded 100 users 🌱");
    process.exit();
  } catch (err) {
    console.error("Seeding failed ❌", err);
    process.exit(1);
  }
}

seedDB();
