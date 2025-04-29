import React, { useState, useEffect, useRef } from 'react';
import { TableVirtuoso } from 'react-virtuoso';
import { useMemo } from 'react';
import { CircularProgress, Skeleton, Table, TableCell, TableHead, TableRow } from '@mui/material';

const tableHeadings = ['Name', 'Description 1', 'Description 2', 'Description 3', 'Description 4', 'Address 1', 'Address 2', 'Address 3', 'Address 4'];

const handleRowClick = (props) => {
	console.log('handlerowclick', props);
}

const FooterComponent = () => (
	// To display the loader at the bottom as footer.
	<TableRow
		sx={{
			alignItems: 'center',
			justifyContent: 'center'
		}}
	// />
	>
		{/* <CircularProgress /> */}
		{/* <Skeleton /> */}
		{tableHeadings.map((tableHeading, index) => (
			<TableCell
				sx={{
					backgroundColor: tableHeading === 'Name' ? '#afdceb' : '#f0f8ff'
				}}
			>
				<Skeleton />
			</TableCell>
		))}
	</TableRow>
);

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

const generateData = (dataLength, currentLength) => {
	return Array.from({ length: dataLength }, (_, index) => ({
		name: `Person ${currentLength + index + 1}`,
		description: `Description for person ${currentLength + index + 1}`,
		address: `Address for Person ${currentLength + index + 1}`
	}));
};

function VirtuosoTable(props) {
	const {
		tableModifiers
	} = props;
	const [personData, setPersonData] = useState(() => generateData(15, 0));
	const [openLoader, setOpenLoader] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const endReached = () => {
		setOpenLoader(true);
		setTimeout(() => {
			setPersonData(prev => [
				...prev,
				...generateData(15, prev.length)
			]);
			setOpenLoader(false);
		}, 1500);
	}

	const fixedHeaderContent = () => (
		<TableRow>
			{tableHeadings.map((tableHeading, index) => (
				<TableCell
					key={index}
					sx={{
						minWidth: tableHeading === 'Name' ? 150 : 200,
						position: tableHeading === 'Name' ? 'sticky' : 'initial',
						left: tableHeading === 'Name' && 0,
						zIndex: tableHeading === 'Name' && 1,
						backgroundColor: '#86c5d8'
					}}
				>
					{tableHeading}
				</TableCell>
			))}
		</TableRow>
	);

	return (
		<TableVirtuoso
			style={{
				height: '100%'
			}}
			data={personData}
			components={TableComponents}
			endReached={endReached}
			overscan={100}
			fixedHeaderContent={tableModifiers?.ShowHeader?.value && fixedHeaderContent}
			fixedFooterContent={tableModifiers?.FooterLoader?.value && openLoader && FooterComponent}
			itemContent={(index, person) => (
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
			)}
		/>
	);
}

export default VirtuosoTable;
