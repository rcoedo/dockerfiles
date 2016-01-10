import RootDev from "app/containers/root.dev";
import RootProd from "app/containers/root.prod";

export default process.env.NODE_ENV === "production" ? RootProd : RootDev;
