import React from "react";
import getStatusColor from "../../utilities/getStatusColors";

const BugHeader = ({ bug }) => {
  const statusColor = getStatusColor(bug.status);
  //console.log(bug)
  return (
    <div className="flex flex-col gap-4">

      <div className="card grid grid-cols-2 gap-2 ">
        <h4 className="text-xl font-semibold  text-slate-800 col-span-2">
          {bug.name}
        </h4>

        <p className="col-span-2">
          Created by {bug.author.firstname} on{" "}
          {bug.dateCreated.toLocaleString()}
        </p>

        <p>
          Type :{" "}
          <span className="bg-green-200 py-1 font-semibold rounded-full px-2">
            Backend
          </span>
        </p>
        <p className="">
          Project:{" "}
          <span className="py-1 font-semibold rounded-full px-2">
            {bug.project.name}
          </span>
        </p>
      </div>

      <div className="flex flex-col">
        <p className="section-head">Description</p>
        <p className="card">{bug.description}</p>
      </div>
    </div>
  );
};

export default BugHeader;
