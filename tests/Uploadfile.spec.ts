import { test, expect } from '@playwright/test';
import path from 'path';

test('UF-001', async ({ page }) => {
    await page.goto('https://zeus-ai-xi.vercel.app/landing');
    await page.getByRole('button', { name: 'ดูแพ็กเกจอื่นๆ' }).click();
    await page.waitForTimeout(3000);
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

    const filePath = path.resolve(__dirname, '../assets/test.txt');
    const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.getByRole('button', { name: 'เลือกไฟล์' }).click(),
    ]);

    await page.waitForTimeout(5000);
    await fileChooser.setFiles(filePath);
    await page.getByRole('button', { name: 'ถัดไป' }).click();
});




test('UF-002', async ({ page }) => {
    await page.goto('https://zeus-ai-xi.vercel.app/landing');
    await page.getByRole('button', { name: 'ดูแพ็กเกจอื่นๆ' }).click();
    await page.waitForTimeout(3000);
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
    await page.getByRole('button', { name: 'ถัดไป' }).click();
    await expect(page.getByText('Please upload at least one file')).toBeVisible();

});



test('UF-003', async ({ page }) => {
    await page.goto('https://zeus-ai-xi.vercel.app/landing');
    await page.getByRole('button', { name: 'ดูแพ็กเกจอื่นๆ' }).click();
    await page.waitForTimeout(3000);
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

    const filePath = path.resolve(__dirname, '../assets/3.png');
    const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.getByRole('button', { name: 'เลือกไฟล์' }).click(),
    ]);

    await page.waitForTimeout(5000);
    await fileChooser.setFiles(filePath);
    await page.getByRole('button', { name: 'ถัดไป' }).click();
    await expect(page.getByText('ไฟล์ 3.png ไม่รองรับ (อนุญาต: .pdf, .csv, .doc, .docx, .txt)')).toBeVisible();
});


test('UF-004', async ({ page }) => {
    await page.goto('https://zeus-ai-xi.vercel.app/landing');
    await page.getByRole('button', { name: 'ดูแพ็กเกจอื่นๆ' }).click();
    await page.waitForTimeout(3000);
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

    const filePath = [
        path.resolve(__dirname, '../assets/MeeThouPao_Group10.pdf'),
    ];
    const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.getByRole('button', { name: 'เลือกไฟล์' }).click(),
    ]);



    await page.waitForTimeout(5000);
    await fileChooser.setFiles(filePath);
    await page.getByRole('button', { name: 'ถัดไป' }).click();
    await expect(page.getByText('ไฟล์ MeeThouPao_Group10.pdf มีขนาดเกิน 15 MB')).toBeVisible();
});