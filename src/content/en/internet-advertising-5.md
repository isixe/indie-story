---
slug: 'internet-advertising-5'
title: 'Internet Advertising (Part 5): Common Advertising Billing Models — What''s the Difference Between CPM and eCPM?'
blogName: '人人都是产品经理'
author: 'KC'
origin: 'https://www.woshipm.com/it/5064581.html'
category: 'guide'
tags: ['advertising', 'CPM', 'eCPM', 'CPC', 'CPA', 'programmatic advertising', 'billing models']
publishDate: '2021-08-20'
description: 'This article introduces four common advertising billing models (CPT, CPM, CPC, CPA) along with the concept and calculation of eCPM, helping readers understand the key billing metrics in programmatic advertising and how they relate to each other.'
---

> Editor's note: In the previous article, we analyzed four main programmatic transaction models and touched on concepts like CPT, CPM, and CPC. In programmatic advertising, we also frequently encounter terms like eCPM and oCPM. What do the prefixes "o" and "e" mean when added before CPM? And how are these three related? This article will answer all these questions.

![Internet Advertising (Part 5)](/content/internet-advertising-5/cover.jpg)

The previous four articles revolved around "Real-Time Bidding (RTB)," covering the evolution of programmatic advertising, the various platform products involved in programmatic advertising and their history, the specific process of RTB and its relationship with programmatic advertising, and the four main programmatic transaction models.

If you haven't read the previous four articles, you can find them here:

