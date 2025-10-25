import { Router } from "express";
import { get200 } from "../components/getInitial";

const mainRoute = Router();

mainRoute.route("/").get(get200);

export default mainRoute;
