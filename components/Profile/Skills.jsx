import React ,{useState}from 'react'
import { Tag } from 'daisyui';
const Skills = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (event) => {
    const { value } = event.target;
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(value)
        ? prevSelectedOptions.filter((option) => option !== value)
        : [...prevSelectedOptions, value]
    );
  };
  return (
    <>
        <div className="skillDetails w-[90%] sm:w-[60%] h-[40vh] m-auto mt-2 pt-2 sm:pt-2 bg-gradient-to-r from-[#36094e] to-[#280e55] rounded-lg text-[#fff] ">
          <div className="upperPart flex justify-between">
          <label className='text-[#fff] p-5'>Languages *</label>
          <div className="dropdown h-[1%]">
            <label tabIndex={0} className="btn m-1">Select Language</label>
              <ul tabIndex={0} className="dropdown-content menu  shadow bg-base-100 rounded-box w-52">
                  <li><a>Javascript</a></li>
                  <li><a>Java</a></li>
              </ul>
          </div>
          </div>
          
        </div>
    </>
  )
}

export default Skills