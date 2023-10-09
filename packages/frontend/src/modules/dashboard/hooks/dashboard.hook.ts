import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../shared/const/app-keys.const";
import { toast } from "react-toastify";
import { articleService } from "../../../services/article/article.service";
import {
  Article,
  CreateArticlesReq,
  UpdateArticlesReq,
} from "../../../services/article/article.type";

type UseDashboardReturn = {
  articles?: Article[] | [];
  isLoading: boolean;
  handlerDelete: (id: string) => void;
  handlerCreate: (value: CreateArticlesReq) => void;
  handlerUpdate: (value: UpdateArticlesReq) => void;
};

export const useDashboard = (): UseDashboardReturn => {
  const token = localStorage.getItem("TOKEN");
  const queryClient = useQueryClient();

  const mutationArticleDelete = useMutation(
    [QUERY_KEYS.ARTICLES],
    async (id: string) => articleService.deleteArticle(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ARTICLES] });
        toast.success("success");
      },
      onError: () => {
        toast.error("error");
      },
    }
  );

  const mutationArticleCreate = useMutation(
    [QUERY_KEYS.ARTICLES],
    async (values: CreateArticlesReq) => articleService.createArticle(values),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ARTICLES] });
        toast.success("success");
      },
      onError: () => {
        toast.error("error");
      },
    }
  );

  const mutationArticleUpdate = useMutation(
    [QUERY_KEYS.ARTICLES],
    async (values: UpdateArticlesReq) => articleService.updateArticle(values),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ARTICLES] });
        toast.success("success");
      },
      onError: () => {
        toast.error("error");
      },
    }
  );

  const { data, isLoading } = useQuery(
    [QUERY_KEYS.ARTICLES],
    async () => articleService.getArticlesByUser(),
    {
      onError: () => {
        toast.error("error");
      },
      enabled: !!token,
    }
  );

  const handlerDelete = (id: string) => {
    mutationArticleDelete.mutate(id);
  };

  const handlerCreate = (value: CreateArticlesReq) => {
    mutationArticleCreate.mutate(value);
  };

  const handlerUpdate = (value: UpdateArticlesReq) => {
    mutationArticleUpdate.mutate(value);
  };

  return {
    articles: data,
    isLoading,
    handlerDelete,
    handlerCreate,
    handlerUpdate,
  };
};
