Test coverage:
1. Page title
2. Images
3. Logos
4. Form validation
5. Successful login.

For coverage 1-4 is done via 'Login UI test'
For 5 is done via 'Login success with correct credential', as the aim of 5 is check login success, it carry out a brief check of page title and some UI element only

To run test and view test report locally:
1. Clone this repo in a chosen IDE
2. Open terminal from the IDE
3. Navigate to project root if it is not already done
4. Install dependencies (assuming node.js is already installed)
    - npm install
5. Install playwright
    - npx playwright install
6. Verify test directory in playwright.config.ts is ./tests:
7. Run test
    - npx playwright test
8. View test report (note: If test failed, the test report will open automatically)
    - npx playwright show-report