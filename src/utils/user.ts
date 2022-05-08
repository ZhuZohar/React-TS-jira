import { useEffect } from "react";
import { cleanObject } from ".";
import { User } from "../types/user";
import { useHttp } from "./http";
import { useAsync } from "./use-async";

export const useUsers = (param?: Partial<User>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<User[]>();

  useEffect(() => {
    run(client("users", { data: cleanObject(param || {}) }));
  }, [client, param, run]);

  return result;
};
