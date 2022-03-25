import React, { useContext, useEffect, useState } from "react";

import {Form} from 'react-bootstrap';

import { DataContext } from "../homepage/homepage.component";

const FilterUsers = () => {
    const {dataObj, setFilteredFiles, filterUsers, setFilterUsers, filterType, searchfield} = useContext(DataContext);

    const handleChecked = ({ target }) =>{
          /* if checked add selected to filtered users array */
        if(target.checked){
            setFilterUsers([...filterUsers, ...dataObj.users.filter( user => {
                return user.givenName === target.name;
                }
            )])
        }else{
            /* if deselected show all selected previously expect clicked one */
            setFilterUsers(filterUsers.filter( user => user.givenName !== target.name));
        }    
      }
        
    

    useEffect(() => {

            /* Check if type filter has been clicked */
            const typeFilterSelected = filterType.profile || filterType.article;

            /* If clicked run filter on selected type files only */
            let filesToCheck = typeFilterSelected ? dataObj.files.filter(file => file.type === (filterType.profile ? "profile" : "article")) : dataObj.files;
            if(searchfield){
                filesToCheck = filesToCheck.filter(file => file.title.toLowerCase().includes(searchfield.toLowerCase()));
            }
            /* If there are users selected filter otherwise show all files to check */
            if(filterUsers.length){
                setFilteredFiles(filesToCheck.filter( file => filterUsers.some(user => user.id === file.createdBy)));
            }else{
                setFilteredFiles(filesToCheck);
            }
            
        
    }, [filterUsers])

    
    return(
        <Form className="filter-type-block">
            <label>By User</label>
            {dataObj.users.map((user, index) =>{
                return (
                    <Form.Check 
                    type="checkbox"
                    id={`checkbox_${user.givenName}`}
                    label={`${user.givenName}`}
                    name={user.givenName}
                    onChange={handleChecked}
                    key={`filter_${index}`}
                />
                )
            })
            }
            
        </Form>
    )
}

export default FilterUsers;