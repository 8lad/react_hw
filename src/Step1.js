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
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Имя не должно содержать цифры")
    .required("Пожалуйста заполните это поле"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Фамилия не должна содержать цифры")
    .required("Пожалуйста заполните это поле"),
  email: yup
    .string()
    .email("Заполните пожалуйста почту в корректном формате")
    .required("Это поле должно быть заполнено"),
});

const Step1 = () => {
  const history = useHistory();
  const { data, setValues } = useData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    history.push("/step2");
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Шаг: 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="firstName"
          type="text"
          label="Имя"
          name="firstName"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          ref={register}
          id="lastName"
          type="text"
          label="Фамилия"
          name="lastName"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <Input
          ref={register}
          id="email"
          type="email"
          label="Email"
          name="email"
          required
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step1;
