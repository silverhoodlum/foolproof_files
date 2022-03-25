import React, { useContext } from "react";
import Table from 'react-bootstrap/Table';

import tick from "./../../static/images/tick.png";
import cross from "./../../static/images/cross.png"

import { DataContext } from "../homepage/homepage.component";
import Searchbar from "../search-bar/search-bar.component";

import "./file-directory.styles.css";

const FileDirectory = ({files}) =>{
    const {dataObj} =useContext(DataContext);
    return( 
        <div className="file-directory-block">
            <div className="file-directory-header container">
                <h2 className="title">Files</h2>
                <Searchbar />
            </div>
            <Table striped bordered hover className="table-main">
                <thead>
                    <tr>
                        <th>File</th>
                        <th>Type</th>
                        <th>Created By</th>
                        <th>Modified By</th>
                        <th>Scheduled</th>
                        <th>Lived</th>
                    </tr>
                </thead>
                <tbody>
                {/* If data is not fetched show "loading" message or "no files" if filters don't return result */}

                    {files.length === 0 && !dataObj.files.length
                    ?   <tr><td colSpan={6} className="text-center">Loading...</td></tr>
                    : files.length === 0 && dataObj.files.length
                    ?  <tr><td colSpan={6} className="text-center">No files available</td></tr>
                    :
                    files.map( ({title, type, createdBy, modifiedBy, scheduled, live}, index) => {
                        const createdByUser = dataObj.users.find(user => user.id === createdBy);
                        const modifiedByUser = dataObj.users.find(user => user.id === modifiedBy);
                        return (
                            <tr key={index}>
                                <td>{title}</td>
                                <td>{type}</td>
                                <td>{createdByUser.givenName} {createdByUser.familyName}</td>
                                <td>{modifiedByUser.givenName} {modifiedByUser.familyName}</td>
                                <td><img className="tick-logo" src={scheduled ? tick : cross } /></td>
                                <td><img className="tick-logo" src={live ? tick : cross } /></td>
                            </tr>)
                })
                }
                </tbody>
            </Table>
         
        </div>)
}

export default FileDirectory;