import RecommendedJobs from "../RecommendedJobs/RecommendedJobs";
import Filters from "../custom-components/Filters";
import Profile from "../custom-components/Profile";
function AllJobs({ data, jobSelectHandler }) {
  return (
    <>
      <Profile />
      <Filters />
      <RecommendedJobs data={data} jobSelectHandler={jobSelectHandler} />
    </>
  );
}

export default AllJobs;
