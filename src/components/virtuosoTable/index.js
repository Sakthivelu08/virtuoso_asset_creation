import React, { useState, useEffect, useRef } from 'react';
import { TableVirtuoso } from 'react-virtuoso';
import { useMemo } from 'react';
import { Table, TableCell, TableHead, TableRow } from '@mui/material';

const TableComponents = {
	TableRow: props => <TableRow {...props} onClick={() => handleRowClick(props)} />
};

const generateData = (dataLength, currentLength) => {
	return Array.from({ length: dataLength }, (_, index) => ({
		name: `Person ${currentLength + index}`,
		description: `Description for person ${currentLength + index}`,
		address: `Address for Person ${currentLength + index}`
	}));
};

function VirtuosoTable(props) {
	const {
		headerRowGap = true
	} = props;
	const [personData, setPersonData] = useState(() => generateData(15, 0));

	const tableHeadings = ['Name', 'Description 1', 'Description 2', 'Description 3', 'Address 1', 'Address 2', 'Address 3'];

	const endReached = () => {
		setTimeout(() => {
			setPersonData(prev => [
				...prev,
				...generateData(15, prev.length)
			]);
		}, 500);
	}

	return (
		<TableVirtuoso
			style={{ height: '100%' }}
			data={personData}
			components={TableComponents}
			endReached={endReached}
			overscan={100}
			fixedHeaderContent={() => (
				<TableRow>
					{tableHeadings.map((tableHeading, index) => (
						<TableCell
							key={index}
							sx={{
								width: 150,
								position: tableHeading === 'Name' ? 'sticky' : 'initial',
								left: tableHeading === 'Name' && 0,
								zIndex: tableHeading === 'Name' && 1,
								backgroundColor: 'lightgrey'
							}}
						>
							{tableHeading}
						</TableCell>
					))}
				</TableRow>
			)}
			itemContent={(index, person) => (
				<>
					<TableCell
						sx={{
							width: 150,
							zIndex: 1,
							height: 50
						}}
					>{person.name}</TableCell>
					<TableCell>{person.description}</TableCell>
					<TableCell>{person.description}</TableCell>
					<TableCell>{person.description}</TableCell>
					<TableCell>{person.address}</TableCell>
					<TableCell>{person.address}</TableCell>
					<TableCell>{person.address}</TableCell>
				</>
			)}
		/>
	);
}

export default VirtuosoTable;
