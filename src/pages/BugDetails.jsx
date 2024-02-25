import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bugs } from "./../../data";
import HeaderContext from "../context/HeaderContext";
import { getBug, updateBug } from "../helpers/bugHelper";
import { useMutation, useQuery } from "@tanstack/react-query";
import BugHeader from "../components/Bugs/BugHeader";
import BugConversations from "../components/Bugs/BugConversations";
import BugStatusCard from "../components/Bugs/BugStatusCard";
import BugAuthor from "../components/Bugs/BugAuthor";
import BugAssigneeCard from "../components/Bugs/BugAssigneeCard";
import BugPropertiesCard from "../components/Bugs/BugPropertiesCard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useToast } from '@chakra-ui/react'


const BugDetails = () => {
  const toast = useToast()
  const params = useParams();
  const id = params.id
  const [bugDetails, setBugDetails] = useState(null);

  const {data:bug, isLoading, error, refetch: refetchBugDetails} = useQuery({ queryKey: ["bug", id], queryFn: () => getBug(id) });
  const mutatation = useMutation({
    mutationFn: () => updateBug(bugDetails),
    onSuccess: refetchBugDetails,
  });

  const onsubmit = async (e) => {
    //console.log(bugDetails)
    const response = await updateBug(bugDetails);
    if(response){
      // toast("Updated Successfully");
      toast({
        title: `Bug ${bug.name}`,
        description: `Successfully updated`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }
  };

  useEffect(()=>{
  
  },[])

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
          <BugPropertiesCard bug={bug} bugDetails={bugDetails} setBug={setBugDetails} />
        </div>
        <button
          onClick={(e) => onsubmit(e)}
          className="bg-slate-800 text-white p-2 rounded-md sticky bottom-4"
        >
          Submit
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BugDetails;
