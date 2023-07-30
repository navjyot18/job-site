import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import BusinessCenterSharpIcon from "@mui/icons-material/BusinessCenterSharp";
import PriceChangeSharpIcon from "@mui/icons-material/PriceChangeSharp";
import useWindowSize from "../../hooks/useWindowSize";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
function Filters() {
  const isMobile = useWindowSize();
  const [showFilters, setShowFilters] = useState(isMobile ? false : true);
  const [value, setValue] = React.useState(30);
  return (
    <>
      {isMobile && (
        <div className="mobile-filter section flex flex-row p-4 items-center justify-between bg-black">
          <div className="text-white	">Filters</div>
          <ArrowDropDownSharpIcon
            style={{ color: "white" }}
            onClick={() => setShowFilters(!showFilters)}
          />
        </div>
      )}
      {showFilters && (
        <div className="filter-section h-1/5 border-t-1 border-zinc-400 bg-black grid grid-cols-5">
          <div className="each-filter pl-4 py-1 pr-1 flex flex-row flex-1 items-center justify-between">
            <div className="flex flex-row items-center gap-x-2">
              <div className="circular-border">
                {" "}
                <SearchIcon style={{ color: "white" }} />
              </div>

              <div className="text-white text-sm">Designer</div>
            </div>
            <ArrowDropDownSharpIcon style={{ color: "white" }} />
          </div>
          <div className="each-filter pl-4 py-1 pr-1 flex flex-row flex-1 items-center justify-between">
            <div className="flex flex-row items-center gap-x-2">
              <div className="circular-border">
                {" "}
                <LocationOnSharpIcon style={{ color: "white" }} />
              </div>

              <div className="text-white text-sm">Work location</div>
            </div>

            <ArrowDropDownSharpIcon style={{ color: "white" }} />
          </div>
          <div className="each-filter pl-4 py-1 pr-1 flex flex-row flex-1 items-center justify-between">
            <div className="flex flex-row items-center gap-x-2">
              <div className="circular-border">
                {" "}
                <BusinessCenterSharpIcon style={{ color: "white" }} />
              </div>

              <div className="text-white text-sm">Experience</div>
            </div>
            <ArrowDropDownSharpIcon style={{ color: "white" }} />
          </div>
          <div className="each-filter pl-4 py-1 pr-1 flex flex-row flex-1 items-center justify-between">
            <div className="flex flex-row items-center gap-x-2">
              <div className="circular-border">
                {" "}
                <PriceChangeSharpIcon style={{ color: "white" }} />
              </div>

              <div className="text-white text-sm">Per month</div>
            </div>

            <ArrowDropDownSharpIcon style={{ color: "white" }} />
          </div>
          <div className="pl-4 py-1 pr-1 flex flex-col flex-1 items-center justify-between">
            <div className="flex flex-row justify-between w-full">
              <div className="text-white text-sm">Salary Range</div>
              <div className="text-white text-sm">$1200 - $20000</div>
            </div>
            <Slider aria-label="Volume" value={value} onChange={() => {}} />
          </div>
        </div>
      )}
    </>
  );
}

export default Filters;
