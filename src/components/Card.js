import React from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

import { toast } from "react-toastify";

const Card = (props)=>{
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandeler(){
        // logic
        if(likedCourses.includes(course.id)){
            // pehle se liked hua hai
            setLikedCourses((prev)=> prev.filter((cid)=>cid !== course.id));
            toast.warning("liked removed");
        }else{
            // phale se like nahi hai yeh course
            // insert karna hai yeh course liked course me
            if(likedCourses.length ===0){
                setLikedCourses([course.id]);
            }else{
                // non empty phale se
                setLikedCourses((prev) => [...prev, course.id])
            }
            toast.success("liked Successfully")
        }
    }

    return(
        <div className="bg-slate-900 text-white relative">
            <div className="relative pt-[calc(720/1280*100%)]">
                <img src={course.image.url} alt="img" className="absolute top-0 left-0 w-full" ></img>
                <div className="absolute right-3 bottom-[-14px]
                    w-8
                    h-8
                    bg-pink-300
                    rounded-full
                    flex justify-center items-center
                    ">
                        <button onClick={clickHandeler}> 
                        {
                        likedCourses.includes(course.id)?(<FcLike />): (<FcLikePlaceholder />)
                        }
                        
                    </button>
                    </div>
            </div>
           
            <div className="p-3">
                <p className="text-2xl pb-2 text-gray-50">{course.title}</p>
                <p className="text-sm">
                    {course.description.length > 150 ?
                    (course.description.substr(0, 150)) + "..."
                    :(course.description)}
                </p>
            </div>
        </div>
    )
}

export default Card;