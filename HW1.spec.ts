import {test,chromium, webkit,firefox} from "@playwright/test"



test("Test to Launch a Browser", async () =>{ // page fixture


const browser = await chromium.launch({headless:false,channel:"msedge"}) //=> Step1
const context = await browser.newContext()// => Step2
const page = await context.newPage() // Step 3



await page.goto("https://www.redbus.in/");


await page.waitForTimeout(3000) // Note for demo purpose only
const title= await page.title();
console.log(title)
const url1 =await page.url();
console.log(url1)
const browser1 = await firefox.launch({headless:false}) //=> Step1
const context1 = await browser1.newContext()// => Step2
const page1 = await context1.newPage() // Step 3

await page1.goto("https://www.redbus.in/");


await page1.waitForTimeout(3000) // Note for demo purpose only
}

)