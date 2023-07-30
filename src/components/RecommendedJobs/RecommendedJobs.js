import JobDetailsCard from "../Description-card/JobDeatailsCard";

function RecommendedJobs({ data, jobSelectHandler }) {
  return (
    <div className="recommended-jobs-wrapper">
      <div className="recommended-jobs">
        <div className="recommended-jobs-header flex flex-row items-center justify-between">
          <div className="recommended-jobs-header-title flex flex-row gap-x-3">
            <div className="text-2xl font-bold recommend-jobs-title">
              Recommended Jobs
            </div>
            <div className="border border-gray-400 text-sm font-bold px-3 py-1 rounded-full flex flex-row items-center justify-center">
              38
            </div>
          </div>
          <div className="recommended-jobs-header-filters flex flex-row gap-x-3 items-center">
            <div className="text-sm">Sort by</div>
            <div className="text-sm font-semibold">Last updated</div>
            <div>
              <img
                src="https://as1.ftcdn.net/v2/jpg/05/31/57/06/1000_F_531570649_JQhBQR3ySPy4sKpp4ApcUleLIpmgQSQV.jpg"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
        <div className="recommended-jobs-main"></div>
      </div>
      <div className="all-recommended-jobs grid grid-cols-3 gap-4">
        {data.map((job) => (
          <JobDetailsCard job={job} jobSelectHandler={jobSelectHandler} />
        ))}
      </div>
    </div>
  );
}
export default RecommendedJobs;
