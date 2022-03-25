import React from "react";
import FilterUsers from "../file-author/file-author.component";
import FilterType from "../filter-type/filter-type.component";

import "./filters-tab.styles.css"

const FiltersTab = () => {
    return(
        <div className="filter-block">
            <label className="title-block">Filters</label>
            <FilterType />
            <FilterUsers />
        </div>
    )
}

export default FiltersTab;