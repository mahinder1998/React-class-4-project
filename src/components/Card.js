import React from "react";
import { FcLike } from "react-icons/fc";

const Card = (props)=>{
    let course = props.course;
    return(
        <div className="bg-slate-900 text-white relative">
            <div className="relative">
                <img src={course.image.url} alt="img"></img>
                <div className="absolute right-3 bottom-[-14px]
                    w-8
                    h-8
                    bg-pink-300
                    rounded-full
                    flex justify-center items-center
                    ">
                        <button><FcLike /></button>
                    </div>
            </div>
           
            <div className="p-3">
                <p className="text-2xl pb-2 text-gray-50">{course.title}</p>
                <p className="text-sm">{course.description}</p>
            </div>
        </div>
    )
}

export default Card;