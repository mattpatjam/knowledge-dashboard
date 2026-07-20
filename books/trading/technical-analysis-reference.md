# Technical Analysis of the Financial Markets — Framework Reference

*Pure framework. No company-specific application. Pull from here when building skills, advising on trading/investing psychology, or designing risk management practice.*
*Book: "Technical Analysis of the Financial Markets" — John J. Murphy*

---

## 1. Core Philosophy and Premises

Technical analysis is the study of market action, primarily through charts, for the purpose of forecasting future price trends. "Market action" means the three sources of information available to a technician: price, volume, and open interest (open interest applies only to futures and options).

Three premises underpin the entire discipline:

- **Market action discounts everything.** Anything that can affect price (fundamental, political, psychological) is already reflected in the price itself. The technician doesn't need to know why prices are moving, only that the movement itself already encodes the "why." Turned around: if prices are rising, demand exceeds supply and the fundamentals must be bullish, whatever the stated reasons.
- **Prices move in trends.** A corollary (borrowed from Newton's first law): a trend in motion is more likely to continue than to reverse. Nearly all technical methods are trend-following — they identify an existing trend and ride it rather than predict a turn in advance.
- **History repeats itself.** Chart patterns reflect the bullish/bearish psychology of market participants, which is rooted in human nature and doesn't change. Patterns that worked in the past are assumed to keep working because they're really a study of crowd psychology, not of the charts themselves.

**Technical vs. fundamental analysis:** the fundamentalist studies the cause of a market move (supply/demand, intrinsic value); the technician studies the effect (price action itself). Murphy's argument for technical primacy: because the technical approach already includes the fundamentals (they're discounted into price), the reverse isn't true — fundamental analysis does not include a study of price action. Timing, as distinct from analysis, is almost purely technical — you can be right on direction and still lose money if entry/exit timing is wrong, especially under leverage.

**Answering the two standard criticisms:**

- *Self-fulfilling prophecy* — the objection that widely-followed chart patterns cause the very moves they predict. Murphy's rebuttal: critics also claim chart patterns are purely subjective and "in the mind of the beholder" — these two criticisms cancel each other out. If everyone interpreted charts identically enough to cause a stampede, the patterns couldn't simultaneously be so subjective that experienced chartists routinely disagree on them. Traders also act on the same signal in different ways and at different times (anticipating, on the breakout, waiting for a pullback), which dilutes any herd effect. Even if it existed, the effect would be self-correcting as traders adjusted their tactics once they noticed distortion.
- *Can past data predict the future?* — every forecasting method, technical or fundamental, relies on historical data; there is no other kind of data to use. Chart analysis is simply a form of time-series analysis.

**Random Walk Theory** holds that price changes are serially independent (unpredictable) and that a simple buy-and-hold strategy beats any attempt to time the market. Murphy's counter: pure randomness cannot explain the persistence of long visible trends across markets and years; if prices were truly random, trend-following systems (which have real, testable track records) couldn't work. He notes the theory's own logic — that markets discount information quickly — is close to the technician's own premise, and that "randomness" is often just a label for patterns the observer hasn't learned to read yet (an EKG looks like noise to a layperson but not to a cardiologist). Behavioral Finance is cited as academia's belated concession that psychology and price are intertwined — the foundation of technical analysis all along.

**Analysis is a skill, not a formula.** Chart reading is described repeatedly as an art requiring judgment; the same setup can be reasonably read two different ways by experienced practitioners. This subjectivity is a feature to be managed (with filters, confirmation rules, and multiple technical inputs), not a flaw that discredits the discipline.

---

## 2. Dow Theory

Dow Theory, developed by Charles Dow around 1900 (via Wall Street Journal editorials, later compiled by Nelson, Hamilton, and Rhea), is described as the historical foundation underlying nearly every later technical concept. Six basic tenets:

1. **The averages discount everything.** Market averages reflect all known and knowable information, even sudden shocks (they assimilate the effect quickly rather than anticipate the event).
2. **The market has three trends.** Dow compared them to the tide (primary trend, lasting a year or more), waves (secondary/intermediate trend, three weeks to three months, retracing one-third to two-thirds — usually about half — of the prior primary move), and ripples (minor trend, under three weeks, essentially noise within the intermediate trend).
3. **Major trends have three phases:** accumulation (informed/smart-money buying while sentiment is still bearish), public participation (the trend becomes obvious and most trend-followers get in), and distribution (informed money sells into rising public enthusiasm and euphoric news coverage). Murphy links this directly to Elliott Wave's three impulse waves in a five-wave bull sequence.
4. **The averages must confirm each other.** For Dow this meant the Industrial and Transportation averages had to both exceed their prior secondary peaks to validate a bull signal; divergence between the two means the prior trend is still assumed intact. (Elliott Wave, by contrast, only requires a signal in a single average.)
5. **Volume must confirm the trend.** Volume should expand in the direction of the major trend and contract on countertrend moves. Dow treated volume as secondary — his actual buy/sell signals were based purely on closing prices.
6. **A trend is assumed in effect until it gives definite signals that it has reversed** — an object in motion tends to remain in motion. Support/resistance, trendlines, price patterns, and moving averages are the tools used to spot the reversal signal.

Dow relied exclusively on closing prices — intraday penetrations of a prior high/low don't count. Horizontal, sideways trading ranges are called "lines" in Dow's terminology (the forerunner of the modern rectangle pattern).

**Failure swing vs. non-failure swing** in reversal identification: a failure swing occurs when a rally fails to exceed the prior peak before breaking the intervening low (a weaker, earlier signal). A non-failure swing requires the rally to first exceed the prior peak, then set a new lower high, then break the prior low (a stronger, later-confirmed signal). Dow theorists disagree on which standard to require.

**Known limitation:** Dow Theory typically misses 20-25% of a move before generating a signal — by design, since Dow never intended to call exact tops or bottoms, only to capture the large middle portion of major trends. Historical study (1920-1975) found Dow signals captured roughly two-thirds of major moves in the Industrials/Transports and the S&P 500.

---

## 3. Chart Construction and Types

Four main chart types, all built from the same underlying open/high/low/close (and volume/open interest) data:

- **Bar chart** — the standard tool. Vertical bar spans the day's high-low range; a tic to the left marks the open, a tic to the right marks the close. Volume is plotted as vertical bars along the bottom; futures open interest is plotted as a solid line above volume but below price (reported one day late in futures, since official figures post after the day's papers go out — only an estimated volume figure is available same-day).
- **Line chart** — connects only the closing price each period. Favored by chartists who consider the close the single most important price of the day; especially useful for intermarket ratio/overlay comparisons and open-end mutual funds (which only report end-of-day NAV).
- **Point and figure chart** — a pure study of price movement with no time axis; covered fully in Section 12.
- **Candlestick chart** — the Japanese variant; covered fully in Section 13.

**Arithmetic vs. logarithmic scale:** on an arithmetic scale, equal vertical distance represents equal absolute price change. On a log (ratio) scale, equal vertical distance represents equal percentage change — a move from 10 to 20 looks the same as a move from 20 to 40. Stock services tend to favor log scales; futures services tend to favor arithmetic. Log scaling is more useful for very long-range trend analysis, and trendlines break sooner on a log chart than on the equivalent linear chart.

**Weekly and monthly bar charts** compress price action the same way daily charts do, just over longer spans — a weekly chart can usefully span about five years, a monthly chart up to twenty. Everything doable on a daily chart (patterns, trendlines, retracements) is doable on weekly/monthly charts, generally with much greater significance.

**Futures-specific construction notes:**

- Total volume and total open interest (summed across all delivery months) are used for forecasting, not the individual month figures — because volume/open interest for any single contract naturally rises then falls purely as a function of its limited life span, unrelated to market direction.
- Individual delivery-month open interest still matters for one purpose: trading should be concentrated in the delivery months with the highest open interest (greatest liquidity); low-open-interest months should be avoided.
- **Continuation charts** solve the problem that any single futures contract only trades ~18 months before expiring. The simplest method links the price of whichever contract is currently "nearest" to expiration; more refined variants avoid the nearest month's final weeks of volatility, chart the highest-open-interest month instead, or link only a fixed calendar month year over year (the "Gann contract" method). The **Perpetual Contract** (Robert Pelletier / CSI) instead constructs a constant-forward time series by weight-averaging two surrounding contracts — useful for system back-testing since it removes expiration-driven price distortion, though it isn't an actual tradable price.

---

## 4. Trend Fundamentals: Definition, Support/Resistance, Trendlines, Channels, Retracements

**Definition of trend:** markets move in three directions — up, down, and sideways (roughly a third of the time is sideways/trendless, by conservative estimate). An uptrend is a series of ascending peaks and troughs; a downtrend is descending peaks and troughs; a sideways/trading-range market has roughly horizontal peaks and troughs. Trend-following tools and systems are built for the first two conditions and perform poorly — often producing repeated whipsaws — during the third.

