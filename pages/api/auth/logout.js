export default (req, res) => {
  const path = `${
    process.env.KEYCLOAK_ISSUER
  }/protocol/openid-connect/logout?redirect_uri=${encodeURIComponent(
    process.env.NEXTAUTH_URL
  )}`;

  res.status(200).json({ path });
};
