import React from 'react'
import {AiFillCaretRight} from 'react-icons/ai'
const Bio = ({section,setSection}) => {
  return (
    <>
        <div className="bioDetails  w-[90%] sm:w-[60%] h-[30vh] m-auto mt-5 bg-gradient-to-r from-[#36094e] to-[#280e55] rounded-lg text-[#fff]">
            <textarea className="textarea textarea-lg w-full h-[30vh] m-auto mt-5 bg-gradient-to-r from-[#36094e] to-[#280e55] rounded-lg text-[#fff]" placeholder="Add Bio">
            </textarea>
            <h3 className='text-[#fff] absolute sm:hidden left-[70%] xs:left-[80%] top-[80%]'
             onClick={()=>{setSection("Skills")}}>
              Next
              <AiFillCaretRight className='inline-block ml-2'/>
              </h3>
        </div>
    </>
  )
}

export default Bio