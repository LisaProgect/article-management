import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../shared/const/app-keys.const";
import { articleService } from "../../../services/article/article.service";
import { ArticleRss } from "../../../services/article/article.type";
import { toast } from "react-toastify";
import { Dispatch, SetStateAction, useState } from "react";

type UseHomeReturn = {
  RSSArticle?: ArticleRss[] | [];
  isLoadingRSS: boolean;
  setUrl: Dispatch<SetStateAction<string>>;
};

export const useRss = (): UseHomeReturn => {
  const [url, setUrl] = useState("");

  const { data: RSSArticle, isLoading: isLoadingRSS } = useQuery(
    [QUERY_KEYS.RSS, url],
    () => articleService.getRss({ url }),
    {
      onError: () => toast.error("error"),
      enabled: url !== "",
    }
  );
  return {
    RSSArticle,
    isLoadingRSS,
    setUrl,
  };
};
