Admin Panel (Email/Password auth only)

Files:
- index.html  -> Login page (email/password)
- admin.html  -> Admin Dashboard (protected by Firebase auth)
- js/auth.js  -> Authentication logic
- css/style.css -> basic styling

How to use:
1. Upload these files to your GitHub Pages repo root.
2. In Firebase Console: enable Email/Password sign-in and create an admin user.
3. Open index.html, login with admin credentials, you'll be redirected to admin.html.
4. To enable Firestore sync, add data in Firestore 'users' collection or allow the admin to add users in the panel.
