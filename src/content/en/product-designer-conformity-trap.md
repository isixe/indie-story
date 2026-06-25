---
slug: 'product-designer-conformity-trap'
title: 'When Designing Products, How Do You Fall Into the Conformity Trap?'
blogName: '人人都是产品经理 (Everyone is a Product Manager)'
author: 'ArvinNing'
origin: 'https://www.woshipm.com/pd/1500589.html'
category: 'guide'
tags: ['conformity', 'product design', 'user experience', 'cognitive bias']
publishDate: '2019-02-15'
description: 'Many product managers and designers enjoy sharing behavioral psychology knowledge — conformity is one of the most shared topics. Yet their own blind conformity is no less than the average person''s. This article examines common design patterns like thousand separators and hidden phone number digits to reveal the conformity trap in product design.'
---

> Many product managers and designers enjoy sharing behavioral psychology knowledge — conformity is one of the most shared topics. Yet their own blind conformity is no less than the average person's.

![](/content/product-designer-conformity-trap/cover.png)

## Do Thousand Separators Work in China?

We see it everywhere — numbers with a comma every three digits, like 10,000. This is called a thousand separator.

Even many banking apps use thousand separators when displaying amounts. For example, the China Merchants Bank mobile app (at the time of writing) does this, and so does Alipay.

This kind of thousand separator is surprisingly common in China, which really shows how easily domestic products and designers fall into blind conformity. Just because many people use it, they use it too. But is a thousand separator actually useful to us?

Let's look at a number: 10,000,000. Tell me — how would you read this number? For a Chinese person, this would be read as 10 million. Wait — how does that work? What are those two commas even doing? Are they just there to confuse us?

In reality, this way of writing numbers is entirely language-dependent. In English, numbers are grouped in sets of three digits: Thousand, Million, Billion. 1,000 is 1 Thousand; 20,000 is 20 Thousand; 10,000,000 is 10 Million; 1,000,000,000 is 1 Billion. This notation helps English speakers read numbers quickly.

However, in Chinese, the understanding of numbers is completely different. Chinese groups numbers by four digits, using units of ten-thousand and hundred-million. To help Chinese readers, we should use **ten-thousand separators** instead of thousand separators. 1,0000 is 1 ten-thousand; 20,0000 is 20 ten-thousand; 1,0000,0000 is 1 hundred-million. Using ten-thousand separators would perfectly match how Chinese understand numbers.

For most people, numbers aren't easy to process — reading them is a "painful" task. That's why Westerners invented thousand separators to help them quickly **convert numbers into language** for comprehension. In China, however, these conformist product managers and designers are using thousand separators to further torture Chinese people's numerical understanding.

For example, 200,000 — writing it that way is just confusing for Chinese readers. Thousand separators make it easy to misread numbers. The Bank of Communications transfer interface — probably because people frequently transferred to the wrong account — recently added a popup showing "万" above the ten-thousands place when entering the transfer amount. I have to say: why go through all this trouble?

![](/content/product-designer-conformity-trap/separator-example.png)

Logically speaking, any product designer with a bit of user-centric thinking would realize that thousand separators have a **negative effect** on how ordinary Chinese people understand numbers. So why do so many people still do it? **That's conformity.** I recently had the opportunity to experience this blind conformity process up close, and I hope describing it will give everyone something to reflect on.

I was reviewing our design specifications and found a rule a designer had set for writing numbers: when writing numbers, use thousand separators — add a separator every three digits — to help users read.

I messaged the designer: Why thousand separators?

He replied: To help users read.

I asked: Does it really help? I'd argue it messes up my reading. Why is 200,000 supposed to mean 200 thousand? Why do I feel like it's emphasizing "200 of something"? The number is actually 20 ten-thousands. And why is 1,000,000,000 read as 1 billion when it's actually 10 hundred-million? Aren't those commas just misleading?

He answered: That's just a personal problem of yours. You might need to spend some time memorizing the conversion rules. Everyone uses it this way now. Look, Alipay does it too. If everyone uses it, there must be a reason.

"If everyone uses it, there must be a reason." So conformity really is never far from any of us.

On this topic of numbers: as China develops and more people encounter larger figures, the conflict between Western number notation and Chinese linguistic understanding will become increasingly obvious. There are two possible paths forward:

