import React from "react";
import { NavLink } from "react-router-dom";
import getStatusColor from "../../utilities/getStatusColors";


const BugSmallCard = ({ bug }) => {
  //console.log(dateCreated)
  const { _id, bug_id, name, dateCreated, status, description } = bug;
  const statusColor = getStatusColor(status)

  return (
    <>
      <NavLink to={`/bugs/${_id}`}>
        <div
          
          className="p-4  border shadow-md rounded-md grid grid-cols-1 gap-2"
        >
          <div className="flex justify-between items-center text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <p className="font-bold text-slate-500">BG-{bug_id}</p>
              <p
                className={`px-2 py-0.5 rounded-full text-slate-600 font-semibold text-xs`}
                style={{backgroundColor: statusColor}}
              >
                {status}
              </p>
            </div>
            <p className="">{dateCreated && dateCreated.toLocaleString()}</p>
          </div>
          <p className="text-sm font-semibold text-gray-700">{name}</p>
          <p className="text-xs text-slate-600 truncate">{description}</p>
        </div>
      </NavLink>
    </>
  );
};

export default BugSmallCard;
