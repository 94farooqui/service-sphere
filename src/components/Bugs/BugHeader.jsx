import React from "react";
import getStatusColor from "../../utilities/getStatusColors";

const BugHeader = ({ bug }) => {
  const statusColor = getStatusColor(bug.status);
  //console.log(bug)
  return (
    <>
      <div className="card grid grid-cols-1 gap-4 ">
        <h4 className="text-xl font-semibold  text-slate-800">{bug.name}</h4>

        <div className="flex flex-col gap-2 text-sm">
          <p>
            Created by {bug.author.firstname} on{" "}
            {bug.dateCreated.toLocaleString()}
          </p>

          <div className="grid grid-cols-2">
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
        </div>
      </div>
      <div className="">
        <h2 className="section-head">Description</h2>
        <p className="card">{bug.description}</p>
      </div>
    </>
  );
};

export default BugHeader;
