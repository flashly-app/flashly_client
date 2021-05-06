import React from 'react';

import styles from './deck-list.module.css'

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
      {
        data.map(deckListItem => <pre className={styles["deck-list__item"]} key={deckListItem.id}>{JSON.stringify(deckListItem)}</pre>)
      }
    </div>
  );
};