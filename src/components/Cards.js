import React, { useState } from "react";
import Card from "./Card";

const Cards = (props)=>{
    let courses = props.courses;
    //console.log(courses, "courses");  

    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses(){
        let allCourses = [];
        console.log(allCourses, "before")
        Object.values(courses).forEach((array) => {
            array.forEach((coursesData)=>{
                allCourses.push(coursesData);
            })
        })
        console.log(allCourses, "after")
        return allCourses;
    }

    return(
    <div className="container mx-auto">
    <div className="grid px-4 md:px-0  md:grid-cols-3 gap-4 pb-5">
      {
        getCourses().map((course)=>{
            return <Card key={course.id} 
            course={course}
            likedCourses= {likedCourses}
            setLikedCourses = {setLikedCourses}
            />
        })
      }
      </div>
    </div>
    )
}

export default Cards;