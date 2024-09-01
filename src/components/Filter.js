import React from "react";

const Filter = (props)=>{
    let filterData = props.filterData;

    return(
        <div className="container mx-auto">
            <div className="py-5 flex flex-wrap gap-2 justify-center items-center space-x-4
            px-4 md:px-0
            ">
                {
                    filterData.map((data)=>{
                    return <button key={data.id}
                    className="text-white bg-slate-800 py-2 px-3 rounded-md"
                        
                    >{data.title}</button>
                    })
                }
            </div>
        </div>
    )
}

export default Filter;