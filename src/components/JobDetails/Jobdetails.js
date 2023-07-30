import { ButtonWithoutIcon, ButtonWithIcon } from "../Buttons/Button";
import { DescriptionCard } from "../Description-card/DescriptionCard";
function JobDetails(props) {
  const socialMediaLink = [
    "https://icons-for-free.com/iconfiles/png/512/g+google+google+2015+new+google+icon-1320190551260288871.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFw1zTwOYJ1dTUJdHW4Ie1c4eFcUPj9OIGZw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGuPVO8GO4Mk1C3H6lQuHst2io8pp3Y7RSyg&usqp=CAU",
  ];

  const descArray = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  ];

  const requirementArray = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  ];

  return (
    <div className="jobdetails-container">
      <div className="flex flex-col">
        <div className="top-container">
          <img
            className="header-bg"
            src="https://images.unsplash.com/photo-1579445505461-acecf2596190?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2xhc3MlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
          />
          <div className="social-media flex flex-row items-center gap-x-3">
            <div className="text-white">Contact: </div>
            <div className="flex flex-row gap-x-1">
              {socialMediaLink.map((icon) => (
                <div className="social-media-icons">
                  <img
                    width={"100%"}
                    height={"100%"}
                    className="rounded-full"
                    src={icon}
                    alt="icon"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="org-icon">
            <img
              className="job-details-hero-image rounded-md"
              src={props.selectedJob.company.logo_url}
              width={160}
              height={160}
            />
          </div>
        </div>
        <div className="job-header-container flex flex-row justify-between">
          <div className="job-headers flex flex-col gap-y-2">
            <div className="job-title">{props.selectedJob.title}</div>
            <div className="job-office-name">
              {props.selectedJob.company.name}
            </div>
            <div className="job-office-address">
              {props.selectedJob.company.city}
            </div>
          </div>
          <div className="job-actions flex flex-col gap-y-2 items-end">
            <div className="text-red-500 font-semibold">🚩 Report this job</div>
            <div className="flex flex-row gap-x-2">
              <div className="text-zinc-400 text-sm">Posted 8 days ago</div>
              <div className="text-blue-400 text-sm"> ● 25 Applicant</div>
            </div>
            <div className="job-actionable flex flex-row gap-x-2">
              <ButtonWithoutIcon
                icon={
                  "https://creazilla-store.fra1.digitaloceanspaces.com/icons/7916057/three-dots-icon-md.png"
                }
              />
              <ButtonWithIcon
                icon={"https://cdn-icons-png.flaticon.com/512/1077/1077035.png"}
                buttonName="Save"
                background="grey"
              />
              <ButtonWithIcon
                icon={
                  "https://www.shutterstock.com/image-vector/ladies-bag-symbol-icon-vector-600w-1440520124.jpg"
                }
                buttonName="Apply"
                background="skyblue"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-container flex flex-row gap-2">
        <div className="job-overview-container border-solid border border-slate-300 p-5 rounded flex flex-col gap-y-3 w-4/6">
          <div className="job-overview flex flex-col gap-y-1">
            <div className="font-bold text-base">Job Overview:</div>
            <div className="text-slate-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </div>
          </div>
          <div className="job-desc flex flex-col gap-y-1">
            <div className="font-bold text-base">Job Description:</div>
            <div className="ml-3.5 text-slate-400">
              {" "}
              <ul>
                {descArray.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="job-requirement flex flex-col gap-y-1">
            <div className="font-bold text-base">Job Requirement:</div>
            <div className="ml-3.5 text-slate-400">
              <ul>
                {requirementArray.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="job-requirements-container border-solid border border-slate-300 p-7 rounded w-2/6 grid grid-rows-3 grid-flow-col gap-2 h-1/5">
          <DescriptionCard title={"Work Level"} value={"Senior"} />
          <DescriptionCard title={"Job Type"} value={"Full - Time"} />
          <DescriptionCard title={"Fields"} value={"Design"} />
          <DescriptionCard title={"Salary"} value={"$8000/mo"} />
          <DescriptionCard title={"Work Model"} value={"Onsite"} />
          <DescriptionCard title={"Experience"} value={"2 year"} />
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
