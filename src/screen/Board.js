import React from 'react';

function Board({match}) {

    return (
        <div>
            이 Component는 Board.js 입니다.
            <p>현재 URL : {match.url}</p>
        </div>
    )
}

export default Board;