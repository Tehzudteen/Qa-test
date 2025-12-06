import { test, expect } from '@playwright/test';
import path from 'path';

test('AF-001', async ({ page }) => {
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

    await page.getByRole('textbox', { name: 'ชื่อ AI' }).click();
    await page.getByRole('textbox', { name: 'ชื่อ AI' }).fill('Botty');
    await page.getByRole('textbox', { name: 'น้ำเสียง (เช่น เป็นกันเอง/มืออาชีพ)' }).fill('Friendly');
    await page.getByRole('textbox', { name: 'ข้อความต้อนรับ' }).fill('Welcome');
    await page.getByRole('textbox', { name: 'ข้อความบอกลา' }).fill('See ya');
    await page.getByRole('textbox', { name: 'หัวข้อที่เน้นอยากให้ตอบ' }).fill('Bussiness');
    await page.getByRole('textbox', { name: 'หัวข้อที่เน้นอยากให้ตอบ' }).press('ArrowLeft');
    await page.getByRole('textbox', { name: 'หัวข้อที่เน้นอยากให้ตอบ' }).fill('Business');
    await page.getByRole('radio', { name: 'ภาษาอังกฤษ' }).check();

    await page.getByRole('button', { name: 'ถัดไป' }).click();
});


test('AF-002', async ({ page }) => {
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

    await page.getByRole('textbox', { name: 'น้ำเสียง (เช่น เป็นกันเอง/มืออาชีพ)' }).fill('Friendly');
    await page.getByRole('textbox', { name: 'ข้อความต้อนรับ' }).fill('Welcome');
    await page.getByRole('textbox', { name: 'ข้อความต้อนรับ' }).press('Tab');
    await page.getByRole('textbox', { name: 'ข้อความบอกลา' }).fill('See ya');
    await page.getByRole('textbox', { name: 'หัวข้อที่เน้นอยากให้ตอบ' }).fill('Bussiness');
    await page.getByRole('textbox', { name: 'หัวข้อที่เน้นอยากให้ตอบ' }).press('ArrowLeft');
    await page.getByRole('textbox', { name: 'หัวข้อที่เน้นอยากให้ตอบ' }).fill('Business');
    await page.getByRole('radio', { name: 'ภาษาอังกฤษ' }).check();
    await page.screenshot();
    await page.getByRole('button', { name: 'ถัดไป' }).click();
});


test('AF-003', async ({ page }) => {
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

    await page.getByRole('textbox', { name: 'น้ำเสียง (เช่น เป็นกันเอง/มืออาชีพ)' }).fill('Friendly');
    await page.getByRole('textbox', { name: 'ข้อความต้อนรับ' }).fill(`Welcome to our community! We’re delighted you’re here and excited to help you get the most out of your experience from day one. This space was designed to be simple, friendly, and truly useful—whether you’re exploring ideas, launching your next project, or just looking for a smarter way to work and connect. 

To get started, take a quick tour through the main features: browse curated templates to spark inspiration, set up your profile so teammates can find you easily, and try our guided workflows to turn small steps into meaningful progress. If you prefer to learn by doing, jump straight in—every action has helpful tips, and nothing you do here can break anything important. You can always undo, redo, or start fresh with a single click.

We believe great experiences are built on clarity and care. That’s why we’ve added thoughtful touches: autosave to protect your work, real-time collaboration to keep everyone aligned, and smart recommendations that adapt to your goals. If you ever feel stuck, open the help menu for step-by-step answers, message our support team for human assistance, or join our community forum to learn from others.

Your time matters, and we want every minute you spend here to move you forward. Celebrate small wins, share feedback, and let us know what would make this even better—we read every message and improve continuously. Ready to begin? Click “Next” to continue, or explore at your own pace. 

Thank you for choosing us. Here’s to clearer plans, smoother days, and results you can feel proud of. Welcome aboard!`);

    await page.getByRole('textbox', { name: 'ข้อความต้อนรับ' }).press('Tab');
    await page.getByRole('textbox', { name: 'ข้อความบอกลา' }).fill('See ya');
    await page.getByRole('textbox', { name: 'หัวข้อที่เน้นอยากให้ตอบ' }).fill('Bussiness');
    await page.getByRole('textbox', { name: 'หัวข้อที่เน้นอยากให้ตอบ' }).press('ArrowLeft');
    await page.getByRole('textbox', { name: 'หัวข้อที่เน้นอยากให้ตอบ' }).fill('Business');
    await page.getByRole('radio', { name: 'ภาษาอังกฤษ' }).check();
    await page.screenshot();
    await page.getByRole('button', { name: 'ถัดไป' }).click();
});