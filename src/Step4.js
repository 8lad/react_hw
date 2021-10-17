import Typography from "@material-ui/core/Typography";
import React from "react";
import MainContainer from "./components/MainContainer";
import Form from "./components/Form";
import Input from "./components/Input";
import { useForm } from "react-hook-form";
import PrimaryButton from "./components/PrimaryButton";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useData } from "./DataContext";

const schema = yup.object().shape({
  mainPassword: yup
    .string()
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
      "Это поле должно содержать от 6 до 16 символов, включая цифры, буквы и спец символы (!@#$%^&*)"
    )
    .required("Пожалуйста заполните это поле"),
  controlPassword: yup
    .string()
    .oneOf([yup.ref("mainPassword"), null], "Пароли должны совпадать"),
  // yup.string().required("Пожалуйста заполните это поле"),
});

const Step4 = () => {
  const history = useHistory();
  const { data, setValues } = useData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userCity: data.userCity,
      userStreet: data.userStreet,
      houseNumber: data.houseNumber,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    history.push("/result");
    setValues(data);
  };
  const goBack = () => {
    history.push("/step3");
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Шаг: 4
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="mainPassword"
          type="password"
          label="Пароль"
          name="mainPassword"
          error={!!errors.mainPassword}
          helperText={errors?.mainPassword?.message}
        />
        <Input
          ref={register}
          id="controlPassword"
          type="password"
          label="Подтвердите пароль"
          name="controlPassword"
          error={!!errors.controlPassword}
          helperText={errors?.controlPassword?.message}
        />

        <PrimaryButton>Next</PrimaryButton>
      </Form>
      <PrimaryButton onClick={goBack}>Back</PrimaryButton>
    </MainContainer>
  );
};

export default Step4;
