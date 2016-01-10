import configureStoreDev from "app/store/configure-store.dev";
import configureStoreProd from "app/store/configure-store.prod";

export default process.env.NODE_ENV === "production" ? configureStoreProd : configureStoreDev;
