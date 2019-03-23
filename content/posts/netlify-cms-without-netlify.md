---
title: Netlify CMS without Netlify
date: 2019-03-23T14:43:43.894Z
featured_image: /uploads/frank.jpg
---
Do I dislike Netlify for some reason? Hell no. They're awesome. But I've also been disappointed by hosting companies more than once, so this was just an experiment to see how to go about using Netlify CMS completely independent of Netlify.

And what do you know? It works great!

## Part 1: Set up your own authentication service

There's a few ways to go about this and the list is in the Netlify CMS docs. I went with the Node.js version. I have a server to run it on, so I set up a domain and spun up the Node app with the documented environment variables.

## Part 2: Configure Netlify CMS

The docs for the Node.js Oauth server shows a pretty clear example of the config.yml file. The key part is the base_url which tells Netlify CMS to hit our custom server for authentication instead of Netlify itself. What do you know? Worked like a charm.

## Part 3: CI

Holy crap, the built-in CI is one of the best parts of Netlify and it was my first foray into that world. It's awesome. Push code to Github, and depending on what you're building (i.e. Gatsby rocks, but is so much slower building than Hugo), your site is live in a matter of minutes.

There are other options for continuous integration. AWS Amplify Console for instance works similarly to Netlify and the pricing is easy to understand, but it isn't free like Netlify. Again, we see that they're awesome. But this article is about independence.

If you use Amplify Console, it works very similarly to Netlify in that you hook up a Git repository, provide some build instructions (it actually has properly detected both Hugo and Gatsby for me without extra config), and each push will build your site. One thing missing from AWS Amplify Console (so far anyway) is webhooks. So as far as I know, there's no way to easily trigger an Amplify build outside of a repo push or manually clicking the button. If anybody knows otherwise, please share?

## Summary

So there you go - Netlify CMS will run like a charm without Netlify if you have the time and place to set up your own little Oauth server, which I have to say, these folks made pretty darn easy.
