---
slug: 'from-ios-to-android'
title: "When I Decided to Do Both iOS and Android: An Indie Developer's True Dual-Platform Journey"
blogName: "Fatbobman's Blog"
author: 'Shudao Wang'
origin: 'https://fatbobman.com/zh/posts/from-ios-to-android/'
category: 'story'
tags: ['indie development', 'iOS', 'Android', 'cross-platform', 'dual-platform']
publishDate: '2025-11-26'
description: 'Dao is a seasoned iOS developer who built products like Minimal Clock and Minimal Diary after transitioning to indie development. He adopted a "dual-platform in parallel" strategy early on. This article shares his cross-platform experience, mindset shifts, and the pitfalls he encountered along the way.'
---

When I first started building apps like Minimal Clock and Minimal Diary, my world was iOS only. I had just transitioned from full-time employment to indie development, wishing every day I could stretch 24 hours longer to pour all my energy into polishing the iOS experience.

Maybe it was the environment, maybe it was inertia — back then, like many iOS developers, I carried a bit of bias in my heart: "Android is fragmented, interactions vary wildly, the UI is inconsistent, and users are less willing to pay. Why add trouble to myself?"

That mindset seemed reasonable at the time. But as my user base grew and feedback piled up, I started to realize a truth: if an app truly wants to serve more people, avoiding Android is not a long-term solution.

So starting in 2020, I officially stepped into the world of dual-platform development. Looking back, this move changed not just my products, but also my entire development mindset.

## The First Lesson of Dual-Platform: Finding the Right Partner Beats Going It Alone

At the very beginning, I seriously considered "maybe I should just learn Android myself." After all, for an indie developer, being able to handle two platforms yourself sounds like a "power-up."

But reality quickly gave me a sobering answer: **When you're already maintaining iOS, adding new features, fixing bugs, and communicating with users, learning an entirely new system from scratch is a guaranteed way to do neither well.**

Android's knowledge base is substantial, its ecosystem is complex, and the learning curve is steeper than I expected. Trying to maintain iOS development velocity while writing Android to a "shippable" level — that's a very high bar.

While I was hesitating, I reached out to a former colleague — the Android developer I've been collaborating with ever since. We clicked, our interests aligned, and the partnership began. I felt lucky: finally, someone could hold down the Android side so I could spend more time on design and polish.

But our collaboration approach is almost counterintuitive in its simplicity:

### iOS First, Android Follows

All features are validated on iOS first. During this phase, I can iterate freely and get quick feedback. Once I'm sure a feature is "worth keeping long-term," I hand it off to the Android developer. This ensures we don't waste time building the wrong direction on Android.

### I Record Screens, Send Assets — He Replicates Faithfully

We've never written many formal requirement documents or held lengthy review meetings.

I basically record a screen capture of the animation, hand over the design files, and he can quickly build out the feature. Many times, his implementation speed is so fast it's almost hard for me to believe.

### Communication Is Mostly on WeChat, Almost No Deadlines

We tried GitHub Projects and more complex management tools, but in the end, the simplest approach worked best: chat, send messages, look at commits.

I don't set strict deadlines; he tests whenever he has progress. This rhythm seems casual, but it's kept our collaboration stable for years.

## Cross-Platform Doesn't Mean "Uniformity" — It Means Understanding Two Systems' Boundaries

At first, I was obsessed with "consistency across both platforms." Especially for Minimal Clock, a product built around visual cohesion, I even hoped to achieve "pixel-perfect consistency."

But actually building it taught me otherwise: **Some capability gaps between the two systems are just too wide; persistence alone can't bridge them.**

### iOS: New UI Capabilities and Interaction Changes Every Year

Especially after WWDC, a whole new set of capabilities drops every year. I've always tried to keep up to maintain a modern feel for my products.

### Android: Fragmentation and Manufacturer Customization Make Many Things Inherently Difficult

Minimal Clock's widgets are a classic example.

I really wanted them to be consistent, but reality was:

- Manufacturer support for widgets is inconsistent
- Display logic differs significantly
- System compatibility costs are extremely high

