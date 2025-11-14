# WebDriverIO → Cypress / Playwright Migration Guide

The definitive resource showing exactly how to migrate from legacy WebDriverIO to either Cypress or Playwright.

Pick one framework. Migrate cleanly. Ship faster.

## Choose Your Migration Path

| You want...                           | Choose         | Why                                      |
|---------------------------------------|----------------|------------------------------------------|
| Simple setup, great docs, dashboard   | **Cypress**    | Best developer experience                |
| Cross-browser, API testing, mobile    | **Playwright** | Most powerful, Microsoft-backed          |

## The Same Test — Three Implementations

### Original WebDriverIO (before)
```javascript
await browser.url('https://the-internet.herokuapp.com/login');
await browser.$('#username').setValue('tomsmith');
await browser.$('#password').setValue('SuperSecretPassword!');
await browser.$('button[type="submit"]').click();
```

### Migrated to Cypress
```typescript
cy.visit('https://the-internet.herokuapp.com/login');
cy.get('#username').type('tomsmith');
cy.get('#password').type('SuperSecretPassword!');
cy.get('button[type="submit"]').click();
```

### Migrated to Playwright
```typescript
await page.goto('https://the-internet.herokuapp.com/login');
await page.fill('#username', 'tomsmith');
await page.fill('#password', 'SuperSecretPassword!');
await page.click('button[type="submit"]');
```

## Run the examples
```bash
npm install
npm run cypress
npm run playwright
```
  
