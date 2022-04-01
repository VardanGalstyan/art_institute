import { useState, useEffect, useCallback } from 'react';
import { Container } from 'react-bootstrap';
import QueryInput from './QueryInput';
import Artworks from './Artworks';
import Paginate from './Paginate';


function Home() {

    const [query, setQuery] = useState('');
    const [artworks, setArtworks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const url = query.length > 0
        ? `https://api.artic.edu/api/v1/artworks/search?q=${query}&page=${page}&limit=${limit}`
        : `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`;


    const fetchArtworks = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setArtworks(data);
                setIsLoading(false);
                // setQuery('')
            }
        } catch (error) {
            console.error(error);
        }
    }, [url]);


    useEffect(() => {
        query.length === 0 && fetchArtworks();
    }, []);

    useEffect(() => {
        fetchArtworks();
    }, [page, limit]);


    return (
        <Container className='w-100'>
            <QueryInput
                setQuery={setQuery}
                query={query}
                fetchArtworks={fetchArtworks}
                setLimit={setLimit}
                limit={limit}
            />
            <Artworks
                query={query}
                isLoading={isLoading}
                artworks={artworks} />
            <Paginate
                artworks={artworks}
                setPage={setPage}
            />
        </Container>
    );
}

export default Home;