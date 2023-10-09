import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../shared/hooks/use-auth.hook";
import { RouterKeys } from "../../router/keys";

export const ProtectedLayout = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={RouterKeys.ROOT} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};
