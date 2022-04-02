import { Row } from 'react-bootstrap';
import CardPlaceholder from '../Cards/CardPlaceholder';
import Cards from '../Cards/Cards';

function Artworks({ artworks, isLoading }) {

    return (
        <Row className='my-5 justify-content-sm-evenly'>
            {
                artworks?.data?.map((artwork, i) => (
                    isLoading ?
                        <CardPlaceholder key={i} /> :
                        <Cards artwork={artwork} key={artwork.id} />
                ))
            }
        </Row >
    );
}

export default (Artworks);