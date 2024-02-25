import React, { useContext, useEffect, useState } from "react";
import { bugs, statusValues } from "./../../data";
import BugSmallCard from "../components/Bugs/BugSmallCard";
import HeaderContext from "../context/HeaderContext";
import { getAllBugs } from "../helpers/bugHelper";
import { useQuery } from "@tanstack/react-query";
import { Button, Menu, MenuButton, MenuItem, MenuList,MenuItemOption, MenuOptionGroup } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Select } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import Loading from "./Loading";

const AllBugs = () => {
  const [filter,setFilter] = useState('')
  const [searchParams,setSearchParams] = useSearchParams()
  const [queryString,setQueryString] = useState("")
  const {
    data: allBugs,
    isLoading,
    error,
    refetch:refetchBugs
  } = useQuery({ queryKey: ["bugs", filter], queryFn: async () => {
    const data = await getAllBugs(queryString)
    return data
  }});

  const { headerText, setHeaderText } = useContext(HeaderContext);

  const handleFilter = (value) =>{
    console.log("Value",(value))
    setFilter(value)
    //console.log("Hanlding filter",queryString)
    setSearchParams({...searchParams,status:value })
    setQueryString(`?status=${value}`)
    refetchBugs()
  }

  useEffect(() => {
    setHeaderText("All Bugs");
  },);

  if (isLoading) return <Loading/>

  if (error) return <h2>{error}</h2>;

  if (allBugs) {
    return (
      <div className="grid grid-cols-1 gap-4 py-4">
        <div className="px-8">
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            {filter? filter : "All"}
          </MenuButton>
          <MenuList>
          <MenuOptionGroup defaultValue={filter} onChange={handleFilter} >
            <MenuItemOption value='All'>All</MenuItemOption>
            {statusValues.map((status) => (
              <MenuItemOption
                key={status.label}
                value={status.value}
                name="status"
              >
                {status.value}
              </MenuItemOption>
            ))}
            </MenuOptionGroup>
          </MenuList>
        </Menu>
        </div>
        
        
        <div className=" px-8  grid grid-cols-1 gap-4">
          {allBugs.map((bug) => (
            <BugSmallCard key={bug._id} bug={bug} />
          ))}
        </div>
      </div>
    );
  }
};

export default AllBugs;