**Three degrees of trend**, nested within each other like waves within a tide: major/primary (Dow: over a year; Murphy suggests over six months is workable for futures), intermediate/secondary (three weeks to a few months, correcting the major trend, typically retracing a third to two-thirds of it), and minor/near-term (under two-three weeks, the noise within the intermediate trend). Always clarify which degree of trend is being discussed before giving or taking a market opinion.

**Support and resistance:**

- Support = a prior reaction low; a price zone where buying pressure has been strong enough to halt a decline.
- Resistance = a prior rally peak; a zone where selling pressure has halted an advance.
- **Why they work (the psychology):** participants are divided into longs, shorts, and the uncommitted. After a rally off a support zone, everyone who missed buying there (or covered a short there) wants a second chance at that price — creating a reservoir of latent buy orders. If that support is later broken decisively, all of those same latent buyers now hold underwater longs and become forced sellers — the zone flips from support to resistance. The reverse logic applies to broken resistance becoming new support. The strength of any support/resistance zone is a function of (1) how long trading lingered there, (2) how much volume traded there, and (3) how recently it was tested.
- **Degree of penetration:** a common rule of thumb requires roughly a 3% closing penetration to validate the break of a major support/resistance level (smaller, e.g. ~1%, for shorter-term levels); a two-day-close filter is another common validity test.
- **Round numbers** (10, 20, 25, 50, 100, and multiples of 1000) act as psychological support/resistance because traders cluster orders around them. Practical implication: place resting buy orders just above a round number and resting sell orders just below one, since the round number itself may never actually trade; place protective stops away from round numbers, not directly on them.

**Trendlines:**

- An up trendline connects at least two successive rising lows; a down trendline connects at least two successive falling highs. Two points draw a *tentative* line; a third successful touch/bounce confirms it as *valid*.
- Trendlines should be drawn through the full price range (high-low), not just closing prices.
- Significance scales with both duration (how long it's held) and number of successful tests.
- **Steepness matters:** an ideal trendline runs at roughly a 45° angle. A trendline that's too steep signals an unsustainable rate of ascent (expect it to break and be replaced by a flatter, more sustainable line); one that's too flat suggests a weak, untrustworthy trend.
- **Role reversal:** once decisively broken, an up trendline (support) tends to become resistance on the next rally, and vice versa — the same psychological mechanism as support/resistance role reversal.
- **Measuring implication:** once a trendline breaks, price often travels roughly the same vertical distance beyond the line that it had traveled above/below the line before the break (directly analogous to the head-and-shoulders measuring rule).
- **The fan principle:** after an up trendline breaks, price sometimes rallies back to test the underside of the old line (now resistance), fails, and a second, flatter trendline is drawn; if that also fails on a retest, a third (flatter still) line is drawn. The break of this *third* fan line is the reliable reversal signal.
- **The number three** recurs constantly across the discipline: three fan lines, three Dow/Elliott bull-market phases, three gap types, three trend classifications and three trend directions, three triangle types, three sources of data (price/volume/open interest).

**Channel lines:** drawn parallel to the basic trendline, through the first prominent opposite extreme (e.g., parallel to an up trendline, through the first rally peak). Price often oscillates between the two lines. The basic trendline is used for new-position entries; the channel line is used for profit-taking (or, more aggressively, countertrend entries). A breakout beyond the channel line signals trend *acceleration* (opposite meaning from a break of the basic trendline, which signals reversal) — some chartists redraw a steeper basic trendline parallel to the new channel line when this happens. Channel width has a measuring implication: once broken, price tends to travel a further distance equal to the channel's width.

**Percentage retracements:** countertrend corrections tend to fall into predictable bands. The best known is the 50% retracement; minimum is roughly one-third (33%), maximum roughly two-thirds (66%) — beyond two-thirds, odds favor a full trend reversal rather than a mere correction. Combined with Fibonacci-derived 38%/62% levels (see Section 14), Murphy favors treating 33-38% as the minimum zone and 62-66% as the maximum zone.

**Speed resistance lines (Edson Gould):** an adaptation of the one-third/two-thirds retracement idea, but applied to *speed* (rate of ascent/descent) rather than static retracement. Constructed by drawing a vertical line from the trend's high back to its starting point, dividing that line into thirds, then drawing trendlines from the trend's origin through the one-third and two-thirds points. These lines are drawn *through* price action (not under lows/over highs) and provide sequential support levels during a correction.

**Gann and Fibonacci fan lines:** Fibonacci fan lines are drawn like speedlines but at 38% and 62% angles. Gann fan lines are drawn from a prominent top/bottom at specific geometric angles, the most important being 45°, with steeper (63¾°, 75°) and flatter (26¼°, 15°) variants also used.

**Reversal days:** a top reversal day sets a new high intraday, then closes lower than the prior day's close; a bottom reversal day sets a new intraday low, then closes higher. Significance increases with range and volume. A dramatic bottom reversal on heavy volume is called a **selling climax**; the analogous dramatic top is a **blowoff**. Weekly and monthly reversal days follow the same logic at greater significance (e.g., a weekly reversal: price makes a new low for the week but closes Friday above the prior Friday's close).

**Price gaps** — three types, each with different implications:

- **Breakaway gap** — occurs at the completion of a price pattern or major trendline break, on heavy volume, and usually is *not* filled; marks the start of a significant move and should function as support (in an uptrend) on later pullbacks. A close back through a breakaway gap is a warning sign.
- **Runaway (measuring) gap** — occurs roughly midway through an established move, on moderate volume; useful for estimating the remaining distance of the move by doubling the distance already covered from the original breakout point.
- **Exhaustion gap** — occurs near the very end of a move as a last, unsustainable burst; when price closes back through this gap within days, it confirms the move is over.
- **Island reversal** — an exhaustion gap in the trend's direction followed within days/weeks by a breakaway gap in the opposite direction, stranding a small cluster of trading days as an "island." A significant reversal signal.

---

## 5. Major Reversal Patterns

Reversal patterns signal that an important trend change is underway; they require a genuine prior trend to reverse. General rules common to all of them: the first hint of trouble is often the break of an important trendline; the larger the pattern (height = volatility, width = time to build), the greater the subsequent move; topping patterns are typically shorter and more volatile than bottoms, while bottoms take longer to build with a smaller price range (hence bottoms are usually easier and cheaper to identify and trade); volume confirmation matters far more on the upside than the downside — a bear trend can fall "of its own weight" on light volume, but a bottom absolutely requires a volume surge to be trusted.

