const express = require("express");
const path = require("path");
const { auth, requiresAuth } = require("express-openid-connect");
const app = express();
const { routers } = require("./routes/routes");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const oidcConfig = {
  issuerBaseURL: process.env.AUTHENTIK_ISSUER_BASE_URL,
  baseURL: process.env.AUTHENTIK_BASE_URL,
  clientID: process.env.AUTHENTIK_CLIENT_ID,
  clientSecret: process.env.AUTHENTIK_CLIENT_SECRET,
  secret: process.env.SESSION_SECRET,
  authRequired: true,
  idpLogout: true,
  authorizationParams: {
    response_type: "code",
    scope: "openid profile email",
  },
};

app.use(auth(oidcConfig));
app.use("/", requiresAuth(), routers);
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
