import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
const Experience = () => {
  const [expCount, setExpCount] = useState(1);
  const [experienceFields, setExperienceFields] = useState([
    {
      title: "",
      company: "",
      stDate: "",
      edDate: "",
      expDescription: "",
      expCount: expCount,
    },
  ]);
  const handleTitle = (event, index) => {
    let data = [...experienceFields];
    data[index].title = event.target.value;
    setFormFields(data);
    console.log(data);
  };
  const handleCompany = (event, index) => {
    let data = [...experienceFields];
    data[index].company = event.target.value;
    setFormFields(data);
    console.log(data);
  };
  const handlestDate = (event, index) => {
    let data = [...experienceFields];
    data[index].stDate = event.target.value;
    setFormFields(data);
    console.log(data);
  };
  const handleedDate = (event, index) => {
    let data = [...experienceFields];
    data[index].edDate = event.target.value;
    setFormFields(data);
    console.log(data);
  };
  const handleexpDescription = (event, index) => {
    let data = [...experienceFields];
    data[index].expDescription = event.target.value;
    setFormFields(data);
    console.log(data);
  };
  const addExperience = () => {
    let object = {
      title: "",
      company: "",
      stDate: "",
      edDate: "",
      expDescription: "",
      expCount: expCount + 1,
    };
    setExperienceFields([...experienceFields, object]);
  };
  return (
    <form>
      {experienceFields.map((form, index) => {
        return (
          <>
            <div
              className="projectDetails w-[60%] h-[50vh] m-auto mt-5 bg-gradient-to-r from-[#36094e] to-[#280e55] rounded-lg text-[#fff]"
              key={index}
            >
              <div className="projectUpper flex justify-between p-3">
                <div className="title font-bold">Experience Details</div>
                <AiFillPlusCircle
                  className="text-secondary text-2xl mt-1 mr-3 cursor-pointer"
                  onClick={addExperience}
                />
              </div>
              <div className="projectMiddle text-center">
                <h3 className="text-[#fff]">
                  Experience {experienceFields[index].expCount}
                </h3>
                <hr className="text-[#fff] h-3 w-[70%] m-auto mt-1" />
              </div>
              <div className="projectBottom">
                <form>
                  <div className="form1 flex justify-around">
                    <div className="pl-2">
                      <label>Title of Experience</label>
                      <input
                        className=" h-8 w-[25vw]  bg-[#fff] text-black rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        placeholder="Position"
                        onChange={(event) => handleTitle(event, index)}
                        value={form.title}
                      />
                    </div>
                    <div className="pl-10">
                      <label>Company Name</label>
                      <input
                        className=" h-8 w-[25vw] rounded-md border border-gray-300 bg-[#fff] text-black bg-transparent py-2 px-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        placeholder="Company"
                        onChange={(event) => handleTech(event, index)}
                        value={form.tech}
                      />
                    </div>
                  </div>
                  <div className="form2 flex justify-around mt-2">
                    <div className="pl-2">
                      <label>Start Date</label>
                      <input
                        className=" h-8 w-[25vw]  bg-[#fff] text-black rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="date"
                        placeholder="Eg: Aug 2020 - Dec 2020"
                        onChange={(event) => handleDate(event, index)}
                        value={form.duration}
                      />
                    </div>
                    <div className="pl-10">
                      <label>End Date</label>
                      <input
                        className=" h-8 w-[25vw] rounded-md border border-gray-300 bg-[#fff] text-black bg-transparent py-2 px-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="date"
                        placeholder="Live Link"
                        onChange={(event) => handleLink(event, index)}
                        value={form.link}
                      />
                    </div>
                  </div>
                  <div className="form3 m-auto pl-2 pr-2 mt-4">
                    <label>Description</label>
                    <textarea
                      className="textarea textarea-lg w-[100%] m-auto rounded-lg text-black"
                      placeholder="Write description about your project"
                      onChange={(event) => handleDescription(event, index)}
                      value={form.description}
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </>
        );
      })}
    </form>
  );
};

export default Experience;
