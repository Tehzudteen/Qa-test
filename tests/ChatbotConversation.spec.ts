import { test, expect } from '@playwright/test';
import path from 'path';

test('CP-001: เปิดหน้า Chatbot Plus และเลือกโมเดล', async ({ page }) => {

    await page.goto('https://zeus-ai-xi.vercel.app/chat/plus');
    await page.getByRole('button', { name: 'Free Trial Select model Model' }).click();
    await page
        .getByLabel('E-Commerce Model (Only Plus)', { exact: true })
        .getByText('E-Commerce Model (Only Plus)')
        .click();
    await expect(page.getByTitle('Attach files')).toBeVisible();
    await expect(page.getByRole('textbox', { name: /Type your message/i })).toBeVisible();
});


test('CP-002: เลือกโมเดล อัปโหลดไฟล์ร้านอาหาร และถามคําถาม', async ({ page }) => {

    await page.goto('https://zeus-ai-xi.vercel.app/chat/plus', { waitUntil: 'networkidle' });
    await page.getByRole('button', { name: 'Free Trial Select model Model' }).click();
    await page
        .getByLabel('E-Commerce Model (Only Plus)', { exact: true })
        .getByText('E-Commerce Model (Only Plus)')
        .click();


    const filePath = path.join(__dirname, '../assets/restaurentMFU1.txt');
    await page.getByTitle('Attach files').locator('svg').click();
    await page.locator('input[type="file"]').setInputFiles(filePath);
    await expect(page.locator('text=restaurentMFU1.txt')).toBeVisible({ timeout: 10000 });
    const question = 'ขอร้านอาหารที่ขายดีที่สุด';
    await page.getByRole('textbox', { name: /Type your message/i }).fill(question);
    await page.keyboard.press('Enter');
    await expect(page.locator(`text=${question}`)).toBeVisible({ timeout: 10000 });
    const typingIndicator = page.locator('text=/\\.{3}|กำลังพิมพ์|typing/i');
    await typingIndicator.first().waitFor({ state: 'visible', timeout: 5000 }).catch(() => {
        console.log('⏳ ไม่มี typing indicator แสดง (อาจตอบเร็ว)');
    });

    const botMessage = page.locator('text=/ชาบู/i').first();
    await expect(botMessage).toBeVisible({ timeout: 30000 });
    const content = await botMessage.textContent();
    expect(content?.length).toBeGreaterThan(5);
    if (!/ชาบู/i.test(content || '')) {
        throw new Error('❌ บอทไม่ได้ตอบคำว่า "ชาบู"');
    }

    console.log('✅ บอทตอบเสร็จแล้วและมีคำว่า "ชาบู":', content?.slice(0, 80) + '...');
});