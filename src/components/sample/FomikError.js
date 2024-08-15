import styled from "@emotion/styled";
import { ErrorMessage } from "formik";
import React from "react";
const FormikErrorMsg = ({
  name = "",
  containerClassName = "mt-1 justify-content-end justify-content-lg-start",
  textClassName = "",
  height = "1rem",
}) => {
  const Container = styled("div")`
    height: ${(props) => props.height};
  `;

  return (
    <Container
      height={height}
      className={`${containerClassName} fontFam_nunito d-flex align-items-center w-100  text-danger`}
    >
      <ErrorMessage name={name}>
        {(msg) => (
          <>
            <span
              className={`${textClassName} ms-0 ms-lg-1  lh-sm fs_12 fw_600 fw-semibold`}
            >
              {msg + "!"}
            </span>
          </>
        )}
      </ErrorMessage>
    </Container>
  );
};

export default FormikErrorMsg;
