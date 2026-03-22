---
title: "First Look at Claude Code Channels"
description: "I'd just wrapped up the blog and was looking at what to build next. I'm into collectibles — mostly Magic: The Gathering cards, but also toys, novelty stuff, wha"
pubDate: "2026-03-21"
tags: ["Claude Code", "process", "agentic"]
---

I'd just wrapped up the blog and was looking at what to build next. I'm into collectibles — mostly Magic: The Gathering cards, but also toys, novelty stuff, whatever catches my eye (My wife also loves Disney pins). Things come and go in the collection and that's part of the fun. So when I first set up the Shop and started seeding it with project ideas, one of the early ones was an eBay price tool. Mostly just something to try building with Claude Code. I applied for an eBay developer account early on and got rejected. Appealed, still pending. That sat in the backlog for a week while I built the blog.


When I came back to it, the rejection actually helped me rethink the idea. A price checker wasn't the useful part anyway. The useful part was listing advice: evaluating what I've got, writing good descriptions, figuring out what something's worth and how to present it. That didn't need an API. It needed domain knowledge and instructions that I could structure with Claude. So the price tool became the [Listing Advisor](https://github.com/jaysfoundry/listing-advisor).


Right around the same time, Anthropic shipped [Channels](https://code.claude.com/docs/en/channels-reference) as a research preview. It's an MCP server that connects Claude Code to Discord or Telegram. You message from your phone, Claude processes it locally with full filesystem and git access, and replies back through the same channel. I'd been wanting to try it since the announcement, and the Listing Advisor was a good fit. Discord bot, powered by Claude Code, running on my machine.


[embed](https://x.com/trq212/status/2034761016320696565)


Getting it running took some learning on my end. The [Channels docs](https://code.claude.com/docs/en/channels-reference) cover the Claude Code side, but there's prerequisite work in the Discord Developer Portal first: creating an application, generating a bot token, enabling Message Content Intent, setting OAuth2 scopes and permissions, inviting the bot to a server.


I also tripped over an auth issue that took a minute to figure out. After updating Claude Code to the latest version, my session had silently logged out. The configure command threw what looked like a rate limit error, but the actual problem was that I wasn't authenticated anymore. Once I logged back in and worked through the configuration, the round-trip worked on the first try. Message in Discord, Claude processes it, reply back in the channel.


The bot only lives while a Claude Code session is running. Session dies, bot dies. Running it persistently with something like `tmux` is on my list, but I haven't set that up yet.


I'm still getting comfortable with concepts like MCP servers and what a running Claude "session" actually means in practice. But having a working Discord bot connected to Claude Code, built in one sitting, felt like a turning point. This is the first shop project I've built that isn't a website. It's the start of something different.

