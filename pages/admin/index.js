import React, { useEffect } from 'react'

function index() {

    useEffect(() => {
        window.location.assign('https://skodas-admin.herokuapp.com/admin');
    }, [])

    return (
        <div>
            Paredresuojama į administratoriaus pultą...
        </div>
    )
}

export default index
