import Hapi from "@hapi/hapi";
import { bookRoutes } from "./routes/bookRoutes";

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.route(bookRoutes);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

init().catch((error) => {
  console.log(error);
  process.exit(1);
});
