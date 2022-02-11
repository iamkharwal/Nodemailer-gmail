/** @format */

const app = require("./index");

const connect = require("./configs/db");
const port = process.env.PORT || 8000;

app.listen(port, async () => {
  try {
    await connect();
  } catch (error) {
    console.log("error: ", error.message);
  }
  console.log("Listening to port 8000");
});
