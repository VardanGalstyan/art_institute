import { Row, InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';

function QueryInput({ query, setQuery, fetchArtworks, setLimit, limit }) {


    const handleChange = () => {
        fetchArtworks()
    }

    const handleRefresh = () => {
        setQuery('')
        fetchArtworks()
    }

    const handleQuery = e => {
        setQuery(e.target.value)
    }


    return (
        <Row className='mt-5 px-4'>
            <InputGroup className="mb-3 px-0">
                <InputGroup.Text>
                    <AiOutlineSearch />
                </InputGroup.Text>
                <FormControl
                    placeholder="Search"
                    value={query}
                    onChange={handleQuery}
                />
                <Button
                    onClick={handleChange}
                    variant="outline-secondary">
                    Search
                </Button>
                <Button
                    onClick={handleRefresh}
                    variant="outline-secondary">
                    Refresh
                </Button>
            </InputGroup>

            <Form.Label>Results</Form.Label>

            <Form.Select
                aria-label="Results"
                value={limit}
                onChange={e => setLimit(e.target.value)}
            >
                <option>Results</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="40">40</option>
            </Form.Select>

        </Row>
    )
}

export default QueryInput