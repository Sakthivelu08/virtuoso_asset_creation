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
	gridFooterLoader,   // Boolean or state to control the visibility of the footer loader (ex: while fetching more items)
	totalCount,         // Total number of items available (used to manage rendering or pagination logic)
	endReached,         // Callback triggered when the last visible item is rendered; used to fetch additional items
	overscan,           // Number of extra items to render outside the viewport for smoother scrolling experience
	openLoader,         // State to show/hide the loader in the footer area
	FooterComponent,    // Component to be shown as the footer (typically used for loaders or messages)
	RenderGridItem      // Component to render each grid item in a reusable and customizable way
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
