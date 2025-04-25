# 🚀 **DevOps Portfolio (Next.js + Docker + GitHub Actions)**  

**A CI/CD-optimized portfolio** built with Next.js, containerized via Docker, and deployed automatically through GitHub Actions. Features **GHCR image management**, **Vercel hosting**, and **semantic versioning** with changelog automation.  

![Portfolio Preview](/public/preview.png)  

[![GHCR Image](https://img.shields.io/badge/Container-GHCR-blue?logo=github)](https://github.com/Abdullah021Siraj/nextjs-devops-portfolio)  
[![Vercel Deployment](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)](https://abdullah-siraj.vercel.app/)  

---

## ✨ **Key Features**  
✅ **Automated CI/CD** via GitHub Actions (build → test → deploy)  
✅ **Dockerized with GHCR** for versioned, secure container images  
✅ **Vercel Integration** with zero-downtime deployments  
✅ **Changelog Automation** on every `git push` to `main`  
✅ **Semantic Versioning** with auto-tagging (`v1.1.0-YYYYMMDDHHMMSS`)  
✅ **Production-ready** Docker multi-stage builds  

---

## ⚡ **Workflow Highlights**  

### **1. GitHub Actions Pipeline**  
- **On Push to `main`**:  
  - Builds Docker image and pushes to **GitHub Container Registry (GHCR)**  
  - Generates/updates `CHANGELOG.md` with commit history  
  - Tags releases with timestamped versions  
  - Deploys to Vercel automatically  

### **2. Deployment Targets**  
| Target         | Configuration                          |  
|----------------|----------------------------------------|  
| **GHCR**       | Docker image tagged with `${{ github.sha }}` |  
| **Vercel**     | Frontend hosted with serverless functions |  

---

## 🛠️ **Development Setup**  

### **Prerequisites**  
- Node.js ≥20.x  
- Docker ≥24.x  
- GitHub account (for GHCR and Actions)  

### **Local Run**  
```bash
git clone https://github.com/your-repo/portfolio.git
cd portfolio
npm install
npm run dev
```  

### **Docker Build (Local Testing)**  
```bash
docker build -t portfolio:local .
docker run -p 3000:3000 portfolio:local
```  

---

## 🌐 **Production Deployment**  

### **1. GitHub Container Registry (GHCR)**  
Images are auto-pushed to GHCR on every commit:  
```bash
docker pull ghcr.io/your-repo/portfolio:${{ github.sha }}
```  

### **2. Vercel (Serverless)**  
- Configure these secrets in GitHub:  
  - `VERCEL_TOKEN`  
  - `VERCEL_ORG_ID`  
  - `VERCEL_PROJECT_ID`  

### **3. Manual Deployment**  
```bash
# Pull latest image from GHCR
docker run -p 3000:3000 ghcr.io/your-repo/portfolio:latest
```  

---

## ⚙️ **Pipeline Breakdown**  

### **Workflow Steps**  
1. **Checkout Code**: Fetches full git history for changelog generation.  
2. **Docker Build/Push**:  
   - Logs into GHCR using GitHub token.  
   - Builds image with SHA tag (e.g., `ghcr.io/repo:abc123`).  
3. **Changelog Update**:  
   - Appends latest commits to `CHANGELOG.md`.  
4. **Version Tagging**:  
   - Creates semver tag (e.g., `v1.1.0-20240501120000`).  
5. **Vercel Deployment**:  
   - Uses `amondnet/vercel-action` for seamless hosting.  

---

## 📜 **CHANGELOG Example**  
```markdown
## [v1.1.0-20240501120000] - 2024-05-01  
- feat: Added dark mode toggle  
- fix: Resolved Dockerfile multi-stage build issue  
```  

---

## 🔍 **Troubleshooting**  

| Issue                          | Solution                                  |  
|--------------------------------|-------------------------------------------|  
| **GHCR push fails**            | Check `GITHUB_TOKEN` permissions in repo secrets |  
| **Vercel deployment stuck**    | Verify `VERCEL_*` secrets are correct     |  
| **Changelog not updating**     | Ensure `fetch-depth: 0` in checkout step  |  

---

## 📜 **License**  
MIT © [ABDULLAH SIRAJ].  
For support, contact: [dev.abdullah21@gmail.com](mailto:dev.abdullah21@gmail.com)  

--- 

### 🔗 **Live Resources**  
- [GHCR Packages](https://github.com/Abdullah021Siraj/nextjs-devops-portfolio)  
- [Vercel Dashboard](https://abdullah-siraj.vercel.app/)  