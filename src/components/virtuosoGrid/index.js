import React, { forwardRef, useState } from 'react';
import { Box, CircularProgress, Grid } from '@mui/material';
import { VirtuosoGrid } from 'react-virtuoso';

const gridComponents = {
	List: forwardRef(({ style, children, ...props }, ref) => (
		<div
			ref={ref}
			{...props}
			style={{
				display: "flex",
				flexWrap: "wrap",
				...style,
			}}
		>
			{children}
		</div>
	)),
	Item: ({ children, ...props }) => (
		<div
			{...props}
			style={{
				padding: "0.5rem",
				width: "33%",
				height: "120px",
				display: "flex",
				flex: "none",
				alignContent: "stretch",
				boxSizing: "border-box"
			}}
		>
			{children}
		</div>
	)
}

const ItemWrapper = ({ children, ...props }) => (
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
		{children}
	</Box>
);

const FooterComponent = () => (
	// To display the loader at the bottom as footer.
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

const CustomVirtuosoGrid = ({ gridFooterLoader }) => {
	const [dataLength, setDataLength] = useState(12);
	const [openLoader, setOpenLoader] = useState(false);

	const endReached = () => {
		console.log("endreached");
		setOpenLoader(true);
		setTimeout(() => {
			setDataLength(prev => prev + 12);
			setOpenLoader(false);
		}, 1000);
	}
	return (
		<VirtuosoGrid
			totalCount={dataLength}
			components={{
				...gridComponents,
				Footer: dataLength > 0 && gridFooterLoader && openLoader && FooterComponent
			}}
			overscan={50}
			endReached={endReached}
			itemContent={(index) => <ItemWrapper>Grid Item {index + 1}</ItemWrapper>}
		/>
	);
};

export default CustomVirtuosoGrid;
