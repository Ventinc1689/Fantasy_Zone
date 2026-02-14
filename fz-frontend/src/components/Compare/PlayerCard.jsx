import React from 'react'

const PlayerCard = ({ position, selectedPlayers, setSelectedPlayers }) => {

    // Handle player removal from comparison
    const handleRemovePlayer = (player_player_id) => {
        setSelectedPlayers(selectedPlayers.filter(player => player.player_id !== player_player_id));
    }

    // Utility to get color class for a stat
    const getStatColor = (statKey, value) => {
        const values = selectedPlayers.map(p => Number(p[statKey]) ?? 0);
        const max = Math.max(...values);
        const min = Math.min(...values);

        if (value === max) return 'text-green-400 font-bold';
        if (value === min) return 'text-red-400 font-bold';
        return 'text-yellow-300';
    };

    // Utility to get color class for a age and interceptionstats (where lower is better)
    const getInverseStatColor = (statKey, value) => {
        const values = selectedPlayers.map(p => Number(p[statKey]) ?? 0);
        const max = Math.max(...values);
        const min = Math.min(...values);

        if (value === max) return 'text-red-400 font-bold';
        if (value === min) return 'text-green-400 font-bold';
        return 'text-yellow-300';
    };

    // Player Card Component - Displays selected players for comparison
    return (
        <div className="flex gap-5 shrink-0 items-start">
            {selectedPlayers.map(player => (
                <div className="flex flex-col bg-gray-700 rounded-lg p-3 w-70 h-105 border-2 border-dashed border-gray-300" key={player.player_id}>

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
                            <p className="flex flex-row justify-between">
                                <span>Age</span>
                                <span className={getInverseStatColor('age', player.age)}>{player.age}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>PPR/G</span>
                                <span className={getStatColor('pprPerGame', player.pprPerGame)}>{player.pprPerGame}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>Passing Attempts</span>
                                <span className={getStatColor('passing_attempts', player.passing_attempts)}>{player.passing_attempts}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>Passing Completions</span>
                                <span className={getStatColor('passing_completions', player.passing_completions)}>{player.passing_completions}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>Passing Yards</span>
                                <span className={getStatColor('passing_yards', player.passing_yards)}>{player.passing_yards}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>Passing TD</span>
                                <span className={getStatColor('passing_td', player.passing_td)}>{player.passing_td}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>Interceptions</span>
                                <span className={getInverseStatColor('interceptions', player.interceptions)}>{player.interceptions}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>Rushing Attempts</span>
                                <span className={getStatColor('rushing_attempts', player.rushing_attempts)}>{player.rushing_attempts}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>Rushing Yards</span>
                                <span className={getStatColor('rushing_yards', player.rushing_yards)}>{player.rushing_yards}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>Rushing Y/A</span>
                                <span className={getStatColor('yard_per_attempt', player.yard_per_attempt)}>{player.yard_per_attempt}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>Rushing TD</span>
                                <span className={getStatColor('rushing_td', player.rushing_td)}>{player.rushing_td}</span>
                            </p>
                        </div>
                    )}
                    
                    {position === 'RB' && (
                        <div className="flex flex-col gap-2">
                            <p className="flex flex-row justify-between">
                                <span>Age</span>
                                <span className={getInverseStatColor('age', player.age)}>{player.age}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>PPR/G</span>
                                <span className={getStatColor('pprPerGame', player.pprPerGame)}>{player.pprPerGame}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>Rushing Attempts</span>
                                <span className={getStatColor('rushing_attempts', player.rushing_attempts)}>{player.rushing_attempts}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>Rushing Yards</span>
                                <span className={getStatColor('rushing_yards', player.rushing_yards)}>{player.rushing_yards}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>Y/A</span>
                                <span className={getStatColor('yard_per_attempt', player.yard_per_attempt)}>{player.yard_per_attempt}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>Rushing TD</span>
                                <span className={getStatColor('rushing_td', player.rushing_td)}>{player.rushing_td}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>Targets</span>
                                <span className={getStatColor('targets', player.targets)}>{player.targets}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>Receptions</span>
                                <span className={getStatColor('receptions', player.receptions)}>{player.receptions}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>Reception Yards</span>
                                <span className={getStatColor('reception_yards', player.reception_yards)}>{player.reception_yards}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>Y/R</span>
                                <span className={getStatColor('yard_per_reception', player.yard_per_reception)}>{player.yard_per_reception}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>Receiving TD</span>
                                <span className={getStatColor('reception_td', player.reception_td)}>{player.reception_td}</span>
                            </p>
                        </div>
                    )}

                    {(position === 'WR' || position === 'TE') && (
                        <div className="flex flex-col gap-4">
                            <p className="flex flex-row justify-between">
                                <span>Age</span>
                                <span className={getInverseStatColor('age', player.age)}>{player.age}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>PPR/G</span>
                                <span className={getStatColor('pprPerGame', player.pprPerGame)}>{player.pprPerGame}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>Targets</span>
                                <span className={getStatColor('targets', player.targets)}>{player.targets}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>Receptions</span>
                                <span className={getStatColor('receptions', player.receptions)}>{player.receptions}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>Reception Yards</span>
                                <span className={getStatColor('reception_yards', player.reception_yards)}>{player.reception_yards}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>Y/R</span>
                                <span className={getStatColor('yard_per_reception', player.yard_per_reception)}>{player.yard_per_reception}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>Reception TD</span>
                                <span className={getStatColor('reception_td', player.reception_td)}>{player.reception_td}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>Rushing Yards</span>
                                <span className={getStatColor('rushing_yards', player.rushing_yards)}>{player.rushing_yards}</span>
                            </p>
                            <p className="flex flex-row justify-between">
                                <span>Rushing TD</span>
                                <span className={getStatColor('rushing_td', player.rushing_td)}>{player.rushing_td}</span>
                            </p>
                        </div>
                    )}

                </div>
            ))}
        </div>
    )
}

export default PlayerCard
