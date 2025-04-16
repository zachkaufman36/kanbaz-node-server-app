import model from "./model.js";

export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
}
 
export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
}

export async function deleteAllEnrollmentsForCourse(course) {
  return model.deleteMany({ course });
}

export function enrollUserInCourse(user, course) {
  const newEnrollment = { user, course, _id: `${user}-${course}` };
  return model.create(newEnrollment);
}

export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
}
 

// In your Node.js server application, implement routes to support the Enrollments screen. 
// Users should be able to enroll and unenroll from courses. In the React application, 
// implement an enrollments client that uses axios to integrate with the routes in the server. 
// Enrollments should persist as long as the server is running.