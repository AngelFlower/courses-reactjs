import React from "react"
import TitlePage from "../../components/TitlePage"
import CoursesList from "../../components/CoursesList"

class CoursesPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            courses: [
                {
                    image: 'assets/img/flutterCourse1.jpeg',
                    courseName: "Flutter for Beginners",
                    courseColor: 'rgb(5, 5, 5)',
                    professor: "Academind",
                    professorColor: "rgb(15, 15, 15)",
                    backgroundColor: "rgb(255, 255, 255)",
                    buttonText: "Watch on youtube",
                    buttonLink: "https://www.youtube.com/watch?v=GLSG_Wh_YWc",
                    buttonColor: "btn-primary",
                    shadow: "shadow",
                    stars: 4
                },
                {
                    image: 'assets/img/flutterCourse2.png',
                    width: "30rem",
                    courseName: "Flutter in 37 hours",
                    courseColor: 'rgb(245, 245, 245)',
                    professor: "freeCodeCamp.org",
                    professorColor: "rgb(225, 225, 225)",
                    backgroundColor: "rgb(35, 35, 35)",
                    buttonText: "Visit website",
                    buttonLink: "https://www.youtube.com/watch?v=VPvVD8t02U8",
                    buttonColor: "btn-secondary",
                    shadow: "",
                    stars: 3
                },
                {
                    image: 'assets/img/dartCourse1.png',
                    courseName: "Dart the full course",
                    courseColor: 'rgb(35, 25, 105)',
                    professor: "freeCodeCamp.org",
                    professorColor: "rgb(75, 135, 25)",
                    backgroundColor: "rgb(235, 235, 235)",
                    buttonText: "More info",
                    buttonLink: "https://fireship.io/courses/dart/",
                    buttonColor: "btn-success",
                    shadow: "shadow-lg",
                    stars: 5
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <TitlePage title="Fake Udemy" />
                <div className="container">
                    <CoursesList courseDetails={this.state.courses} />
                </div>
            </div>
        )
    }
}

export default CoursesPage