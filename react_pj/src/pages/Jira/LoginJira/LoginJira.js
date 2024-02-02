import { Button, Input } from "antd";
import {
  UserOutlined,
  LockOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { signinAction } from "../../../redux/actions/JiraActions";

const schema = yup
  .object({
    email: yup.string().required("Email is required!").email("Email is invalid!"),
    password: yup.string().required("Password is required!").min(6,"Password must have at least 6 characters!"),
  })
  .required();
function LoginJira() {
    const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    dispatch(signinAction(data))
  };
  return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container"
        style={{ height: window.innerHeight }}
      >
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ height: window.innerHeight }}
        >
          <h3 className="text-center">Login</h3>
          <div className="mt-3">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  style={{ minWidth: 300 }}
                  size="large"
                  placeholder="example@gmail.com"
                  prefix={<UserOutlined />}
                  {...field}
                />
              )}
            />
          </div>
          {errors.email ? <strong className="text-danger mt-2">{errors.email?.message}</strong> : ""}
          <div className="mt-3">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  style={{ minWidth: 300 }}
                  size="large"
                  type="password"
                  placeholder="123456"
                  prefix={<LockOutlined />}
                  {...field}
                />
              )}
            />
          </div>
          {errors.password ? <strong className="text-danger mt-2">{errors.password?.message}</strong> : ""}
          <Button
            htmlType="submit"
            size="large"
            style={{
              minWidth: 300,
              backgroundColor: "rgb(102,117,223)",
              color: "#fff",
            }}
            className="mt-5"
          >
            Login
          </Button>

          <div className="social mt-3 d-flex">
            <Button
              type="primary"
              shape="circle"
              icon={<FacebookOutlined />}
              size={"large"}
            ></Button>

            <Button
              style={{ marginLeft: "3px" }}
              type="primary"
              shape="circle"
              icon={<TwitterOutlined />}
              size={"large"}
            ></Button>
          </div>
        </div>
      </form>
  );
}

export default LoginJira;
