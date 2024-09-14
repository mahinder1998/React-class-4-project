import React from "react";

const Filter = (props)=>{
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(title){
        console.log(title)
        setCategory(title)
    }

    return(
        <div className="container mx-auto">
            <div className="py-5 flex flex-wrap gap-2 justify-center items-center space-x-4
            px-4 md:px-0
            ">
                {
                    filterData.map((data)=>{
                    return <button key={data.id}
                    className={`text-white bg-slate-800 py-2 px-3 rounded-md
                        ${category === data.title ? "border-2 border-white " :""} 
                    `}
                    onClick={()=> filterHandler(data.title)}    
                    >{data.title}</button>
                    })
                }
            </div>
        </div>
    )
}

export default Filter;