const router = require("express");
const path = require("path");

const routers = router();

routers.get("/login", (_, res) => res.oidc.login({ returnTo: "/" }));
routers.get("/me", (req, res) => res.json(req.oidc.user));
routers.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});
routers.get("/health", (_, res) => {
  res.status(200).json({ message: "Running", status: 200 });
});
routers.post("/logout", (_, res) => {
  const cookieOptions = {
    path: "/",
    sameSite: "lax",
    httpOnly: true,
    secure: process.env.NODE_ENV === "prod",
  };

  ["appSession", "appSession.0", "appSession.1"].forEach((name) =>
    res.clearCookie(name, cookieOptions)
  );
  res.oidc.logout({ returnTo: "/" });
});

module.exports = { routers };
