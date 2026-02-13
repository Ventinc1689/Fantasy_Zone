import React from 'react'

// Placeholder Component - Displays when no players are selected for comparison
const PlaceHolder = () => {
    return (
        <div className="flex gap-5 shrink-0 items-start">
                <div className="flex flex-col bg-gray-700 rounded-lg p-3 w-70 h-112 border-2 border-dashed border-gray-300" >

                    {/* Player Info */}
                    <div className="flex flex-row items-center border-b-2 border-dashed border-gray-400 pb-2 mb-2">
                        <p><span className="text-amber-400 font-semibold">Player</span> (Team)</p>

                        {/* Remove Player Button */}
                        <button className="relative ml-auto text-gray-400 hover:text-amber-400" >
                            X
                        </button>
                    </div>

                    {/* Player Stats */}
                    <div className="flex flex-col gap-2">
                        <p className="flex flex-row justify-between"><span>Age</span><span>23</span></p>
                        <p className="flex flex-row justify-between"><span>Games</span><span>17</span></p>
                        <p className="flex flex-row justify-between"><span>PPR/G</span><span>25</span></p>
                        <p className="flex flex-row justify-between"><span>Passing Attempts</span><span>450</span></p>
                        <p className="flex flex-row justify-between"><span>Passing Completions</span><span>320</span></p>
                        <p className="flex flex-row justify-between"><span>Passing Yards</span><span>4000</span></p>
                        <p className="flex flex-row justify-between"><span>Passing TD</span><span>30</span></p>
                        <p className="flex flex-row justify-between"><span>Interceptions</span><span>5</span></p>
                        <p className="flex flex-row justify-between"><span>Rushing Attempts</span><span>50</span></p>
                        <p className="flex flex-row justify-between"><span>Rushing Yards</span><span>300</span></p>
                        <p className="flex flex-row justify-between"><span>Rushing Y/A</span><span>6</span></p>
                        <p className="flex flex-row justify-between"><span>Rushing TD</span><span>4</span></p>
                    </div>

                </div>
            
        </div>
    )
}

export default PlaceHolder
