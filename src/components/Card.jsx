import React from 'react';

function Card({jokeData}) {
    console.log('card :: ', jokeData);
    return (
            <div className="w-[300px] rounded-md border border-solid border-white  ">
                    
                    <div className="p-4">
                    <h1 className="text-lg font-semibold">Joke</h1>
                    
                    <h2 className="mt-3 text-sm text-gray-600">
                        {jokeData && jokeData.data.content}
                    </h2>
                
                </div>
            </div>

        
      
    
    );
}

export default Card;
