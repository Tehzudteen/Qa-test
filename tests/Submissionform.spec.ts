import { test, expect } from '@playwright/test';

test('RF-001', async ({ page }) => {
  await page.goto('https://zeus-ai-xi.vercel.app/landing');
  await page.getByRole('button', { name: 'ดูแพ็กเกจอื่นๆ' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'ใช้เลย' }).first().click();
  await page.getByRole('textbox', { name: 'ชื่อบริษัท/ร้านค้า' }).click();
  await page.getByRole('textbox', { name: 'ชื่อบริษัท/ร้านค้า' }).fill('ร้านเทสระบบ จำกัด');
  await page.getByRole('textbox', { name: 'ประเภทธุรกิจ' }).fill('ขายเสื้อผ้าออนไลน์');
  await page.getByRole('textbox', { name: 'ผู้ติดต่อหลัก' }).fill('สมชาย ทดสอบ');
  await page.getByRole('textbox', { name: 'อีเมลติดต่อ' }).fill('test@example.com');
  await page.getByRole('textbox', { name: 'เบอร์โทรศัพท์' }).fill('0812345678');
  await page.getByRole('textbox', { name: 'เวลาเริ่มให้บริการ' }).fill('09:18');
  await page.getByRole('checkbox', { name: 'Facebook' }).check();
  await page.getByRole('button', { name: 'ถัดไป' }).click();
  
});

test('RF-002', async ({ page }) => {
  await page.goto('https://zeus-ai-xi.vercel.app/landing');
  await page.getByRole('button', { name: 'ดูแพ็กเกจอื่นๆ' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'ใช้เลย' }).first().click();
  await page.getByRole('button', { name: 'ถัดไป' }).click();

});



test('RF-003', async ({ page }) => {
  await page.goto('https://zeus-ai-xi.vercel.app/landing');
  await page.getByRole('button', { name: 'ดูแพ็กเกจอื่นๆ' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'ใช้เลย' }).first().click();
  await page.getByRole('textbox', { name: 'ชื่อบริษัท/ร้านค้า' }).click();
  await page.getByRole('textbox', { name: 'ชื่อบริษัท/ร้านค้า' }).fill('ร้านเทสระบบ จำกัด');
  await page.getByRole('textbox', { name: 'ประเภทธุรกิจ' }).fill('ขายเสื้อผ้าออนไลน์');
  await page.getByRole('textbox', { name: 'ผู้ติดต่อหลัก' }).fill('สมชาย ทดสอบ');
  await page.getByRole('textbox', { name: 'อีเมลติดต่อ' }).fill('testexample.com');
  await page.getByRole('textbox', { name: 'เบอร์โทรศัพท์' }).fill('0812345678');
  await page.getByRole('textbox', { name: 'เวลาเริ่มให้บริการ' }).fill('09:18');
  await page.getByRole('checkbox', { name: 'Facebook' }).check();
  await page.getByRole('button', { name: 'ถัดไป' }).click();
  await expect(
    page.getByText('รูปแบบอีเมลไม่ถูกต้อง หรือยาวเกินกำหนด (≤ 320 ตัวอักษร)', { exact: true })
  ).toBeVisible();

});


test('RF-004', async ({ page }) => {
  await page.goto('https://zeus-ai-xi.vercel.app/landing');
  await page.getByRole('button', { name: 'ดูแพ็กเกจอื่นๆ' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'ใช้เลย' }).first().click();
  await page.getByRole('textbox', { name: 'ชื่อบริษัท/ร้านค้า' }).click();
  await page.getByRole('textbox', { name: 'ชื่อบริษัท/ร้านค้า' }).fill('ร้านเทสระบบ จำกัด');
  await page.getByRole('textbox', { name: 'ประเภทธุรกิจ' }).fill('ขายเสื้อผ้าออนไลน์');
  await page.getByRole('textbox', { name: 'ผู้ติดต่อหลัก' }).fill('สมชาย ทดสอบ');
  await page.getByRole('textbox', { name: 'อีเมลติดต่อ' }).fill('test@example.com');
  await page.getByRole('textbox', { name: 'เบอร์โทรศัพท์' }).fill('08123');
  await page.getByRole('textbox', { name: 'เวลาเริ่มให้บริการ' }).fill('09:18');
  await page.getByRole('checkbox', { name: 'Facebook' }).check();
  await page.getByRole('button', { name: 'ถัดไป' }).click();
  await expect(
    page.getByText('ต้องเป็นตัวเลข 10 หลัก', { exact: true })
  ).toBeVisible();

});

test('RF-005', async ({ page }) => {
  await page.goto('https://zeus-ai-xi.vercel.app/landing');
  await page.getByRole('button', { name: 'ดูแพ็กเกจอื่นๆ' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'ใช้เลย' }).first().click();
  await page.getByRole('textbox', { name: 'ชื่อบริษัท/ร้านค้า' }).click();
  await page.getByRole('textbox', { name: 'ชื่อบริษัท/ร้านค้า' }).fill('ร้านเทสระบบ จำกัด');
  await page.getByRole('textbox', { name: 'ประเภทธุรกิจ' }).fill('ขายเสื้อผ้าออนไลน์');
  await page.getByRole('textbox', { name: 'ผู้ติดต่อหลัก' }).fill('สมชาย ทดสอบ');
  await page.getByRole('textbox', { name: 'อีเมลติดต่อ' }).fill('test@example.com');
  await page.getByRole('textbox', { name: 'เบอร์โทรศัพท์' }).fill('0812345678');
  await page.getByRole('textbox', { name: 'เวลาเริ่มให้บริการ' }).fill('09:18');
  await page.getByRole('checkbox', { name: 'Line' }).check();
  await page.getByRole('checkbox', { name: 'Website' }).check();
  await page.getByRole('checkbox', { name: 'Facebook' }).check();
  await page.getByRole('checkbox', { name: 'Instagram' }).check();
  await page.getByRole('checkbox', { name: 'โทรศัพท์' }).check();
  await page.getByRole('checkbox', { name: 'อีเมล' }).check();
  await page.getByRole('checkbox', { name: 'หน้าร้าน' }).check();
  await page.getByRole('checkbox', { name: 'อื่นๆ' }).check();
  await page.getByRole('button', { name: 'ถัดไป' }).click();

});
