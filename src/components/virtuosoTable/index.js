import { TableRow } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import { TableVirtuoso } from 'react-virtuoso';

function VirtuosoTable({
	tableModifiers,
	FooterComponent,
	fixedHeaderContent,
	overscan,
	data,
	setData,
	openLoader,
	setOpenLoader,
	endReached,
	RenderRows,
	handleRowClick,
	tableWidth,
	tableHeight,
	style
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
