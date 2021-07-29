import React, { useEffect, useState } from 'react';
import { Dashboard } from '../Dashboard/Dashboard';

export interface HomepageProps {
    setDeck: Function;
    setOpenDeck: Function;
}

export const Homepage: React.FC <HomepageProps> = ({
    setDeck, setOpenDeck
}) => {
    const [Decklist, setDeckList] = useState([])

    const fetchDeckListData = async () => {
    const response = await fetch('http://localhost:3005/decks');
    const data = await response.json();
    setDeckList(data);
} 
    useEffect(() => {
        fetchDeckListData()
    }, [])
    return (
        <div>
            <Dashboard data={Decklist} setDeck={setDeck} setOpenDeck={setOpenDeck}/>
        </div>
    )
}