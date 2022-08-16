import { useContext } from "react";

import {
  LoginUserContext,
  LoginUserContextType
} from "../provider/LoginUserProvider";

export const userLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
