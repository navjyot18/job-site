import JobDetails from "./components/JobDetails/Jobdetails";
import AllJobs from "./components/Alljobs/AllJobs";
import "./App.css";
import { connect } from "react-redux";
import { fetchData, fetchCurrentJobData } from "./store/actions";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App({ data, loading, error, fetchData }) {
  const [currPage, setCurrPage] = useState(1);
  const [selectedJob, setSelectedJob] = useState();
  function jobSelectHandler(job) {
    setSelectedJob(job);
  }
  useEffect(() => {
    fetchData(currPage);
  }, [fetchData, currPage]);

  function paginationHandler(action) {
    if (action === "next") {
      if (currPage < 10) {
      }
      setCurrPage(currPage + 1);
    } else if (action === "back") {
      if (currPage > 0) {
        setCurrPage(currPage - 1);
      }
    }
  }
  if (loading) {
    return (
      <div className="flex flex-row items-center justify-center text-2xl w-full	h-full">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-row items-center justify-center text-2xl w-full	h-full">
        Could not fetch the jobs! Please try after some time....
      </div>
    );
  }
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <AllJobs data={data} jobSelectHandler={jobSelectHandler} />
              <div className="flex flex-row bg-white items-center justify-center gap-x-3 mt-6 mb-6">
                <button
                  style={{
                    cursor: "pointer",
                    display: currPage === 10 ? "none" : "unset",
                  }}
                  className="bg-sky-500	rounded-full p-3 text-white"
                  onClick={() => paginationHandler("next")}
                >
                  Next Page
                </button>
                <button
                  style={{
                    cursor: "pointer",
                    display: currPage === 1 ? "none" : "unset",
                  }}
                  className="bg-sky-500	rounded-full p-3 text-white"
                  onClick={() => paginationHandler("back")}
                >
                  Prev Page
                </button>
              </div>
            </>
          }
        />

        <Route
          path="/job-details"
          element={<JobDetails selectedJob={selectedJob} />}
        />
      </Routes>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = {
  fetchData,
  fetchCurrentJobData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
