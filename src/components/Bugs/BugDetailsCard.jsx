import React, { useContext, useEffect, useState } from "react";
import BugHeader from "./BugHeader";
import BugStatusCard from "./BugStatusCard";
import BugAuthor from "./BugAuthor";
import BugAssigneeCard from "./BugAssigneeCard";
import BugPropertiesCard from "./BugPropertiesCard";
import BugConversations from "./BugConversations";
import { getBug, updateBug } from "../../helpers/bugHelper";
import HeaderContext from "../../context/HeaderContext";
import { useMutation, useQuery } from "@tanstack/react-query";

const BugDetailsCard = ({ id }) => {
  const {
    data: bug,
    isLoading,
    error,
    refetch: refetchBugDetails,
  } = useQuery({ queryKey: ["bug", id], queryFn: () => getBug(id) });
  const mutatation = useMutation({
    mutationFn: () => updateBug(bugDetails),
    onSuccess: refetchBugDetails,
  });

  //console.log(bug)
  const [bugDetails, setBugDetails] = useState(bug);

  const onsubmit = async (e) => {
    console.log(bugDetails)
    const response = await updateBug(bugDetails);
  };

  if (isLoading) return <p>Loading..</p>;

  if (error) return <p>Error.. {error}</p>;

  return (
    <div className="grid grid-cols-[auto_300px]">
      <div className="page-flex p-4 w-[1160px]">
        {/* static data of bug details */}
        <BugHeader bug={bug} />

        <BugConversations id={id} />
      </div>
      <div className="h-full flex flex-col justify-between p-4 border-l border-slate-300 ">
        <div className="h-full page-flex z-0">
          <BugStatusCard
            status={bug.status}
            priority={bug.priority}
            dateToSolve={bug.dateResolved}
          />
          <BugAuthor author={bug.author} />
          <BugAssigneeCard />     
          <BugPropertiesCard bug={bug} setBug={setBugDetails} />
        </div>
        <button
          onClick={(e) => onsubmit(e)}
          className="bg-slate-800 text-white p-2 rounded-md sticky bottom-4"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default BugDetailsCard;
