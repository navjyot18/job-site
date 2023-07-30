import { Link } from "react-router-dom";

function JobDetailsCard({ job, jobSelectHandler }) {
  let randomColor =
    "hsl(" +
    360 * Math.random() +
    "," +
    (25 + 70 * Math.random()) +
    "%," +
    (85 + 10 * Math.random()) +
    "%)";

  function formatDate(dateString) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month}, ${year}`;
  }
  return (
    <div className="job-details-card border border-zinc-300 rounded-md">
      <div
        style={{ backgroundColor: randomColor }}
        className="job-details-card-header p-4 flex flex-col gap-y-3 rounded-md"
      >
        <div className="job-posted-timing flex flex-row items-center justify-between">
          <div className="bg-white p-2 rounded-full">
            {formatDate(job.created_date)}
          </div>
          <div>
            <img
              width={30}
              height={30}
              className="rounded-full"
              src="https://w7.pngwing.com/pngs/860/512/png-transparent-instagram-social-media-save-instagram-instagram-save-social-media-logo-icon-thumbnail.png"
            />
          </div>
        </div>
        <div className="job-designation flex flex-row justify-between items-center">
          <div className="flex flex-col g-y-1">
            <div className="text-xs">{job.company.name}</div>
            <div className="text-lg font-semibold role">{job.title}</div>
          </div>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
            }}
          >
            <img
              className="rounded-full"
              src={job.company.logo_url}
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
        <div className="skills flex flex-wrap gap-2">
          {job.tags.map((skill) => (
            <div className="border border-zinc-400 rounded-full p-2">
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="job-details-card-footer flex flex-row items-center justify-between">
        <div className="salary-location-details">
          <div className="salary-details font-semibold">
            ${job.hourly_rate}/hr
          </div>
          <div className="location-details">{job.location}</div>
        </div>
        <Link
          onClick={() => jobSelectHandler(job)}
          to={{ pathname: "/job-details", state: { name: "job" } }}
        >
          <div className="details-btn rounded-full bg-black px-3 py-2 text-white font-semibold">
            Details
          </div>
        </Link>
      </div>
    </div>
  );
}
export default JobDetailsCard;
