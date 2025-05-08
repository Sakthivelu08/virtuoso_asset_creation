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
};

const CustomVirtuosoGrid = ({
	gridFooterLoader,
	totalCount,
	endReached,
	overscan,
	openLoader,
	FooterComponent,
	RenderGridItem
}) => {

	return (
		<VirtuosoGrid
			totalCount={totalCount}
			components={{
				...gridComponents,
				Footer: totalCount > 0 && gridFooterLoader && openLoader && FooterComponent
			}}
			overscan={overscan}
			endReached={endReached}
			itemContent={(index) => (
				<RenderGridItem
					index={index}
				/>
			)}
		/>
	);
};

export default CustomVirtuosoGrid;
