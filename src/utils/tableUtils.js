import { Skeleton, TableCell, TableRow } from "@mui/material";
import React from "react";

export const TableFooterComponent = (tableHeadings) => (
    <TableRow
        sx={{
            alignItems: 'center',
            justifyContent: 'center'
        }}
    >
        {tableHeadings.map((tableHeading, index) => (
            <TableCell
                sx={{
                    backgroundColor: tableHeading === 'Name' ? '#afdceb' : '#f0f8ff'
                }}
                key={index}
            >
                <Skeleton />
            </TableCell>
        ))}
    </TableRow>
);

export const fixedHeaderContent = (tableHeadings) => (
    <TableRow>
        {tableHeadings.map((tableHeading, index) => (
            <TableCell
                key={index}
                sx={{
                    minWidth: tableHeading === 'Name' ? 150 : 200,
                    position: tableHeading === 'Name' ? 'sticky' : 'initial',
                    left: tableHeading === 'Name' && 0,
                    zIndex: tableHeading === 'Name' && 1,
                    backgroundColor: '#86c5d8'
                }}
            >
                {tableHeading}
            </TableCell>
        ))}
    </TableRow>
);

export const generateData = (dataLength, currentLength) => {
    return Array.from({ length: dataLength }, (_, index) => ({
        name: `Person ${currentLength + index + 1}`,
        description: `Description for person ${currentLength + index + 1}`,
        address: `Address for Person ${currentLength + index + 1}`
    }));
};

export const separateCamelCase = (text) => {
    return text.replace(/([a-z])([A-Z])/g, '$1 $2');
};