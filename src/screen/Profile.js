import React from 'react';

function Profile({match}) {

    return (
        <div>
            이 Component는 Profile.js 입니다.
            <p>현재 URL : {match.url}</p>
        </div>
    )
}

export default Profile;