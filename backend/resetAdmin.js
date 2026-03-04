const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

const resetAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');

    const adminEmail = 'admin@onlineclass.com';
    const adminPassword = 'adminpassword123';

    let admin = await User.findOne({ email: adminEmail });

    if (!admin) {
      console.log('Admin not found, creating new admin...');
      admin = new User({
        username: 'System Admin',
        email: adminEmail,
        password: adminPassword,
        role: 'admin'
      });
    } else {
      console.log('Admin found, updating password...');
      admin.password = adminPassword;
      admin.role = 'admin'; // Ensure role is admin
    }

    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(adminPassword, salt);

    await admin.save();
    console.log('Admin user updated/created successfully');
    console.log('Email: ', adminEmail);
    console.log('Password: ', adminPassword);

    process.exit();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

resetAdmin();
