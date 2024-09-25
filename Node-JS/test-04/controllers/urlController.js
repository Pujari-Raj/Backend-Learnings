const { randomUUID } = require("crypto");
const URL = require("../models/urlModel");

// handleGenerateNewShortURL function
async function handleGenerateNewShortURL(req, resp) {
  const { url } = req.body;

  if (!url) return resp.status(404).json({ error: "Url is required" });

  const shortId = randomUUID();
  console.log(shortId);

    try {
        const newUrl =  await URL.create({
            shortId: shortId,
            redirectURL: url,
            visitHistory: [],
            createdBy: req.user._id
          });
        
          // return resp.status(201).json({ id: newUrl.shortId });
          return resp.render("home", {
            id: shortId,
          })
    } catch (error) {
        console.error("Error creating short URL:",error)
        return resp.status(500).json({error: "Internal Server error"})
    }
}

// handleGetAnalytics function
async function handleGetAnalytics(req, resp){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return resp.status(200).json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    })
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetAnalytics
};
