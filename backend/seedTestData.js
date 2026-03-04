const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Course = require('./models/Course');
const Event = require('./models/Event');
const Schedule = require('./models/Schedule');
const OnlineClass = require('./models/OnlineClass');
const Certificate = require('./models/Certificate');
const Payment = require('./models/Payment');
require('dotenv').config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected for Seeding...');

    // 1. Clear existing data (optional, but good for clean test)
    // await User.deleteMany({ role: { $ne: 'admin' } });
    // await Course.deleteMany({});
    // await Event.deleteMany({});
    // await Schedule.deleteMany({});
    // await OnlineClass.deleteMany({});
    // await Certificate.deleteMany({});
    // await Payment.deleteMany({});

    // Find admin
    const admin = await User.findOne({ role: 'admin' });
    if (!admin) {
      console.log('No admin found. Please run seedAdmin.js first.');
      process.exit(1);
    }

    // 2. Seed Users (Students & Instructors)
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash('password123', salt);

    const usersData = [
      { username: 'John Doe', email: 'john@example.com', password, role: 'student' },
      { username: 'Jane Smith', email: 'jane@example.com', password, role: 'student' },
      { username: 'Mike Brown', email: 'mike@example.com', password, role: 'student' },
      { username: 'Sarah Lee', email: 'sarah@example.com', password, role: 'student' },
      { username: 'Chris Evans', email: 'chris@example.com', password, role: 'student' },
      { username: 'Dr. Alice', email: 'alice@example.com', password, role: 'instructor' },
      { username: 'Prof. Bob', email: 'bob@example.com', password, role: 'instructor' },
    ];

    const users = [];
    for (let u of usersData) {
      let existing = await User.findOne({ email: u.email });
      if (!existing) {
        existing = new User(u);
        await existing.save();
        console.log(`User created: ${u.username}`);
      }
      users.push(existing);
    }

    const instructor1 = users.find(u => u.role === 'instructor');
    const student1 = users.find(u => u.role === 'student');

    // 3. Seed Courses
    const coursesData = [
      {
        title: 'Full Stack Web Development',
        description: 'Learn MERN stack from scratch.',
        price: 99.99,
        category: 'Web Development',
        level: 'Beginner',
        duration: '3 Months',
        instructor: instructor1._id,
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
      },
      {
        title: 'Advanced UI/UX Design',
        description: 'Master Figma and Adobe XD.',
        price: 149.99,
        category: 'Design',
        level: 'Advanced',
        duration: '2 Months',
        instructor: instructor1._id,
        image: 'https://images.unsplash.com/photo-1541462608141-ad43b573666c'
      },
      {
        title: 'Mobile App Development with Flutter',
        description: 'Build cross-platform apps.',
        price: 89.99,
        category: 'Mobile Development',
        level: 'Intermediate',
        duration: '2.5 Months',
        instructor: instructor1._id,
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c'
      },
      {
        title: 'Data Science Bootcamp',
        description: 'Learn Python, R, and SQL.',
        price: 199.99,
        category: 'Data Science',
        level: 'Beginner',
        duration: '4 Months',
        instructor: instructor1._id,
        image: 'https://images.unsplash.com/photo-1551288049-bbbda536639a'
      }
    ];

    const courses = [];
    for (let c of coursesData) {
      let existing = await Course.findOne({ title: c.title });
      if (!existing) {
        existing = new Course(c);
        await existing.save();
        console.log(`Course created: ${c.title}`);
      }
      courses.push(existing);
    }

    // 4. Seed Online Classes
    const classesData = [
      {
        title: 'React Hooks & Context API',
        instructor: 'Dr. Alice',
        date: '2026-03-10',
        time: '10:00 AM',
        duration: '2 hrs',
        status: 'Upcoming',
        meetingLink: 'https://zoom.us/j/123456789',
        createdBy: admin._id
      },
      {
        title: 'Node.js Performance Optimization',
        instructor: 'Prof. Bob',
        date: '2026-03-05',
        time: '02:00 PM',
        duration: '1.5 hrs',
        status: 'Live',
        students: 45,
        meetingLink: 'https://meet.google.com/abc-xyz',
        createdBy: admin._id
      },
      {
        title: 'Introduction to GraphQL',
        instructor: 'Dr. Alice',
        date: '2026-03-12',
        time: '11:00 AM',
        duration: '1 hr',
        status: 'Upcoming',
        students: 30,
        meetingLink: 'https://zoom.us/j/987654321',
        createdBy: admin._id
      }
    ];

    for (let cl of classesData) {
      let existing = await OnlineClass.findOne({ title: cl.title });
      if (!existing) {
        await new OnlineClass(cl).save();
        console.log(`Online Class created: ${cl.title}`);
      }
    }

    // 5. Seed Schedules
    const schedulesData = [
      { title: 'Morning Yoga', instructor: 'Sana', room: 'Hall A', day: 'Monday', time: '07:00 AM', endTime: '08:00 AM', createdBy: admin._id },
      { title: 'Web Dev Workshop', instructor: 'Alice', room: 'Lab 1', day: 'Wednesday', time: '11:00 AM', endTime: '01:00 PM', createdBy: admin._id },
    ];

    for (let s of schedulesData) {
      let existing = await Schedule.findOne({ title: s.title });
      if (!existing) {
        await new Schedule(s).save();
        console.log(`Schedule created: ${s.title}`);
      }
    }

    // 6. Seed Events
    const eventsData = [
      {
        eventName: 'Annual Tech Summit 2026',
        startDate: new Date('2026-06-15'),
        endDate: new Date('2026-06-17'),
        location: 'Convention Center',
        description: 'Biggest tech gathering of the year.',
        createdBy: admin._id
      }
    ];

    for (let e of eventsData) {
      let existing = await Event.findOne({ eventName: e.eventName });
      if (!existing) {
        await new Event(e).save();
        console.log(`Event created: ${e.eventName}`);
      }
    }

    // 7. Seed Payments
    const paymentsData = [
      {
        user: student1._id,
        courses: [{ course: courses[0]._id, title: courses[0].title, price: courses[0].price }],
        subtotal: 99.99,
        total: 99.99,
        status: 'completed',
        paymentMethod: 'credit_card'
      },
      {
        user: users.find(u => u.email === 'mike@example.com')?._id,
        courses: [{ course: courses[1]._id, title: courses[1].title, price: courses[1].price }],
        subtotal: 149.99,
        total: 149.99,
        status: 'completed',
        paymentMethod: 'paypal'
      },
      {
        user: users.find(u => u.email === 'sarah@example.com')?._id,
        courses: [{ course: courses[2]._id, title: courses[2].title, price: courses[2].price }],
        subtotal: 89.99,
        total: 89.99,
        status: 'completed',
        paymentMethod: 'credit_card'
      }
    ];

    for (let p of paymentsData) {
      // Simple check to avoid dups
      let existing = await Payment.findOne({ user: p.user });
      if (!existing) {
        await new Payment(p).save();
        console.log(`Payment created for ${student1.username}`);
      }
    }

    // 8. Seed Certificates
    const certsData = [
      { user: student1._id, course: courses[0]._id, title: 'Full Stack Web Development - Completion' }
    ];

    for (let cert of certsData) {
      let existing = await Certificate.findOne({ user: cert.user, course: cert.course });
      if (!existing) {
        await new Certificate(cert).save();
        console.log(`Certificate created for ${student1.username}`);
      }
    }

    console.log('Seeding completed successfully!');
    process.exit();
  } catch (err) {
    console.error('Seeding error:', err.message);
    process.exit(1);
  }
};

seedData();
