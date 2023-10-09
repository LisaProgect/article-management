import * as React from "react";
import { Dialog } from "@mui/material";
import Form from "./form.component";
import { CreateArticlesReq } from "../../../services/article/article.type";

type CreateDialogProps = {
  handleClose: () => void;
  open: boolean;
  handleCreate: (value: CreateArticlesReq) => void;
};

const CreateDialog = ({
  handleClose,
  open,
  handleCreate,
}: CreateDialogProps) => {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <Form
          type="create"
          handleClose={handleClose}
          initialValues={{ title: "", description: "" }}
          onSubmit={(values) => {
            handleClose();
            handleCreate(values);
          }}
        />
      </Dialog>
    </div>
  );
};

export default CreateDialog;
