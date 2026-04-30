# Allocation Model – Digital Money Transformation

> **Disclaimer:** This document is for informational purposes only and does not constitute investment advice. Past performance is not an indicator of future results. Investing involves significant risks, including the risk of total loss.

---

## Overview

The wikifolio **Digital Money Transformation** (Symbol: `WF00DIGIMT`) follows a fully rule-based allocation model between two instruments:

| Instrument | Role in Portfolio |
|---|---|
| **STRC** (Strategy Shares – preferred share) | Defensive base · dividend-paying · lower Beta |
| **MSTR** (MicroStrategy / Strategy common stock) | Higher-beta satellite · amplified Bitcoin exposure |

The sole regime indicator is the **Bitcoin Rainbow Chart** (logarithmic regression). No discretionary overrides.

---

## The Two Instruments

### STRC – Strategy Preferred Shares

STRC is the preferred share of Strategy (formerly MicroStrategy). Key characteristics:

- **Regular dividend payments** – providing a predictable income stream
- **Lower volatility** than common stock (MSTR)
- **Indirect Bitcoin exposure** through the company's treasury holdings
- Acts as a **defensive cushion** during Bitcoin bear phases
- In extreme cases (Red zone), the portfolio is 100% STRC – functioning like a Bitcoin-adjacent income instrument

### MSTR – MicroStrategy Common Stock

MSTR is the common stock of Strategy. Key characteristics:

- **High Bitcoin beta** – historically multiplies Bitcoin moves (both up and down)
- Strategy uses debt financing to purchase Bitcoin, amplifying returns and risks
- In maximum opportunity zones (Purple), the portfolio holds up to 60% MSTR
- Provides the **upside engine** in Bitcoin bull markets

---

## Allocation Table by Rainbow Zone

| Rainbow Zone | STRC | MSTR | Market Signal |
|---|---|---|---|
| 🔴 Red | **100%** | 0% | Extreme greed / top warning |
| 🟠 Dark Orange | **95%** | 5% | Significantly overheated |
| 🟠 Orange | **90%** | 10% | Overheated |
| 🟠 Light Orange | **85%** | 15% | Slightly overheated |
| 🟡 Yellow | **80%** | 20% | Fair value |
| 🟢 Light Green | **75%** | 25% | Slightly undervalued |
| 🟢 Green | **70%** | 30% | Undervalued |
| 🔵 Light Blue | **60%** | 40% | Significantly undervalued |
| 🔵 Blue | **50%** | 50% | Deeply undervalued / accumulate |
| 🟣 Purple | **40%** | 60% | Maximum opportunity zone |

---

## Rebalancing Rules

1. **Trigger:** A rebalance is executed whenever the Bitcoin price crosses into a new Rainbow zone.
2. **Cadence:** The Rainbow Chart moves slowly (logarithmic regression). Zone crossings happen at most a few times per year under normal conditions, making rebalances roughly monthly or less frequent.
3. **Execution:** The portfolio is adjusted to the new target weights as soon as practically possible after a zone change.
4. **No anticipation:** The model does not predict where the price will go – it only reacts to the current confirmed zone.

---

## Dividend Handling

STRC pays regular dividends. These are handled as follows:

1. **Retained as cash reserve** – if no rebalancing trigger is active, dividends accumulate as a cash buffer.
2. **Reinvested during rebalancing** – when a zone change occurs, accumulated dividends are incorporated into the new target allocation.
3. **Tactical deployment** – the portfolio manager reserves the right to deploy a portion of the cash reserve for small tactical trades during special market events (e.g., flash crashes, announced major purchases, macro shocks). These tactical trades are opportunistic and secondary to the core Rainbow model.

---

## Risk Parameters

| Risk Factor | Description |
|---|---|
| Concentration risk | Only 2 instruments, both correlated to Bitcoin |
| Bitcoin volatility | BTC can drop 50–80% in bear markets |
| MSTR leverage risk | Strategy's debt amplifies both gains and losses |
| Model risk | Rainbow Chart is heuristic, not guaranteed accurate |
| Liquidity risk | wikifolio certificate may have limited liquidity |
| Total loss risk | Full loss of invested capital is possible |

---

## Objective

The goal is to combine **systematic, signal-driven exposure management** with **prudent liquidity control**, allowing flexible risk adjustment across different Bitcoin market phases. The strategy aims to:

- Capture most of the Bitcoin bull market upside through MSTR
- Limit drawdowns during bear markets through STRC's dividend income and lower beta
- Maintain discipline by following the model strictly, avoiding emotional decision-making

---

*See also: [`rainbow-zones.md`](./rainbow-zones.md) for a detailed explanation of the Bitcoin Rainbow Chart.*
