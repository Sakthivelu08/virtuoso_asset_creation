import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import VirtuosoTable from "../../components/virtuosoTable";
import CustomVirtuosoGrid from "../../components/virtuosoGrid";

function MainContainer() {
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
                <Typography
                    sx={{
                        fontSize: "30px",
                        fontFamily: "sans-serif"
                    }}
                >Virtuoso Table</Typography>
                <Box
                    sx={{
                        width: '50%',
                        height: '50vh',
                        backgroundColor: 'lightgrey',
                        marginTop: '10px'
                    }}
                >
                    <VirtuosoTable />
                </Box>
            </Grid>
            <Grid
                children
                sx={{
                    margin: '20px 20px'
                }}
            >
                <Typography
                    sx={{
                        fontSize: "30px",
                        fontFamily: "sans-serif"
                    }}
                >Virtuoso Grid</Typography>
                <Box
                    sx={{
                        width: '50%',
                        height: '20vh',
                        backgroundColor: 'lightgrey',
                        marginTop: '10px'
                    }}
                >
                    <CustomVirtuosoGrid />
                </Box>
            </Grid>
        </Grid>
    );
}

export default MainContainer;