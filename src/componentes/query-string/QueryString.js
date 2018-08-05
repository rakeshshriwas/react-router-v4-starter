import React from 'react';
import { parse } from "query-string";

const QueryString = ( { location } ) => {
    const result = parse( location.search );
    return(
        <div>
                <h1>{ result.roll_num }</h1>
        </div>
    )
}
export default QueryString;