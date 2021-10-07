import React, { useEffect } from 'react'

function Index() {

    useEffect(() => {
        window.location.assign('https://skodas-admin.herokuapp.com/admin');
    }, [])

    return (
        <div>
            Paredresuojama į administratoriaus pultą...
        </div>
    )
}

export default Index
