import { use, useEffect } from 'react';
import {useParams} from 'react-router-dom';

const {id} = useParams();

useEffect(() => {
    const fetchGameById = async () => {
        const response = await fetch(`/games/${id}`);
        const data = await response.json();
        setGame(data);
    }
    fetchGameById();
}, [id]);