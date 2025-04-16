import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {

    const enrollUserInCourse = (req, res) => {
        const { userId, courseId } = req.params;
        dao.enrollUserInCourse(userId, courseId);
    }

    const unenrollUserInCourse = async (req, res) => {
        const { userId, courseId } = req.params;
        await dao.unenrollUserInCourse(userId, courseId);
        res.status(200);
    }

    app.post("/api/Enrollments/:userId/:courseId", enrollUserInCourse);
    app.delete("/api/Enrollments/:userId/:courseId", unenrollUserInCourse);
}