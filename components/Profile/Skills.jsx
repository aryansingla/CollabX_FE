// import React ,{useState}from 'react'
// import Select from "react-select";
// import CreatableSelect from 'react-select/creatable';
// const Skills = () => {
//    const languages = [
//     {language:'Javascript',id:1},
//     {language:'Javas',id:2},
//     {language:'Python',id:3},
//     {language:'C++',id:4},
//    ]
//    const [languageOptions] = useState(languages);
//   return (
//     <>
//         <div className="skillDetails w-[90%] sm:w-[60%] h-[40vh] m-auto mt-2 pt-2 sm:pt-2 bg-gradient-to-r from-[#36094e] to-[#280e55] rounded-lg ">
//           <div className="justify-between upperPart ">
//             <div>
//               <label className='text-[#fff] p-5'>Languages *</label>
//             </div>
//             <div className='p-4 text-red-500'>
//             <CreatableSelect isClearable options={languages} />
//             </div>
//           </div>
          
//         </div>
//     </>
//   )
// }

// export default Skills


import React, { useState } from 'react';

const options = [
  { value: 'Java', label: 'Java' },
  { value: 'ReactJs', label: 'ReactJs' },
  { value: 'Tailwind', label: 'Tailwind' }
];

const Skills = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [customOption, setCustomOption] = useState('');

  const handleSelectOption = (event) => {
    const selectedValue = event.target.value;
    const selectedLabel = options.find(option => option.value === selectedValue)?.label || customOption;
    setSelectedOptions([...selectedOptions, { value: selectedValue, label: selectedLabel }]);
    setCustomOption(''); // reset the value of the customOption state
    event.target.value = ''; // reset the value of the select element
  };

  const handleRemoveOption = (optionToRemove) => {
    setSelectedOptions(selectedOptions.filter(option => option.value !== optionToRemove.value));
  };

  const handleCustomOptionChange = (event) => {
    setCustomOption(event.target.value);
  };

  return (
    <div>
          <>
         <div className="skillDetails w-[90%] sm:w-[60%] h-[40vh] m-auto mt-5 pt-2 sm:pt-2 bg-gradient-to-r from-[#36094e] to-[#280e55] rounded-lg ">
           <div className="justify-between upperPart ">
            <div className='flex sm:flex-row flex-col w-[100%] p-2'>
             <div className='sm:w-[50%] w-[80%] -ml-4 sm:ml-0 p-4 text-red-500'>
             <select onChange={handleSelectOption} className='w-[70%] p-1 rounded text-black font-semibold hover:cursor-pointer '>
        <option value="">Skills</option>
        {customOption && (
          <option key="custom" value="custom">{customOption}</option>
        )}
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      
      </select>
             </div>
           <div className='sm:w-[50%] w-[90%] flex items-center justify-center sm:mb-0 mb-4  mr-4 '>  <input type="text" className='w-full p-1 rounded placeholder:text-center placeholder:text-sm placeholder:text-gray-500 placeholder:font-semibold' value={customOption} onChange={handleCustomOptionChange} placeholder='Search and see in dropdown if not in options' /></div>
           </div>
             <div >
             {selectedOptions.map(option => (
        <span key={option.value} className="p-1 px-2 ml-2 mr-2 text-white border-2 border-white rounded-2xl tag ">
          {option.label}
          <button type="button" className='ml-2 text-red-300' onClick={() => handleRemoveOption(option)}>x</button>
        </span>
      ))}
             </div>
           </div>
          
         </div>
   </>
    
     
      
    </div>
  );
};

export default Skills;
