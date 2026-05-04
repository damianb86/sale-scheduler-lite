import { expect, test } from "@playwright/test";

test("opens visual preview for Sale Scheduler Lite", async ({ page }) => {
  await page.goto("/preview");
  await expect(page.getByRole("heading", { name: "Sale Scheduler Lite" })).toBeVisible();
  await expect(page.getByText("Schedule simple compare-at price campaigns and restore original prices safely.")).toBeVisible();
  await expect(page.getByRole("link", { name: "Open workspace" })).toBeVisible();
});

test("preview is usable on a narrow viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/preview");
  await expect(page.getByText("Primary workflow")).toBeVisible();
});