In the end, we could only deliver a "more basic" version of the widgets on Android.

Minimal Diary amplified the differences even further.

That app relies heavily on gesture interactions: left/right swiping, layer switching, dragging, and so on. The gesture systems on iOS and Android aren't compatible — forcing consistency would make users feel awkward, which was very clear in testing.

So I gradually realized: **Interaction consistency isn't the goal — experience consistency is.**

So we decided:

- Keep functionality logic consistent
- Respect platform-native interaction details
- Don't blindly pursue pixel-perfect uniformity

Interestingly, sometimes the Android developer's implementation felt more "intuitively native" than my original design, and I'd adopt it directly.

## What's More Grueling Than Coding: Localization, System Versions, and Long-Tail Costs

Many people think the hardest part of cross-platform is writing code. But in reality, the truly difficult things aren't written in code at all.

### Localization into 17 Languages

Before AI, every copy update felt like defusing a time bomb.

Minimal Clock has a lot of copy, and the localization effort far exceeded my original expectations. Since AI came around, this has gotten much easier, but I still remember the pressure from the early years vividly.

### The Reality Gap in Minimum System Versions

- Minimal Clock iOS: Always stuck with iOS 14
- Android: Supported almost from 6.0 (even 5.0)
- Minimal Diary: iOS requirements increased annually, Android stayed roughly the same

This difference directly reflects the enormous device span in the user base, and brings massive compatibility costs.

## Data Doesn't Lie: Android Users Are Far More Valuable Than I Imagined

What really changed my attitude toward Android wasn't technology — it was data. Many iOS developers share a similar stereotype: "Android users don't pay." But when I actually looked at the numbers, the story was completely different.

### 1. Minimal Clock: DAU Reversal

Initially, iOS daily active users were 2x that of Android. But as iOS declined naturally, Android users — backed by an enormous device base — gradually overtook them. Now Android DAU is actually 2x that of iOS. This was my first realization of Android's "long-tail power."

### 2. Revenue Surprise

At Minimal Clock's peak, Android revenue (Google Play + AdMob + domestic China) could actually approach iOS. I never expected that.

### 3. Minimal Diary: Domestic Android Users' Enthusiasm Completely Blew My Expectations

Especially after being recommended by a big influencer on Xiaohongshu, the difference was immediate:

- Android paid 2–3x that of iOS
- Downloads were 4–5x that of iOS

In other words: **If the product resonates, the domestic Android market's willingness to pay is not only not weak — it's remarkably strong.**

## Three Ecosystems, Three Pricing Strategies: Choose Based on User Behavior

As Minimal Clock evolved, I gradually realized: **Different ecosystems need different strategies — you can't expect a one-size-fits-all approach.**

- **iOS: Free → Tip → One-time Purchase → Subscription**
  As themes and animations grew, subscriptions became the most sensible model.
- **Google Play: One-time Purchase + Subscription + Ads**
  Overseas Android users generally have weaker willingness to pay. Adding ads isn't a "compromise" — it's "reality."
- **Domestic Android: One-time Purchase Only, and the Price Can't Be Too High**
  After looking at competitors, I quickly realized:
  - Too high a price and it won't sell
  - Room for price increases is very limited
  - Market competition is fiercer than expected

## Backend Experience: Five Years Later, Google Play Console Completely Changed My Mind

When I first opened Google Play Console in 2020, honestly, I wasn't impressed. The interface layout wasn't intuitive, feature entries felt scattered, and overall it looked a generation behind App Store Connect. Back then, I even thought, "Yeah, even Android's backend is a mess."

But five years later, I have to admit I was wrong. **I'd even say I've become a Google Play Console convert.** The reason isn't some dramatic overhaul — it's two crucial aspects of long-term use:

### Speed and Stability: Console Feels Like a Modern App, Connect Feels Like a Legacy System

Anyone who accesses App Store Connect from within China knows the struggle: slow loading, slow page transitions, slow chart rendering. I used to joke that it was "unbelievably slow" — but I wasn't exaggerating.

