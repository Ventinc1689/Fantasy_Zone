import React from 'react'
import clear from '../../assets/clear.svg'

const CompareButtons = ({ position, setPosition, selectedPlayers, setSelectedPlayers }) => {
    const positions = ['QB', 'RB', 'WR', 'TE'];

    const handlePositionChange = (pos) => {
        setPosition(pos);
        setSelectedPlayers([]); 
    }

    return (
        <div className="flex flex-row mt-2 gap-6 h-20 items-end justify-between w-full">
            <div className="flex flex-col gap-2">
                <label className="text-[16px] text-gray-300">Select Position:</label>

                {/* Position Buttons */}
                <div className="flex flex-row gap-2">
                    {positions.map((pos) => (
                        <button 
                        className={`hover:cursor-pointer p-2 bg-gray-700 rounded-md ${position === pos ? 'border-2 border-amber-400 text-amber-400' : ''}`}
                        key={pos}
                        onClick={() => handlePositionChange(pos)}
                        >
                            {pos}
                        </button>
                    ))}
                </div>
                
            </div>

            {/* Clear Button */}
            <button className="flex flex-row gap-2 bg-gray-700 h-12 items-center p-3 rounded-md hover:cursor-pointer text-[18px]" onClick={() => setSelectedPlayers([])}>
                <img
                    src={clear}
                    alt="Clear"
                    className="w-7 h-7 rounded-md"
                />
                Clear{selectedPlayers.length > 0 && ` (${selectedPlayers.length})`}
            </button>
        </div>
    )
}

export default CompareButtons
