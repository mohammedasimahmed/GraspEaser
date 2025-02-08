import puppeteer from "puppeteer";
import cheerio from "cheerio";

export async function scrape_webpage(url: string) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle2" });

  const html = await page.content();

  const $ = cheerio.load(html);

  let articleText = $("article").text().trim() || $("body").text().trim();
  articleText = articleText.replace(/\s+/g, " ").trim();

  await browser.close();

  return articleText;
}
