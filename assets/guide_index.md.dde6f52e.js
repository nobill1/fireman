import{_ as s,c as a,o as n,a as e}from"./app.0fa812bb.js";var t="/logo.svg";const A=JSON.parse('{"title":"Getting started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"Initializing Firestore","slug":"initializing-firestore"}],"relativePath":"guide/index.md"}'),o={name:"guide/index.md"},l=e('<h1 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><div style="display:flex;justify-content:center;"><img style="width:300px;" src="'+t+`" alt="Fireman logo"></div><p>Fireman is a simple, yet powerful, wrapper around the firestore SDK providing firestore helper functions. It is a wrapper around the firestore SDK (soon the firestore admin sdk too). It provides a simple interface to get, update and delete data from your firestore instance.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install fireman-fns</span></span>
<span class="line"></span></code></pre></div><h2 id="initializing-firestore" tabindex="-1">Initializing Firestore <a class="header-anchor" href="#initializing-firestore" aria-hidden="true">#</a></h2><p>Fireman needs to access your firestore instance. You can do this by passing the firestore instance as a parameter to the fireman function.</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">initializeApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">firebase/app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getFirestore</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">firebase/firestore</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// TODO: Replace the following with your app&#39;s Firebase project configuration</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// See: https://firebase.google.com/docs/web/learn-more#config-object</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> firebaseConfig </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Initialize Firebase</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">initializeApp</span><span style="color:#A6ACCD;">(firebaseConfig)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Initialize Cloud Firestore and get a reference to the service, you should export it in case you need to access it elsewhere.</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> db </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getFirestore</span><span style="color:#A6ACCD;">(app)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>You may <a href="https://firebase.google.com/docs/firestore/quickstart#initialize" target="_blank" rel="noopener noreferrer">follow instructions on the Firebase docs</a> to initialize Firestore</p>`,9),p=[l];function i(r,c,y,D,d,F){return n(),a("div",null,p)}var C=s(o,[["render",i]]);export{A as __pageData,C as default};
