---
title: Netlify CMS without Netlify
date: 2019-03-23T14:43:43.894Z
featured_image: /uploads/frank.jpg
---
While I'm comfortable (more than comfortable) writing my content in a text editor, most of my clients aren't. I like (more than like) all the new JAMstack goodies like Hugo, Gatsby and 11ty. I'd like to put some of my client sites on these stacks because I feel like it'll give them an advantage, so I'm going to need a content management system for them.

There's an ecosystem popping around Git-based content management systems and that's so cool. Yes, I know Gatsby in particular can source content from anywhere, but I see some sweet advantages to Git-based content management. Just the idea being able to see in version control, and then easily unscrew, something a client did on their site is pure magic.

So the two nicest options in my eye (right now anyway) for a Git-based CMS is Netlify CMS and Forestry. What I like about Netlify CMS is that it's open source and you can see what's being worked on in their Issues and PRs. It's really, really easy to set up Netlify CMS on Netlify - imagine that, right?

Do I dislike Netlify for some reason? Helllllllllllll no. Netlify is frickin' awesome. But I've also been disappointed by hosting companies more than once and I've seen companies go away. Netlify does so much for free, my jaded mind is like "how long can this last?" I hope it lasts forever. And I use Netlify. And I love Netlify. But I wanted to experiment with Netlify CMS and see how the setup works completely independent of Netlify itself.

And what do you know? It works great! There's a couple extra steps to fill in the gaps Netlify just does automatically...and awesomely...and freely...

So here goes.

This is a Hugo generated site, built by and deployed on AWS Amplify Console with Netlify CMS using Github itself for authentication via Oauth provided by a sweet Node.js application found [here](https://github.com/vencax/netlify-cms-github-oauth-provider). I have a server I'm running the Node.js app on, but there are other packages listed [here in the Netlify CMS docs](https://www.netlifycms.org/docs/authentication-backends/#external-oauth-clients), including Serverless, Firebase Cloud Functions, Python and Go. All their READMEs cover the environment variables to set as well as an example of the Netlify CMS config.yml file.

## Part 1: Set up the site on Amplify Console

...

## Part 2: Set Up and Configure Github Oauth Service

There's a few ways to go about this and the list is in the Netlify CMS docs. I went with the Node.js version. I have a server to run it on, so I set up a domain and spun up the Node app with the documented environment variables.

## Part 3: Configure Netlify CMS

The docs for the Node.js Oauth server shows a pretty clear example of the config.yml file. The key part is the base_url which tells Netlify CMS to hit our custom server for authentication instead of Netlify itself. What do you know? Worked like a charm.

## Part 3: CI

Holy crap, the built-in CI is one of the best parts of Netlify and it was my first foray into that world. It's awesome. Push code to Github, and depending on what you're building (i.e. Gatsby rocks, but is so much slower building than Hugo), your site is live in a matter of minutes.

There are other options for continuous integration. AWS Amplify Console for instance works similarly to Netlify and the pricing is easy to understand, but it isn't free like Netlify. Again, we see that they're awesome. But this article is about independence.

If you use Amplify Console, it works very similarly to Netlify in that you hook up a Git repository, provide some build instructions (it actually has properly detected both Hugo and Gatsby for me without extra config), and each push will build your site. One thing missing from AWS Amplify Console (so far anyway) is webhooks. So as far as I know, there's no way to easily trigger an Amplify build outside of a repo push or manually clicking the button. If anybody knows otherwise, please share?

## DO PREVIEW LINKS AND EDITORIAL WORKFLOW WORK WITH AMPLIFY????

## Summary

So there you go - Netlify CMS will run like a charm without Netlify if you have the time and place to set up your own little Oauth server, which I have to say, these folks made pretty darn easy, it's all totally fine without Netlify. And thank you, Netlify, for making sure it all works without you. You guys rock so much I feel kind of guilty writing this. But, hey. Science.
