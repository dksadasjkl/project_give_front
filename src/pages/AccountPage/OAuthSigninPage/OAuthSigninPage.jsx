import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function OAuthSigninPage() {
    const [ searchParams ] = useSearchParams();
    const accessToken = searchParams.get("accessToken");
    useEffect(() => {
        localStorage.setItem("AccessToken", accessToken);
        window.location.replace("/");
    }, []);

    return (
        <></>
    );
}

export default OAuthSigninPage;