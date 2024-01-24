import React from "react";
import { NavLink } from "react-router-dom";
import {statusColors} from './../../../data'

const BugSmallCard = ({ bug }) => {
  //console.log(dateCreated)
  const { _id, bug_id, name, dateCreated, status, description } = bug;
  const statusColorString = statusColors.find(color => color.status === status)
  const statusColorNumber = parseInt(statusColorString.color, 16)
  const statusColorHex = '#'+statusColorNumber.toString(16)
  return (
    <>
      <NavLink to={`/bugs/${_id}`}>
        <div
          key={_id}
          className="p-4 bg-gray-100 border shadow-md rounded-md grid grid-cols-1 gap-2"
        >
          <div className="flex justify-between items-center text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <p className="font-bold text-slate-500">{bug_id}</p>
              <p
                className={`px-2 py-0.5 rounded-full text-slate-600 font-semibold text-xs`}
                style={{backgroundColor: statusColorHex}}
              >
                {status}
              </p>
            </div>
            <p className="">{dateCreated.toLocaleString()}</p>
          </div>
          <p className="text-sm font-semibold text-gray-700">{name}</p>
          <p className="text-xs text-slate-600 truncate">{description}</p>
        </div>
      </NavLink>
    </>
  );
};

export default BugSmallCard;
