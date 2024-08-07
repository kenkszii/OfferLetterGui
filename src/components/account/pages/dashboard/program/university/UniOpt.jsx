import React from "react";

// import redux quuery tools
import { Autocomplete, TextField } from "@mui/material";
import { FaRegWindowClose } from "react-icons/fa";

function UniOpt({
  uniName,
  uniCity,
  uniCountry,
  logo,
  id,
  profileCompleted,
  programNames,
  programs,
  categoriesOfAllPrograms,
}) {

  const [displayForm, setDisplayForm] = React.useState(false);
  // const [createApplication] = usePostCreateApplicationMutation();
  const [selectedProgram, setSelectedProgram] = React.useState("");
  // console.log(profileCompleted);

  function handleApply() {
    if (!profileCompleted) {
      return dispatch(setDisplayModal(true));
    }
    setDisplayForm(true);
    window.scrollTo({ top: 0 });
  }

  function handleClose() {
    setDisplayForm(false);
  }

  function handleSelectProgram(e, v) {
    setSelectedProgram(v);
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const data = Object.fromEntries(formData.entries());
  //   const duration = programs?.reduce((acc, program) => {
  //     if (program.name === selectedProgram) {
  //       return program.duration;
  //     }
  //     return acc;
  //   }, "");

  //   if (!profileCompleted) {
  //     return dispatch(setDisplayModal(true));
  //   }

  //   const application = {
  //     university: id,
  //     program: data.program,
  //     specialization: data.specialization,
  //     degree: data.program.split(" ")[0],
  //     duration: duration,
  //   };

  //   console.log(application);
  //   createApplication(application)
  //     .unwrap()
  //     .then((res) => {
  //       setDisplayForm(false);
  //       console.log("success", res);
  //     })
  //     .then((err) => {
  //       console.log("error", err);
  //     });
  // }
  return (
    <>
      <div className="uni-opt">
        <div className="uni-img">
          <img src={logo} alt="university" className="rounded-full" />
        </div>

        <div className="uni-side">
          <h1>{uniName}</h1>
          <p>
            {uniCity}, {uniCountry}
          </p>
          <div className="apply">
            <button onClick={handleApply}>Apply</button>
            <span>View All Programs</span>
          </div>
        </div>
      </div>

      {displayForm && (
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#00000040] flex flex-col items-center ">
          <form
            action=""
            className="bg-white w-[80%] mt-10 px-8 py-20  rounded flex flex-col
           gap-4 relative"
            onSubmit={handleSubmit}
          >
            <fieldset className="flex flex-col gap-2">
              <label htmlFor="program" className="text-lg font-medium">
                Select Program
              </label>
              <Autocomplete
                disablePortal
                id="program"
                options={programNames}
                onChange={(e, v) => handleSelectProgram(e, v)}
                renderInput={(params) => (
                  <TextField {...params} required name="program" />
                )}
              />
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <label htmlFor="specialization" className="text-lg font-medium">
                Select Specialization
              </label>
              <Autocomplete
                disablePortal
                id="specialization"
                options={categoriesOfAllPrograms}
                renderInput={(params) => (
                  <TextField {...params} required name="specialization" />
                )}
              />
            </fieldset>
            <button
              className="absolute right-8 top-8"
              type="button"
              onClick={handleClose}
            >
              <FaRegWindowClose />
            </button>
            <fieldset className="flex flex-col mt-6 text-white  ">
              <button
                type="submit"
                className="bg-[#2d31fa] rounded py-2 font-medium"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      )}
    </>
  );
}

export default UniOpt;
