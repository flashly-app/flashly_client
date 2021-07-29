import React, { FunctionComponent } from 'react';
import styles from './deck-tile.module.css';
export interface DeckTileProps {
	data: DeckTileDataModel;
	setDeck: Function;
	setOpenDeck: Function;
}

export interface DeckTileDataModel {
	id: string;
	name: string;
	description: string;
}

export const DeckTile: FunctionComponent<DeckTileProps> = ({
	data: { id, name, description }, data, setDeck, setOpenDeck
}) => {
	return (
		<pre
			className={styles['deck-tile']}
			onClick={() => {
				setDeck(data);
				setOpenDeck(true)
			}}>
			<p className={styles['deck-tile-title']}>{name}</p>
			<p className={styles['deck-tile-description']}>{description}</p>
		</pre>
	);
};
