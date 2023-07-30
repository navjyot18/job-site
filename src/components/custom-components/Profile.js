import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import SettingsApplicationsSharpIcon from "@mui/icons-material/SettingsApplicationsSharp";
import CircleNotificationsSharpIcon from "@mui/icons-material/CircleNotificationsSharp";
import { isMobile } from "react-device-detect";
import useWindowSize from "../../hooks/useWindowSize";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";

function Profile() {
  const isMobile = useWindowSize();
  return (
    <div className="profile-section bg-black pl-40 pt-7 pr-7 pb-7 border-b border-zinc-500 flex flex-row items-center justify-between">
      {!isMobile && (
        <div className="flex flex-row gap-x-6">
          <div className="text-white text-sm">Find job</div>
          <div className="text-white text-sm">Messages</div>
          <div className="text-white text-sm">Hiring</div>
          <div className="text-white text-sm">Community</div>
          <div className="text-white text-sm">FAQ</div>
        </div>
      )}
      {!isMobile ? (
        <div className="flex flex-row gap-x-12 items-center">
          <div className="text-white text-sm flex flex-row">
            <div>
              <LocationOnSharpIcon style={{ color: "white" }} />
            </div>
            <div>New York, Ny</div>
          </div>
          <div className="flex flex-row gap-x-2">
            <img
              className="rounded-full"
              src="https://marketplace.canva.com/EAFWqgieqss/1/0/1600w/canva-blue-and-peach-gradient-facebook-profile-picture-oBy0jAd4JFY.jpg"
              width={40}
              height={40}
            />
            <div className="circular-border">
              {" "}
              <SettingsApplicationsSharpIcon style={{ color: "white" }} />
            </div>

            <div className="circular-border">
              {" "}
              <CircleNotificationsSharpIcon style={{ color: "white" }} />
            </div>
          </div>
        </div>
      ) : (
        <div className="h-1/4 bg-black w-full flex flex-row items-center justify-between">
          <MenuSharpIcon style={{ color: "white" }} />
          <img
            className="rounded-full"
            src="https://marketplace.canva.com/EAFWqgieqss/1/0/1600w/canva-blue-and-peach-gradient-facebook-profile-picture-oBy0jAd4JFY.jpg"
            width={40}
            height={40}
          />
        </div>
      )}
    </div>
  );
}
export default Profile;
