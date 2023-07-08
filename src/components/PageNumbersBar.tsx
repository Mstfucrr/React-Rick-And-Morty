import { useState, useEffect } from "react";
import { Info } from "../Api/Schemas/main";
import pageBackArrow from "../assets/images/pageBackArrow.svg";
import pageForwardArrow from "../assets/images/pageForwardArrow.svg";


export const PageButtons = (props: { page: number, setPage: (page: number) => void, info: Info }) => {

    const [page, setPage] = useState(props.page);
    const [error, setError] = useState(false);
    const [info, setInfo] = useState<Info>(undefined!);

    useEffect(() => {
        setPage(props.page);
    }, [props.page]);

    useEffect(() => {
        setInfo(props.info);
    }, [props.info]);

    const handlePageChange = (page: number) => {
        props.setPage(page);
    }

    const handlePageBack = () => {
        if (page > 1) {
            setPage(page - 1);
            handlePageChange(page - 1);
        }
    }

    const handlePageForward = () => {
        if (page < info.pages) {
            setPage(page + 1);
            handlePageChange(page + 1);
        }
    }


    const renderPageNumbers = () => {
        const pageNumbers = [];
        if (info) {
            if (info.pages <= 3) {
                for (let i = 1; i <= info.pages; i++) {
                    pageNumbers.push(i);
                }
            }
            else {
                if (page <= 2) {
                    for (let i = 1; i <= 5; i++) {
                        pageNumbers.push(i);
                    }
                    pageNumbers.push('...');
                    pageNumbers.push(info.pages);
                } else if (page >= info.pages - 3) {
                    pageNumbers.push(1);
                    pageNumbers.push('...');
                    for (let i = info.pages - 4; i <= info.pages; i++) {
                        pageNumbers.push(i);
                    }
                } else {
                    pageNumbers.push(1);
                    pageNumbers.push('...');
                    for (let i = page - 1; i <= page + 1; i++) {
                        pageNumbers.push(i);
                    }
                    pageNumbers.push('...');
                    pageNumbers.push(info.pages);
                }
            }


            return pageNumbers.map((number, index) => {
                return (
                    <li className={`page-item ${number === page ? 'active' : ''}`} key={index}>
                        {number === '...' ? (
                            <span className="page-link"
                                style={{
                                    fontWeight : 600,
                                    border : "0",
                                }}
                            >...</span>
                        ) : (
                            <div className="p-2" onClick={() => handlePageChange(number as number)} style={{
                                backgroundColor: number === page ? "#D9D9D9" : "white",
                                borderRadius: "24px",
                                width: "40px",
                                textAlign: "center",
                                fontWeight: 600,
                                fontSize: "16px",
                                cursor: "pointer",
                                           
                            }}>
                        {/* <button className="page-link" onClick={() => handlePageChange(number as number)}>{number}</button> */}
                        {number}

                    </div>
                )
            }
                    </li >
                );
            });
        }
    }


return (
    <div className="d-flex justify-content-center mt-4">
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {page > 1 && (
                    <li className="page-item">
                        <img
                            src={pageBackArrow}
                            alt="page back arrow"
                            onClick={handlePageBack}
                            className="page-link"
                            style={{
                                borderRadius: "20px",
                                width: "35px",
                                height: "35px",
                                border: "0"
                            }}
                        />
                    </li>
                )}

                {renderPageNumbers()}


                {info && page !== info.pages && (
                    <li className="page-item">
                        <img
                            src={pageForwardArrow}
                            alt="page forward arrow"
                            onClick={handlePageForward}
                            className="page-link"
                            style={{
                                borderRadius: "20px",
                                width: "35px",
                                height: "35px",
                                border: "0"
                            }}
                        />
                    </li>
                )}
            </ul>
        </nav>
    </div>
)
}

