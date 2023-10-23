import { expect, test } from '@playwright/test';
import { trialCenterProxy } from '../lib/trialCenter.js';

test.describe('trial center', () => {
  test('trial center', async ({ page }) => {
    const errors: Array<string> = [];
    page.on('pageerror', msg => {
      errors.push(msg.message);
    });
    await trialCenterProxy(page);
    await page.locator('.rhpt-discover-band a[pay-as-you-go-trigger]').click();
    await new Promise(res => setTimeout(res, 2000));
    // should contain top level page errors
    expect(errors).toStrictEqual([]);
    // ensure #pay-as-you-go-listing anchor is present
    expect(await page.locator('#pay-as-you-go-listing').count()).toEqual(1);
  });
});
