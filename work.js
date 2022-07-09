const puppeteer = require("puppeteer-extra");

//const url =
const urp = 'https://7nkwv3z5t1.execute-api.us-east-1.amazonaws.com/prod/listData?type=valstats&frequencyNetwork=W&address=cosmosvaloper17mggn4znyeyg25wd7498qxl7r2jhgue8u4qjcq&key=2mwTEDr9zXJH323M&token=1657376822&app=ATOM'

async function StartScraping(url) {
    var data 
  await puppeteer
    .launch({
      headless: true,
    })
    .then(async (browser) => {
      const page = await browser.newPage();

      await page.setViewport({
        width: 1366,
        height: 768,
      });

      page.on("response", async (response) => {
            console.log(await response.json());
          // data = await response.json()
      });

      await page.goto(url, {
        waitUntil: "load",
        timeout: 0,
      });
    });

    //console.log(data)
    return data
}

StartScraping(urp)