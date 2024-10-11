import { When, Then } from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";

When('user clicks on admin tab button', async function () {
    await pageFixture.page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();
});

Then('user will be navigated to admin page', async function () {
    await expect(pageFixture.page.locator('.oxd-topbar-header-breadcrumb')).toBeVisible();
});