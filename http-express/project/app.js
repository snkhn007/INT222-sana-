const express = require("express");
const app = express();

const userRoutes = require("./routes/userRouter");
const cartRoutes = require("./routes/cartRouter");

app.use(express.json());

// Mount routes
app.use("/user", userRoutes);
app.use("/cart", cartRoutes);

app.listen(4003, () => {
    console.log("Server running on http://localhost:4003");
});