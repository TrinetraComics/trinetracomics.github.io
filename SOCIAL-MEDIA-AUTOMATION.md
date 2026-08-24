# Trinetra Comics — Social Media Automation

The website now links to the official Trinetra Comics profiles:

- Instagram: @trinetracomics
- X: @trinetracomics
- Facebook: Trinetra Comics

## Can GitHub Pages automatically post updates?

Not by itself. GitHub Pages is static hosting. Automatic publishing requires API credentials and a server-side/CI job.

### Instagram + Facebook
Meta supports publishing for Instagram professional accounts and Facebook Pages through its APIs. You will need a Meta developer app, the relevant publishing permissions/tokens, and a public image URL.

### X
X currently uses a consumption-based API model, so automatic posting is not guaranteed to be completely free.

### Recommended next step
Keep the website free on GitHub Pages and use GitHub Actions later for automation. Do **not** put API secrets or access tokens into HTML/JavaScript. Store them as GitHub Actions Secrets.

This release only adds the public social profile links and does not store or expose any credentials.
