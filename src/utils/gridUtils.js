import { Box, CircularProgress, Grid } from "@mui/material";
import React from "react";

export const GridFooterComponent = () => (
    <Grid
        xs={12}
        container
        item
        height="10rem"
        direction="row"
        justifyContent="center"
        alignSelf="center"
    >
        <CircularProgress />
    </Grid>
);

export const RenderGridItem = ({ index, ...props }) => (
    <Box
        {...props}
        sx={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid gray",
            whiteSpace: "nowrap",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: "#86c5d8",
            '&:hover': {
                backgroundColor: '#afdceb'
            }
        }}
    >
        Grid Item {index + 1}
    </Box>
);