import { TableRow } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import { TableVirtuoso } from 'react-virtuoso';

function VirtuosoTable({
	tableModifiers, 	// tableModifiers - Custom prop to control the visibility of header and footer components
	FooterComponent,	// FooterComponent - Component for rendering a fixed footer (ex: loaders like skeletons or spinners)
	fixedHeaderContent,	// fixedHeaderContent - Component for rendering a fixed table header	
	overscan, 			// overscan - Number of extra items to render before and after the visible area for smoother scrolling
	data,				// data - Data to be displayed in the table
	setData,			// setData - Function to update the table data when needed
	openLoader,			// openLoader - State to control the visibility of the footer component (ex: loading indicator)
	setOpenLoader,		// setOpenLoader - Function to toggle the loader visibility
	endReached,			// endReached - Callback triggered when the last visible item is rendered; useful for fetching more data (ex: infinite scroll)
	RenderRows,			// RenderRows - Component to render each row in a reusable way
	handleRowClick,		// handleRowClick - Function to handle row click events
	tableWidth,			// tableWidth - Custom width for the table
	tableHeight,		// tableHeight - Custom height for the table
	style				// style - Additional custom styles for the table
}) {
	const TableComponents = {
		TableRow: props => (
			<TableRow
				sx={{
					cursor: 'pointer',
					'&:hover': {
						backgroundColor: '#cae9f5'
					}
				}}
				{...props}
				onClick={() => handleRowClick(props)}
			/>
		)
	};

	return (
		<TableVirtuoso
			style={{
				width: tableWidth,
				height: tableHeight,
				...style
			}}
			data={data}
			components={TableComponents}
			endReached={endReached}
			overscan={overscan}
			fixedHeaderContent={tableModifiers?.ShowHeader?.value && fixedHeaderContent}
			fixedFooterContent={tableModifiers?.FooterLoader?.value && openLoader && FooterComponent}
			itemContent={(index, person) => (
				<RenderRows
					index={index}
					person={person}
				/>
			)}
		/>
	);
}

export default VirtuosoTable;
