import React, { useContext, useEffect, useState } from "react";

import { DataContext } from "../homepage/homepage.component";

import "./search-bar.styles.css";

const Searchbar = () => {
    const {dataObj, filteredFiles, setFilteredFiles, filterUsers, filterType, searchfield, setSearchfield} = useContext(DataContext);
    const handleChange = (e) => {
        setSearchfield(e.target.value);
        setFilteredFiles(dataObj.files.filter(file => file.title.toLowerCase().includes(e.target.value.toLowerCase())));
    }

    useEffect(() => {
        /* after component is loaded & search field is running check if there are selected users*/
        let filesToCheck = filteredFiles;
        if(filterType.profile || filterType.article){
           /* If clicked run filter on selected type files only */
           filesToCheck = filteredFiles.filter(file => file.type === (filterType.profile ? "profile" : "article"));
           setFilteredFiles(filesToCheck); 
        }

        if(filterUsers.length){
            /* filter selected users*/
            setFilteredFiles(filesToCheck.filter( file => filterUsers.some(user => user.id === file.createdBy)));
          }
        
    }, [searchfield])
    return(
        <div className="searchbar-wrap ms-auto">
            <div className="input-wrap">
                <input type="text" name="search" value={searchfield} placeholder="search" onChange={handleChange}/>
                <i className="bi bi-search"></i>
            </div>
        </div>
    )
}

export default Searchbar;