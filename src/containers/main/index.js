import { Box, FormControlLabel, Grid, MenuItem, Select, Switch, TableCell, TableRow, Typography } from "@mui/material";
import React, { useState } from "react";
import VirtuosoTable from "../../components/virtuosoTable";
import CustomVirtuosoGrid from "../../components/virtuosoGrid";
import { fixedHeaderContent, TableFooterComponent, generateData, separateCamelCase } from "../../utils/tableUtils";
import { tableHeadings } from "../../constants/tableHeader";
import { GridFooterComponent, RenderGridItem } from "../../utils/gridUtils";

function MainContainer() {
    const [personData, setPersonData] = useState(() => generateData(15, 0));
    const [openTableLoader, setOpenTableLoader] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [tableModifiers, setTableModifiers] = useState({
        FooterLoader: {
            value: true,
            type: 'bool'
        },
        ShowHeader: {
            value: true,
            type: 'bool'
        }
    });

    const [gridFooterLoader, setGridFooterLoader] = useState(true);
    const [dataLength, setDataLength] = useState(12);
    const [openGridLoader, setOpenGridLoader] = useState(false);

    const updateTableModifiers = (modifierName, modifierValue) => {
        setTableModifiers(prev => ({
            ...prev,
            [modifierName]: {
                ...modifierValue,
                value: !modifierValue?.value
            }
        }))
    };

    const endReachedTable = () => {
        setOpenTableLoader(true);
        setTimeout(() => {
            setPersonData(prev => [
                ...prev,
                ...generateData(15, prev.length)
            ]);
            setOpenTableLoader(false);
        }, 1500);
    };

    const handleRowClick = (props) => {
        console.log('handlerowclick', props);
    };

    const RenderRows = ({
        index,
        person
    }) => (
        <>
            {tableHeadings.map((tableHeading, index) => (
                <TableCell
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    key={index}
                    sx={{
                        minWidth: tableHeading === 'Name' ? 150 : 200,
                        position: tableHeading === 'Name' ? 'sticky' : 'initial',
                        left: tableHeading === 'Name' && 0,
                        zIndex: tableHeading === 'Name' && 1,
                        backgroundColor: tableHeading === 'Name' && '#afdceb',
                    }}
                >
                    {tableHeading.includes('Name') && person.name}
                    {tableHeading.includes('Description') && person.description}
                    {tableHeading.includes('Address') && person.address}
                </TableCell>
            ))}
        </>
    );

    const endReachedGrid = () => {
        setOpenGridLoader(true);
        setTimeout(() => {
            setDataLength(prev => prev + 12);
            setOpenGridLoader(false);
        }, 1000);
    };

    return (
        <Grid
            container
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
        >
            <Grid
                children
                sx={{
                    margin: '20px 20px'
                }}
            >
                <Grid
                    container
                    display='flex'
                    flexDirection='row'
                >
                    <Typography
                        sx={{
                            fontSize: "30px",
                            fontFamily: "sans-serif",
                            marginRight: '20px'
                        }}
                    >Virtuoso Table</Typography>
                    {tableModifiers && Object.entries(tableModifiers).map(([modifierName, modifierValue]) => (
                        <FormControlLabel
                            key={modifierName}
                            control={
                                <Switch
                                    checked={modifierValue.value}
                                    onChange={() => updateTableModifiers(modifierName, modifierValue)}
                                />
                            }
                            label={separateCamelCase(modifierName)}
                        />
                    ))}
                </Grid>
                <Box
                    sx={{
                        resize: 'both',
                        width: 'calc(100vw - 500px)',
                        height: '50vh',
                        marginTop: '10px',
                        backgroundColor: '#f0f8ff'
                    }}
                >
                    <VirtuosoTable
                        tableWidth={'100%'}
                        tableHeight={'100%'}
                        tableModifiers={tableModifiers}
                        FooterComponent={() => TableFooterComponent(tableHeadings)}
                        fixedHeaderContent={() => fixedHeaderContent(tableHeadings)}
                        overscan={100}
                        data={personData}
                        setData={setPersonData}
                        openLoader={openTableLoader}
                        setOpenLoader={setOpenTableLoader}
                        endReached={endReachedTable}
                        handleRowClick={handleRowClick}
                        RenderRows={RenderRows}
                    />
                </Box>
            </Grid>
            <Grid
                children
                sx={{
                    margin: '20px 20px'
                }}
            >
                <Grid
                    container
                    display='flex'
                    flexDirection='row'
                >
                    <Typography
                        sx={{
                            fontSize: "30px",
                            fontFamily: "sans-serif",
                            marginRight: '20px'
                        }}
                    >Virtuoso Grid</Typography>
                    <FormControlLabel
                        key={1}
                        control={
                            <Switch
                                checked={gridFooterLoader}
                                onChange={() => setGridFooterLoader(prev => !prev)}
                            />
                        }
                        label="Footer Loader"
                    />
                </Grid>
                <Box
                    sx={{
                        width: '90%',
                        height: '30vh',
                        backgroundColor: '#f0f8ff',
                        marginTop: '10px'
                    }}
                >
                    <CustomVirtuosoGrid
                        gridFooterLoader={gridFooterLoader}
                        totalCount={dataLength}
                        endReached={endReachedGrid}
                        overscan={50}
                        openLoader={openGridLoader}
                        FooterComponent={GridFooterComponent}
                        RenderGridItem={RenderGridItem}
                    />
                </Box>
            </Grid>
        </Grid>
    );
}

export default MainContainer;