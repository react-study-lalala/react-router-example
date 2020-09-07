import React from 'react';

function Home({match}) {

    return (
        <div>
            이 Component는 Home.js 입니다.
            <p>현재 URL : {match.url}</p>
        </div>
    )
}

export default Home;