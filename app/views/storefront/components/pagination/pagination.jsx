import React from 'react';

const Pagination = (props) => {
       return(
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className={"page-item " + (props.prevPage ? "" : "disabled" )}>
                <a className="page-link" href={props.baseUrl + props.prevPage}>
                    Previous
                </a>
              </li>

              <li className="page-item active">
                <a className="page-link">
                  {props.currentPage}
                </a>
              </li>

              <li className={"page-item " + (props.nextPage ? "" : "disabled" )}>
                <a className="page-link" href={props.baseUrl + props.nextPage}>
                    Next
                </a>
              </li>
            </ul>
          </nav>
    );
}

export default Pagination;