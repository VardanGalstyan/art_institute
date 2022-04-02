import { useState, useCallback } from 'react';
import { Row, InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';


function QueryInput({ setQuery, setLimit, limit }) {

    const [search, setSearch] = useState('');


    const handleRefresh = useCallback(() => {
        setSearch('');
        setQuery('');
    }, []);

    const handleSearch = useCallback(() => {
        setQuery(search);
    }, [search]);


    return (
        <Row className='mt-5 px-4'>
            <InputGroup className="mb-3 px-0">
                <InputGroup.Text>
                    <AiOutlineSearch />
                </InputGroup.Text>
                <FormControl
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Button
                    onClick={handleSearch}
                    variant="outline-secondary">
                    Search
                </Button>
                <Button
                    onClick={handleRefresh}
                    variant="outline-secondary"
                    role={'button'}
                >
                    Refresh
                </Button>
            </InputGroup>

            <Form.Label>Limit Search Data</Form.Label>

            <Form.Select
                aria-label="Results"
                data-testid="select"
                value={limit}
                onChange={e => setLimit(e.target.value)}
            >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="40">40</option>
            </Form.Select>

        </Row>
    );
}

export default QueryInput;