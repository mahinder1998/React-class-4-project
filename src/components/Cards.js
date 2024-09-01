import React from "react";
import Card from "./Card";

const Cards = (props)=>{
    let courses = props.courses;
    //console.log(courses, "courses");

    function getCourses(){
        let allCourses = [];
        Object.values(courses).forEach((array) => {
            array.forEach((coursesData)=>{
                allCourses.push(coursesData);
            })
        })
        return allCourses;
    }

    return(
    <div className="container mx-auto">
    <div className="grid px-4 md:px-0  md:grid-cols-3 gap-4 pb-5">
      {
        getCourses().map((course)=>{
            return <Card key={course.id} course={course}/>
        })
      }
      </div>
    </div>
    )
}

export default Cards;