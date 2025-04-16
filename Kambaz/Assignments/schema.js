import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema({
    _id: String,
    title: String,
    course: { type: String, ref: "CourseModel" }, 
    release_date: String,
    due_date: String,
    points: String
}, { collection: "assignments" }
);

export default assignmentSchema;