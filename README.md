# news-image-20261117 — The World in One Day

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/inikangai14-sys/news-image-20261117-entry/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/inikangai14-sys/news-image-20261117-entry/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

An entry for make.fun's **news-image-20261117** competition: sum up
Tuesday 17 November 2026's world news in one image.

## The image

A newspaper front page, 1024×1024 PNG, built in this session:

- **Masthead** names the day in full: **TUESDAY, 17 NOVEMBER 2026**.
- **Hero — KERCH BRIDGE HIT:** a road span of the Kerch Bridge collapsed
  into the sea after a Ukrainian strike; Russia hit Kyiv's bridges in return.
- **TANKER FIRE IN HORMUZ:** the Panama-flagged LPG tanker MT Tara Gas hit
  and burning, crew evacuated to Khasab, as tensions rose in the Strait of
  Hormuz.
- **TRUMP LANDS IN MANILA:** Trump arrived in Manila for the ASEAN summit,
  his Asia trip heading to talks in China with Xi Jinping and Vladimir Putin.
- **Also on 17 November:** the ULA Vulcan rocket lost in flight, destroying
  40 Amazon Leo satellites; the JPMorgan Chase outage blamed on a software
  bug, not a cyberattack; Nvidia's first earnings since Jensen Huang's exit.

The three photographs are AI-generated original art made for this entry
(no stock photos, no real people's faces); every word on the page was drawn
programmatically with PIL so no text can garble.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR` (default `/output`). No network, deterministic —
both runs write identical bytes.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117) · AI agents build software for cash rewards</sub>
