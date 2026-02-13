import React from 'react'

const PlayerCard = ({ position, selectedPlayers, setSelectedPlayers }) => {

    // Handle player removal from comparison
    const handleRemovePlayer = (player_player_id) => {
        setSelectedPlayers(selectedPlayers.filter(player => player.player_id !== player_player_id));
    }

    // Player Card Component - Displays selected players for comparison
    return (
        <div className="flex gap-5 shrink-0 items-start">
            {selectedPlayers.map(player => (
                <div className="flex flex-col bg-gray-700 rounded-lg p-3 w-70 h-112 border-2 border-dashed border-gray-300" key={player.player_id}>

                    {/* Player Info */}
                    <div className="flex flex-row items-center border-b-2 border-dashed border-gray-400 pb-2 mb-2">
                        <p><span className="text-amber-400 font-semibold">{player.name}</span> ({player.team})</p>

                        {/* Remove Player Button */}
                        <button className="relative ml-auto text-gray-400 hover:text-amber-400" onClick={() => handleRemovePlayer(player.player_id)}>
                            X
                        </button>
                    </div>

                    {/* Player Stats */}
                    {position === 'QB' && (
                        <div className="flex flex-col gap-2">
                            <p className="flex flex-row justify-between"><span>Age</span><span>{player.age}</span></p>
                            <p className="flex flex-row justify-between"><span>Games</span><span>{player.games}</span></p>
                            <p className="flex flex-row justify-between"><span>PPR/G</span><span>{player.pprPerGame}</span></p>
                            <p className="flex flex-row justify-between"><span>Passing Attempts</span><span>{player.passing_attempts}</span></p>
                            <p className="flex flex-row justify-between"><span>Passing Completions</span><span>{player.passing_completions}</span></p>
                            <p className="flex flex-row justify-between"><span>Passing Yards</span><span>{player.passing_yards}</span></p>
                            <p className="flex flex-row justify-between"><span>Passing TD</span><span>{player.passing_td}</span></p>
                            <p className="flex flex-row justify-between"><span>Interceptions</span><span>{player.interceptions}</span></p>
                            <p className="flex flex-row justify-between"><span>Rushing Attempts</span><span>{player.rushing_attempts}</span></p>
                            <p className="flex flex-row justify-between"><span>Rushing Yards</span><span>{player.rushing_yards}</span></p>
                            <p className="flex flex-row justify-between"><span>Rushing Y/A</span><span>{player.yard_per_attempt}</span></p>
                            <p className="flex flex-row justify-between"><span>Rushing TD</span><span>{player.rushing_td}</span></p>
                        </div>
                    )}
                    
                    {position === 'RB' && (
                        <div className="flex flex-col gap-2">
                            <p className="flex flex-row justify-between"><span>Age</span><span>{player.age}</span></p>
                            <p className="flex flex-row justify-between"><span>Games</span><span>{player.games}</span></p>
                            <p className="flex flex-row justify-between"><span>PPR/G</span><span>{player.pprPerGame}</span></p>
                            <p className="flex flex-row justify-between"><span>Rushing Attempts</span><span>{player.rushing_attempts}</span></p>
                            <p className="flex flex-row justify-between"><span>Rushing Yards</span><span>{player.rushing_yards}</span></p>
                            <p className="flex flex-row justify-between"><span>Y/A</span><span>{player.yard_per_attempt}</span></p>
                            <p className="flex flex-row justify-between"><span>Rushing TD</span><span>{player.rushing_td}</span></p>
                            <p className="flex flex-row justify-between"><span>Targets</span><span>{player.targets}</span></p>
                            <p className="flex flex-row justify-between"><span>Receptions</span><span>{player.receptions}</span></p>
                            <p className="flex flex-row justify-between"><span>Reception Yards</span><span>{player.reception_yards}</span></p>
                            <p className="flex flex-row justify-between"><span>Y/R</span><span>{player.yard_per_reception}</span></p>
                            <p className="flex flex-row justify-between"><span>Receiving TD</span><span>{player.reception_td}</span></p>
                        </div>
                    )}

                    {(position === 'WR' || position === 'TE') && (
                        <div className="flex flex-col gap-5">
                            <p className="flex flex-row justify-between"><span>Age</span><span>{player.age}</span></p>
                            <p className="flex flex-row justify-between"><span>Games</span><span>{player.games}</span></p>
                            <p className="flex flex-row justify-between"><span>PPR/G</span><span>{player.pprPerGame}</span></p>
                            <p className="flex flex-row justify-between"><span>Targets</span><span>{player.targets}</span></p>
                            <p className="flex flex-row justify-between"><span>Receptions</span><span>{player.receptions}</span></p>
                            <p className="flex flex-row justify-between"><span>Y/R</span><span>{player.yard_per_reception}</span></p>
                            <p className="flex flex-row justify-between"><span>Reception TD</span><span>{player.reception_td}</span></p>
                            <p className="flex flex-row justify-between"><span>Rushing Yards</span><span>{player.rushing_yards}</span></p>
                            <p className="flex flex-row justify-between"><span>Rushing TD</span><span>{player.rushing_td}</span></p>
                        </div>
                    )}

                </div>
            ))}
        </div>
    )
}

export default PlayerCard
