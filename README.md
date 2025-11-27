VF Gaming — Full Backend (GitHub-ready)
======================================

Contents:
- server.js
- routes/products.js
- routes/uploads.js
- routes/auth.js
- controllers/productsController.js
- controllers/uploadsController.js
- middleware/auth.js
- models/productModel.json (simple JSON storage)
- uploads/ (file uploads stored here when S3 not configured)
- public/ (static files placeholder)
- .env.example

How it works:
- Products API persists to `products.json` in repo root (simple file-based DB for small projects).
- Image uploads use S3 if S3_BUCKET_NAME is set; otherwise saved to /uploads and served at /uploads/<file>.
- Simple admin auth via `ADMIN_TOKEN` header Bearer token (not production-grade; replace with proper auth for real sites).

Deploying to Render:
1. Create a GitHub repo and push this folder.
2. On Render, create a new Web Service, connect the repo.
3. Set environment variables from `.env.example`.
4. Build command: `npm install`
5. Start command: `npm start`

Security notes:
- Do NOT commit real secrets to GitHub.
- For production, replace file-based storage with a real DB (Mongo, Postgres) and use secure auth.
