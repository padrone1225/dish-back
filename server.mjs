import express from "express";
const app = express();
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";

app.use(bodyParser.json());
app.use(cors());

app.get("/recipes", async (req, res) => {
  axios
    .get(
      "https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes"
    )
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post("/recipes", async (req, res) => {
  console.log(req.body);
  if (req.body.id) {
    axios
      .get(
        `https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes/${req.body.id}`
      )
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    axios
      .post(
        `https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes`,
        req.body
      )
      .then((response) => {
        console.log(response.data);
        res.status(200).send(response.data);
      })
      .catch((err) => {
        res.send(err);
      });
  }
});

app.post("/recipes", async (req, res) => {
  console.log(req.body);
  axios
    .get(
      `https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes/${req.body.id}`
    )
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/number", async (req, res) => {
  axios
    .get(
      "https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes/number"
    )
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
