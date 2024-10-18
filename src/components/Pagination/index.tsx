import { PaginationContainer, PageButton } from "./styles";

interface PaginationProps {
  totalTasks: number;
  tasksPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export function Pagination({ totalTasks, tasksPerPage, currentPage, setCurrentPage }: PaginationProps){
    const totalPages = Math.ceil(totalTasks / tasksPerPage);
    return (
      <PaginationContainer>
        {Array.from({ length: totalPages }, (_, index) => (
          <PageButton
            key={index}
            isActive={currentPage === index + 1}
            disabled={currentPage === index + 1}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </PageButton>
        ))}
      </PaginationContainer>
    );
}