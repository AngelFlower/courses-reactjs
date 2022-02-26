import React from "react";
import CourseCard from "../CourseCard";
import './style.css';

function CoursesList(props) {
    return (
        <div className="d-flex flex-wrap" style={{ backgroundColor: 'rgb(245,245,245)' }}>
            {props.courseDetails.map((course => {
                return (
                    <CourseCard
                        image={course.image}
                        courseName={course.courseName}
                        professor={course.professor}
                        courseColor={course.courseColor}
                        professorColor={course.professorColor}
                        buttonText={course.buttonText}
                        backgroundColor={course.backgroundColor}
                        buttonColor={course.buttonColor}
                        buttonLink={course.buttonLink}
                        shadow={course.shadow}
                        stars={course.stars}
                    />
                )
            }))}
        </div>
    )
}

export default CoursesList;