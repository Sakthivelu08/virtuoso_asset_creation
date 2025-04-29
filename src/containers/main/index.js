import { Box, FormControlLabel, Grid, MenuItem, Select, Switch, Typography } from "@mui/material";
import React, { useState } from "react";
import VirtuosoTable from "../../components/virtuosoTable";
import CustomVirtuosoGrid from "../../components/virtuosoGrid";

function MainContainer() {
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

    const updateTableModifiers = (modifierName, modifierValue) => {
        setTableModifiers(prev => ({
            ...prev,
            [modifierName]: {
                ...modifierValue,
                value: !modifierValue?.value
            }
        }))
    }

    const separateCamelCase = (text) => {
        return text.replace(/([a-z])([A-Z])/g, '$1 $2');
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
                        tableModifiers={tableModifiers}
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
                    />
                </Box>
            </Grid>
        </Grid>
    );
}

export default MainContainer;