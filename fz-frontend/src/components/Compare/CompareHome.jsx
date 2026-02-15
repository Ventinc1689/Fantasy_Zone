import React from 'react'
import { useState, useEffect, useMemo } from 'react'
import { playerService } from '../../services/playerService.js'
import CompareButtons from './CompareButtons.jsx'
import AddPlayer from './AddPlayer.jsx'
import PlayerCard from './PlayerCard.jsx'
import PlaceHolder from './PlaceHolder.jsx'

// Compare Home Component
const CompareHome = () => {
    const [addPlayerOpen, setAddPlayerOpen] = useState(false);
    const [position, setPosition] = useState('QB');
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    // Fetch players by position when position changes
    useEffect(() => {
        const fetchPlayersByPosition = async () => {
            try {
                setLoading(true)
                const response = await playerService.getPlayerByPositionSorted(position);
                setPlayers(response.data);
            } catch (error) { 
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchPlayersByPosition();
    }, [position]);

    // Loading and Error States
    if (loading) {
        return <div className="px-5 md:ml-35 h-screen flex items-center justify-center">Loading...</div>;
    }
    if (error) {
        return <div className="px-5 md:ml-35 h-screen flex items-center justify-center">Error: {error}</div>;
    }
    
    return (
        <div className="flex flex-col md:ml-35 h-screen p-5 md:p-0 md:py-5 md:pr-8">

            {/* Sticky Header */}
            <div className="sticky top-0 z-100 bg-black w-full gap-2 flex flex-col pb-3 md:pb-0">
                <p className="page-title">Compare Players</p>
                <p>Click on add players to compare stats</p>

                {/* Position/Clear Buttons */}
                <div className="flex w-full">
                    <CompareButtons 
                        position={position} 
                        setPosition={setPosition} 
                        selectedPlayers={selectedPlayers}
                        setSelectedPlayers={setSelectedPlayers}
                    />
                </div>
            </div>

            {/* Body */}
            <div className="w-full pt-5 mt-5 mb-5 h-full overflow-x-auto">
                <div className="flex flex-row gap-5 items-start justify-center p-5 min-w-max">
                    {/* Player Cards */}
                    {selectedPlayers.length > 0 ? (
                        <PlayerCard 
                            position={position}
                            selectedPlayers={selectedPlayers} 
                            setSelectedPlayers={setSelectedPlayers}
                        />
                    ) : (
                        <PlaceHolder />
                    )}
                </div>
            </div>

            <div className="w-full flex items-center justify-center mb-5">
                {/* Add Player Button & Modal */}
                <AddPlayer 
                    addPlayerOpen={addPlayerOpen}
                    setAddPlayerOpen={setAddPlayerOpen} 
                    players={players}
                    setSelectedPlayers={setSelectedPlayers}
                />
            </div>

        </div>
    )
}

export default CompareHome
