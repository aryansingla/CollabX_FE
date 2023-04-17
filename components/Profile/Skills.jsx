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
//           <div className="upperPart justify-between ">
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
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
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
      <h2>Dropdown</h2>
      <select onChange={handleSelectOption}>
        <option value="">Select an option</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
        {customOption && (
          <option key="custom" value="custom">{customOption}</option>
        )}
      </select>
      {selectedOptions.map(option => (
        <span key={option.value} className="tag">
          {option.label}
          <button type="button" onClick={() => handleRemoveOption(option)}>x</button>
        </span>
      ))}
      <input type="text" value={customOption} onChange={handleCustomOptionChange} />
    </div>
  );
};

export default Skills;