**Head and shoulders (top).** The best known and most reliable reversal pattern. Structure: left shoulder (a normal new high on expanding volume), a pullback, a rally into a new high — the head — but on *noticeably lighter* volume than the left shoulder (an early warning), a decline that breaches the previous peak (left shoulder's high) and approaches the prior low, a third rally — the right shoulder — on even lighter volume that fails to reach the head's height, and finally a decisive close through the **neckline** (the line connecting the two intervening lows, usually sloping slightly upward). The pattern isn't complete until the neckline breaks on a closing basis (commonly filtered with a 1-3% penetration or a two-day-close rule). A **return move** back to the neckline (now resistance) often follows the break, ideally on light volume, before the downtrend resumes on heavier volume. **Price objective:** measure the vertical distance from the head to the neckline and project that distance downward from the point where the neckline is broken (equivalently: measure the first leg of the decline and double it). This is only a *minimum* target — the maximum theoretical target is a full retracement of the entire preceding bull move. A **failed head and shoulders** occurs if price recrosses back above a broken neckline — a serious warning that the initial signal was bad; the pattern can occasionally also act as a *continuation* pattern rather than a reversal.

**Inverse head and shoulders (bottom)** is the mirror image, with one key difference: volume is far more critical on the bottoming side. The rally off the head should show volume exceeding the rally off the left shoulder, and the breakout through the neckline requires a genuine volume surge to be trusted — a market can fall on inertia/lack of demand, but it cannot rise without real aggressive buying. Return moves to the neckline are more common at bottoms than at tops.

**Complex head and shoulders** — variants with a double head or a double left/right shoulder occasionally occur; a strong tendency toward symmetry means a double left shoulder raises the odds of a double right shoulder.

**Triple tops and bottoms** — essentially a head-and-shoulders variant where all three peaks (or troughs) sit at roughly the same level rather than the middle one being higher/lower. Same volume logic (declining volume on each successive top; volume surge required on a bottom breakout) and the same height-based measuring technique.

**Double tops and bottoms** — the second most common reversal pattern after head and shoulders (informally called "M" tops and "W" bottoms). Two peaks at roughly the same level; the pattern only completes when the intervening trough is broken on a closing basis — a simple pullback off a prior high is *not* a double top until that support actually breaks. Volume is typically lighter on the second peak, and should expand on the breakdown. Measuring technique: project the height of the pattern (or the first downleg) from the breakdown point. The term is heavily overused in practice since most apparent double tops resolve as simple pullbacks instead; time between the two peaks should generally be at least a month for the pattern to carry real weight. A **bull trap** occurs when the second peak marginally exceeds the first before failing — watch for light volume on that final push and heavy volume on the reversal as a tell.

**Saucers/rounding patterns** — very slow, gradual reversals, usually visible only on weekly/monthly charts spanning years; hard to time precisely but significant given their duration.

**Spikes/V-reversals** — the opposite extreme: an abrupt reversal with little or no transitional pattern, typically on a single very-heavy-volume day/week following an overextended move and adverse news. Give little advance warning; oscillator extremes (Section 10-11) can sometimes flag when a market has become dangerously overextended ahead of one.

---

## 6. Continuation Patterns

Continuation patterns indicate the sideways action is a pause, not a reversal — the next move should resume the prior trend direction. They're generally shorter in duration than reversal patterns (intermediate/near-term rather than major), though exceptions occur.

**Triangles** — three variants, each with different implications:

- **Symmetrical triangle** ("coil") — two converging trendlines (upper descending, lower ascending), inherently a neutral/continuation pattern that resolves in the direction of the prior trend. Needs a minimum of four reversal points (two on each line) to draw; volume should contract during formation and expand on the breakout. **Time limit:** the breakout should occur between roughly two-thirds and three-quarters of the horizontal distance to the apex — if price drifts further than that without breaking out, the pattern loses potency. Measuring technique: project the height of the base from the breakout point, or draw a parallel channel line from the top of the base.
- **Ascending triangle** — flat upper line, rising lower line; considered inherently bullish regardless of the preceding trend (buyers more aggressive than sellers), and can appear as either a continuation or a basing pattern. Same height-based measuring technique.
- **Descending triangle** — mirror image, inherently bearish; flat lower line, declining upper line.
- Both ascending/descending triangles are also called right-angle triangles; the time to form is typically one to three months (an apparent triangle lasting under a month is more likely a pennant).

**Broadening formation (megaphone top)** — a rare inverted/expanding triangle where the trendlines *diverge* rather than converge, and volume *expands* rather than contracting — a sign of an emotional, out-of-control market. Usually bearish and usually appears near major tops. Considered one of the hardest patterns to trade.

**Flags and pennants** — brief pauses (one to three weeks; even shorter in downtrends) after a sharp, near-vertical move ("flagpole") on heavy volume, with volume drying up noticeably during the pause. A flag resembles a small parallelogram sloping *against* the trend; a pennant resembles a small, more horizontal symmetrical triangle. Both tend to occur near the midpoint of the overall move ("flying at half-mast") — measuring technique: measure the flagpole (the move from the original breakout point to the start of the flag/pennant) and project that same distance from the point the flag/pennant breaks.

**Wedge formation** — resembles a symmetrical triangle in shape and duration (one to three months) but with a pronounced slant, and — critically — the slant runs *against* the prevailing trend (like a flag). Rule of thumb: a rising wedge is bearish, a falling wedge is bullish, regardless of whether it appears mid-trend (continuation) or at a top/bottom (reversal).

**Rectangle formation** ("trading range," "congestion area," Dow's "line") — sideways action between two flat, parallel horizontal lines; equivalent in behavior to a symmetrical triangle but with flat rather than converging boundaries. Watch which side (rallies vs. pullbacks) carries heavier volume as an early clue to which way it will resolve, and stay alert that what looks like a rectangle can turn into a triple-top/bottom reversal instead. Some traders profitably trade the swings *within* a well-defined rectangle (buying near the bottom, selling near the top) until a genuine breakout occurs. Measuring technique: project the height of the range from the breakout point.

**The measured move (swing measurement)** — a major advance/decline splits into two roughly equal, parallel legs separated by a corrective countertrend swing that retraces about a third to half of the first leg. Once the first leg (A-B) and the correction (B-C) are identified, the second leg (C-D) is projected to roughly duplicate the first leg's length, measured up (or down) from point C.

**Continuation head and shoulders** — a head-and-shoulders shape that appears mid-trend rather than at a reversal point; distinguished by being flipped relative to the normal reversal pattern (in an uptrend, the middle trough of the "shoulders" sits *lower* than the outer two, i.e., the pattern is upside-down relative to a topping H&S), which prevents confusing it with an actual reversal signal.

**Confirmation and divergence** — recurring concepts throughout the book. Confirmation = multiple technical signals agreeing with each other (e.g., price and volume both trending the same direction). Divergence = the opposite, and one of the single most valuable early-warning signals of an impending trend reversal across nearly every tool in the discipline (volume, oscillators, breadth indicators, intermarket ratios).

---

## 7. Volume and Open Interest

Price is the primary data source; volume and open interest are secondary, confirming indicators (volume more important of the two). **General interpretation table:**

- Rising price + rising volume (and, in futures, rising open interest) = a strong, healthy trend likely to continue.
- Rising price + falling volume/open interest = a weak rally, vulnerable to reversal.
- Declining price + rising volume/open interest = a strong (healthy) downtrend.
- Declining price + falling volume/open interest = a weakening downtrend.

**Volume** should expand in the direction of the prevailing trend and contract on countertrend moves; this holds true within every price pattern discussed in Sections 5-6. **Volume precedes price** — a loss of directional pressure typically shows up in the volume figures before it shows up as an actual price reversal.

**On Balance Volume (OBV)**, developed by Joseph Granville, is the simplest volume indicator: each day's total volume is added to a running cumulative total if the close was higher, subtracted if the close was lower. It's the *direction/trend* of the OBV line that matters, not its absolute value. OBV should trend in the same direction as price; when it diverges (price makes a new high/low that OBV fails to confirm), that's a warning sign. Refinements weight each day's volume by the size of that day's price change rather than treating the whole day as simply plus or minus (addressing the crudeness of an all-or-nothing daily assignment).

**Open interest (futures/options only)** = total number of outstanding, unliquidated contracts (counted on one side only — longs or shorts, since every contract has exactly one of each). Changes occur three ways: both parties open new positions (open interest rises), both parties close existing positions (open interest falls), or one opens while the other closes (no change). **Interpretation rules:**

- Rising price + rising open interest = new money entering aggressively on the long side = bullish (real, sustainable strength).
- Rising price + falling open interest = the rally is driven by short-covering, not fresh buying = bearish (the rally likely fades once the covering is exhausted).
- Falling price + rising open interest = aggressive new short selling = bearish (real weakness).
- Falling price + falling open interest = discouraged longs liquidating, not fresh selling = the decline should end once forced liquidation is exhausted = an improving technical picture.

Additional open-interest signals: a leveling-off or decline in open interest late in a well-established trend is an early warning of a change in trend; an unusually high open interest at a market top is dangerous, because a sudden reversal forces all the recently-established longs into losses and forced liquidation simultaneously, which can feed on itself; a buildup in open interest during a sideways consolidation *intensifies* the eventual breakout, because the losing side of all those newly-opened positions gets forced to cover once price finally breaks; and increasing open interest at the completion of a price pattern adds confirmation to the signal.

**Commitments of Traders (COT) Report** breaks futures open interest into three groups — large commercial hedgers, large speculators (trend-following funds), and small traders (the public). The guiding principle: commercials are usually right, the two trader categories are usually wrong at extremes. A bullish signal at a bottom is commercials heavily net long while both trader categories are heavily net short (and vice versa at tops).

**Options sentiment:** open interest and volume in puts vs. calls generate the **put/call ratio** — a contrarian indicator. A very high ratio (heavy put activity relative to calls) signals an oversold market; a very low ratio signals overbought. Sentiment readings work best combined with standard technical measures (trend, support/resistance).

---

## 8. Long-Term Charts and the Top-Down Analytical Sequence

Long-range weekly/monthly charts reveal that trends can persist for years — a point Murphy uses as further evidence against pure Random Walk randomness. Patterns visible on daily charts (double tops/bottoms, head-and-shoulders, triangles, weekly/monthly reversal days) recur on long-term charts, generally with greater significance.

**Correct analytical sequence: always work from long-term to short-term, never the reverse.** Start with a 20-year monthly chart (major trendlines, obvious patterns, major support/resistance), then narrow to the most recent five years on a weekly chart, then to six-to-nine months on the daily chart, and finally (if day-trading) to intraday charts. Reversing this order — starting from the daily chart — forces constant revision of conclusions as longer-range context comes into view later.

**Inflation adjustment is unnecessary** on long-term charts, in Murphy's view — the market itself already discounts inflation/deflation and currency value changes into nominal price (the same "market discounts everything" premise from Section 1 applied to long-run purchasing power).

**Long-term charts are for analysis, not timing** — they establish the major trend and price objectives, but entry/exit timing still requires daily and intraday charts.

---

## 9. Moving Averages

A moving average is a trend-following smoothing device with an inherent time lag — it never predicts, it only confirms/follows after the fact. It is not itself a forecasting tool; it's the basis for many mechanical trend-following systems because, unlike subjective chart pattern reading, it is precisely quantifiable and testable.

**Trade-off between sensitivity and reliability:** a shorter average (e.g., 5 or 10 day) hugs price closely, giving earlier signals but more whipsaws in choppy conditions; a longer average (e.g., 40, 50, 200 day) is smoother and more reliable in a persistent trend but gives back more when the trend actually reverses, since it trails from further away. Corollary: longer averages work better while a trend is intact; shorter averages work better once a trend is reversing.

**Three construction types:**

- **Simple (arithmetic)** — equal weight to every day in the period; the most commonly used.
- **Linearly weighted** — more recent days receive proportionally greater weight (e.g., in a 10-day average, day 10 is multiplied by 10, day 9 by 9, etc., divided by the sum of multipliers).
- **Exponentially smoothed** — weights recent data more heavily *and* incorporates the entire price history rather than a hard cutoff window; the weighting is adjustable via a percentage assigned to the latest close (roughly, a 10% weighting behaves like a 20-day average, a 5% weighting like a 40-day average).

**Single-average signals:** buy when price closes above the average, sell when it closes below; confirmation is stronger if the average line itself turns in the new direction.

**Double crossover method:** buy when the shorter average crosses above the longer, sell on the reverse cross. Popular combinations: 5/20 day and 10/50 day.

**Triple crossover method:** the well-known **4-9-18 day** combination (derived from 5/10/20 day cyclic harmonics; see Section 15) used mainly in futures. In an uptrend the correct alignment is 4-day above 9-day above 18-day; a buying *alert* occurs when the 4-day crosses both others, a *confirmed* signal when the 9-day then crosses the 18-day.

**Moving average envelopes** — fixed percentage bands placed above/below a single average (e.g., 3% bands around a 21-day average for short-term trading; 5% around a 10-week average, or 10% around a 40-week average, for longer-range work) used to flag when price has become overextended relative to its own average.

**Bollinger Bands** (John Bollinger) — two bands placed *two standard deviations* above and below (typically) a 20-day average, so that ~95% of price data statistically falls between them. Unlike fixed-percentage envelopes, Bollinger Bands expand and contract with actual recent volatility. Simplest use: the bands themselves become price targets (upper band as an upside target once price crosses back above the average from below, lower band as a downside target on the reverse). Band width itself is informative — unusually wide bands often mark a trend nearing exhaustion, unusually narrow bands often precede a new directional move. Works best combined with an overbought/oversold oscillator.

**Cyclic tie-in:** popular moving-average lengths (5, 10, 20, 40 days; and their derivatives 4, 9, 18) are not arbitrary — they map onto the dominant ~20-trading-day (28-calendar-day) monthly cycle and its harmonically related (½× or 2×) neighbors. Fibonacci numbers (13, 21, 34, 55 — see Section 14) also work well as moving-average lengths, both on daily charts and weekly charts (13-week average is a noted example).

**Optimization** — testing many parameter combinations to find the historically best-fitting average length for a given market. Murphy's practical take: worthwhile for traders following only a handful of markets, but a generalist following many markets should use one consistent set of parameters across all of them rather than curve-fit each one; be wary of over-reliance on optimized-but-untested-out-of-sample results.

**The Adaptive Moving Average (Perry Kaufman)** solves the fast-vs-slow trade-off directly: it computes an Efficiency Ratio (price direction relative to volatility/noise) and automatically speeds up in trending conditions, slows down in choppy/trading-range conditions.

---

## 10. Oscillators: Momentum, Rate of Change, RSI, Stochastics, %R, MACD

Oscillators are the counterpart to trend-following moving averages — they excel precisely where moving averages fail: sideways, trendless markets. They also add value during a trend by flagging overbought/oversold extremes and (their single most valuable use) spotting divergence ahead of a reversal. Oscillators are always subordinate to basic trend analysis — the discipline is to trade an oscillator signal only in the direction the larger trend already favors (buy oversold readings in an uptrend, sell overbought readings in a downtrend), not to use divergence as an excuse to fight the primary trend.

**Three principal uses of any oscillator:**

1. Extreme readings near the upper/lower boundary flag an overbought/oversold, overextended condition.
2. Divergence between the oscillator and price while the oscillator sits at an extreme is a serious warning.
3. Crossing the zero/midpoint line generates a trend-direction signal.

**Timing note:** in the early stages of a fresh, powerful trend right after a breakout, oscillators reach extremes almost immediately and can stay there — treat early-move overbought/oversold readings with caution and weight basic trend analysis more heavily. Oscillators become progressively more useful as a move matures (their divergence signals are most trustworthy near the end of a trend).

**Momentum** — the simplest form: M = V − Vx (latest close minus the close x periods ago), plotted around a zero line. A rising momentum line above zero means the uptrend is *accelerating*; a momentum line that flattens or drops toward zero (even while price still rises) means the trend is *decelerating* — momentum is a leading measure of the *rate* of a move, not the move itself.

**Rate of Change (ROC)** — the same concept expressed as a ratio rather than a difference: 100 × (V / Vx), oscillating around a midpoint of 100.

**Dual-moving-average histogram** — plotting the *difference* between two moving averages as a histogram around a zero line combines the crossover-signal logic of Section 9 with oscillator-style overbought/oversold reading.

**Commodity Channel Index (CCI)**, developed by Donald Lambert — compares current price to a moving average (commonly 20 days), normalized by mean deviation so it fluctuates within a fixed ±100 range. Values above +100 (candidates for long positions per Lambert's original design) or below −100 (short candidates) are most commonly used simply as overbought/oversold thresholds.

**Relative Strength Index (RSI)**, developed by J. Welles Wilder Jr. (*New Concepts in Technical Trading Systems*, 1978) — solves two problems with a raw momentum line: erratic jumps caused by whatever value is being dropped off the calculation window, and the lack of a fixed comparison range. RSI is bounded 0-100 via a smoothed ratio of average gains to average losses over a period (Wilder used 14 days/weeks). Shorter periods (5-9 days) widen the amplitude for more short-term signals; longer periods (21-28 days) smooth it. Overbought is conventionally above 70, oversold below 30 (shifting to 80/20 in strong bull/bear regimes respectively). **Failure swings**: a top failure swing is an RSI peak above 70 that fails to exceed its prior RSI peak, followed by RSI breaking its intervening trough; the mirror image at bottoms (below 30) is a bottom failure swing. Wilder himself called divergence "the single most indicative characteristic" of RSI. The 50 midline often acts as support/resistance in its own right. Trendline analysis can be applied directly to the RSI line, sometimes generating signals ahead of the corresponding price-chart trendline break.

**Stochastics (%K/%D)**, popularized by George Lane — built on the observation that in an uptrend, closes tend to cluster near the top of the recent range (and near the bottom in a downtrend). %K = 100 × [(C − L14) / (H14 − L14)], where L14/H14 are the 14-period low/high. %D is a 3-period average of %K ("fast stochastics"); a further 3-period smoothing of %D produces "slow stochastics," generally preferred for more reliable signals. Bounded 0-100; overbought above 80, oversold below 20. Signal logic: a bearish divergence forms when %D is above 80 and prints two declining peaks while price keeps rising; the actual sell trigger is %K crossing back below %D. Mirror logic applies at bottoms.

**Larry Williams %R** — conceptually identical to stochastics (today's close relative to the recent high-low range) but computed as an inverted measure subtracted from the period's high; charting software typically plots it inverted so it reads like stochastics.

**Moving Average Convergence/Divergence (MACD)**, developed by Gerald Appel — combines a dual-moving-average crossover with oscillator-style zero-line behavior. The MACD line = the difference between two exponential moving averages of closing price (standard defaults: 12 and 26 periods, used for both daily and weekly charts). The signal line = a 9-period EMA of the MACD line. A crossing of MACD above the signal line is a buy; below is a sell. Because the lines also fluctuate around a zero line, MACD doubles as an overbought/oversold gauge — the best buy signals occur with the lines well below zero (oversold), the best sells with the lines well above zero (overbought). The **MACD histogram** plots the spread between the MACD and signal lines directly; a histogram turn back toward zero (even before an actual crossover) is an earlier — though weaker, exit-only-grade — warning that the current trend is losing steam.

**Combining weekly and daily signals:** across virtually every crossover system (MACD, stochastics, moving averages), the standard practice is to let the weekly signal determine the trade direction and use the daily signal purely to fine-tune entry/exit — never trade a daily signal that contradicts the prevailing weekly signal.

**Cyclic tie-in for oscillator length:** as with moving averages, oscillator lookback periods are ideally set to roughly half the dominant underlying cycle length (hence the popularity of 5, 10, 14, and 20-period settings, all related to the ~28-calendar-day trading cycle discussed in Section 15).

---

## 11. Contrary Opinion and Sentiment Indicators

**The Principle of Contrary Opinion:** when the vast majority of participants agree on a market's direction, they're usually about to be proven wrong — because if 80-90% of participants have already bought in on the bullish consensus, there's no further buying power left to extend the move; conversely, a heavily one-sided position also implies the minority holding the opposite side must be strongly capitalized ("strong hands" absorbing many smaller "weak hands"), reinforcing the vulnerability of the crowded trade. This is treated as a genuinely psychological (not purely technical) layer of market analysis.

**Sentiment surveys used to quantify crowd positioning:**

- **Market Vane's Bullish Consensus** — a weekly poll of professional market letters. Equilibrium/norm sits around 55% (allowing for a natural bullish public bias); upper extreme ~90%, lower extreme ~20%; readings above 75% or below 25% are treated as warning zones. A contrarian position is generally only taken once the *trend* of the sentiment numbers itself starts turning back from an extreme — not the instant the extreme is first touched.
- **Consensus Index of Bullish Market Opinion** — uses 75%/25% as its overbought/oversold thresholds.
- **Investors Intelligence** — a weekly poll of investment advisors, split into % bullish, % bearish, % expecting a correction. Bullish readings above 55% warn of excess optimism; below 35% reflect excess pessimism (a positive contrarian signal). Investors Intelligence also separately tracks the percentage of stocks trading above their 10-week and 30-week moving averages — above 70% is overbought, below 30% oversold, with the signal confirmed once the reading crosses back through 70/30.
- **AAII Index** — a similar bull/bear/neutral poll among individual investors.

**Refinements on using sentiment data:**

- Open interest matters alongside sentiment in futures — a contrarian position works better the higher the open interest, but should *not* be taken while open interest is still climbing (wait for it to flatten or decline first); check the COT report to ensure hedgers hold less than half of total open interest, since contrarian logic works better against speculators (weaker hands) than against large hedgers.
- Watch how the market actually reacts to fresh fundamental news at an extreme — failure of a bullish news item to move an overbought market higher, or failure of bearish news to move an oversold market lower, is itself a strong contrarian tell that the crowd has already fully priced in the obvious case.
- Combine contrarian extremes with conventional technical confirmation (support/resistance breaks, trendline breaks, oscillator divergence) rather than relying on sentiment alone.

---

## 12. Point and Figure Charting

The oldest charting method (predates the bar chart by roughly a decade; originally called the "book method" in the 1880s-90s). Point and figure (P&F) is a pure study of price movement with **no time axis** — a column is only added when price actually moves by the defined box size; quiet periods simply leave the chart untouched, active periods produce many columns. Rising prices are recorded as a column of **x's**; falling prices as a column of **o's**. Volume isn't plotted directly, but is implicitly reflected in how much column activity accumulates at a given price level — making P&F charts well suited to identifying exactly where the heaviest trading (and therefore the most significant support/resistance) occurred.

**Two main construction styles:**

- **Intraday, 1-box-reversal chart** — the original method; every single box-sized move is recorded using intraday tick data. A reversal to the opposite column requires a minimum of two boxes to be filled (this rule is what occasionally forces a mixed column of both x's and o's). From this base chart, coarser 3-box and 5-box reversal charts can be derived (the 1-box chart *cannot* be reconstructed from a coarser one, so always start from 1-box).
- **3-box reversal chart** (A.W. Cohen, 1947; the basis of the Chartcraft service) — simplified to use only the daily high and low (no intraday data needed): continue filling the current column as long as the high (in an up-column) or low (in a down-column) permits; only start a new column in the opposite direction once a full 3-box reversal is confirmed by the opposite extreme.

**Trendlines on 3-box P&F charts are drawn differently from bar charts** — at fixed **45° angles** rather than by connecting actual swing highs/lows, because the severe condensation of the format makes conventional trendline construction impractical. The **bullish support line** rises at 45° from under the lowest o-column; the **bearish resistance line** falls at 45° from the top of the highest x-column.

**Signal patterns (3-box method):** the simplest bullish "buy" signal is just 3 columns where the second x-column rises one box above the first; complex/stronger variants build on that base — triple-top breakouts, ascending triple tops, spread triple tops, and breakouts that additionally clear a triangle or channel line — with signal strength generally increasing with the number of columns and prior column-tops exceeded. Sixteen standard signal patterns (8 bullish, 8 bearish) are catalogued in the classic P&F literature (Zieg & Kaufman). Futures traders lean heavily on the simple signals since the faster-moving futures markets less often produce the fuller complex patterns.

**Measuring techniques — P&F's distinguishing advantage over bar charts:**

- **Horizontal count** — count the number of *columns* across a congestion/base area and project that count (times the box size, times the reversal-box multiple for a 3-box chart) from the breakout point. This horizontal measuring method has no true bar-chart equivalent (bar-chart measuring techniques are all vertical/height-based).
- **Vertical count** — measure the height of the first column of the new trend and multiply by the reversal size (e.g., triple it on a 3-box chart), adding/subtracting from that column's extreme.

**Advantages claimed over bar charting:** more precise, less ambiguous buy/sell signals; adjustable sensitivity via box size and reversal criteria (larger box/reversal size = less sensitive, better for major-trend focus; smaller = more sensitive, better for short-term trading); and — because signals are objective — better enforced trading discipline. A "fulcrum" in P&F terminology is a well-defined congestion base or top (often resembling a double/triple bottom or top) from which a breakout ("catapult") launches the next trend leg.

**Modern extensions:** logarithmic (percentage-based) box sizing lets box/reversal size scale with a stock's own volatility; moving averages can even be constructed on P&F charts by averaging each column's price and smoothing across 10 or 20 columns.

---

## 13. Japanese Candlesticks

Centuries old in Japan, popularized in the West more recently. Uses identical open/high/low/close data to a bar chart but displays it far more visually: the **body** (the rectangle between open and close) is left unfilled/white when the close is higher than the open, filled/black when the close is lower; the thin lines above/below the body (the **shadows** or wicks) show the day's high and low.

**Basic single-candle classifications:**

- **Long days** vs. **short days** — determined purely by body size (the open-close distance), independent of the shadows.
- **Spinning tops** — small bodies with shadows longer than the body on both sides; considered days of indecision, with body color largely irrelevant.
- **Doji lines** — open and close are equal (or nearly so); reflect significant indecision. Variants: the **long-legged doji** (long shadows both directions, maximum indecision), the **gravestone doji** (long upper shadow only, no lower shadow — the longer the upper shadow, the more bearish), and the **dragonfly doji** (long lower shadow only, no upper shadow — generally bullish, the mirror opposite of the gravestone).

**Critical rule for reading any candle pattern:** the preceding trend must be correctly identified first (a simple moving average works fine for this), because a "bullish" reversal pattern that occurs *without* a preceding downtrend isn't a valid bullish signal at all — it just superficially resembles one. The same visual shape means nothing (or the opposite) without the correct trend context.

**Notable reversal patterns:**

- **Dark Cloud Cover** (bearish, 2-day) — a long white day continuing an uptrend, followed by a day that opens even higher (reinforcing the bullish mood) but then trades down all day to close below the midpoint of the first day's body — a significant blow to bullish sentiment.
- **Piercing Line** (bullish, 2-day) — the mirror image in a downtrend: a long black day, followed by a day opening at a new low but closing above the midpoint of the first day's body.
- **Evening Star** (bearish, 3-day) — a long white day, then a small-bodied "star" day that gaps up away from the first day's body, then a third day that gaps down and closes well into the first day's body (below its midpoint).
- **Morning Star** (bullish, 3-day) — the exact mirror image at a bottom.

**Continuation patterns** — 16 are catalogued in the Japanese literature; the most useful pair:

- **Rising Three Methods** (bullish) — a long white day, followed by roughly three small-bodied days drifting downward but staying within the first day's range/body ("a period of rest," at least two of the three typically black-bodied), then a new long white day that closes at a fresh high, confirming trend resumption.
- **Falling Three Methods** — the mirror-image bearish continuation pattern.

**Filtered candle patterns**, a technique developed by Greg Morris: only trust a reversal candle pattern when a standard oscillator (stochastics %D, RSI, CCI, %R) is simultaneously sitting in its own "presignal" extreme zone (e.g., stochastics %D above 80 or below 20). A candle pattern that appears while the oscillator sits in the middle of its range (e.g., %D at 65) is disregarded. This combination materially improves candle-pattern reliability and tends to generate a trading signal *ahead of* the underlying oscillator's own crossover signal.

A full library of roughly 25 bullish and 25 bearish named patterns (reversal and continuation) exists in the tradition — engulfing patterns, harami, three white soldiers/three black crows, abandoned baby, tri-star, and others — built from combinations of the basic single-candle types above, almost always no more than five candles long.

---

## 14. Elliott Wave Theory and Fibonacci Numbers

Developed by R.N. Elliott (monograph 1938, definitive statement *Nature's Law* 1946), explicitly built on Dow Theory (Elliott called it "a much needed complement to the Dow Theory"). Elliott saw a direct parallel between his impulse-wave structure and Dow's three-phase bull market.

**Basic structure:** a complete market cycle contains eight waves — a five-wave advance (waves 1, 3, 5 = *impulse* waves moving with the trend; waves 2, 4 = *corrective* waves moving against it) followed by a three-wave decline (labeled a-b-c). **The critical rule:** whether any given wave itself subdivides into five waves or three waves depends entirely on whether it moves *with* or *against* the next-larger wave — waves moving with the larger trend always break into fives; waves moving against it always break into threes. **A correction can never take place in five waves** — if a decline within a bull market shows five sub-waves, it's necessarily only the first leg of a larger three-wave correction, not the correction itself. Waves nest fractally: each wave subdivides into smaller waves of the next-lesser degree, and is itself part of the next-larger wave, across nine defined degrees of trend (from Grand Supercycle, spanning ~200 years, down to sub-minuette, spanning a few hours).

**Corrective wave classifications** (corrections are always threes, with the sole exception of triangles):

- **Zig-zag (5-3-5)** — the standard sharp correction; wave B falls short of wave A's start, wave C moves well beyond wave A's end. A rarer double zig-zag variant links two 5-3-5 sequences via an intervening a-b-c.
- **Flat (3-3-5)** — a sign of underlying trend *strength* rather than weakness; wave B rallies all the way back to wave A's start (more strength than a zig-zag allows), and wave C terminates at or just beyond wave A's low. Irregular variants exist where wave B actually exceeds the start of the move, or where wave C fails even to reach wave A's extreme (denoting still greater underlying strength).
- **Triangles** — occur in the fourth-wave position (occasionally in a b-wave), always precede the *final* move in the direction of the larger trend, and are simultaneously "bullish and bearish": bullish because they confirm trend resumption, bearish because they warn only one more wave remains before the whole move tops out. Elliott's four sub-types (ascending, descending, symmetrical, expanding) match the classical triangle taxonomy from Section 6. The apex often marks the *timing* of the final wave's completion; the final wave's length approximates the triangle's own height.

**The Rule of Alternation:** a general principle that the market tends *not* to repeat the same behavior twice consecutively. Specifically applied to corrective waves: if wave 2 was a simple pattern, wave 4 will likely be complex (e.g., a triangle), and vice versa.

**Channeling:** an initial trend channel is drawn along the lows of waves 1-2, with a parallel line over the top of wave 1; if wave 3 later breaks out above that parallel line, the channel is redrawn along the top of wave 1 and the bottom of wave 2, then a final channel drawn under waves 2 and 4 (and typically above wave 3). Wave 5 should approach, but not badly overshoot, the final upper channel line before terminating.

**Wave 4 as a support floor:** once a five-wave advance completes and a bear market begins, that bear market will usually not fall below the low of the previous fourth wave of one lesser degree — a useful (though not absolute) maximum downside objective.

**Fibonacci numbers** (1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144…) are explicitly identified by Elliott as the mathematical basis of the whole theory (the wave counts themselves — 5, 3, 8, 34, 144 — are all Fibonacci numbers). Key mathematical properties: any two consecutive numbers sum to the next; the ratio of a number to the next higher number converges to **.618**; the ratio to the next lower number converges to **1.618**; the ratio between alternating numbers converges to **.382** or **2.618**.

**Fibonacci-based price projection rules:**

- If wave 3 extends, waves 1 and 5 tend toward equality (and vice versa if wave 5 extends).
- Minimum target for wave 3's top: (length of wave 1 × 1.618) added to the bottom of wave 2.
- Maximum target for wave 5's top: (length of wave 1 × 3.236) added to wave 1's top or bottom.
- If waves 1 and 3 are roughly equal and wave 5 is expected to extend: measure wave 1's bottom to wave 3's top, multiply by 1.618, add to the bottom of wave 4.
- In a zig-zag correction, wave c often approximates the length of wave a (or: wave a's length × .618, subtracted from wave a's bottom).
- In a flat correction where wave b reaches/exceeds wave a's top, wave c tends to run about 1.618× the length of wave a.
- In a symmetrical triangle, each successive wave relates to the prior one by roughly .618.

**Fibonacci percentage retracements** — the most commonly used levels are **38%**, **50%**, and **61.8%** (rounded to 62%). Murphy notes the classic 50% and two-thirds retracement levels (Section 4) are themselves early terms in the Fibonacci ratio sequence, before it converges — so Dow-style retracement analysis and Fibonacci retracement analysis are really the same underlying phenomenon viewed at different levels of refinement.

**Fibonacci time targets** — counting forward a Fibonacci number of days/weeks/months (13, 21, 34, 55, 89…) from a significant turning point to anticipate the timing of the next one; considered the least reliable of the theory's three components (pattern, ratio, then time, in that order of importance, per Elliott/Murphy) because so many different top-to-top / top-to-bottom / bottom-to-bottom combinations can be found *after the fact*.

**Practical caveats:** Elliott Wave was originally built for (and works best on) broad stock market averages, not individual stocks or thinly-traded futures — mass psychology is central to why the theory works at all, so it performs best on widely-followed vehicles (gold is cited as an example in commodities). Commodity bull markets can be "contained" (a completed five-wave bull run can fail to exceed a prior bull market's high, unlike the stricter stock-market assumption), and the strict rule that wave 4 never overlaps wave 1 is less rigid in futures than in stocks. Elliott counts are frequently ambiguous in real time — the theory should be treated as one contributing input among many technical tools, not force-fit onto unclear price action.

---

## 15. Time Cycles

Cyclic analysis treats *time*, not just price, as a primary forecasting dimension — the idea that markets move up or down according to identifiable, repeating time intervals, on the premise that all price action is simply the summation of several overlapping cycles of different lengths.

**Five core cyclic principles:**

- **Summation** — all price movement is the simple addition of every active cycle at that moment; complex price patterns (even a double top) can emerge purely from two or more simpler cycles summing together.
- **Harmonicity** — neighboring cycle lengths are typically related by a small whole number, almost always **2** (a 20-day cycle implies a 10-day cycle beneath it and a 40-day cycle above it).
- **Synchronicity** — cycles of different lengths (and even the same cycle length across different, related markets) tend to bottom at around the same time.
- **Proportionality** — longer-period cycles should have proportionally greater amplitude (a 40-day cycle's swing should be roughly double a 20-day cycle's).
- **Variation and Nominality** — the above are strong tendencies, not rigid laws (Variation), and despite market-specific differences, a general "nominal" harmonic cycle model (roughly 18 years → 9 years → 54 months → 18 months → 40 weeks → 20 weeks → 40 days → 20 days → 10 days → 5 days) provides a reasonable starting template for any market (Nominality). This nominal model is offered as the underlying explanation for *why* so many popular moving-average and oscillator lengths (5, 10, 20, 40 days and their 4-9-18 derivatives) work as well as they do.

**A cycle's three measurable qualities:** amplitude (height of the wave), period (time from trough to trough — troughs, not crests, are used for measurement since they're more stable/reliable), and phase (the time offset of a wave's trough relative to a reference point).

**Cycle classification by length:** long-term (2+ years), seasonal (1 year), primary/intermediate (9-26 weeks), and the trading cycle (~4 weeks, itself splitting into two shorter "alpha" and "beta" sub-cycles averaging ~2 weeks each). Analysis should proceed the same long-to-short sequence as chart analysis generally (Section 8): establish the long-term/seasonal cycle first to set the primary trend, then use the ~4-week trading cycle for entries/exits *in the direction of that primary trend* (buy the trading-cycle trough in a primary uptrend; sell the trading-cycle crest in a primary downtrend).

**The 28-calendar-day (≈20-trading-day) trading cycle** is described as pervasive across commodity markets — one theorized (if speculative) explanation is lunar influence, an idea traced to Burton Pugh's 1930s wheat research. Regardless of cause, this cycle is offered as the underlying reason the 5/10/20/40-day family of moving averages and oscillator lengths recurs so consistently across the discipline.

**The Kondratieff Wave** — a much longer, more controversial ~54-year economic cycle identified by Russian economist Nikolai Kondratieff in the 1920s, tracked through commodity prices, industrial production, and interest rates. Long overdue for its next peak at the time of writing, per Murphy.

**Left and right translation** — the single most practically useful cyclic concept, per Murphy. The peak of any cycle should ideally fall at its exact midpoint (symmetric rise and fall), but in practice it shifts. If the *next larger* cycle's trend is up, the smaller cycle's crest shifts to the *right* of the midpoint (**right translation** — bullish, since price spends more time rising than falling). If the larger trend is down, the crest shifts *left* (**left translation** — bearish). This is really just a restatement of "trend" expressed in time rather than price.

**Seasonal cycles** — the tendency for a given market to peak or trough at consistent points in the calendar year (grain markets bottoming near harvest being the clearest example; specific seasonal tendencies are also identified in metals, energy, and financial futures, plus well-known stock-market seasonal effects like the January Barometer — "as January goes, so goes the year" — and the four-year Presidential Cycle, where election and pre-election years historically outperform the two middle years).

**Practical software/statistical tools referenced:** the Ehrlich Cycle Finder/Forecaster (a mechanical or software overlay for visually testing candidate cycle lengths against a price chart) and Maximum Entropy Spectral Analysis (MESA, John Ehlers) — a statistical technique for isolating dominant cycle lengths and distinguishing whether a market is currently in "cycle mode" (favoring oscillators) or "trend mode" (favoring moving averages), since cycle lengths drift over time rather than staying fixed.

---

## 16. Mechanical Trading Systems and Computer-Based Tools

**Welles Wilder's Parabolic System (SAR — "stop and reverse")** is a trend-following, always-in-the-market system. Its trailing stop accelerates over time (slowly at first, to let a new trend establish itself, then faster, eventually catching up to price), producing the characteristic curving/parabolic shape of its stop-loss dots. Like all pure trend-following systems, it performs very well in a trending market and whipsaws badly in a sideways one.

**Directional Movement Index (DMI) and ADX**, also Wilder — two directional lines (+DI measuring upward movement, −DI measuring downward movement) generate their own crossover buy/sell signals, and are also commonly used purely as a *filter* on a more sensitive system like Parabolic (only take Parabolic signals that agree with the current +DI/−DI alignment). **ADX** (a smoothed measure of the *spread* between +DI and −DI, scaled 0-100) answers a different, arguably more important question: not *which direction* but *whether the market is trending at all*. A rising ADX line signals a genuinely trending environment (favoring trend-following tools); a falling ADX line signals a nontrending/trading-range environment (favoring oscillators instead). Wilder's own estimate: markets trend strongly only about 30% of the time — meaning a pure trend-following system should be expected to underperform or whipsaw roughly 70% of the time, making some kind of trend/no-trend filter (like ADX) essential to using such systems well.

**Advantages of mechanical systems:** removes emotion, enforces discipline and consistency, guarantees the trader participates in every important trend, lets profits run, cuts losses (by rule, not by feel).

**Disadvantages:** virtually all popular mechanical systems are trend-following and therefore structurally lose money (or churn via whipsaws) during the large fraction of time markets spend not trending; a system has no ability to recognize long-term support/resistance, oscillator divergence, or a mature Elliott fifth wave, so it will ride a position well past the point a discretionary trader would have already taken profits.

**Using system signals without trading them mechanically:** even a discretionary/fundamental trader can use a trend-following system purely as a *discipline filter* — refusing to take a position that runs against the current computer-generated trend signal — or purely as a screening/alert tool to flag which of many markets just experienced a trend change.

**The 5-Step Plan for building a trading system** (Appendix C, Fred Schutzman):

1. **Start with a concept** — developed from studying many charts for recurring, objectively identifiable setups (moving average crossovers, oscillator configurations, price patterns) that precede major moves. Good concepts should make intuitive sense (a rule that "works" historically but makes no logical sense is more likely coincidence than edge) and must fit the trader's own personality/discipline. Designing *exits* is harder, and more important, than designing entries.
2. **Turn the idea into a fully objective set of rules** — precise enough that 100 different people following the same rules would reach identical conclusions on identical data.
3. **Visually verify it on charts** — an informal sanity check, before investing in full coding, that the rules as written actually generate the signals intended and look potentially profitable.
4. **Formally test it by computer** — back-test on historical data (a continuous/spread-adjusted price series is recommended for initial futures testing, given the expiration-rollover distortion problem from Section 3); transaction costs are typically excluded during testing and added back afterward to keep the evaluation "pure."
5. **Evaluate the results** — key statistics: **profit factor** (gross profit ÷ gross loss; long-term traders should target 2.0+), **average trade** (the system's overall mathematical expectation per trade — must at minimum cover transaction costs), and **maximum intraday drawdown** (worst peak-to-trough equity decline, ideally evaluated as a percentage and distinguished between a drawdown from a standing start versus one that merely gives back existing profits).

**Robustness checks recommended before trusting any tested system:** it should perform reasonably well across *nearby* parameter sets (not just the single optimal combination found), across *multiple, non-overlapping historical periods*, and across *multiple related markets* — a system that only works on one narrow parameter set, one time window, or one single market is far more likely to be a curve-fit coincidence than a durable edge. Over-optimization is repeatedly flagged as a trap: fewer parameters, applied consistently across many markets, is favored over a heavily tuned, market-specific fit.

---

## 17. Money Management and Trading Tactics

**The three elements of successful trading**, in this order: (1) price forecasting — which direction to trade; (2) timing/tactics — precisely when to enter and exit; (3) money management — how much capital to commit. Being right on direction and wrong on money management (or timing) can still lose money; conversely, disciplined money management is what allows a trader to survive long enough for a sound forecasting edge to play out.

**General futures money-management guidelines** (illustrative, scalable to account size):

- Limit total invested funds to roughly 50% of total trading capital at any one time; hold the rest in reserve (e.g., cash-equivalents) as a buffer against drawdown.
- Limit total commitment in any single market to roughly 10-15% of total equity.
- Limit total risk (the amount actually willing to be lost) in any single market to roughly 5% of total equity — this figure should directly drive both position size and stop placement.
- Limit total margin exposure within any single correlated market *group* (e.g., precious metals) to roughly 20-25% of equity, since markets within a group tend to move together and can defeat the purpose of diversification if each is fully sized independently.

**Diversification vs. concentration** is a genuine trade-off, not a one-directional rule — over-diversifying dilutes a handful of big winners with a larger number of small losers; the right balance depends on how negatively correlated the chosen markets actually are (four long positions across four currencies, all versus the dollar, is not real diversification).

**Reward-to-risk ratios:** because even skilled futures traders may win only around 40% of individual trades, profitability depends on ensuring winning trades are meaningfully larger than losing trades — a commonly used minimum standard is a **3-to-1 reward-to-risk ratio** on any prospective trade (profit objective at least three times the defined risk). This is the mechanical expression of "let profits run, cut losses short."

**Trading in multiple units** (splitting a position into a "trending" portion and a "trading" portion) resolves the common dilemma of whether to take profits or hold through a consolidation: the trending portion is held long-term with a loose stop to capture the bulk of a persistent move, while the trading portion is used for shorter-term in-and-out management (tighter stops, partial profit-taking near resistance/overbought readings), with the flexibility to re-establish the trading portion if the main trend resumes.

**Behavior after winning/losing streaks:** the counterintuitive but recommended discipline is the *opposite* of what feels natural — avoid increasing position size right after a winning streak (analogous to buying into an already-overbought market), and consider increasing commitment after an equity *dip* rather than an equity peak, so that larger bets land closer to equity troughs than to equity peaks.

**Tactical entry/exit techniques**, generally applying the same technical tools already covered but compressed to a much shorter time frame:

- **Breakout tactics** — the tension between anticipating a breakout (better price, worse odds), buying the breakout itself (worse price, better odds), or waiting for a post-breakout pullback (best odds and price, but risks missing a market that never looks back) can be resolved by splitting the entry across all three using multiple trading units.
- The break of a **tight trendline** is one of the most reliable near-term entry/exit trigger signals.
- **Support/resistance** levels remain the most effective reference points for both entries and stop placement (e.g., placing a stop just under the actual breakout point, which should now function as new support).
- **Percentage retracements** of roughly 40-60% of the immediately preceding move are commonly used as short-term entry zones, including on intraday charts.
- **Price gaps** — buy a dip to the upper edge of (or into) an underlying support gap in an uptrend; sell a bounce to the lower edge of (or into) an overhead resistance gap in a downtrend, with the stop placed just beyond the gap.

**Order types and their trade-offs:**

- **Market order** — guarantees execution at the prevailing price; used when certainty of fill matters more than exact price (fast markets, or to avoid missing a dynamic move).
- **Limit order** — specifies the worst acceptable price (buy limit below market, sell limit above); better price control, but risks never being filled even if the limit price briefly trades.
- **Stop order** — becomes a market order once triggered; buy stops sit above the market, sell stops below; used to initiate breakout entries, cap losses, or trail a profit — but the actual fill can occur beyond the stop price in a fast market.
- **Stop-limit order** — combines a trigger price with a limit price once triggered, trading fill certainty for price control (and risking no fill at all if price gaps past the limit).
- **Market-if-touched (MIT)** — behaves like a limit order that converts to a market order once touched, addressing the limit order's main weakness (no guaranteed fill even at the target price) at the cost of the market order's imprecision once triggered.

**Money management/trading summary checklist** distilled directly from the text: trade with the intermediate trend; buy dips in uptrends, sell bounces in downtrends; let profits run and cut losses short; always use protective stops; never trade impulsively — have a plan and follow it; apply formal money-management sizing rules; diversify without overdoing it; require at least a 3:1 reward:risk profile; when pyramiding, only add to *winning* positions, make each additional layer smaller than the last, and move stops to breakeven; never meet a margin call; close out losing positions before winning ones when forced to reduce exposure; make decisions away from the live market when possible; and always work from the long-term chart down to the short-term, never the reverse.

---

## 18. Intermarket Analysis and Relative Strength

**Core premise:** all financial markets — currencies, commodities, bonds, and stocks (domestic and international) — are linked, and understanding any one market fully requires some awareness of what the related markets are doing. The chain of influence, in Murphy's framework, generally runs: **dollar → commodities → bonds → stocks.**

**The four-market relationship chain:**

- **Dollar and commodities** — a rising dollar is normally noninflationary and depresses most commodity prices (most visibly gold, which is described as a leading indicator for commodities generally).
- **Commodities and bonds** — commodity prices are a leading indicator of inflation expectations, so they typically trend *opposite* to bond prices (rising commodities/inflation fears → falling bonds; falling commodities/disinflation → rising bonds).
- **Bonds and stocks** — falling interest rates (rising bond prices) are normally positive for stocks; rising rates (falling bond prices) are normally negative. Bond price trend changes often lead comparable turns in the stock market, making bonds a genuine leading indicator for equities — though in a *deflationary* environment (as opposed to merely disinflationary), bonds and stocks can decouple, with bonds rising while stocks fall.

**Program trading** is presented as the most literal, mechanical version of the stock-futures link: institutions calculate a "fair value" premium that S&P 500 futures should carry over the S&P 500 cash index (a function of short rates, dividend yield, and time to expiration); when the actual futures premium strays too far from fair value, automatic arbitrage ("program buying" or "program selling") pushes the futures and cash index back into line — meaning sudden moves in bond futures or other related markets can indirectly trigger stock-index program trades.

**Sector/industry group rotation follows the same logic:** when bonds are strong and commodities weak, interest-rate-sensitive groups (utilities, financials, consumer staples) tend to outperform, while inflation-sensitive groups (gold, energy, cyclicals) underperform — and vice versa. Certain related stock groups (utilities vs. bonds; gold miners vs. gold bullion) tend to actually *lead* their corresponding futures market. Currency strength also differentiates within equities: a strong dollar tends to hurt large multinational (large-cap) stocks more than domestically-oriented small caps, and vice versa in a weak-dollar environment.

**Relative strength (ratio) analysis** — the core practical technique of this section: divide one market/instrument's price by another's and chart the resulting ratio line. A rising ratio means the numerator is outperforming the denominator; a falling ratio means the reverse. Applied at three descending levels in a "top-down" market approach: (1) asset class vs. asset class (e.g., a commodity index divided by Treasury Bond futures, to decide whether to favor inflation-sensitive or rate-sensitive positioning); (2) sector/industry index vs. a broad market benchmark (e.g., S&P 500), to identify which sectors to rotate into or out of; (3) individual stock vs. its own sector index, to select specific names once the favored sector is identified. Standard tools (trendlines, moving averages) can be applied directly to the ratio line itself to time entries/exits into the leading side of the ratio.

**Correlation measurement:** software can quantify the degree of positive or negative correlation between any two markets (near-zero correlation deserves little weight in intermarket reasoning; strong positive or negative correlation deserves more), and neural-network-based intermarket software exists to help manage the sheer number of simultaneously interacting relationships.

**Deflation vs. disinflation distinction:** the intermarket relationships described above were built on a disinflationary 1980s-90s backdrop (falling commodities alongside *rising* bonds and stocks together). A genuine deflationary shock (commodities and stock prices *both* falling while bonds rise) represents a meaningfully different regime where the bond-stock relationship can decouple — a caution against blindly extending the standard playbook into every macro regime.

---

## 19. Stock Market Breadth Indicators

Market breadth measures the health of the *broader* market beneath the headline average (Dow, S&P 500) — i.e., whether the "troops" (the full universe of listed stocks) are keeping pace with the "generals" (the narrow, widely-quoted indexes). The three raw data inputs are advancing vs. declining issues, new highs vs. new lows, and up-volume vs. down-volume.

**Advance-Decline (AD) Line** — a running cumulative total of (advancing issues minus declining issues) each day. The AD line should trend in the same direction as the major averages; when the averages make new highs that the AD line fails to confirm, that divergence is an early, historically reliable warning that the broader market isn't participating — the AD line has tended to peak well ahead of the major averages at important tops. A weekly AD line is used for longer-range confirmation of divergences first flagged on the daily line.

**McClellan Oscillator** (Sherman McClellan) — the difference between a 19-day (~10% trend) and 39-day (~5% trend) exponential moving average of the daily net advance-decline figure, bounded roughly ±100. Above +100 = overbought stock market; below −100 = oversold. Zero-line crossings also function as buy/sell signals.

**McClellan Summation Index** — simply a longer-range cumulative running total of the daily McClellan Oscillator readings; used for major (rather than short/intermediate) turning points, interpreted the same way as an AD line.

**New Highs vs. New Lows** — tracked either as two separate (often 10-day-smoothed) lines, or combined into a single **New High-New Low Index** that can be directly overlaid against a major average and read exactly like an AD line for confirmation/divergence purposes. A crossing where the new-lows line rises above the new-highs line is a negative signal.

**Upside vs. Downside Volume** and the **Arms Index (TRIN)** — the Arms Index (Richard Arms) is "a ratio of a ratio": (advancing issues ÷ declining issues) divided by (advancing volume ÷ declining volume). Below 1.0 means more volume is concentrated in rising stocks (positive); above 1.0 means more volume is in declining stocks (negative) — making it a genuine contrarian indicator that trends opposite to the market. A 10-day average above 1.20 is considered oversold; below .70, overbought (Arms' own thresholds); Arms also recommended 21-day and 55-day (Fibonacci) smoothings. The **TICK** indicator (the intraday, minute-by-minute equivalent of the AD line — the count of stocks trading on an uptick minus a downtick) is often combined with TRIN for intraday reads: rising TICK with falling TRIN is positive; the reverse is negative.

**Equivolume charting** (also Richard Arms) — a variant bar chart where each day's rectangle width is scaled to that day's volume (not just its height to the price range), fusing price and volume into a single visual read; a valid breakout should show a visibly wider rectangle. **CandlePower / Candlevolume** (Greg Morris) applies the same volume-scaled-width idea directly to candlestick bodies.

**Comparing the major averages against each other** is itself a breadth technique: the Dow (30 large caps) can rise on a given day while the broader S&P 500, NYSE Composite, Nasdaq Composite, and Russell 2000 all decline — with the rule of thumb that the broader an index (the more stocks it includes), the more informative it is about genuine market health, and a Dow gain unconfirmed by the broader averages should be treated skeptically. The Nasdaq/S&P and Russell 2000/Dow ratios specifically flag whether technology and small-cap stocks are leading or lagging the broader tape — persistent lagging by small caps is treated as a breadth-deterioration warning even while large-cap averages look fine.

---

## 20. Market Profile

Developed by J. Peter Steidlmayer (a former CBOT floor trader), Market Profile is a statistical approach that treats the market as operating in a continuous **dual auction** whose purpose is to facilitate trade — prices move up specifically to "shut off buying" (advertise for sellers) and down to "shut off selling" (advertise for buyers), continuously negotiating toward a **fair value area**.

**Graphic construction:** each half-hour period of the trading session is assigned a letter (a "Time Price Opportunity," or TPO); every price traded during that half-hour gets that letter stacked at its price level. Collapsing all of a session's letter-columns leftward produces a sideways, bell-shaped **price histogram** — a normal-distribution-like curve turned on its side, with the most-traded price forming the mode. The **value area** is defined as the price band containing roughly 70% of the session's TPOs around that modal price (an approximation of one standard deviation).

**Two participant time frames with distinct behavior:**

- **Short-term (day timeframe) traders** — forced to trade today (locals, day traders, options traders near expiration); they seek a *fair* price and are primarily responsible for establishing the session's **initial balance** (the range typically set in the first hour).
- **Longer-term traders** — not forced to trade today, so they seek an *advantageous* price rather than a fair one; they are responsible for **extending the range** beyond the initial balance and therefore for the market's actual directional movement. Longer-term buyers/sellers generally do not transact with each other at the same price and time, since their objectives (lower vs. higher prices) differ.

**Four daily range-development patterns:** a **normal day** (initial balance holds all session, longer-term traders largely inactive), a **normal variation day** (the most common type — the range extends somewhat beyond the initial balance), a **trend day** (longer-term traders extend the range successively further in one direction, closing near the extreme), and a **neutral day** (range extends in one direction, then reverses and extends in the other, reflecting genuine trader indecision/testing).

**Reading longer-term control within a session:** an **extreme** (a range high/low) is only considered meaningful with at least two "single print" TPOs at that level, showing genuine longer-term competition for price there (a single lone print suggests no real interest, just a fleeting, un-competed-for price). A **range extension** beyond the initial balance in either direction directly indicates which side (longer-term buyers or sellers) is currently in control. Within the value area itself, counting TPOs on either side of the modal price (until hitting a single print) reveals whether longer-term buying or selling is quietly dominant even on a session that otherwise looks balanced.

**Tracking control across sessions:** if today's value area sits above yesterday's, the short-term price trend is up (and confirmed further if the next day's value area is higher still); combining several consecutive sessions' profiles into one cumulative profile can reveal an underlying balance (equilibrium) that isn't obvious from the individual days alone — and a market typically shifts toward imbalance (a fresh directional move) once it has found a settled balance, often right after one final test of the fairest price.

**Practical edge claimed over the standard bar chart:** the profile's symmetry (or lack of it) gives a direct visual read of whether the market is in balance or imbalance in any timeframe, and helps pinpoint the specific moment control shifted between buyers and sellers — sharpening the identification of genuine support/resistance levels rather than relying solely on trendline-based trend-change detection.
