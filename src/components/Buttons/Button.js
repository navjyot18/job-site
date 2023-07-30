export function ButtonWithIcon({ icon, buttonName, background }) {
  return (
    <div
      className={
        "flex flex-row gap-x-1 rounded-full p-3 items-center justify-center"
      }
      style={{ background: background }}
    >
      <div>
        <img
          className="object-cover"
          src={icon}
          alt="btn icon"
          width={"20px"}
          height={"20px"}
        />
      </div>
      <div>{buttonName}</div>
    </div>
  );
}

export function ButtonWithoutIcon({ icon }) {
  return (
    <div className="rounded-full border-slate-500">
      <img
        className="object-cover rounded-full border-slate-500"
        src={icon}
        alt="btn icon"
        width={"20px"}
        height={"20px"}
      />
    </div>
  );
}
