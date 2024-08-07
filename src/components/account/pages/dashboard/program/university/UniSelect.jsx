import React, { useEffect, useState } from "react";
import "./UniSelect.css";
import { useNavigate } from "react-router-dom";
import UniOpt from "./UniOpt";
import CircularProgress from "@mui/material/CircularProgress";
import { Pagination, TablePagination } from "@mui/material";

import universities from "./universityData.js";

const UniSelect = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [displayModal, setDisplayModal] = useState(false);

  const studentSuccess = true;

  const profileCompletion = null;
  const profileCompleted = profileCompletion === 100;

  const select = "name,city,country,logo,programs,is_mbbs,categories_of_all_programs";


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleNextPage = (event, value) => {
    setPage(value - 1);
  };

  const handleCompleteProfile = (e) => {
    setDisplayModal(false);
    navigate("/create-profile");
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [universities]);


  const uniOpts = [];
  for (const uniKey in universities) {
    if (universities.hasOwnProperty(uniKey)) {
      const uni = universities[uniKey];
      const city = uni.cosmetic.data.attributes.city;
      const country = uni.cosmetic.data.attributes.country;
      const uniname = uni.school_name
      const logo = uni.cosmetic.data.attributes.logo?.url || "https://beta.api.offerletter.co.in/file-system/default.png";
      const programNames = uni.programs.map((program) => program.name);
      const categoriesOfAllPrograms = uni.is_mbbs
        ? ["Medicine and Surgery"]
        : uni.categories_of_all_programs;
      uniOpts.push(
        <UniOpt
          key={uniKey}
          uniName={uniname}
          uniCity={city}
          uniCountry={country}
          logo={logo}
          id={uniKey}
          profileCompleted={profileCompleted}
          programNames={programNames}
          programs={uni.programs}
          categoriesOfAllPrograms={categoriesOfAllPrograms}
        />
      );
    }
  }

  const count = uniOpts.length
  const totalPages = Math.ceil(count / rowsPerPage);

  return (
    <>
      {false && (
        <div className="flex items-center justify-center h-full">
          <CircularProgress className="" />
        </div>
      )}
      {true && (
        <div className="uni-select-wrap">
          <div className="pointer"></div>
          <div className="uni-opts-cover">
            <div className="uni-opts-wrap">
              {displayModal && (
                <div className="pls-complete">
                  <div className="eager">
                    <h2>We know you're eager to start your career</h2>
                    <p>Please complete your profile to start your</p>
                    <p>dream career</p>
                    <button onClick={handleCompleteProfile}>
                      Complete Profile
                    </button>
                  </div>
                </div>
              )}
              {uniOpts.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map(uniOpt => (
                uniOpt
              ))}
              <div className="w-full flex items-center justify-between">
                <TablePagination
                  component="div"
                  count={count}
                  page={page}
                  rowsPerPageOptions={[15, 25, 50]}
                  onPageChange={handleChangePage}
                  rowsPerPage={rowsPerPage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
                <Pagination
                  count={totalPages}
                  page={page + 1}
                  onChange={handleNextPage}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UniSelect;
