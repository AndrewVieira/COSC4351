# Manual Test Plan

The test plan assumes the user has deployed the solution in Docker according to the instructions in README.md. The user should then point their browser towards http://localhost:8080

## Correct Links Test

This test checks whether each user can login, is displayed the correct links in the portal, and can log out of the system.

1. For each user in {admin, tech, hr, finance, sales}, login to system
2. Verify only the correct links are shown for each user, then logout of that user.

### Correct Links
#### admin
- Manage User Accounts
- Assign Roles
- Help Desk

#### finance
- Finance Reports
- Accounts Payable
- Accounts Receivable
- Tax

#### sales
- Sales Reports
- Sales Leads
- Sales Demo

#### hr
- New Hire On-boarding
- Benefits
- Payroll
- Off-boarding
- HR Reports

#### tech
- Application Monitoring
- Tech Support
- App Development
- App Admin
- Release Management

If any link is missing or an addition link is present from another role, the test fails. Otherwise the test succeeds.

## Incorrect Credentials Test

This tests whether credentials are checked correctly during login

1. Attempt to login with the username "username" and password "password"
2. Acknowledge the error
3. Attempt to login with the admin user using the correct password
4. Logout of the admin user

This test succeeds if the user is presented with an error message that their credentials are invalid and is responsive to additional logins after the failed attempt and fails otherwise.

## Admin Login Test

This tests whether the admin interface is functional and whether the database is not read only. Django will write to the database whenever a user logs in to the admin interface.

1. Point browser to http://localhost:8080/portal/admin
2. Login as the user admin
3. Click "View Site"
4. Logout

The test succeeds if the user is able to login and is presented with the admin interface. Otherwise the test fails.

## Add Links Test  

This test covers whether the admin user can add additional links to a user

1. Login as the user admin
2. Click "Manage User Accounts"
3. Click "Links"
4. Click "Add Link"
5. Enter a URL, Name, and assign the link to the group ADMIN
6. Click "View Site"

The test succeeds if the new link is in the list with the exact URL and name and fails otherwise.

## Multiple Roles Test

This test covers whether a user with additional roles gets all links for both roles

1. Login as the user admin
2. Click "Manage User Accounts"
3. Click "Users"
4. Click on the "admin" user..
5. Add admin to the group "tech"
6. Click "View site". If you get an error about invalid email, add .com to the end of the email address and save again.

The test succeeds if the admin should see the following new links:

- App Admin
- App Development
- Application Monitoring
- Assing Roles
- Help Desk
- Manage User Accounts
- Release Management
- Tech Support
