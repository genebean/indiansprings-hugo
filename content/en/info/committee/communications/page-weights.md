---
title: 'Page Weights'
weight: 76
---

This page is a guide for determining what weight a page should be so that the navigation menus are sorted correctly. The number shown should be used for `_index.md` pages and the number + 1 should be used for `about-us.md` pages. After that, just keep going up 1 digit as you progress down the list of pages.

```plain
$ tree content/en/info |grep -v '\.md'
content/en/info
├── commissioners...........................30
├── committee...............................50
│   ├── communications......................70
│   │   └── theme-help......................90
│   ├── nominating.........................110
│   ├── vc-finance.........................130
│   ├── vc-membership......................150
│   └── vc-program.........................170
│       ├── activities-civic-service.......190
│       ├── advancement-recognition........210
│       ├── camping-outdoors...............230
│       └── training.......................250
├── district................................10 <-- note that this one comes first
└── units..................................270
```
