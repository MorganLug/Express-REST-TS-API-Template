import app from "src/app";

const port = process.env.PORT || 8080;

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
