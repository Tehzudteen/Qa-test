import { test, expect } from '@playwright/test';
import type { Page } from '@playwright/test';
import path from 'path';

const companyDetails = {
  companyName: 'Refactored Company',
  businessType: 'Refactored AI',
  contactName: 'Refactor Sirisak',
  email: 'refactor.sirisak@example.com',
  phone: '0801234567',
  serviceTime: '17:50',
  aiName: 'Refactor TestAI',
  welcomeMessage: 'ยินดีต้อนรับจาก Refactor',
};


async function fillAndSkipDataSetup(page: Page): Promise<void> {

  const filePath = path.join(__dirname, '../assets/restaurentMFU1.txt');
  await page.goto('https://zeus-ai-xi.vercel.app/packages', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'ใช้เลย' }).nth(1).click();
  await page.getByRole('textbox', { name: 'ชื่อบริษัท/ร้านค้า' }).fill('testcompany');
  await page.getByRole('textbox', { name: 'ประเภทธุรกิจ' }).fill('ai');

  await page.locator('div:nth-child(3) > .relative.w-full > .inline-flex').click();
  await page.getByRole('textbox', { name: 'ผู้ติดต่อหลัก' }).fill('sirisak vongswat');
  await page.getByRole('textbox', { name: 'อีเมลติดต่อ' }).fill('sirisak@gmail.com');
  await page.getByRole('textbox', { name: 'เบอร์โทรศัพท์' }).fill('0897849276');
  await page.getByRole('textbox', { name: 'เวลาเริ่มให้บริการ' }).fill('17:50');
  await page.getByRole('checkbox', { name: 'Line' }).check();
  await page.getByRole('button', { name: 'ถัดไป' }).click();
  const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.getByRole('button', { name: 'เลือกไฟล์' }).click(),
  ]);
  await fileChooser.setFiles(filePath);


  await expect(page.locator('text=restaurentMFU1.txt')).toBeVisible({ timeout: 10000 });
  await page.getByRole('button', { name: 'ถัดไป' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ AI' }).fill('Testai');
  await page.getByRole('textbox', { name: 'ข้อความต้อนรับ' }).fill('ยินดีต้อนรับ');
  await page.getByRole('button', { name: 'ถัดไป' }).click();

  console.log('✅ Flow setup เสร็จสมบูรณ์ (ถึงหน้าชำระเงิน)');
}




test('PF-001: Success with PayPal payment option', async ({ page }) => {
  await fillAndSkipDataSetup(page);
  await page.getByRole('radio', { name: /PayPal/i }).check();
  await page.getByRole('button', { name: 'ถัดไป' }).click();
});


test('PF-002: Success with default payment option (likely direct transfer)', async ({ page }) => {
  await fillAndSkipDataSetup(page);
  await page.getByRole('button', { name: 'ถัดไป' }).click();
});


test('PF-003: Success with Credit Card payment option and full details', async ({ page }) => {
  await fillAndSkipDataSetup(page);

  await page.getByRole('radio', { name: /Credit\s*Card/i }).check();
  await page.getByRole('textbox', { name: /ชื่อ.*นามสกุล.*บัตร|Name on/i }).fill('Sirisak Vongsawat');
  await page.getByRole('textbox', { name: /Card\s*number/i }).fill('1234 5678 9001 1111');
  await page.getByRole('textbox', { name: /(MM\/YY|Expiry)/i }).fill('09/80');
  await page.getByRole('textbox', { name: /(CVC|CVV)/i }).fill('123');
  await page
    .getByRole('checkbox', {
      name: /ฉันยอมรับ.*ข้อกำหนดและเงื่อนไข.*นโยบายความเป็นส่วนตัว/i,
    })
    .check();

  await page.getByRole('button', { name: /ยืนยันการชำระเงิน|Pay|Submit/i }).click();
});


test('PF-004: Credit Card payment validation test and resubmission', async ({ page }) => {
  await fillAndSkipDataSetup(page);
  await page.getByRole('radio', { name: /Credit\s*Card/i }).check();
  await page.getByRole('button', { name: /ยืนยันการชำระเงิน|Pay|Submit/i }).click();
  await page.getByRole('textbox', { name: /ชื่อ.*นามสกุล.*บัตร|Name on/i }).fill('sirisak vongswat');
  await page.getByRole('textbox', { name: /Card\s*number/i }).fill('1222 2222');
  await page.getByRole('textbox', { name: /(MM\/YY|Expiry)/i }).fill('11/11');
  await page.getByRole('textbox', { name: /(CVC|CVV)/i }).fill('11');
  await page
    .getByRole('checkbox', {
      name: /ฉันยอมรับ.*ข้อกำหนดและเงื่อนไข.*นโยบายความเป็นส่วนตัว/i,
    })
    .check();


  await page.getByRole('button', { name: /ยืนยันการชำระเงิน|Pay|Submit/i }).click();
});