The first is to promote ten-thousand separators domestically — making them the industrial standard for products targeting Chinese users and environments.

The second is for Chinese people to abandon the traditional ten-thousand and hundred-million counting units entirely, inventing three new Chinese units to correspond to Thousand, Million, and Billion. Of those, only Thousand already has a Chinese character; the other two would need to be created.

Personally, I think the first approach is far more likely. I sincerely hope domestic product professionals will respect the Chinese language and how its speakers understand numbers. For reference, Baidu Baike already has an entry for [ten-thousand separators](https://baike.baidu.com/item/%E4%B8%87%E4%BD%8D%E5%88%86%E9%9A%94%E7%AC%A6/2454527).

## Does Hiding the Middle Four Digits of a Phone Number Actually Help?

Many mobile apps mask the middle four digits of phone numbers with asterisks, showing them as 139\*\*\*\*1234. Once, when I was working on our product, a product manager also wanted to hide the middle four digits.

But our product is a B2B product. The problem with B2B products is that the same account can be used by multiple people in a company, and employees may leave. Hiding phone numbers creates a lot of inconvenience. In our use case, the phone number needs to be visible to users. In fact, there are many scenarios where hiding the phone number causes direct inconvenience.

This got me thinking: why do these internet products hide the **middle four digits of a phone number even after the user has logged in**?

I asked some product managers and interaction designers, and they all answered, "For security." But what exactly is being secured? Hardly anyone can withstand being pressed on this question. Eventually, they all say, "Everyone does it this way." Some even said it would feel strange to directly see their own phone number (I honestly don't get what's strange about that). In short — still just conformity.

Are they afraid someone on the subway will peek at their phone number? Afraid that if they lose their phone, someone will see their number? Afraid someone will steal their account credentials, log in, and find their phone number? These reasons are all absurd. If you lose your phone or your account, your passwords, home address, money, photos, and countless more valuable things are already compromised — and you're worried about protecting just your phone number?

Later, I heard a technical explanation: hiding the digits prevents hackers from intercepting the full phone number during network communication, so the middle four digits aren't transmitted. For some people, their phone number is very private, so it's better to hide it. Apps like WeChat that display phone numbers directly supposedly have very strong encryption.

This reasoning has some merit. But it still shows that the user's scenario should come first: if information security is a concern, hide the middle digits — but not at the cost of making the product harder to use.

Later, I found some content on Zhihu that revealed just how absurd this practice is. Hiding the middle four digits is like covering your ears while stealing a bell — fooling yourself, not hackers. The middle four digits of a phone number indicate the region/carrier. An attacker can easily deduce them based on your location or address. Related content on Zhihu: [Why hide the middle four digits of a phone number?](https://www.zhihu.com/search?type=content&q=%E6%89%8B%E6%9C%BA%E5%8F%B7%E4%B8%AD%E9%97%B4%E5%9B%9B%E4%BD%8D%E4%B8%BA%E4%BB%80%E4%B9%88)

Hiding the middle four digits of a phone number is fundamentally **"only keeping honest people honest."** Anyone who actually wants your phone number can get it without those four digits. You think following the crowd is protecting user information, but it doesn't actually help at all. The only reason there hasn't been a security incident is that **hackers don't really care about getting phone numbers this way.**

The industry's massive conformity scene is laid bare.

If you truly care about user experience, do it like WeChat — display the number directly and solve communication security with technology.

If product security is absolutely critical, do it like Alipay — hide 6 digits instead of 4, which would actually provide protection.

In many cases, hiding is completely unnecessary. And in some cases, it actively makes the product harder to use.

Hiding the middle 4 digits is unquestionably a conformist behavior — done without thought, without understanding the essence of the matter.

## Summary

The root cause of conformity is simple: when you see everyone else doing something, your subconscious assumes it must be reasonable. But you can't be bothered to figure out why, so you latch onto any convenient excuse, treat it as truth, and add it as a node in your knowledge system. Once you build your knowledge system out of these unexamined assumptions, it will inevitably be riddled with errors.

For product managers and designers, building a product on a flawed cognitive framework makes failure almost certain. Maintaining independent thinking and cultivating the ability to think for yourself — these are essential qualities for any qualified professional.