Google Play Console is the opposite extreme. Page responses are very fast — click and the data is there. It meets the speed you'd expect from a modern web app. Once I bookmarked my core dashboards, I could essentially "click once and see all key metrics."

Another critical point: login state persistence.

App Store Connect frequently logs you out, making you re-enter your password, verification code, and two-factor authentication. You can't help but wonder: am I here to work, or am I being "proctored" by the platform?

Console is the complete opposite. In five years, I've hardly ever had to log back in. It's like an old friend who trusts you, quietly waiting in the background for you to open the page, never kicking you out.

For developers who check data daily, this kind of "uninterrupted efficiency" matters more than any feature upgrade.

### Policy Communication: Google "Talks," Apple "Reads"

Google Play holds quarterly online policy workshops. Nothing fancy — click a link and watch. But the livestream experience often makes me think: **This is an ecosystem that's actively trying to communicate with developers.**

The presenters speak in a natural, down-to-earth tone. They give examples, explain the reasoning behind policies, answer questions in real time, and even hand out small gifts — I've actually received one.

In contrast, Apple's online lecture experience feels very "formal." You need to download some ancient software to watch. The slides often stutter, and the presenters tend to sound like they're reading the slides aloud. They're certainly professional, but the tone has a strong sense of "standardization" that creates a feeling of distance — more like "policy recitation" than genuine conversation.

I'm not saying one is absolutely better than the other. But from an indie developer's perspective, the two styles do create different experiences:

- **Google Play makes you feel like "the platform is on your side"**
- **App Store makes you realize "you must strictly follow its rules"**

The cultural difference between the two ecosystems is even more pronounced than the technical one.

## Payment Systems: The Ease of RevenueCat vs. the Ordeal of Domestic Payments

In overseas markets, RevenueCat is practically a lifesaver for indie developers. It provides:

- Unified payment logic across both platforms
- Order verification
- Subscription and retention analytics
- Online paywall generation
- A/B testing
- Multi-platform revenue aggregation
- Its all-in-one service has handled the vast majority of my needs.

Domestic Android payment, on the other hand, is an entirely different battlefield. In China, I ultimately went with WeChat Pay. But that came with a long and tedious ordeal:

- Had to build my own server (Express.js + Parse)
- Had to handle payment callbacks and account relationships
- Had to deal with a flood of complaints (especially when account A logs in and account B pays)
- Had to constantly worry about losing payment records
- Only those who've actually been through it understand the pain.

## The Domestic Android Market: Listing Hurdles and Ecosystem Differences

To list an app on domestic Android app stores, you must:

- Have a business license
- Open a corporate bank account
- Obtain a software copyright registration
- Complete ICP filing
- Adapt to each major store's rules, documentation, and review processes

These steps are far more cumbersome than App Store and Google Play. There was a time I said, "Android isn't worth it." But if you want real user volume and revenue in the domestic market, these steps are mandatory. Once you power through them, you actually find the road ahead much broader.

## Collaboration Habits and Workflow: The Backstage Logic Behind Stable Dual-Platform Operations

Our collaboration rhythm is now very stable:

- Requirements tracking is kept simple
- Communication is entirely on WeChat
- No hard deadlines
- Testing happens after he submits
- The Android side is allowed some creative freedom — pixel-perfect uniformity isn't required

Under this model, we don't need complex management tools: **Trust has become the most productive force.**

## Dual-Platform Isn't About "Copying" — It's About Empathy, Understanding, and Adaptation

These years of experience have taught me one thing: **iOS and Android aren't just two platforms — they're two entirely different worlds.**

- iOS excels in consistency and design language
- Android excels in user base and long-tail effects
- iOS users are more willing to pay for experience
- Android users in the domestic market show even stronger purchasing power
- iOS relies on system features
- Android requires massive compatibility and adaptation

The dual-platform journey isn't easy, but as more data and feedback accumulate, I've gradually realized: **When you truly understand the differences between the two ecosystems — instead of looking at them through the lens of bias — your product naturally becomes more complete.**
