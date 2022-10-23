import { CommonActions } from "@react-navigation/native";
import axios from "axios";
import { common } from "./Common";

export const ClientHttp = axios.create({
  baseURL: common.baseUrl,
});
