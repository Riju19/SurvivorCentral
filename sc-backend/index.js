const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const db = require("./models/");

const cors = require("cors")
app.use(cors())
app.use(bodyParser.json());

function success(res, payload) {
  return res.status(200).json(payload);
}

app.get("/getResponses", async (req, res, next) => {
  try {
    const responses = await db.Response.find({});
    return success(res, responses);
  } catch (err) {
    next({ status: 400, message: "failed to get responses" });
  }
});

app.post("/postResponses", async (req, res, next) => {
  try {
    const response = await db.Response.create(req.body);
    return success(res, response);
  } catch (err) {
    next({ status: 400, message: "failed to create response" });
  }
});

app.put("/updateResponse/:id", async (req, res, next) => {
  try {
    const response = await db.Response.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return success(res, response);
  } catch (err) {
    next({ status: 400, message: "failed to update response" });
  }
});
app.delete("/deleteResponse/:id", async (req, res, next) => {
  try {
    await db.Response.findByIdAndRemove(req.params.id);
    return success(res, "response deleted!");
  } catch (err) {
    next({ status: 400, message: "failed to delete response" });
  }
});

app.use((err, req, res, next) => {
  return res.status(err.status || 400).json({
    status: err.status || 400,
    message: err.message || "there was an error processing request",
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
