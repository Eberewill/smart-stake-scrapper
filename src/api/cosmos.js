const express = require('express');
const puppeteer = require("puppeteer-extra");
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const url = 'https://7nkwv3z5t1.execute-api.us-east-1.amazonaws.com/prod/listData?type=valstats&frequencyNetwork=All&address=cosmosvaloper17mggn4znyeyg25wd7498qxl7r2jhgue8u4qjcq&key=2mwTEDr9zXJH323M&token=1657402061&app=ATOM'
    await puppeteer
      .launch({
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
        ],
      })
      .then(async (browser) => {
        const page = await browser.newPage();
        await page.setViewport({
          width: 1366,
          height: 768,
        });
        page.on("response", async (response) => {
           const mdata = await response.json();
           res.json(mdata);
        });
        await page.goto(url, {
          waitUntil: "load",
          timeout: 0,
        });
      });
    
  } catch (error) {
    res.json({ error: "server error", data: error.message });

  }
});

module.exports = router;
