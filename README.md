# Annapurna Partners

A standalone static version of the owner's published Framer website, prepared for **annapurnapartners.eu**. The original layout and styles are retained; restaurant content has been redesigned and rewritten in English and Polish. All images and fonts are bundled locally. No Framer runtime, subscription, build tool or database is needed.

## Files

| File | Content |
| --- | --- |
| `index.html` | English franchise homepage |
| `pl.html` | Polish franchise homepage |
| `page.html` | English restaurant page |
| `page-pl.html` | Polish restaurant page |
| `assets/site.css` | Restaurant design and navigation overrides |
| `assets/site.js` | Mobile navigation and email draft form |
| `assets/*.css` | Original published layout and local font references |
| `CNAME` | GitHub Pages domain setting |

Open `index.html` to preview locally. For a development server, run `python3 -m http.server 4173` from this folder and visit `http://localhost:4173/`.

## Enquiry form

The form **opens an email draft**, addressed to `rpmannapurna@gmail.com`. The visitor must send the email in their email app. It does not store enquiries or submit them in the background. Its button and explanatory text state this clearly. No automatic email delivery was tested or claimed.

For direct submissions later, replace this with a configured form service or backend. Confirm the intended franchise contact email before public launch; the current recipient comes from the original site's published restaurant contact details.

## Recommended hosting: GitHub code + Cloudflare Pages

Cloudflare Pages can serve this static site on its Free plan. Your domain remains registered with GoDaddy, with its usual renewal cost. GitHub Pages is another option for a portfolio demonstration; GitHub restricts using Pages to run an online business or primarily facilitate commercial transactions.

1. Create the GitHub repository `rahularya198920/annapurna-partners` and upload this folder's **contents**, including `assets`. `index.html` must be at the repository root. Keep hidden `.nojekyll` when using GitHub Pages.
2. In Cloudflare, create a Pages project and import the GitHub repository. Choose branch `main`, no framework preset, build command `exit 0`, and output directory `.`.
3. Deploy and check the generated `pages.dev` URL before switching your domain.
4. Add `annapurnapartners.eu` to Cloudflare on the Free plan. Review the imported DNS records and preserve existing email records such as MX and TXT.
5. In GoDaddy's domain settings, replace the domain's nameservers with the **two exact nameservers Cloudflare assigns**. This changes DNS management; it does not transfer registration.
6. In the Pages project's Custom domains, add `annapurnapartners.eu` and follow its activation instructions. Add `www.annapurnapartners.eu` there too if desired.
7. Wait for DNS and the HTTPS certificate to activate, then check both language versions and contact links.

Use either Cloudflare DNS or the GitHub Pages DNS settings below, according to the host you select.

Sources: [Cloudflare static HTML deployment](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/), [Cloudflare custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/), [Free plan limits](https://developers.cloudflare.com/pages/platform/limits/), [GitHub Pages usage limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits).

## Alternative: GitHub Pages for a portfolio showcase

1. Upload the contents to a public GitHub repository.
2. In Settings → Pages, select deployment from branch `main`, folder `/ (root)`.
3. Verify your domain in GitHub's account Pages settings using its generated TXT record. Set the repository's custom domain to `annapurnapartners.eu` before changing website DNS records.
4. In GoDaddy DNS, configure:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | rahularya198920.github.io |

Remove conflicting website A/AAAA records, parking or forwarding; preserve unrelated email records. Enable Enforce HTTPS when available. DNS/certificate activation can take up to 24 hours.

Source: [GitHub custom domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Editing

Edit text in the relevant HTML file. Update English and Polish separately. The restaurant cards use readable class names and appear in both homepages and both dedicated restaurant pages, so change all relevant copies when updating addresses or contacts. Original layout CSS retains generated class names to preserve the published design. Framer editor changes will not automatically update this copy.

Images and fonts were copied from the owner's public website on 10 October 2026. `asset-sources.json` records their original URLs. Keep the included font licenses with redistributed assets. Photos and branding retain their existing owners' rights.

## Direct enquiry delivery

English and Polish forms POST to FormSubmit for delivery to rahul@idaagroups.com. Submit one setup enquiry, then click the activation link in that inbox (check spam). Until activation, delivery is not verified. Default reCAPTCHA remains enabled, plus a honeypot field. FormSubmit processes submitted details; no secret API key is embedded. Native form validation works without JavaScript; JavaScript updates the thank-you URL for the current host. Thank-you pages confirm submission, not verified inbox delivery.
