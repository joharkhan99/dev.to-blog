import express from "express";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import cookieSession from "cookie-session";
dotenv.config();
import GoogleStrategy from "passport-google-oauth20";

// ----------------------------
// ----------------------------
const googlestrategy = GoogleStrategy.Strategy;

passport.use(
  new googlestrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    function (accessToken, refreshToken, profile, callback) {
      callback(null, profile);
      console.log(accessToken);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
// ----------------------------
// ----------------------------

const app = express();
app.use(
  cookieSession({
    name: "session",
    keys: ["devto"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
// app.use(express.json());

app.use("/auth", authRoutes);

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

const port = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
