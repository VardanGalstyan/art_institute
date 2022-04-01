import { Card, Col } from 'react-bootstrap';

function Cards({ artwork }) {

    return (
        <Col xs={11} sm={12} md={4} lg={3} className='m-3'>
            <Card className='' style={{ minWidth: '15rem' }}>
                <Card.Body>
                    <Card.Title>{artwork.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{artwork.medium_display}</Card.Subtitle>
                    <Card.Text> {artwork.artist_display}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Cards;