[《Internet Advertising (Part 1): A Brief History of Online Advertising — From Contract Advertising to Real-Time Bidding RTB》](http://www.woshipm.com/it/4258199.html)  
[《Internet Advertising (Part 2): Platforms Involved in Programmatic Advertising — DSP/TD/SSP/ADN/ADX/DMP》](http://www.woshipm.com/it/4639335.html)  
[《Internet Advertising (Part 3): What Is the Specific Process of Real-Time Bidding RTB? How Does It Relate to Programmatic Advertising?》](http://www.woshipm.com/it/4752932.html)  
[《Internet Advertising (Part 4): Four Main Programmatic Transaction Models — Open Auction RTB, Programmatic Direct PDB, Preferred Deals PD, Private Auction PA》](http://www.woshipm.com/it/5032094.html)

In the previous article, we mentioned the concepts of CPT, CPM, and CPC — these are currently the most common programmatic advertising billing models. We also frequently encounter terms like eCPM and oCPM in programmatic advertising. What do the prefixes "o" and "e" mean when added before CPM? And how are these three related?

This article will answer all these questions for you.

## 1. Four Common Advertising Billing Models — CPT, CPM, CPC, CPA

### 1.1 CPT (Cost Per Time) — Billing by Display Duration

**CPT billing means: a media publisher exclusively leases a specific ad placement to an advertiser and charges based on the duration of exclusive use.** For example, if a certain ad placement costs 100,000 RMB per day, then CPT = 100,000.

It is suitable for high-exposure ad placements with some degree of customization, such as video website homepage banners and app splash screen ads. Although this exclusive CPT billing model offers additional brand value and a "showcase effect," it is not conducive to audience targeting or the development of programmatic transactions. Therefore, its share is expected to decline over the long term.

### 1.2 CPM (Cost Per Mille) — Billing per Thousand Impressions

**CPM billing means: charging based on the price per thousand ad impressions.** Whether these impressions generate corresponding revenue is estimated and risk-managed by the advertiser. For example, if the price for a thousand impressions of a certain ad placement is 10 RMB, then CPM = 10.

In most internet brand advertising, especially video ads, CPM is the mainstream billing method. This is because brand advertising targets returns over a longer period, making it difficult to directly calculate click value from short-term data feedback.

### 1.3 CPC (Cost Per Click) — Billing per Click

**CPC billing means: charging based on the price per ad click.** For example, if the price for a single click on a certain ad is 1 RMB, then CPC = 1.

Note that CPC refers to the cost per single click, which differs from CPM's cost per thousand impressions.

CPC billing originated with search advertising and is now mainly used in performance-based advertising. However, CPC can be susceptible to malicious clicks from competitors, though publishers currently have some methods to filter out these invalid clicks.

### 1.4 CPA (Cost Per Action) — Billing per Conversion Action

**CPA billing means: charging based on the price per conversion action.** For example, if a game company bids 20 RMB per paying user, then CPA = 20. This means that if no conversion action (such as payment) occurs, no fee is charged regardless of how many ad impressions or clicks were generated; fees are only incurred when a conversion action takes place.

In addition, there are other conversion-based billing variants, such as CPI (Cost per Install) and CPS (Cost per Sale).

Under the CPA model, the advertiser only needs to ensure that the revenue generated by the conversion action exceeds the CPA bid (e.g., in a game, if the average revenue per paying user is 30 RMB > CPA bid of 20 RMB) to guarantee ROI > 1. This maximizes risk mitigation and profit generation.

Because conversions are actions that occur on the advertiser's own site — which publishers cannot directly detect or control, making accurate estimation and optimization difficult — CPA billing is only practical on ad platforms composed of advertisers with similar conversion flows and user experiences, such as Taobao affiliate ads (where the conversion flow happens entirely on Taobao) and mobile app download ads (where the conversion flow happens entirely on the Apple App Store or Google Play). Of course, if advertisers are willing to send conversion data back to the ADX/SSP, CPA billing can also be implemented.

### 1.5 CPM, CPC, CPA — A Conversion Funnel

The "funnel conversion model" that product managers often talk about also applies to CPM, CPC, and CPA — first comes impression, then click, and finally conversion. Correspondingly, the prices of CPM, CPC, and CPA also increase progressively.

With these common advertising billing models, advertisers can choose the most suitable one based on their goals. For example, brand advertisers can choose CPT or CPM billing, while performance-based advertisers can choose CPC or CPA billing.

![CPM, CPC, CPA Conversion Funnel](/content/internet-advertising-5/funnel.jpg)

Some of you may have noticed that CPC and CPA billing seem to leave room for exploitation. For instance, consider Advertiser A who bids an extremely high CPC for their ad campaign, ensuring they always win the bid, but deliberately makes the ad creative ugly, resulting in a very low click-through rate. According to CPC billing rules — no click means no charge — would Advertiser A essentially be "freeloading" ad impressions at the publisher's expense?

Smart publishers naturally have ways to prevent this, using mechanisms that incentivize advertisers to optimize their ad creatives and improve click-through rates. Before introducing this mechanism, we first need to understand the concept of eCPM.

## 2. What Is eCPM (expected Cost Per Mille)?

### 2.1 What eCPM Means for Publishers and Advertisers

For publishers, bid requests from advertisers for a given ad placement need to be ranked by some standard — and that standard isn't simply the bid price, but each advertiser's eCPM. **The advertiser with the highest eCPM wins the bid.**

So, **for publishers, eCPM represents how much revenue they can earn per thousand ad impressions — in other words, the income generated by a thousand ad impressions.**

**For advertisers, eCPM is a bidding value representing the cost required for a thousand ad impressions.** The higher the eCPM, the higher the ranking, and the more exposure opportunities the advertiser gets.

Now, let's try calculating eCPM.

### 2.2 Calculating eCPM

> CTR (Click Through Rate)  
> CVR (Conversion Rate)

**(1) When the bidding method is CPM:** obviously, eCPM = CPM

**(2) When the bidding method is CPC:** eCPM = CTR × CPC bid × 1000

For example: Ad A uses CPC bidding with a bid of 0.9 and an estimated CTR of 0.9%. Its eCPM would be: eCPM = 0.9% × 0.9 × 1000 = 8.01

In CPC billing, **CTR is estimated by the publisher, while the CPC bid is set by the advertiser**, and the eCPM value is communicated to the ADX/SSP to notify them of the bid.

**(3) When the bidding method is CPA:** eCPM = CTR × CVR × CPA bid × 1000

### 2.3 eCPM Incentivizes Advertisers to Optimize Ad Creatives, Increasing Publisher Revenue

Therefore, Advertiser A mentioned earlier — who tried to "freeload" free exposure by raising their CPC bid while deliberately lowering the click-through rate — would find this strategy unworkable. In this scenario, the eCPM value would be too low to win the bid. Additionally, publishers may restrict ads with very low conversion rates, potentially disqualifying them from bidding altogether.

Thanks to eCPM, advertisers can improve their click-through rates by optimizing ad creatives, allowing them to lower their CPC bids while still maintaining a higher eCPM than competitors — thereby reducing their advertising costs. This is why the quality of ads in the market today is generally quite good, though it has also led to ads that "deliberately entice clicks."

For publishers, eCPM is a metric for measuring ad quality (evaluating dimensions such as likes, shares, view duration, replay rate, clicks, conversions, browsing depth, and engagement intent). The higher the eCPM, the more revenue the ad generates for the publisher, making the publisher more willing to give that ad more exposure opportunities.

Thus, in bid-based advertising, the eCPM ranking system creates a triple win: advertisers can reduce costs by optimizing ad creatives, publishers can display higher-quality ads and generate more revenue, and users get to see better (rather than lower-quality) ads.

## 3. Final Thoughts

The above represents this author's understanding, as an internet product manager, of common advertising billing models and the differences between CPM and eCPM.

Since the author does not work directly in the advertising industry (though I am quite interested in advertising), and my knowledge is limited, there may be omissions or inaccuracies. I welcome your criticism and corrections in the comments section, and I encourage everyone to freely share your thoughts and opinions.

Author: KC, Internet Product Manager, sharing thoughts on user experience, product thinking, and business models.
