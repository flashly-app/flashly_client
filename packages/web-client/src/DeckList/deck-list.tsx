import React from 'react';
import { DeckTileGrid } from '../DeckTileGrid/deck-tile-grid';

import styles from './deck-list.module.css';

export interface DeckListProps {
	data: DeckListItemDataModel[];
}

export interface DeckListItemDataModel {
	id: string;
	description: string;
	name: string;
}

export const DeckList: React.FunctionComponent<DeckListProps> = ({ data }) => {
	return (
		<div className="deck-list">
			<DeckTileGrid data={data} />
		</div>
	);
};
