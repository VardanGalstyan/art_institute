import { Col, Card, Placeholder } from 'react-bootstrap'

function CardPlaceholder() {
    return (
        <Col xs={11} sm={12} md={4} lg={3} className='m-3'>
            <Card className='mx-auto' style={{ minWidth: '15rem' }}>
                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CardPlaceholder