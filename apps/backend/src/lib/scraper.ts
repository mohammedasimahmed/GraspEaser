const axios = require('axios');
const cheerio = require('cheerio');

export async function scrape_webpage(url: string) {
  try {
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);

    // Remove script and style tags
    $('script, style, noscript').remove();

    // Extract and clean text
    const text = $('body').text();
    const cleanText = text.replace(/\s+/g, ' ').trim();

    return cleanText;
  } catch (error) {
    return null;
  }
}
