"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { deleteAxios } from "./AuthForm/AxiosLogic";


interface AlertDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AlertDialog({ open, setOpen }: AlertDialogProps) {
  const handleClose = () => setOpen(false);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        تأكيد حذف الحساب
      </DialogTitle>

      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          هل أنت متأكد من حذف حسابك؟ لا يمكن التراجع عن هذا الإجراء.
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>إلغاء</Button>
        <Button color="error" autoFocus
        onClick={async (e)=>{
          e.preventDefault();
          try {
           const date= localStorage.getItem("user");
           const userId= date ? JSON.parse(date).id : null;
            await deleteAxios({ id: userId });
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            window.location.reload();
          }catch (error: any) {
  console.log("STATUS:", error.response?.status);
  console.log("DATA:", error.response?.data);
}
        }}>
          حذف
        </Button>
      </DialogActions>
    </Dialog>
  );
}
