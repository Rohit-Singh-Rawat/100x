const mongoose = require('mongoose');

// Connect to MongoDB


// Add Your MongoDB URI here

// --EXAMPLE--
// mongoose.connect('mongodb+srv://whaleInSpace:arHX145t3KLJaNtmCnQrf@e0x.bxbfregwj.mongodb.net/CourseSelling');   its fake
//------------
mongoose.connect('YOURURL/CourseSelling');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
});

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
        title: String,
        description: String,
        price: Number, 
        imageLink: String,
    });

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}