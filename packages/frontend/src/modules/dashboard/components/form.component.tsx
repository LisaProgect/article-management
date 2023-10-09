import * as React from "react";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import { useFormik } from "formik";
import { DashboardFormValidationSchema } from "../../../shared/validation-schemas/dasboard-form.validation-schema";

type FormProps = {
  type: "create" | "update";
  handleClose: () => void;
  initialValues: { title: string; description: string };
  onSubmit: (value: { title: string; description: string }) => void;
};

const Form = ({ type, handleClose, initialValues, onSubmit }: FormProps) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: DashboardFormValidationSchema,
  });
  return (
    <Box
      onSubmit={formik.handleSubmit}
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: "25ch",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <DialogTitle>
        {type === "create" ? "Create" : "Update"} Article
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="title"
          label="Title"
          type="text"
          fullWidth
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          value={formik.values.title}
          variant="standard"
          helperText={formik.touched.title && formik.errors.title}
        />
        <Textarea
          name="description"
          placeholder="Description"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          value={formik.values.description}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">{type === "create" ? "Create" : "Update"}</Button>
      </DialogActions>
    </Box>
  );
};

export default Form;
