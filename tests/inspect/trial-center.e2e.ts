import { test } from '@playwright/test';
import { trialCenterProxy } from '../lib/trialCenter.js';

test.describe('proxy', () => {
  test.beforeAll(async () => {
    test.setTimeout(1000000)
  });

  test('trial center', async ({ page }) => {
    await trialCenterProxy(page);
    await new Promise(() => {});
  });
});
