import * as React from "react";
import { Dialog } from "@mui/material";
import Form from "./form.component";
import {
  Article,
  UpdateArticlesReq,
} from "../../../services/article/article.type";

type UpdateDialogProps = {
  handleClose: () => void;
  open: boolean;
  article: Article;
  handleUpdate: (value: UpdateArticlesReq) => void;
};

const UpdateDialog = ({
  handleClose,
  open,
  article,
  handleUpdate,
}: UpdateDialogProps) => {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <Form
          type="update"
          handleClose={handleClose}
          initialValues={{
            title: article.title,
            description: article.description,
          }}
          onSubmit={(values) => {
            handleClose();
            handleUpdate({ ...values, id: article.id });
          }}
        />
      </Dialog>
    </div>
  );
};

export default UpdateDialog;
