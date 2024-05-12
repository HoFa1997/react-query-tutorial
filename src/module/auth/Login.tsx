"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, CardContent, Stack, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { LoginSchema, LoginSchemaType } from "./schema";
import { useRouter } from "next/navigation";

export const Login = () => {
  // TODO: here write login hook

  const { replace } = useRouter();

  const { handleSubmit, control } = useForm<LoginSchemaType>({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: "admin@admin.com",
      password: "admin",
    },
  });

  const submit = handleSubmit(({ email, password }) => {});

  return (
    <Stack
      height="90vh"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Card>
        <CardContent>
          <form onSubmit={submit} autoComplete="off">
            <Stack spacing={2} minWidth={400}>
              <Controller
                control={control}
                name="email"
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    autoFocus={true}
                    autoComplete="off"
                    error={!!error}
                    helperText={error?.message ?? " "}
                    label="Email"
                    {...field}
                  />
                )}
              />

              <Controller
                control={control}
                name="password"
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    autoFocus={true}
                    autoComplete="off"
                    error={!!error}
                    helperText={error?.message ?? " "}
                    label="Password"
                    {...field}
                  />
                )}
              />

              <Button type="submit" variant="contained">
                Login
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Stack>
  );
};
