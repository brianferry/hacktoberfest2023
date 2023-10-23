import { type Page } from '@playwright/test';
import * as cheerio from 'cheerio';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const lightdomCss = readFileSync(join(__dirname, '../../docs/patterns/trial-center/assets/lightdom.css'), 'utf8');
const accordionExpand = readFileSync(join(__dirname, '../../docs/patterns/trial-center/assets/accordion-expand.js'), 'utf8');
const bundle = readFileSync(join(__dirname, '../../hack-trial-center.min.js'), 'utf8');

export async function trialCenterProxy(page: Page) {
  /** leaving these here for testing purposes */
  // await page.route('https://www.redhat.com/modules/contrib/red_hat_shared_libs/dist/rhds-elements/modules/rh-cta*', route => route.abort())
  // await page.route('https://www.redhat.com/modules/contrib/red_hat_shared_libs/dist/rhds-elements/modules/rh-dialog*', route => route.abort())
  // await page.route('https://www.redhat.com/modules/contrib/red_hat_shared_libs/dist/rhds-elements/modules/pf-icon*', route => route.abort())
  // await page.route('https://www.redhat.com/modules/contrib/webrh/js/webrh.webcomponents.min.js*', route => route.abort())
  await page.route('https://www.redhat.com/en/products/trials', async (route, request) => {
    // Fetch original response.
    const response = await route.fetch();
    // Add a prefix to the title.
    let body = await response.text();
    const $ = cheerio.load(body);
    $('#rhb-main-content > article > div > div.rh-generic--component.one-column > div > style:nth-child(1)').text(lightdomCss)
    $('#rhb-main-content > article > div > div.rh-generic--component.one-column > div > script:nth-child(2)').text(accordionExpand)
    $('#rhb-main-content > article > div > div.rh-generic--component.one-column > div > script:nth-child(3)').text(bundle)
    route.fulfill({
      // Pass all fields from the response.
      response,
      // Override response body.
      body: $.html(),
      // Force content type to be html.
      headers: {
        ...response.headers(),
        'content-type': 'text/html'
      }
    });
  });
  await page.goto('https://www.redhat.com/en/products/trials');
  return page;
}
