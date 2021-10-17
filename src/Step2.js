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
  userCity: yup
    .string()
    .matches(/^([^0-9]*)$/, "Это поле не должно содержать цифры")
    .required("Пожалуйста заполните это поле"),
  userStreet: yup.string().required("Пожалуйста заполните это поле"),
  houseNumber: yup.string().required("Пожалуйста заполните это поле"),
});

const Step2 = () => {
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
    history.push("/step3");
    setValues(data);
  };
  const goBack = () => {
    history.push("/");
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Шаг: 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="userCity"
          type="text"
          label="Город"
          name="userCity"
          error={!!errors.userCity}
          helperText={errors?.userCity?.message}
        />
        <Input
          ref={register}
          id="userStreet"
          type="text"
          label="Улица"
          name="userStreet"
          error={!!errors.userStreet}
          helperText={errors?.userStreet?.message}
        />
        <Input
          ref={register}
          id="houseNumber"
          type="text"
          label="Дом"
          name="houseNumber"
          error={!!errors.houseNumber}
          helperText={errors?.houseNumber?.message}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
      <PrimaryButton onClick={goBack}>Back</PrimaryButton>
    </MainContainer>
  );
};

export default Step2;
