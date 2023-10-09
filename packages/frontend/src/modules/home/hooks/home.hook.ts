import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../shared/const/app-keys.const";
import { articleService } from "../../../services/article/article.service";
import { Article } from "../../../services/article/article.type";
import { Dispatch, SetStateAction, useState } from "react";
import { useDebounce } from "../../../shared/hooks/use-debounce.hook";

type UseHomeReturn = {
  article?: Article[];
  isLoading: boolean;
  metaData?: {
    page?: number;
    totalCountOfPages: number;
  };
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  setSort: Dispatch<SetStateAction<string>>;
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
  sort: string;
};

export const useHome = (): UseHomeReturn => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");

  const debounceValue = useDebounce(search);

  const { data, isLoading } = useQuery(
    [QUERY_KEYS.ATRICLES, page, debounceValue, sort],
    async () =>
      articleService.getArticles({ page, search: debounceValue, sort })
  );

  return {
    article: data?.article,
    metaData: data?.metaData,
    isLoading,
    setPage,
    page,
    setSearch,
    setSort,
    search,
    sort,
  };
};
