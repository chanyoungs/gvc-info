import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import React, { useState } from "react";

export const AlertCustom = () => {
  const [open, setOpen] = useState(true);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <Alert
        severity="info"
        onClose={() => {
          setOpen(false);
        }}
      >
        [2021.12.25] 연말과 새해 연초 기간 동안 모임 쉽니다. 다시 시작하게 되면
        공지 업데이트 하겠습니다.
      </Alert>
    </Snackbar>
  );
};
