---
title: "Your Vault Writes Its Own Links"
description: "Obsidian's linking model assumes you remember what you wrote. You create a note, think about what relates to it, and type out the [[wikilinks]] manually. That w"
pubDate: "2026-04-04"
tags: ["agentic", "process", "obsidian", "ai orchestration"]
---

Obsidian's linking model assumes you remember what you wrote. You create a note, think about what relates to it, and type out the `[[wikilinks]]` manually. That works with a small vault and good memory. It's going to break as the vault grows.


So I don't do the linking. Claude does.


When I capture a concept using the `/vault` skill, Claude reads the existing vault notes, understands the new content, and adds links to related concepts. Including ones that don't exist yet. Those show up as unresolved links in Obsidian, breadcrumbs that say "there's a note worth writing here."


Seven concept notes in, and the graph already shows clusters I didn't plan. Three notes about agentic patterns all linking to each other and to a schema enforcement concept I haven't written yet. The graph is building itself as a side effect of capturing knowledge, not as a separate maintenance task.


This matters because I know myself. I'm not going to manually curate a knowledge graph. I'll write the notes, but I won't go back and add the cross-references. With AI doing the linking at authoring time, the connections happen for free. The vault gets more useful with every note without any extra effort.


The question I'm watching: will AI-authored links be as meaningful as hand-curated ones? So far the connections make sense because Claude has the full vault in context when writing each note. At 50+ notes, it might start making shallow links just because two notes mention the same word. Haven't hit that yet.

