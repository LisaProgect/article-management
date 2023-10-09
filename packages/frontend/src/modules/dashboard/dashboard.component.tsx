import * as React from "react";
import CreateDialog from "./components/create-dialog.component";
import { Button } from "@mui/material";

import { container, wrapper } from "./dashboard.style";
import { useDashboard } from "./hooks/dashboard.hook";
import Articles from "./components/articles.component";
import { Article } from "../../services/article/article.type";
import UpdateDialog from "./components/update-dialog.component";

const Dashboard: React.FunctionComponent = () => {
  const [open, setOpen] = React.useState(false);
  const [currentArticle, setCurrentArticle] = React.useState<Article | null>(
    null
  );
  const [openUpdateDialog, setOpenUpdateDialog] = React.useState(false);
  const { articles, handlerDelete, handlerCreate, handlerUpdate } =
    useDashboard();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const toggleUpdateDialog = () => setOpenUpdateDialog(!openUpdateDialog);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOnEdit = (item: Article) => {
    toggleUpdateDialog();
    setCurrentArticle(item);
  };

  return (
    <div className={container}>
      <div className={wrapper}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Create Article
        </Button>
        {!!articles && (
          <Articles
            articles={articles}
            onDelete={handlerDelete}
            onEdit={handleOnEdit}
          />
        )}
      </div>
      <CreateDialog
        open={open}
        handleClose={handleClose}
        handleCreate={handlerCreate}
      />
      {currentArticle && (
        <UpdateDialog
          open={openUpdateDialog}
          handleClose={toggleUpdateDialog}
          article={currentArticle}
          handleUpdate={handlerUpdate}
        />
      )}
    </div>
  );
};

export default Dashboard;
