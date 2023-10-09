import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../../shared/hooks/use-auth.hook";
import { QUERY_KEYS } from "../../../shared/const/app-keys.const";
import { authService } from "../../../services/auth/auth.service";
import { AuthParam } from "../auth.type";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { RouterKeys } from "../../../router/keys";

type UseAuthComponentReturn = {
  handleLogin: (param: AuthParam) => void;
};

export const useAuthComponent = (): UseAuthComponentReturn => {
  const { login } = useAuth();
  const location = useLocation();

  const mutationLogin = useMutation(
    [QUERY_KEYS.LOGIN],
    async (param: AuthParam) => authService.singIn(param),
    {
      onSuccess: (data) => {
        login(data.jwt);
      },
      onError: (error: unknown) => {
        if (error?.response?.data?.statusCode === 400) {
          toast.error("invalid credentials");
        }
      },
    }
  );

  const mutationRegister = useMutation(
    [QUERY_KEYS.REGISTER],
    async (param: AuthParam) => authService.singUp(param),
    {
      onSuccess: (data) => {
        login(data.jwt);
      },
      onError: (error: unknown) => {
        if (error?.response?.data?.statusCode === 400) {
          toast.error("invalid credentials");
        }
      },
    }
  );

  const handleLogin = (param: AuthParam) => {
    if (location.pathname === RouterKeys.LOGIN) {
      mutationLogin.mutate(param);
    }
    if (location.pathname === RouterKeys.REGISTER) {
      mutationRegister.mutate(param);
    }
  };

  return {
    handleLogin,
  };
};
