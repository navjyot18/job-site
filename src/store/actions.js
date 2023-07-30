// actions.js
import axios from "axios";

export const fetchDataRequest = () => ({
  type: "FETCH_DATA_REQUEST",
});

export const fetchDataSuccess = (data) => ({
  type: "FETCH_DATA_SUCCESS",
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: "FETCH_DATA_FAILURE",
  payload: error,
});
export const fetchCurrentJob = (job) => ({
  type: "FETCH_CURRENT_JOB",
  payload: job,
});

export const fetchData = (page) => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get(
        `https://nextlevel-fe-assignment.vercel.app/jobs?page=${
          !page ? 1 : page
        }`
      )
      .then((response) => {
        dispatch(fetchDataSuccess(response.data.jobs));
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};

export const fetchCurrentJobData = (job) => {
  return (dispatch) => {
    dispatch(fetchCurrentJob(job));
  };
};
