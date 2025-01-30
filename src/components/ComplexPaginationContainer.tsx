import { useLoaderData, useLocation } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";
import {
  constructUrl,
  constructPrevOrNextUrl,
  type OrdersResponse,
} from "../utils";
import React from "react";

function ComplexPaginationContainer() {
  const { meta } = useLoaderData() as OrdersResponse;
  const { pageCount, page } = meta.pagination;
  const { search, pathname } = useLocation();

  if (pageCount < 2) return null;
  const constructButton = ({
    pageNumber,
    isActive,
  }: {
    pageNumber: number;
    isActive: boolean;
  }): React.ReactNode => {
    const url = constructUrl({ pageNumber, search, pathname });
    return (
      <>
        <PaginationItem key={pageNumber}>
          <PaginationLink to={url} isActive={isActive} size={undefined}>
            {pageNumber}
          </PaginationLink>
        </PaginationItem>
      </>
    );
  };

  const constructEllipsis = (key: string): React.ReactNode => {
    return (
      <PaginationItem key={key}>
        <PaginationEllipsis />
      </PaginationItem>
    );
  };

  const renderPagination = () => {
    const pages: React.ReactNode[] = [];
    // first page
    pages.push(constructButton({ pageNumber: 1, isActive: page === 1 }));

    // ellipsis

    if (page < pageCount - 1) {
      pages.push(constructEllipsis("dots-1"));
    }

    // active page
    if (page !== 1 && page !== pageCount) {
      pages.push(constructButton({ pageNumber: page, isActive: true }));
    }

    // last page
    pages.push(
      constructButton({ pageNumber: pageCount, isActive: page === pageCount })
    );

    return pages;
  };

  const { prevUrl, nextUrl } = constructPrevOrNextUrl({
    currentPage: page,
    pageCount,
    search,
    pathname,
  });

  return (
    <Pagination className="mt-16">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={prevUrl} size="" />
        </PaginationItem>
        {renderPagination()}
        <PaginationItem>
          <PaginationNext to={nextUrl} size="" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default ComplexPaginationContainer;
