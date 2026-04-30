# Monthly Rainbow Update – Process Guide

> This document explains the cadence, rationale, and process for the monthly Rainbow zone update for the wikifolio **Digital Money Transformation** (Symbol: `WF00DIGIMT`).

---

## Why Monthly (Not Daily)?

The Bitcoin Rainbow Chart is based on a **logarithmic regression** of Bitcoin's historical price. Because it is a long-term statistical model, the zone boundaries move very slowly – typically a few hundred to a few thousand dollars per month. As a result:

- **Daily changes are negligible** – the zone almost never changes from one day to the next
- **Weekly changes are rare** under normal market conditions
- **Monthly updates** capture the meaningful signal without creating noise or unnecessary urgency

Publishing a daily "Rainbow update" would either be repetitive (same zone, nothing to report) or create artificial urgency, which conflicts with the calm, systematic nature of this strategy.

---

## Cadence

| Update Type | Frequency | Trigger |
|---|---|---|
| **Monthly Rainbow Update** | First week of each calendar month | Time-based (routine) |
| **Emergency Rebalance Update** | As needed | Zone crossing confirmed |
| **Year-End Summary** | Once per year (December/January) | Calendar |

---

## Process (Step by Step)

1. **Check the current zone** (first Monday of the month)
   - Visit [blockchaincenter.net/bitcoin-rainbow-chart](https://www.blockchaincenter.net/en/bitcoin-rainbow-chart/)
   - Note the current zone and Bitcoin price
   - Compare with last month's zone

2. **Determine if a rebalance occurred**
   - If zone changed: document the change date, old vs. new allocation, and brief rationale
   - If no change: note that the portfolio is unchanged

3. **Fill in the template** (`template.md`)
   - Record BTC price range for the month
   - Current allocation (STRC% / MSTR%)
   - Upcoming watchpoints (price levels that would trigger a zone change)

4. **Publish**
   - Save the completed update as `reports/rainbow-update-{YYYY-MM}.md`
   - Post a tweet using template `TJ-01` or `TJ-02` from `content/tweets/tweet-templates.md`
   - Include a short summary in the weekly newsletter

---

## Disclaimer Reminder

Every update must include:

> *"This update is for informational purposes only and does not constitute investment advice. Past performance is not an indicator of future results. Investing involves significant risks, including the risk of total loss."*
