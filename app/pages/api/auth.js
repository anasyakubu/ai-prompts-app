const { getAuth } = require("@clerk/nextjs/server");

export default function handler(req, res) {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // retrieve data from your database

  res.status(200).json({});
}
