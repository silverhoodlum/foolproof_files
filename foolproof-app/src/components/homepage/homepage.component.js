import React, { useEffect, useState } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import FileDirectory from "../file-directory/file-directory.component";
import FiltersTab from "../filters-tab/filters-tab.component";

export const DataContext = React.createContext();

const Homepage = () => {
    const [dataObj, setDataObj] = useState({files: [], users: [], types: []});
    const [filteredFiles, setFilteredFiles] = useState([]);
    const [filterUsers, setFilterUsers] = useState([]);
    const [filterType, setFilterType] = useState({profile: false, article: false});
    const [searchfield, setSearchfield] = useState("");

    useEffect(() => {
        const envVariable = "http://localhost:3001/";
        const dataTypes = ["files", "users", "types"];
        Promise.all(dataTypes.map(dataType => fetch(`${envVariable}${dataType}`).then(value => value.json())))
          .then(([fileData, userData, typeData]) => {
                setDataObj({files: fileData, users: userData, types: [typeData]} )

                setFilteredFiles(fileData)
            })
          .catch((err) => {
              console.log(err);
          });

        // fetch("https://api.npoint.io/c48b69a7e294cfb5736f")
        //     .then(res => res.json())
        //     .then(data => {
        //         setDataObj({files: data.files, users: data.users, types: data.type} );
        //         setFilteredFiles(data.files);
        //     })
    }, []);
    return(
        <Container className="container-fluid">
            <Row>
                <DataContext.Provider value={{dataObj, filteredFiles, setFilteredFiles, filterUsers, setFilterUsers, filterType, setFilterType, searchfield, setSearchfield}} >
                    <Col md={3} xs={12}><FiltersTab /></Col>
                    <Col md={9} xs={12}><FileDirectory files={filteredFiles} /></Col>
                </DataContext.Provider >
            </Row>
        </Container>
    )
}

export default Homepage;