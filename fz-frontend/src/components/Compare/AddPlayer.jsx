import React from 'react'
import { useState, useEffect } from 'react';
import search from '../../assets/search.svg';
import exit from '../../assets/exit.svg';

const AddPlayer = ({ addPlayerOpen, setAddPlayerOpen, players, setSelectedPlayers }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [stagedPlayers, setStagedPlayers] = useState([]);

    // Filter players based on search input
    const filteredPlayers = players.filter(player => player.name.toLowerCase().includes(searchTerm.toLowerCase()));

    // Toggle player selection (stage/unstage)
    const toggleStagedPlayer = (player) => {
        setStagedPlayers(prev => 
            prev.some(p => p.player_id === player.player_id)
                ? prev.filter(p => p.player_id !== player.player_id) 
                : [...prev, player]
        );
    };

    // Check if a player is staged
    const isStaged = (player) => stagedPlayers.some(p => p.player_id === player.player_id);

    // Close modal and reset search term
    const handleClose = () => {
        setSearchTerm('');
        setStagedPlayers([]);
        setAddPlayerOpen(false);
    }

    // Add staged players to selected and close
    const handleAddPlayers = () => {
        
        // Filter out staged players already in selectedPlayers
        setSelectedPlayers(prev => {
            const newPlayers = stagedPlayers.filter(
                staged => !prev.some(existed => existed.player_id === staged.player_id)
            );
            return [...prev, ...newPlayers];
        });

        setSearchTerm('');
        setStagedPlayers([]);
        setAddPlayerOpen(false);
    }

    return (
        <>
            {/* Add Player Button */}
            <div 
            className="flex flex-row gap-2 items-center justify-center bg-gray-700 rounded-lg w-full md:w-1/2 px-6 md:py-2 border-2 border-amber-400 hover:cursor-pointer hover:bg-gray-600 shrink-0"
            onClick={() => setAddPlayerOpen(true)}
            >
                <p className="text-[30px]">+</p>
                <p className="text-[20px]">Add Player</p>
            </div>

            {/* Add Player Modal */}
            {addPlayerOpen&& (
                <div className="fixed flex items-center justify-center inset-0 bg-black/40 backdrop-brightness-50 z-200">

                    {/* Modal Container */}
                    <div className="absolute rounded-lg w-[80%] h-[65%] md:w-[50%] md:h-[65%] lg:w-[40%] bg-black border-2 border-amber-400 flex flex-col overflow-hidden">

                        {/* Sticky Header */}
                        <div className="sticky flex flex-row m-3 gap-3 ">

                            {/* Search Bar */} 
                            <input 
                                type="text"
                                placeholder="Search for a player..."
                                className="search-bar w-full"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <img 
                                src={search}
                                alt="Search Icon"
                                className="w-6 h-6 absolute left-5 top-1/2 -translate-y-1/2"            
                            />
                
                            {/* Clear search button */}
                            {searchTerm && (
                                <button 
                                    onClick={() => setSearchTerm('')}
                                    className="absolute right-[0%] top-1/2 -translate-y-1/2 mr-3 text-white hover:text-amber-400 font-bold text-xl hover:cursor-pointer"
                                >
                                    X
                                </button>
                            )}
                        </div>

                        {/* Players List */}
                        <div className="flex flex-col overflow-y-auto border-t-2 border-amber-400 px-4 divide-y divide-gray-600">
                            {filteredPlayers.map((player) => (
                                <div 
                                    key={player.player_id} 
                                    className={`py-3 hover:cursor-pointer transition-colors ${
                                        isStaged(player)
                                            ? 'bg-amber-400/20 border-l-4 border-amber-400 pl-3'
                                            : 'hover:bg-gray-800'
                                    }`}
                                    onClick={() => toggleStagedPlayer(player)}
                                >
                                    <div className="flex flex-row justify-between px-2">
                                        <span className="">{player.name}</span>
                                        <span className="text-right">{player.team}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Sticky Footer with Close/Add Buttons */}
                        <div className="sticky flex flex-row mt-auto font-bold">

                            <button className="bg-gray-600 w-1/2 p-3 hover:cursor-pointer border-t-2 border-amber-400" onClick={handleClose} >Close</button>

                            <button className={`w-1/2 p-3 border-t-2 border-amber-400 ${
                                stagedPlayers.length > 0 
                                    ? 'bg-amber-400 hover:cursor-pointer' 
                                    : 'bg-amber-400/50 cursor-not-allowed'
                            }`} 
                            onClick={handleAddPlayers} 
                            disabled={stagedPlayers.length === 0}
                            >
                                Add Player{stagedPlayers.length > 0 ? ` (${stagedPlayers.length})` : ''}
                            </button>
                        </div>

                    </div>

                </div>
            )}
        </>
    )
}

export default AddPlayer
