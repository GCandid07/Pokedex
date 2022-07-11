import { BTN } from "./Styles";

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

export const Pagination = ({ limit, total, offset, setOffset }) => {

  const currentPage = offset ? (offset / limit) + 1 : 1;
  const pages = Math.ceil(total / limit);
  const firstPage = Math.max(currentPage - MAX_LEFT, 1); 

  const onPageChange = (page) => {
    setOffset((page - 1) * limit)
  }

  return (
    <ul>
      <li>
        <BTN 
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Anterior
        </BTN>
      </li>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + firstPage)
        .map((page) => (
          <li key={page}>
            <BTN bg={page && page === currentPage ? 'transparent' : '#fff'} onClick={() => onPageChange(page)}>
              {page}
            </BTN>
          </li>
        ))
      }
      <li>
        <BTN 
          disabled={currentPage === pages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Próxima
        </BTN>
      </li>
      <p> Total: {pages}</p>
    </ul>
  );
};
