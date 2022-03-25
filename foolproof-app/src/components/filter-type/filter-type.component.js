import React, { useContext, useEffect, useState } from "react";

import {Form} from 'react-bootstrap';

import { DataContext } from "../homepage/homepage.component";

import "./filter-type.styles.css";

const FilterType = () => {
    const {dataObj, filteredFiles, setFilteredFiles, filterUsers, filterType, setFilterType, searchfield} =useContext(DataContext);

    const handleChecked = ({ target }) =>{
        const opposite = target.name === "profile" ? "article" : "profile";
        setFilterType(previousFilterType => ({ ...previousFilterType, [target.name]: !previousFilterType[target.name] }));

        /* if both are clicked show all files otherwise filter the selected type*/
        if(!filterType[target.name] === filterType[opposite]){
            setFilteredFiles(dataObj.files);
        }else{
            setFilteredFiles(dataObj.files.filter(file => file.type === (!filterType[target.name] ? target.name : opposite)));
        }
      }
        
    
    useEffect(() => {
        /* after component is loaded & type filter is run check if there are selected users*/
        let filesToCheck = filteredFiles;
        if(filterUsers.length){
            /* filter selected users*/
            filesToCheck = filteredFiles.filter( file => filterUsers.some(user => user.id === file.createdBy));
            setFilteredFiles(filesToCheck);
            
          }
        
        if(searchfield){
            setFilteredFiles(filesToCheck.filter(file => file.title.toLowerCase().includes(searchfield.toLowerCase())));
        }
    }, [filterType])
    return(
        <Form className="filter-type-block">
            <label>By Type</label>
            <Form.Check 
                type="checkbox"
                id={`checkbox_profile`}
                label={`profile`}
                name="profile"
                onChange={handleChecked}
            />
            <Form.Check 
                type="checkbox"
                id={`checkbox_article`}
                label={`article`}
                name="article"
                onChange={handleChecked}
            />
        </Form>
    )
}

export default FilterType;