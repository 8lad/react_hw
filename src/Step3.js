import Typography from "@material-ui/core/Typography";
import React from "react";
import Form from "./components/Form";
import { useForm } from "react-hook-form";
import MainContainer from "./components/MainContainer";
import PrimaryButton from "./components/PrimaryButton";
import { useHistory } from "react-router-dom";
import { useData } from "./DataContext";
import Input from "./components/Input";

const Step3 = () => {
  const history = useHistory();
  const { data } = useData();
  const { register, handleSubmit } = useForm({
    defaultValues: {},
    mode: "onBlur",
  });

  const onSubmit = () => {
    history.push("/step4");
  };
  const goBack = () => {
    history.push("/step2");
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Шаг: 3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="userPhoto"
          type="file"
          accept=".png, .jpg, .jpeg"
          name="userPhoto"
          onChange={(e) => {
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
              return (data.files = reader.result);
            };
          }}
        />

        <PrimaryButton>Next</PrimaryButton>
      </Form>
      <PrimaryButton onClick={goBack}>Back</PrimaryButton>
    </MainContainer>
  );
};

export default Step3;
