import puppeteer from "puppeteer";

let browser;

export const getBrowserInstance = async () => {
  if (browser) return browser;
  await (async () => {
    const browserInstance = await puppeteer.launch({
      headless: true,
      timeout: 30000,
    });
    const globalForPrisma = global as unknown as {
      browser: typeof browserInstance;
    };

    globalForPrisma.browser = browserInstance;
  })();

  return browser;
};

export default browser;
