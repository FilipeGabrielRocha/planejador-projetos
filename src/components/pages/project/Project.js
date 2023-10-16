import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

import './ProjectModule.css'

export default function Project(){

    const { id } = useParams()
    console.log(id);
    
    const [project, setProject] =  useState()

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json()).then(data => {
            setProject(data)
        })
        .catch((err) => console.log(err))
    }, [id])

    return (
        <div>
            <p>{project.name}</p>
        </div>
    )
}