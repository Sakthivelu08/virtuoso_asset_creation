import React, { forwardRef, useState } from 'react';
import { Box, CircularProgress, Grid } from '@mui/material';
import { VirtuosoGrid } from 'react-virtuoso';

const gridComponents = {
	List: forwardRef(({ style, children, ...props }, ref) => (
		<Grid
			container
			ref={ref}
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				...style
			}}
		>
			{children}
		</Grid>
	)),
	Item: ({ children, ...props }) => (
		// <div
		// 	{...props}
		// 	style={{
		// 		padding: "0.5rem",
		// 		width: "33%",
		// 		display: "flex",
		// 		flex: "none",
		// 		alignContent: "stretch",
		// 		boxSizing: "border-box",
		// 	}}
		// >
		// 	{children}
		// </div>
		<Grid
			item
			xs={6}
			sm={6}
			md={4}
			lg={4}
			xl={4}
			style={{
				padding: "0.5rem",
				width: "33%",
				// height: "100px",
				display: "flex",
				flex: "none",
				alignContent: "stretch",
				boxSizing: "border-box",
			}}
		>
			{children}
		</Grid>
	)
}

const ItemWrapper = ({ children, ...props }) => (
	<Box
		{...props}
		sx={{
			display: "flex",
			flex: 1,
			textAlign: "center",
			padding: "1rem 1rem",
			border: "1px solid gray",
			whiteSpace: "nowrap",
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

const CustomVirtuosoGrid = () => {
	const [dataLength, setDataLength] = useState(12);
	const [openLoader, setOpenLoader] = useState(false);

	const endReached = () => {
		console.log("endreached");
		setOpenLoader(true);
		setTimeout(() => {
			setDataLength(prev => prev + 12);
			setOpenLoader(false);
		}, 2000);
	}
	return (
		<VirtuosoGrid
			totalCount={dataLength}
			components={{
				...gridComponents,
				Footer: dataLength > 0 && openLoader && FooterComponent
			}}
			overscan={100}
			endReached={endReached}
			itemContent={(index) => <ItemWrapper>Item {index}</ItemWrapper>}
		/>
	);
};

export default CustomVirtuosoGrid;
