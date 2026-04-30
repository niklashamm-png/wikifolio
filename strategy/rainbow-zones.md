# Bitcoin Rainbow Chart – Explanation

> **Disclaimer:** The Bitcoin Rainbow Chart is a heuristic analytical tool, not a financial instrument or a guaranteed predictor of future prices. This document is for informational purposes only and does not constitute investment advice.

---

## What Is the Bitcoin Rainbow Chart?

The Bitcoin Rainbow Chart is a long-term price visualisation tool that applies a **logarithmic regression curve** to Bitcoin's historical price data and overlays a set of **color-coded bands** to indicate whether the price is in an overvalued, fair-value, or undervalued territory relative to its long-term adoption trend.

The chart was popularised by the Bitcoin community as a simple, visual way to assess market sentiment and position in the market cycle – without requiring any trading indicators, volume analysis, or complex modelling.

---

## Why Logarithmic Scale?

Bitcoin's adoption follows an **S-curve** typical of transformative technologies (internet, mobile phones). On a linear price chart, the early years appear completely flat and the recent years look like a vertical spike – making long-term trend analysis nearly impossible.

A **logarithmic scale** compresses the vertical axis proportionally, so each order of magnitude occupies the same space. This reveals that Bitcoin's growth has been remarkably consistent on a log scale – a straight-line regression in log space captures the underlying adoption trajectory well.

---

## How the Regression Works

1. Bitcoin's historical closing price data is plotted on a log-10 scale against time.
2. A **linear regression** is fitted through this log-price data.
3. The regression line represents the "fair value" trend.
4. **Parallel bands** (color zones) are offset above and below the regression line to mark different degrees of over/undervaluation.

---

## The Color Zones

From bottom (most undervalued) to top (most overvalued):

| Color | Zone Name | Interpretation |
|---|---|---|
| 🟣 Purple | Maximum opportunity zone | Extreme undervaluation – historically rare buying opportunity |
| 🔵 Blue | Deeply undervalued | Strong accumulation zone |
| 🔵 Light Blue | Significantly undervalued | Good long-term entry |
| 🟢 Green | Undervalued | Below trend – accumulate |
| 🟢 Light Green | Slightly undervalued | Approaching fair value from below |
| 🟡 Yellow | Fair value | Price in line with long-term trend |
| 🟠 Light Orange | Slightly overheated | Caution – approaching expensive territory |
| 🟠 Orange | Overheated | Consider reducing risk exposure |
| 🟠 Dark Orange | Significantly overheated | Historically elevated – defensiveness warranted |
| 🔴 Red | Extreme greed / top warning | Historically near cycle tops – maximum caution |

---

## Historical Context

- **2017 Bull Run (Dec 2017):** Price reached Red zone around Bitcoin's then-ATH (~$20,000). Shortly after, the market declined ~84%.
- **2019–2020 Recovery:** Price oscillated between Green and Light Blue zones – considered accumulation territory.
- **2021 Bull Run:** Price crossed into Orange/Dark Orange zones twice, each followed by significant corrections.
- **2022 Bear Market:** Bitcoin fell into Blue/Purple territory – historically the deepest value zones.
- **2024 Bull Run:** Price rose through Yellow and Light Orange zones following the Bitcoin ETF approvals and the halving.

---

## How This Strategy Uses the Chart

In the *Digital Money Transformation* wikifolio, the current Rainbow zone determines the STRC/MSTR allocation:

- **Upper zones (Red → Light Orange):** More STRC (defensive). Less MSTR (reduce volatility).
- **Lower zones (Blue → Purple):** More MSTR (offensive). The market is signalling undervaluation.
- **Yellow zone (Fair value):** 80% STRC / 20% MSTR – a balanced, moderately defensive posture.

The chart moves **slowly** – zone changes happen over days or weeks, not hours. This makes it well-suited to a **monthly rebalancing cadence** with minimal transaction costs.

---

## Limitations and Risks

The Rainbow Chart is a **heuristic tool**, not a fundamental model. Important caveats:

| Limitation | Description |
|---|---|
| Not a predictor | The chart describes where we are, not where we will go |
| Regression may shift | As more data accumulates, the regression line can adjust retroactively |
| Cycle time may change | Bitcoin's cycles may shorten or lengthen as adoption matures |
| No on-chain data | The chart uses only price; it ignores network activity, adoption metrics, macro factors |
| Past ≠ future | Historical zone behaviour may not repeat in future cycles |

**This model should never be used as the sole basis for an investment decision.**

---

## Resources

- [blockchaincenter.net Rainbow Chart](https://www.blockchaincenter.net/en/bitcoin-rainbow-chart/) – one of the most widely referenced implementations
- Original concept popularised by Trolololo (2014) and later refined by multiple community members

---

*See also: [`allocation-model.md`](./allocation-model.md) for how the zones map to STRC/MSTR weights.*
