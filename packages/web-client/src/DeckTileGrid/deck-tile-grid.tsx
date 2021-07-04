import React from 'react';
import { DeckTile } from '../DeckTile/deck-tile';
import styles from './deck-tile-grid.module.css';

export interface DeckTileGridProps {
	data: DeckTileGridItemDataModel[];
	setDeck: Function;
	setOpenDeck: Function;
}

export interface DeckTileGridItemDataModel {
	id: string;
	description: string;
	name: string;
}

export const DeckTileGrid: React.FunctionComponent<DeckTileGridProps> = ({
	data, setDeck, setOpenDeck
}) => {
	return (
		<div className={styles['deck-tile-grid']}>
			{data.map((item) => (
				<DeckTile data={item} key={item.id} setDeck={setDeck} setOpenDeck={setOpenDeck}/>
			))}
		</div>
	);
};
