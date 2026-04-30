# Digital Money Transformation

Marketing and content repository for the wikifolio **Digital Money Transformation** (`WF00DIGIMT`).

🔗 **Live wikifolio:** [wikifolio.com/en/int/w/wf00digimt](https://www.wikifolio.com/en/int/w/wf00digimt)  
🌐 **Landing page (GitHub Pages):** `https://niklashamm-png.github.io/wikifolio/`

---

## Strategy Overview

This wikifolio follows a **rule-based allocation** between two instruments:

| Instrument | Role |
|---|---|
| **STRC** (Strategy Shares – preferred share) | Defensive base; dividend-paying, lower beta |
| **MSTR** (MicroStrategy) | Higher-beta satellite; amplified Bitcoin exposure |

The **Bitcoin Rainbow Chart** (logarithmic regression band) serves as the primary regime indicator. As Bitcoin's price climbs higher in the band (more "overheated"), the portfolio shifts defensively toward STRC. As it cools, exposure to MSTR increases.

### Allocation Model

| Rainbow Zone | STRC | MSTR |
|---|---|---|
| 🔴 Red | 100% | 0% |
| 🟠 Dark Orange | 95% | 5% |
| 🟠 Orange | 90% | 10% |
| 🟠 Light Orange | 85% | 15% |
| 🟡 Yellow | 80% | 20% |
| 🟢 Light Green | 75% | 25% |
| 🟢 Green | 70% | 30% |
| 🔵 Light Blue | 60% | 40% |
| 🔵 Blue | 50% | 50% |
| 🟣 Purple | 40% | 60% |

STRC dividends are either retained as a cash reserve or reinvested during rebalancing. Part of the cash reserve may be deployed for small tactical trades during special market events.

**Benchmarks beaten:** Bitcoin · Gold · MSCI World · Nasdaq 100

---

## Repository Structure

```
/
├── README.md                         # This file
├── LICENSE                           # MIT
├── docs/                             # GitHub Pages source
│   ├── index.html                    # Landing page
│   ├── styles.css
│   ├── script.js
│   └── assets/
├── strategy/
│   ├── allocation-model.md           # Full model description
│   └── rainbow-zones.md              # Rainbow Chart explanation
├── content/                          # Content pipeline
│   ├── README.md
│   ├── tweets/tweet-templates.md     # 30 English tweet templates
│   ├── newsletter/template.md        # Weekly newsletter template
│   ├── monthly-rainbow-update/       # Monthly Rainbow zone update
│   ├── evergreen/outlines.md         # 10 evergreen article outlines
│   └── monthly-report/template.md   # Monthly performance report
└── reports/                          # Published reports (gitkeep)
```

---

## How to Enable GitHub Pages

1. Go to your repository on GitHub.
2. Click **Settings** → **Pages** (left sidebar).
3. Under *Source*, select:
   - **Branch:** `main`
   - **Folder:** `/docs`
4. Click **Save**.
5. GitHub will publish the landing page at `https://<your-username>.github.io/wikifolio/` within a few minutes.

---

## Content Pipeline

All content templates live in the [`content/`](./content/) directory. See [`content/README.md`](./content/README.md) for the full overview and cadence.

---

## Disclaimer

> This repository and all its contents do **not** constitute investment advice. Past performance is not an indicator of future results. Investing in the wikifolio certificate involves significant risks, including the risk of total loss. Due to concentration in few holdings (MSTR, STRC) and high correlation to Bitcoin, value fluctuations may be substantial. Always do your own research and consult a qualified financial adviser before investing.

---

*MIT License – see [LICENSE](./LICENSE)*
