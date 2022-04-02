import { useCallback } from 'react';
import { Pagination } from 'react-bootstrap';

function Paginate({ artworks, setPage }) {

    const totalPages = artworks?.pagination?.total_pages;
    const currentPage = artworks?.pagination?.current_page;

    const paginationHandler = useCallback((e, i) => {
        setPage(i + 1);
    }, []);

    const toNextPage = useCallback(() => {
        if (currentPage < totalPages) {
            setPage(currentPage + 1);
        }
    }, [currentPage, totalPages]);

    const toPreviousPage = useCallback(() => {
        if (currentPage > 1) {
            setPage(currentPage - 1);
        }
    }, [currentPage]);



    return (
        <div className='position-fixed bottom-0 start-0 end-0 p-3 d-flex bg-body justify-content-center'>
            <Pagination>
                <Pagination.Prev onClick={toPreviousPage} />
                {
                    [...Array(totalPages).keys()]
                        .slice((currentPage < 3 ? 0 : currentPage - 3), (currentPage < totalPages - 3 ? currentPage + 2 : totalPages))
                        .map((x) =>
                            <Pagination.Item
                                key={x}
                                active={currentPage === x + 1}
                                onClick={(e) => paginationHandler(e, x)}
                            >
                                {x + 1}
                            </Pagination.Item>
                        )
                }
                <Pagination.Next onClick={toNextPage} />
            </Pagination>

        </div>
    );
}

export default Paginate;