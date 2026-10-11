# Secure Elder-Care Monitoring Platform

Project website for **R26_IT_055**, a research project by the AIMS group. The site presents the platform, its four monitoring components, project milestones, team, and supporting documents.

## Project components and team

| Component | Team member | Student ID |
|---|---|---|
| Pose-Based Anomaly Detection | **R.M.V.R. Rathnayaka** (Project Leader) | IT22075208 |
| Skeleton-Based Identification and Biometric Gait Analysis | Himaya Jasinghe | IT22240392 |
| Tracking and Geofencing | D.M.D.L. Dedunu | IT22171788 |
| Schedule and Activity Monitoring | Chamathka B.M.G.N. | IT22143686 |

## Website pages

- `index.html` — project home page
- `domain.html` — research domain and project context
- `skeleton-identification.html` — identification component
- `tracking-geofencing.html` — tracking and geofencing component
- `anomaly-detection.html` — pose-based anomaly detection component
- `schedule-monitoring.html` — schedule and activity monitoring component
- `milestones.html` — assessments and milestone details
- `documents.html` — component proposals and project documents
- `presentations.html` — progress presentation links
- `results.html` — project results
- `about.html` and `contact.html` — team and contact information

## Project files

```text
.
├── assets/       # Team portraits and other website images
├── css/          # Shared styles
├── documents/    # Proposal PDFs, TAF, and research paper
└── *.html        # Website pages
```

The website is a static HTML/CSS site and does not require a package install or backend service. Most pages use relative links, so keep the folder structure intact when previewing or publishing it.

## Preview locally

You can open `index.html` directly in a browser. To preview it through a local web server, run this from the project folder:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Publish with GitHub Pages

1. Push this project to a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then save.
5. GitHub Pages will publish the site at `https://viduraz.github.io/Research_website_R26_IT_055/index.html/` after deployment completes.

If you publish from a different branch or directory, select that source in the Pages settings. See [GitHub Pages documentation](https://docs.github.com/en/pages) for details.
