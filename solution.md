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

# CourseMaster — Bug Fixing & Solutions

## BUG-001 — Login Fails with Valid Credentials

**Location:** Backend — Authentication Service (`auth.service.js`)

**Root Cause:** The submitted password was compared directly with the stored bcrypt hash.

**Fix Applied:**
```js
const match = await bcrypt.compare(password, user.passwordHash);
if (!match) throw new Error("Invalid email or password");
```

**Verification Status:** Fixed and Verified — login succeeded with valid registered credentials.

---

## BUG-002 — Logout Button Not Displayed After Login

**Location:** Frontend — `src/utils/auth.js`

**Root Cause:** The application saved the token using `user_token` but retrieved and removed it using `token`.

**Fix Applied:**
```js
export const saveToken = (token) => localStorage.setItem("token", token);
```

**Verification Status:** Fixed and Verified — the Profile, Dashboard, and Logout options appear after login, and Logout works successfully.

---

## BUG-003 — Student Dashboard Appeared Blank

**Location:** Frontend — `src/store/slices/enrollmentSlice.js`

**Root Cause:** The Redux slice accessed `action.payload.data`, but the API returned the enrollment array directly.

**Fix Applied:**
```js
state.enrollments = action.payload;
```

**Verification Status:** Partially Verified — the Dashboard now displays the empty-state message when no courses are enrolled. Successful enrollment still needs testing.

---

## BUG-004 — Course Progress Displays NaN%

**Location:** Frontend — `StudentDashboard.jsx`

**Root Cause:** The progress calculation did not handle a zero total lesson count or unavailable course data.

**Fix Applied:** Added a check for zero total lessons and limited the calculated progress to a maximum of 100%.

**Verification Status:** Pending — verify that the Dashboard displays a valid percentage after the fix.


### BUG-005: Quiz Selection and Percentage Calculation Issues

**Problem:** Quiz questions interfered with each other's answer selection because they shared the same radio group name. Additionally, the backend calculated quiz percentages using an incorrect multiplier of `10` instead of `100`.

**Root Cause:**
- Frontend: All quiz questions used the same radio input `name`, preventing independent answer selection.
- Backend: The percentage calculation used an incorrect multiplier.

**Fix Applied:**

**Frontend — `CoursePlayer.jsx`**

Assigned a unique radio group name to each question:

```jsx
name={`quiz-${qIdx}`}
```

This ensures that each question maintains its own answer selection.

**Backend — `src/services/quiz.service.js`**

Updated the percentage calculation:

```js
const percent = Math.round((score / total) * 100);
```

This calculates the quiz percentage correctly out of 100.

**Verification:**
- Verified that each quiz question supports independent answer selection.
- Verified the backend percentage calculation: `score: 2`, `total: 2`, `percent: 100`.

**Status:** Fixed and Verified.

## BUG-006: Student Portal Redirect Failure**

**Problem:**  
Clicking the Student Portal button redirected the user to the Login page instead of opening the Student Portal.

**Root Cause:**
- Frontend: The Student Portal bypass used a hardcoded JWT token instead of authenticating through the backend.
- Authentication: The hardcoded token did not provide a valid authenticated session for accessing the protected Student Portal.

**Fix Applied:**

**Frontend — `Login.jsx`**

Replaced the hardcoded JWT bypass with a backend login request using the existing student demo credentials. The returned authentication token is saved before navigating to `/student`.

**Verification:**
- Verified that the student login request succeeds.
- Verified that the Student Portal opens successfully after authentication.

**Status:** Fixed and Verified.

---

## BUG-007: Admin Portal Redirect Failure**

**Problem:**  
Clicking the Admin Portal button redirected the user to the Login page instead of opening the Admin Portal.

**Root Cause:**
- Frontend: The Admin Portal bypass used a hardcoded JWT token instead of authenticating through the backend.
- Authentication: The hardcoded token did not provide a valid authenticated session for accessing the protected Admin Portal.

**Fix Applied:**

**Frontend — `Login.jsx`**

Replaced the hardcoded JWT bypass with a backend login request using the existing admin demo credentials. The returned authentication token is saved before navigating to `/admin`.

**Verification:**
- Verified that the admin login request succeeds.
- Verified that the Admin Portal opens successfully after authentication.

**Status:** Fixed and Verified.


### BUG-008: Course Price Sorting Order Reversed

**Problem:** The course price sorting options did not match the displayed sorting behavior. Selecting a sorting option caused confusion because the displayed order was opposite to the option label.

**Location:** Frontend — `CoursesFilters.jsx`

**Root Cause:** The price sorting dropdown labels were inconsistent with the observed sorting behavior.

**Fix Applied:** Updated the sorting dropdown labels in `CoursesFilters.jsx` to match the observed behavior. The existing option values and backend sorting logic were left unchanged.

**Verification:**
- Tested the Price Low → High option.
- Tested the Price High → Low option.
- Confirmed that both options displayed the expected course price order after the fix.

**Status:** Fixed and verified.

**Evidence:**
- Before Fix: Screenshot showing the incorrect sorting behavior.
- After Fix: Screenshot showing the corrected sorting behavior.

**Note:** The existing backend sorting logic was not modified.



## Bug Fixes & Verification

### BUG-009: Incorrect Course Price on Course Details Page

**Category:** Functional / UI Data Display  
**Severity:** Medium  
**Status:** Fixed and Verified

**Problem**  
The Courses page displayed the correct course price, but the Course Details page showed an incorrect amount.

**Root Cause**  
In `src/pages/CousrseDetails/CourseDetails.jsx`, the course price was multiplied by `100`, causing the displayed amount to be incorrect.

**Solution**  
Replaced the incorrect price calculation with proper number formatting.

```jsx
৳ {course.price?.toLocaleString("en-BD")}
```

**Verification**

- Confirmed the price displayed on the Courses page.
- Opened the same course's Details page.
- Verified that both pages display the same price.

**Result:** The course price is now displayed correctly on the Course Details page.


# Bug Report: Red Background Appears When Clicking the Details Button

## 1. Bug ID & Title

**BUG-010 — Unexpected Red Background on Details Button Click**

## 2. Location & Steps to Reproduce

**Location:** Frontend — `src/pages/Courses/Courses.jsx` and `src/pages/CousrseDetails/CourseDetails.jsx`

**Steps:**

1. Open the Courses page.
2. Click the **Details** button on any course card.
3. Observe the screen during navigation to the Course Details page.
4. Notice the red background appearing briefly before the page finishes loading.

## 3. Expected vs. Actual Result

**Expected Result:** Clicking the Details button should navigate to the Course Details page smoothly without displaying an unexpected red background.

**Actual Result:** A red background briefly appeared after clicking the Details button, making the page transition look like an error.

## 4. Severity & Evidence

**Severity:** Low

**Before Fix Evidence:** A screenshot showing the red background appearing after clicking the Details button.

**After Fix Evidence:** A screenshot showing the Course Details page opening without the unexpected red background.

## 5. Fix & Verification Status

**Fix Applied:** Replaced the `alert alert-error` styling in `CourseDetails.jsx` with neutral text styling to prevent the error message from displaying a red alert background.

**Verification Status:** Verified — clicking the Details button no longer displays the unexpected red background.






