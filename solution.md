# CourseMaster - Bug Fixing & Solutions,

### 1. Problem
The local website displays 3 courses. - The live website displays 6 courses. - The number of courses is different between the local and live websites. - We need to investigate why the two environments display different numbers of courses.

## 2. Investigation
- Checked the live backend API: `https://course-master-backend-ochre.vercel.app/api/courses?page=1&limit=8`
- The live API returns `total: 6`.
- Checked the local backend API: `http://localhost:5000/api/courses?page=1&limit=8`
- The local API returns `total: 3`.
- Both APIs use the same pagination parameters, but they return different course counts.
- The local database `coursemaster_dev` contains 3 seeded courses.
- Further investigation is needed to determine whether the difference is caused by separate database contents or



## BUG-001 — Login Fails with Valid Credentials

**1. Bug ID & Title:**  
BUG-001 — Login Fails with Valid Credentials Due to Incorrect Password Comparison

**2. Location & Steps to Reproduce:**

**Location:** Backend — Authentication Service (`login` function)

**Steps to Reproduce:**
1. Register a new user with a valid email and password.
2. Confirm that the registration API returns a token and user details.
3. Navigate to the Login page.
4. Enter the same email and password used during registration.
5. Click the Login button.

**3. Expected vs. Actual Result:**

**Expected Result:** The application should authenticate the user and return a valid token when the correct credentials are provided.

**Actual Result:** The login API returns `400 Bad Request` with the message `Invalid email or password`, even when the registered credentials are used.

**4. Severity & Evidence:**

**Severity:** High

**Evidence:** The registration API returned a token and user details. The login API returned `400 Bad Request` with `{"message":"Invalid email or password"}`. The authentication service compares the provided password directly with the stored bcrypt hash instead of using `bcrypt.compare()`.

**5. Fix & Verification Status:**

**Fix:** Replace the direct password equality check with `await bcrypt.compare(password, user.passwordHash)`.

**Verification Status:** Unresolved — pending implementation and retesting.


---

### BUG-002 — Logout Button Not Displayed After Login

**1. Bug ID & Title:**

BUG-002 — Logout Button Not Displayed After Successful Login

**2. Location & Steps to Reproduce:**

**Location:** Frontend — Navbar component (`Navbar.jsx`)

**Steps to Reproduce:**
1. Open the CourseMaster application.
2. Log in using valid registered credentials.
3. Navigate to the Home page.
4. Inspect the Navbar on the right side.
5. Observe that the Logout button is not visible.

**3. Expected vs. Actual Result:**

**Expected Result:** After successful login, the Navbar should provide an accessible Logout option for the authenticated user.

**Actual Result:** The Logout button is not visible in the Navbar after login.

**4. Severity & Evidence:**

**Severity:** Medium — pending confirmation against the assessment requirements.

**Evidence:** A screenshot of the Navbar after successful login has been retained.

**5. Fix & Verification Status:**

**Fix:** Pending investigation. The Navbar currently renders the desktop user menu only when both `token` and `me` are available. The cause has not yet been confirmed.

**Verification Status:** Fixed and Verified — the user profile and dropdown menu now appear after login, displaying Profile, Dashboard, and Logout.













# Bug Report 1: Student Portal Navigation Failure

**1. Bug ID & Title:**  
BUG-001 — Student Portal Button Fails to Open the Student Dashboard

**2. Location & Steps to Reproduce:**

**Location:** Login Page

**Steps to Reproduce:**
1. Open the CourseMaster Login page.
2. Click the **Student Portal** button.
3. Observe the application's behavior after clicking the button.

**3. Expected vs. Actual Result:**

**Expected Result:** The application should open the Student Dashboard for an authorized student.

**Actual Result:** The application remains on the Login page. A `401 Unauthorized` response was observed during testing.

**4. Severity & Evidence:**

**Severity:** Medium

**Evidence:** A `401 Unauthorized` response was observed during testing. Attach a screenshot of the browser's Network tab showing the failed request and its status code.

**5. Fix & Verification Status:**

**Fix:** Pending investigation.

**Verification Status:** Unresolved — the issue has not yet been fixed and verified.


---

# Bug Report 2: Admin Portal Navigation Failure

**1. Bug ID & Title:**  
BUG-002 — Admin Portal Button Fails to Open the Admin Dashboard

**2. Location & Steps to Reproduce:**

**Location:** Login Page

**Steps to Reproduce:**
1. Open the CourseMaster Login page.
2. Click the **Admin Portal** button.
3. Observe the application's behavior after clicking the button.

**3. Expected vs. Actual Result:**

**Expected Result:** The application should open the Admin Dashboard for an authorized administrator.

**Actual Result:** The application remains on the Login page. A `401 Unauthorized` response was observed during testing.

**4. Severity & Evidence:**

**Severity:** Medium

**Evidence:** A `401 Unauthorized` response was observed during testing. Attach a screenshot of the browser's Network tab showing the failed request and its status code.

**5. Fix & Verification Status:**

**Fix:** Pending investigation.

**Verification Status:** Unresolved — the issue has not yet been fixed and verified.