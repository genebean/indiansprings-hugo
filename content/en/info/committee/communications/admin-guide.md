---
title: Admin Guide
date: '2020-03-08T20:57:00-0500'
description: A guide for those interested in contributing to our site
weight: 72
---
## Editing or adding content

There are two ways that you can go about contributing content to our site. The first is to type something up and email it to the chair of the Communications Committee, {{< district-role "communications" >}}. The other way you can contribute is via GitHub. If the later appeals to you then check out the repository for this site [here](https://github.com/genebean/indiansprings-hugo/) or reach out to {{< district-role "communications" >}} for more information.

## Technical details

Below are a few of the technical details about how this site is setup:

* The site runs on [Netlify](https://www.netlify.com).
* The site is build using [Hugo](https://gohugo.io/). Hugo is one of the most popular open-source static site generators.
* The `indianspringsbsa.org` and `isdbsa.org` domains are registered with [Gandi](https://www.gandi.net).
* DNS for `indianspringsbsa.org` and `isdbsa.org` are also through Gandi:

  ```plain
  @   300 IN ALIAS isd-atl-bsa.netlify.com.
  www 300 IN CNAME isd-atl-bsa.netlify.com.

  @   300 IN ALIAS apex-loadbalancer.netlify.com.
  www 300 IN CNAME isdbsa.org.
  ```

## Help wanted

Seeing as you made it this far, I am assuming you have at least a passing interest in our site. If that is indeed the case then please reach out to {{< district-role "communications" >}} as we could really use any amount of help you are willing to provide.
