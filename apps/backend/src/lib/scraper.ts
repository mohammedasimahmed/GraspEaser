import puppeteer from "puppeteer";
import * as cheerio from "cheerio";

export async function scrape_webpage(url: string) {
  const browser = await puppeteer.launch({ headless: true, timeout: 30000 });
  const page = await browser.newPage();

  let maxTries = 10;
  // while (maxTries--) {
  await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
  // }

  const html = await page.content();

  const $ = cheerio.load(html);

  let articleText = $("body").text().trim();
  articleText = articleText.replace(/\s+/g, " ").trim();

  await browser.close();

  return articleText;
}
