





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-FG+rXqMOivrAjdEQE7tO4BwM1poGmg70hJFTlNSxjX87grtrZ6UnPR8NkzwUHlQEGviu9XuRYeO8zH9YwvZhdg==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-146fab5ea30e8afac08dd11013bb4ee0.css" />
  
    <link crossorigin="anonymous" media="all" integrity="sha512-+zQhjOv4/Tzh5G/pTpd/Dqa3rv0YABLEui1mNHWdT/mnzvUmCWBx7P3V5Px/EMlo80v/7a85JkV3fWw4zzotnA==" rel="stylesheet" href="https://github.githubassets.com/assets/github-fb34218cebf8fd3ce1e46fe94e977f0e.css" />
    
    
    
    


  <meta name="viewport" content="width=device-width">
  
  <title>miguel-perez/smoothState.js: Unobtrusive page transitions with jQuery.</title>
    <meta name="description" content="Unobtrusive page transitions with jQuery. Contribute to miguel-perez/smoothState.js development by creating an account on GitHub.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta name="twitter:image:src" content="https://avatars3.githubusercontent.com/u/1682551?s=400&amp;v=4" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="miguel-perez/smoothState.js" /><meta name="twitter:description" content="Unobtrusive page transitions with jQuery. Contribute to miguel-perez/smoothState.js development by creating an account on GitHub." />
    <meta property="og:image" content="https://avatars3.githubusercontent.com/u/1682551?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="miguel-perez/smoothState.js" /><meta property="og:url" content="https://github.com/miguel-perez/smoothState.js" /><meta property="og:description" content="Unobtrusive page transitions with jQuery. Contribute to miguel-perez/smoothState.js development by creating an account on GitHub." />

  <link rel="assets" href="https://github.githubassets.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6NTExMTkyNTgzOjgyOTdkMGYxOTE1NjU4MWZjZGI5MTRkMzI0MWVhYzUxNjRiNGQyYTM0NmJhMTA5NDhhODBlZmY1YzU2YTRhYjg=--66eb84269cd0e389ba697565d1f5f28c3b9706db">
  <link rel="sudo-modal" href="/sessions/sudo_modal">

  <meta name="request-id" content="EDFE:04D9:F141B:1ACC5D:5E994F95" data-pjax-transient="true" /><meta name="html-safe-nonce" content="8e8f487bff363a82cc1fab27e35bcc5d940fd369" data-pjax-transient="true" /><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vY3NzLXRyaWNrcy5jb20vYWRkLXBhZ2UtdHJhbnNpdGlvbnMtY3NzLXNtb290aHN0YXRlLWpzLyIsInJlcXVlc3RfaWQiOiJFREZFOjA0RDk6RjE0MUI6MUFDQzVEOjVFOTk0Rjk1IiwidmlzaXRvcl9pZCI6IjczMDI4MDI0MjYxODc4MTIxMzYiLCJyZWdpb25fZWRnZSI6ImlhZCIsInJlZ2lvbl9yZW5kZXIiOiJpYWQifQ==" data-pjax-transient="true" /><meta name="visitor-hmac" content="0c9a1b2e20c392d08621549e3fe04917a1ffec165eac0e2c40d6c494c69a7a1d" data-pjax-transient="true" />



  <meta name="github-keyboard-shortcuts" content="repository" data-pjax-transient="true" />

  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

<meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-ga_id" content="" class="js-octo-ga-id" /><meta name="octolytics-actor-id" content="15176516" /><meta name="octolytics-actor-login" content="rahatmaini" /><meta name="octolytics-actor-hash" content="269fc02be262f7bdc96354d00316914ba4bdc420cbbe783eb61358ea278e5290" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">

  <meta class="js-ga-set" name="userId" content="0590d1634989a9e372d6bc85d31183e4">

<meta class="js-ga-set" name="dimension1" content="Logged In">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="rahatmaini">

      <meta name="expected-hostname" content="github.com">

      <meta name="js-proxy-site-detection-payload" content="YzE0ZWVjZTJkNDQxZjc4ZGViZGQ5NmJkNTk0YjBlNGRlY2I1NzVkOWQ2MTQ2MGZlM2U4NWE1MTIzMTdhMmIwMHx7InJlbW90ZV9hZGRyZXNzIjoiNzEuMjE0LjE1Mi4yMjYiLCJyZXF1ZXN0X2lkIjoiRURGRTowNEQ5OkYxNDFCOjFBQ0M1RDo1RTk5NEY5NSIsInRpbWVzdGFtcCI6MTU4NzEwNTY4NiwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">

    <meta name="enabled-features" content="MARKETPLACE_SOCIAL_PROOF_CUSTOMERS,MARKETPLACE_TRENDING_SOCIAL_PROOF,MARKETPLACE_RECOMMENDATIONS,MARKETPLACE_PENDING_INSTALLATIONS,RELATED_ISSUES,GHE_CLOUD_TRIAL,PAGE_STALE_CHECK">

  <meta http-equiv="x-pjax-version" content="59fc3861757fceccb84e10fe77883b7e">
  

      <link href="https://github.com/miguel-perez/smoothState.js/commits/master.atom" rel="alternate" title="Recent Commits to smoothState.js:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/miguel-perez/smoothState.js git https://github.com/miguel-perez/smoothState.js.git">

  <meta name="octolytics-dimension-user_id" content="1682551" /><meta name="octolytics-dimension-user_login" content="miguel-perez" /><meta name="octolytics-dimension-repository_id" content="21748166" /><meta name="octolytics-dimension-repository_nwo" content="miguel-perez/smoothState.js" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="21748166" /><meta name="octolytics-dimension-repository_network_root_nwo" content="miguel-perez/smoothState.js" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/miguel-perez/smoothState.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon.png">
  <link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg">

<meta name="theme-color" content="#1e2327">


  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production min-width-lg">
    

    <div class="position-relative js-header-wrapper ">
      <a href="#start-of-content" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
      <span class="Progress progress-pjax-loader position-fixed width-full js-pjax-loader-bar">
        <span class="progress-pjax-loader-bar top-0 left-0" style="width: 0%;"></span>
      </span>

      
      



          <header class="Header" role="banner">

  <div class="Header-item">
    <a class="Header-link" href="https://github.com/" data-hotkey="g d"
  aria-label="Homepage " data-ga-click="Header, go to dashboard, icon:logo">
  <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>

  </div>


  <div class="Header-item Header-item--full">
      <div class="header-search mr-3 scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="21748166" data-scoped-search-url="/miguel-perez/smoothState.js/search" data-unscoped-search-url="/search" action="/miguel-perez/smoothState.js/search" accept-charset="UTF-8" method="get">
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search or jump to…"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations"
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" value="ykfEZkXeDzc1OneQSpOWVJ49iN0dUco5yzkz3lRqLEF3g6UwgeRaBHSD4xw2DMaZiKiqjlShXcjjjBoxXEDgEQ==" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf" />
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


    <li class="d-flex flex-justify-center flex-items-center p-0 f5 js-jump-to-suggestion">
      <img src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
    </li>
</ul>

            </div>
      </label>
</form>  </div>
</div>


    <nav class="d-flex" aria-label="Global">

  <a class="js-selected-navigation-item Header-link  mr-3" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
    Pull requests
</a>
  <a class="js-selected-navigation-item Header-link  mr-3" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
    Issues
</a>

    <div class="mr-3">
      <a class="js-selected-navigation-item Header-link" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
        Marketplace
</a>      

    </div>

  <a class="js-selected-navigation-item Header-link  mr-3" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
    Explore
</a>

</nav>

  </div>


  <div class="Header-item">
    

    <a aria-label="You have unread notifications" class="Header-link notification-indicator position-relative tooltipped tooltipped-sw js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:unread" data-channel="notification-changed:15176516" href="/notifications/beta">
        <span class="js-indicator-modifier mail-status unread"></span>
        <svg class="octicon octicon-bell" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
</a>
  </div>


  <div class="Header-item position-relative">
    <details class="details-overlay details-reset">
  <summary class="Header-link"
      aria-label="Create new…"
      data-ga-click="Header, create new, icon:add">
    <svg class="octicon octicon-plus" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path></svg> <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw">
    
<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>


  <div role="none" class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="miguel-perez/smoothState.js">This repository</span>
  </div>
    <a role="menuitem" class="dropdown-item" href="/miguel-perez/smoothState.js/issues/new/choose" data-ga-click="Header, create new issue" data-skip-pjax>
      New issue
    </a>


  </details-menu>
</details>

  </div>

  <div class="Header-item position-relative mr-0">
    
  <details class="details-overlay details-reset js-feature-preview-indicator-container" data-feature-preview-indicator-src="/users/rahatmaini/feature_preview/indicator_check">

  <summary class="Header-link"
    aria-label="View profile and more"
    data-ga-click="Header, show menu, icon:avatar">
    <img class="avatar " alt="@rahatmaini" width="20" height="20" src="https://avatars2.githubusercontent.com/u/15176516?s=60&amp;u=bf1a1951bc57741f9989c9cc55a2574a605305fd&amp;v=4">


      <span class="feature-preview-indicator js-feature-preview-indicator" hidden></span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw mt-2" style="width: 180px">
    <div class="header-nav-current-user css-truncate"><a role="menuitem" class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="/rahatmaini" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">rahatmaini</strong></a></div>
    <div role="none" class="dropdown-divider"></div>

      <div class="pl-3 pr-3 f6 user-status-container js-user-status-context pb-1" data-url="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1">
        
<div class="js-user-status-container
    user-status-compact rounded-1 px-2 py-1 mt-2
    border
  " data-team-hovercards-enabled>
  <details class="js-user-status-details details-reset details-overlay details-overlay-dark">
    <summary class="btn-link btn-block link-gray no-underline js-toggle-user-status-edit toggle-user-status-edit "
      role="menuitem" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:1682551,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:15176516,&quot;originating_url&quot;:&quot;https://github.com/miguel-perez/smoothState.js&quot;}}" data-hydro-click-hmac="2f26794db1e9421ded83c36b32443ab85c94076621ca66dfcaf552c68e6e8577">
      <div class="d-flex">
        <div class="f6 lh-condensed user-status-header
          d-inline-block v-align-middle
            user-status-emoji-only-header circle
            pr-2
"
            style="max-width: 29px"
          >
          <div class="user-status-emoji-container flex-shrink-0 mr-1 mt-1 lh-condensed-ultra v-align-bottom" style="">
            <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"></path></svg>
          </div>
        </div>
        <div class="
          d-inline-block v-align-middle
          
          
           css-truncate css-truncate-target 
           user-status-message-wrapper f6"
           style="line-height: 20px;" >
          <div class="d-inline-block text-gray-dark v-align-text-top text-left">
              <span class="text-gray ml-2">Set status</span>
          </div>
        </div>
      </div>
    </summary>
    <details-dialog class="details-dialog rounded-1 anim-fade-in fast Box Box--overlay" role="dialog" tabindex="-1">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="position-relative flex-auto js-user-status-form" action="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="n6MSm/MYU+3Ay9UPidYq/TjRrNZqbGYcwkUF9H14Ymihxu+7luwReRiFbyiJP7MJkN9miGtHuVEJS9d/fVxk4A==" />
        <div class="Box-header bg-gray border-bottom p-3">
          <button class="Box-btn-octicon js-toggle-user-status-edit btn-octicon float-right" type="reset" aria-label="Close dialog" data-close-dialog>
            <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
          </button>
          <h3 class="Box-title f5 text-bold text-gray-dark">Edit status</h3>
        </div>
        <input type="hidden" name="emoji" class="js-user-status-emoji-field" value="">
        <input type="hidden" name="organization_id" class="js-user-status-org-id-field" value="">
        <div class="px-3 py-2 text-gray-dark">
          <div class="js-characters-remaining-container position-relative mt-2">
            <div class="input-group d-table form-group my-0 js-user-status-form-group">
              <span class="input-group-button d-table-cell v-align-middle" style="width: 1%">
                <button type="button" aria-label="Choose an emoji" class="btn-outline btn js-toggle-user-status-emoji-picker btn-open-emoji-picker p-0">
                  <span class="js-user-status-original-emoji" hidden></span>
                  <span class="js-user-status-custom-emoji"></span>
                  <span class="js-user-status-no-emoji-icon" >
                    <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"></path></svg>
                  </span>
                </button>
              </span>
              <text-expander keys=": @" data-mention-url="/autocomplete/user-suggestions" data-emoji-url="/autocomplete/emoji">
                <input
                  type="text"
                  autocomplete="off"
                  data-no-org-url="/autocomplete/user-suggestions"
                  data-org-url="/suggestions?mention_suggester=1"
                  data-maxlength="80"
                  class="d-table-cell width-full form-control js-user-status-message-field js-characters-remaining-field"
                  placeholder="What's happening?"
                  name="message"
                  value=""
                  aria-label="What is your current status?">
              </text-expander>
              <div class="error">Could not update your status, please try again.</div>
            </div>
            <div style="margin-left: 53px" class="my-1 text-small label-characters-remaining js-characters-remaining" data-suffix="remaining" hidden>
              80 remaining
            </div>
          </div>
          <include-fragment class="js-user-status-emoji-picker" data-url="/users/status/emoji"></include-fragment>
          <div class="overflow-auto ml-n3 mr-n3 px-3 border-bottom" style="max-height: 33vh">
            <div class="user-status-suggestions js-user-status-suggestions collapsed overflow-hidden">
              <h4 class="f6 text-normal my-3">Suggestions:</h4>
              <div class="mx-3 mt-2 clearfix">
                  <div class="float-left col-6">
                      <button type="button" value=":palm_tree:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="palm_tree" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png">🌴</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          On vacation
                        </div>
                      </button>
                      <button type="button" value=":face_with_thermometer:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="face_with_thermometer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png">🤒</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Out sick
                        </div>
                      </button>
                  </div>
                  <div class="float-left col-6">
                      <button type="button" value=":house:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="house" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png">🏠</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Working from home
                        </div>
                      </button>
                      <button type="button" value=":dart:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Focusing
                        </div>
                      </button>
                  </div>
              </div>
            </div>
            <div class="user-status-limited-availability-container">
              <div class="form-checkbox my-0">
                <input type="checkbox" name="limited_availability" value="1" class="js-user-status-limited-availability-checkbox" data-default-message="I may be slow to respond." aria-describedby="limited-availability-help-text-truncate-true-compact-true" id="limited-availability-truncate-true-compact-true">
                <label class="d-block f5 text-gray-dark mb-1" for="limited-availability-truncate-true-compact-true">
                  Busy
                </label>
                <p class="note" id="limited-availability-help-text-truncate-true-compact-true">
                  When others mention you, assign you, or request your review,
                  GitHub will let them know that you have limited availability.
                </p>
              </div>
            </div>
          </div>
          <div class="d-inline-block f5 mr-2 pt-3 pb-2" >
  <div class="d-inline-block mr-1">
    Clear status
  </div>

  <details class="js-user-status-expire-drop-down f6 dropdown details-reset details-overlay d-inline-block mr-2">
    <summary class="f5 btn-link link-gray-dark border px-2 py-1 rounded-1" aria-haspopup="true">
      <div class="js-user-status-expiration-interval-selected d-inline-block v-align-baseline">
        Never
      </div>
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-se pl-0 overflow-auto" style="width: 220px; max-height: 15.5em">
      <li>
        <button type="button" class="btn-link dropdown-item js-user-status-expire-button ws-normal" title="Never">
          <span class="d-inline-block text-bold mb-1">Never</span>
          <div class="f6 lh-condensed">Keep this status until you clear your status or edit your status.</div>
        </button>
      </li>
      <li class="dropdown-divider" role="none"></li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 30 minutes" value="2020-04-17T07:11:26Z">
            in 30 minutes
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 1 hour" value="2020-04-17T07:41:26Z">
            in 1 hour
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 4 hours" value="2020-04-17T10:41:26Z">
            in 4 hours
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="today" value="2020-04-17T23:59:59Z">
            today
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="this week" value="2020-04-19T23:59:59Z">
            this week
          </button>
        </li>
    </ul>
  </details>
  <input class="js-user-status-expiration-date-input" type="hidden" name="expires_at" value="">
</div>

          <include-fragment class="js-user-status-org-picker" data-url="/users/status/organizations"></include-fragment>
        </div>
        <div class="d-flex flex-items-center flex-justify-between p-3 border-top">
          <button type="submit" disabled class="width-full btn btn-primary mr-2 js-user-status-submit">
            Set status
          </button>
          <button type="button" disabled class="width-full js-clear-user-status-button btn ml-2 ">
            Clear status
          </button>
        </div>
</form>    </details-dialog>
  </details>
</div>

      </div>
      <div role="none" class="dropdown-divider"></div>

    <a role="menuitem" class="dropdown-item" href="/rahatmaini" data-ga-click="Header, go to profile, text:your profile">Your profile</a>

    <a role="menuitem" class="dropdown-item" href="/rahatmaini?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories">Your repositories</a>

    <a role="menuitem" class="dropdown-item" href="/rahatmaini?tab=projects" data-ga-click="Header, go to projects, text:your projects">Your projects</a>

    <a role="menuitem" class="dropdown-item" href="/rahatmaini?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">Your stars</a>
      <a role="menuitem" class="dropdown-item" href="https://gist.github.com/mine" data-ga-click="Header, your gists, text:your gists">Your gists</a>





    <div role="none" class="dropdown-divider"></div>
      
<div id="feature-enrollment-toggle" class="hide-sm hide-md feature-preview-details position-relative">
  <button
    type="button"
    class="dropdown-item btn-link"
    role="menuitem"
    data-feature-preview-trigger-url="/users/rahatmaini/feature_previews"
    data-feature-preview-close-details="{&quot;event_type&quot;:&quot;feature_preview.clicks.close_modal&quot;,&quot;payload&quot;:{&quot;originating_url&quot;:&quot;https://github.com/miguel-perez/smoothState.js&quot;,&quot;user_id&quot;:15176516}}"
    data-feature-preview-close-hmac="19750117c74174beedf036f62c1fbb48f8a5a9c01cf25f719979565dade49e70"
    data-hydro-click="{&quot;event_type&quot;:&quot;feature_preview.clicks.open_modal&quot;,&quot;payload&quot;:{&quot;link_location&quot;:&quot;user_dropdown&quot;,&quot;originating_url&quot;:&quot;https://github.com/miguel-perez/smoothState.js&quot;,&quot;user_id&quot;:15176516}}"
    data-hydro-click-hmac="1acba3fb29097cb97dfc53fdc7a776f6cba5876ee883ef6f39fdd13e18d6a223"
  >
    Feature preview
  </button>
    <span class="feature-preview-indicator js-feature-preview-indicator" hidden></span>
</div>

    <a role="menuitem" class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
    <a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">Settings</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="Av8XIWLVmnqLuYFxUrCw/FCPivyw91nemk9ANOHJWhjHGUi2xuborZpxhGgjU9G1RhNgZ72T2hebnOAmmMykFQ==" />
      
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" role="menuitem">
        Sign out
      </button>
      <input type="text" name="required_field_d1d1" hidden="hidden" class="form-control" /><input type="hidden" name="timestamp" value="1587105686533" class="form-control" /><input type="hidden" name="timestamp_secret" value="b2425ffbf7e9b5115fbb484c7bee56005fc50532e25bef746288a20a40a11b6e" class="form-control" />
</form>  </details-menu>
</details>

  </div>

</header>

        

    </div>

  <div id="start-of-content" class="show-on-focus"></div>




    <div id="js-flash-container">


  <template class="js-flash-template">
    <div class="flash flash-full  js-flash-template-container">
  <div class="container-lg px-2" >
    <button class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
    </button>
    
      <div class="js-flash-template-message"></div>

  </div>
</div>
  </template>
</div>


      

  <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>




  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main id="js-repo-pjax-container" data-pjax-container >
      

  











  <div class="pagehead repohead hx_repohead readability-menu bg-gray-light pb-0 pt-3">

    <div class="d-flex container-lg mb-4 px-3">

      <div class="flex-auto min-width-0 width-fit mr-3">
        <h1 class="public  d-flex flex-wrap flex-items-center break-word float-none ">
  <span class="flex-self-stretch" style="margin-top: -2px;">
      <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
  </span>
  <span class="author ml-2 flex-self-stretch" itemprop="author">
    <a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/users/miguel-perez/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/miguel-perez">miguel-perez</a>
  </span>
  <span class="path-divider flex-self-stretch">/</span>
  <strong itemprop="name" class="mr-2 flex-self-stretch">
    <a data-pjax="#js-repo-pjax-container" href="/miguel-perez/smoothState.js">smoothState.js</a>
  </strong>
  
</h1>


      </div>

      <ul class="pagehead-actions flex-shrink-0 " >



    <li hidden>
      <include-fragment src="/miguel-perez/smoothState.js/used_by_count" accept="text/fragment+html">
</include-fragment>
    </li>

  <li>
    
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" class="clearfix js-social-form js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="wSI1IV5aeEVR/dbrq4adrxUEPxPDqC9wWksjYNPBY8cRh9eYc9ZAXt1AYcaYTLnx/EqDrf6lDNPMrJnGr6l5KA==" />      <input type="hidden" name="repository_id" value="21748166">

      <details class="details-reset details-overlay select-menu float-left">
        <summary class="select-menu-button float-left btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;WATCH_BUTTON&quot;,&quot;repository_id&quot;:21748166,&quot;originating_url&quot;:&quot;https://github.com/miguel-perez/smoothState.js&quot;,&quot;user_id&quot;:15176516}}" data-hydro-click-hmac="f138aa9bd8ba55adec6e536ad4d44f93c7d15580a4690a2ca991ecda9b398d01" data-ga-click="Repository, click Watch settings, action:files#disambiguate">          <span data-menu-button>
              <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
              Watch
          </span>
</summary>        <details-menu
          class="select-menu-modal position-absolute mt-5"
          style="z-index: 99;">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
          </div>
          <div class="select-menu-list">
            <button type="submit" name="do" value="included" class="select-menu-item width-full" aria-checked="true" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Not watching</span>
                <span class="description">Be notified only when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                  Watch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="release_only" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Releases only</span>
                <span class="description">Be notified of new releases, and when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                  Unwatch releases
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="subscribed" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Watching</span>
                <span class="description">Be notified of all conversations.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                  Unwatch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="ignore" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Ignoring</span>
                <span class="description">Never be notified.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-mute v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"></path></svg>
                  Stop ignoring
                </span>
              </div>
            </button>
          </div>
        </details-menu>
      </details>
        <a class="social-count js-social-count"
          href="/miguel-perez/smoothState.js/watchers"
          aria-label="118 users are watching this repository">
          118
        </a>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <form class="starred js-social-form" action="/miguel-perez/smoothState.js/unstar" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="8WdJ8hR/8ZrtIldy1BAHNUWERjaN8Cy8WwIB5TQgyXuXIbtYrnNiXrXwXhZiDp9/UCRhwO58rK03BbEwUZJPTA==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Unstar miguel-perez/smoothState.js" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;UNSTAR_BUTTON&quot;,&quot;repository_id&quot;:21748166,&quot;originating_url&quot;:&quot;https://github.com/miguel-perez/smoothState.js&quot;,&quot;user_id&quot;:15176516}}" data-hydro-click-hmac="6a8e5dc4c49e3a7b0312ca8b04c15ad1fd6755777c6f69fc51e60877ab9ce842" data-ga-click="Repository, click unstar button, action:files#disambiguate; text:Unstar">        <svg height="16" class="octicon octicon-star v-align-text-bottom" vertical_align="text_bottom" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>

        Unstar
</button>        <a class="social-count js-social-count" href="/miguel-perez/smoothState.js/stargazers"
           aria-label="4393 users starred this repository">
           4.4k
        </a>
</form>
    <form class="unstarred js-social-form" action="/miguel-perez/smoothState.js/star" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="+T+QhZLSVikJu6l3iwL4RMXRct6iCnbBZeWeBHzJQ3Mbbiga13+1lUI4Gxh8Fp/ue7oGyAvMYPFGKLk6iyfr6g==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Star miguel-perez/smoothState.js" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;STAR_BUTTON&quot;,&quot;repository_id&quot;:21748166,&quot;originating_url&quot;:&quot;https://github.com/miguel-perez/smoothState.js&quot;,&quot;user_id&quot;:15176516}}" data-hydro-click-hmac="fa597bbf4c62cfa38adc54701e4725913c2876344562c3b71d5490f9ca14c245" data-ga-click="Repository, click star button, action:files#disambiguate; text:Star">        <svg height="16" class="octicon octicon-star v-align-text-bottom" vertical_align="text_bottom" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>

        Star
</button>        <a class="social-count js-social-count" href="/miguel-perez/smoothState.js/stargazers"
           aria-label="4393 users starred this repository">
          4.4k
        </a>
</form>  </div>

  </li>

  <li>
          <div class="float-left">
            <details class="details-reset details-overlay details-overlay-dark" >
                    <summary
                  class="btn btn-sm btn-with-count"
                  title="Fork your own copy of miguel-perez/smoothState.js to your account"
                  data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FORK_BUTTON&quot;,&quot;repository_id&quot;:21748166,&quot;originating_url&quot;:&quot;https://github.com/miguel-perez/smoothState.js&quot;,&quot;user_id&quot;:15176516}}" data-hydro-click-hmac="385ffa39644f42fbc4be56cd6074a185887db1e8dced2dfdbf1f26c9d1a1b645" data-ga-click="Repository, show fork modal, action:files#disambiguate; text:Fork">
                  <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
                  Fork
                </summary>

  <details-dialog class="Box anim-fade-in fast Box--overlay d-flex flex-column" role="dialog" aria-modal="true" src="/miguel-perez/smoothState.js/fork?fragment=1" preload="true">
  <div class="Box-header">
    <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog="">
      <svg height="16" class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>

    </button>
    <h3 class="Box-title">Fork smoothState.js</h3>
  </div>
  <div class="Box-body overflow-auto">
    
              <div class="text-center ml-n3 mr-n3">
                <include-fragment>
                  <div class="octocat-spinner my-3" aria-label="Loading..."></div>
                  <p class="f5 text-gray">If this dialog fails to load, you can visit <a href="/miguel-perez/smoothState.js/fork">the fork page</a> directly.</p>
                </include-fragment>
              </div>

  </div>
</details-dialog>


</details>
          </div>

    <a href="/miguel-perez/smoothState.js/network/members" class="social-count"
       aria-label="540 users forked this repository">
      540
    </a>
  </li>
</ul>

    </div>
      
<nav class="hx_reponav reponav js-repo-nav js-sidenav-container-pjax clearfix container-lg px-3"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /miguel-perez/smoothState.js" href="/miguel-perez/smoothState.js">
      <div class="d-inline"><svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg></div>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /miguel-perez/smoothState.js/issues" href="/miguel-perez/smoothState.js/issues">
        <div class="d-inline"><svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg></div>
        <span itemprop="name">Issues</span>
        <span class="Counter">113</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" data-skip-pjax="true" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /miguel-perez/smoothState.js/pulls" href="/miguel-perez/smoothState.js/pulls">
      <div class="d-inline"><svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0010 15a1.993 1.993 0 001-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v6.56A1.993 1.993 0 002 15a1.993 1.993 0 001-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg></div>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">10</span>
      <meta itemprop="position" content="4">
</a>  </span>


    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement" class="position-relative float-left">
      <a data-hotkey="g w" data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="repo_actions /miguel-perez/smoothState.js/actions" href="/miguel-perez/smoothState.js/actions">
        <div class="d-inline"><svg class="octicon octicon-play" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 8A7 7 0 110 8a7 7 0 0114 0zm-8.223 3.482l4.599-3.066a.5.5 0 000-.832L5.777 4.518A.5.5 0 005 4.934v6.132a.5.5 0 00.777.416z"></path></svg></div>
        Actions
</a>
    </span>

    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /miguel-perez/smoothState.js/projects" href="/miguel-perez/smoothState.js/projects">
      <div class="d-inline"><svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"></path></svg></div>
      Projects
      <span class="Counter">0</span>
</a>

    <a data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="security overview alerts policy token_scanning code_scanning /miguel-perez/smoothState.js/security" href="/miguel-perez/smoothState.js/security">
      <div class="d-inline"><svg class="octicon octicon-shield" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 2l7-2 7 2v6.02C14 12.69 8.69 16 7 16c-1.69 0-7-3.31-7-7.98V2zm1 .75L7 1l6 1.75v5.268C13 12.104 8.449 15 7 15c-1.449 0-6-2.896-6-6.982V2.75zm1 .75L7 2v12c-1.207 0-5-2.482-5-5.985V3.5z"></path></svg></div>
      Security
</a>
    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people /miguel-perez/smoothState.js/pulse" href="/miguel-perez/smoothState.js/pulse">
      <div class="d-inline"><svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg></div>
      Insights
</a>

</nav>


  </div>


<div class="container-lg clearfix new-discussion-timeline  px-3">
  <div class="repository-content ">

    
    
  


      <div class="mb-3">  <div class="f4">
        <span class="text-gray-dark mr-2" itemprop="about">
          Unobtrusive page transitions with jQuery.
        </span>
  </div>
</div>




      <div class="overall-summary border-bottom-0 mb-0 rounded-bottom-0">
    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/miguel-perez/smoothState.js/commits/master">
            <svg class="octicon octicon-git-commit" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"></path></svg>
            <span class="num text-emphasized">
              281
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/miguel-perez/smoothState.js/branches">
          <svg class="octicon octicon-git-branch" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 00-1-3.72C.88 1 0 1.89 0 3a2 2 0 001 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
          <span class="num text-emphasized">
            6
          </span>
          branches
        </a>
      </li>

        <li>
          <a data-pjax href="/miguel-perez/smoothState.js/packages" data-ga-click="Repository, packages click, location:repo overview">
            <svg class="octicon octicon-package" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1 4.27v7.47c0 .45.3.84.75.97l6.5 1.73c.16.05.34.05.5 0l6.5-1.73c.45-.13.75-.52.75-.97V4.27c0-.45-.3-.84-.75-.97l-6.5-1.74a1.4 1.4 0 00-.5 0L1.75 3.3c-.45.13-.75.52-.75.97zm7 9.09l-6-1.59V5l6 1.61v6.75zM2 4l2.5-.67L11 5.06l-2.5.67L2 4zm13 7.77l-6 1.59V6.61l2-.55V8.5l2-.53V5.53L15 5v6.77zm-2-7.24L6.5 2.8l2-.53L15 4l-2 .53z"></path></svg>
            <span class="num text-emphasized">
              0
            </span>
            packages
          </a>

        </li>

      <li>
        <a href="/miguel-perez/smoothState.js/releases">
          <svg class="octicon octicon-tag" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.73 1.73C7.26 1.26 6.62 1 5.96 1H3.5C2.13 1 1 2.13 1 3.5v2.47c0 .66.27 1.3.73 1.77l6.06 6.06c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 000-1.41L7.73 1.73zM2.38 7.09c-.31-.3-.47-.7-.47-1.13V3.5c0-.88.72-1.59 1.59-1.59h2.47c.42 0 .83.16 1.13.47l6.14 6.13-4.73 4.73-6.13-6.15zM3.01 3h2v2H3V3h.01z"></path></svg>
          <span class="num text-emphasized">
            19
          </span>
          releases
        </a>
      </li>

        <li  data-contributors-hovercards-enabled >
            <include-fragment src="/miguel-perez/smoothState.js/contributors_size">
              <a href="/miguel-perez/smoothState.js/graphs/contributors">
                <svg class="octicon octicon-organization" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4z"></path></svg>
                <span class="num text-emphasized"></span>
                Fetching contributors
              </a>
</include-fragment>        </li>

        <li>
          <a href="/miguel-perez/smoothState.js/blob/master/LICENSE.md">
            <svg class="octicon octicon-law" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3-1.5 3h3z"></path></svg>
              MIT
          </a>
        </li>
    </ul>
  </div>

    <details class="details-reset">
      <summary title="Click for language details" data-ga-click="Repository, language bar stats toggle, location:repo overview">
        <div class="d-flex repository-lang-stats-graph">
            <span class="language-color" aria-label="CSS 70.5%" style="width:70.5%; background-color:#563d7c;" itemprop="keywords">CSS</span>
            <span class="language-color" aria-label="JavaScript 16.5%" style="width:16.5%; background-color:#f1e05a;" itemprop="keywords">JavaScript</span>
            <span class="language-color" aria-label="HTML 13.0%" style="width:13.0%; background-color:#e34c26;" itemprop="keywords">HTML</span>
        </div>
      </summary>
      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/miguel-perez/smoothState.js/search?l=css"  data-ga-click="Repository, language stats search click, location:repo overview">
                <span class="color-block language-color" style="background-color:#563d7c;"></span>
                <span class="lang">CSS</span>
                <span class="percent">70.5%</span>
              </a>
          </li>
          <li>
              <a href="/miguel-perez/smoothState.js/search?l=javascript"  data-ga-click="Repository, language stats search click, location:repo overview">
                <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">16.5%</span>
              </a>
          </li>
          <li>
              <a href="/miguel-perez/smoothState.js/search?l=html"  data-ga-click="Repository, language stats search click, location:repo overview">
                <span class="color-block language-color" style="background-color:#e34c26;"></span>
                <span class="lang">HTML</span>
                <span class="percent">13.0%</span>
              </a>
          </li>
        </ol>
      </div>
    </details>





  <div class="mt-2">
    <include-fragment src="/miguel-perez/smoothState.js/show_partial?partial=tree%2Frecently_touched_branches_list"></include-fragment>
  </div>

<div class="file-navigation in-mid-page mb-2 d-flex flex-items-start">
  
<details class="details-reset details-overlay branch-select-menu " id="branch-select-menu">
  <summary class="btn css-truncate btn-sm"
           data-hotkey="w"
           title="Switch branches or tags">
    <i>Branch:</i>
    <span class="css-truncate-target" data-menu-button>master</span>
    <span class="dropdown-caret"></span>
  </summary>

  <details-menu class="SelectMenu SelectMenu--hasFilter" src="/miguel-perez/smoothState.js/refs/master?source_action=disambiguate&amp;source_controller=files" preload>
    <div class="SelectMenu-modal">
      <include-fragment class="SelectMenu-loading" aria-label="Menu is loading">
        <svg class="octicon octicon-octoface anim-pulse" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"></path></svg>
      </include-fragment>
    </div>
  </details-menu>
</details>


        <a class="btn btn-sm new-pull-request-btn ml-2" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;NEW_PULL_REQUEST_BUTTON&quot;,&quot;repository_id&quot;:21748166,&quot;originating_url&quot;:&quot;https://github.com/miguel-perez/smoothState.js&quot;,&quot;user_id&quot;:15176516}}" data-hydro-click-hmac="87e7b2e12d6ab14daa24284677db396065e6f40ea6e8c82efc1bbe544b818cef" data-ga-click="Repository, new pull request, location:repo overview" data-pjax="true" href="/miguel-perez/smoothState.js/pull/new/master">New pull request</a>

  <div class="breadcrumb flex-auto">
    
  </div>

    <div class="BtnGroup ml-2">
        
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="BtnGroup-parent" action="/miguel-perez/smoothState.js/new/master" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="j2POzLUveQ/E2vzd1sken9vKPJUxNDkIn6jcM/tXYVjAgAubHr3ZUIURAN9uIH9iivFEurh0ydChzhlAc30Wig==" />
      <button class="btn btn-sm BtnGroup-item" type="submit" data-disable-with="Creating file…">
        Create new file
      </button>
</form>

        
    <a href="/miguel-perez/smoothState.js/upload/master" class="btn btn-sm BtnGroup-item">
      Upload files
    </a>


      <a class="btn btn-sm empty-icon float-right BtnGroup-item" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FIND_FILE_BUTTON&quot;,&quot;repository_id&quot;:21748166,&quot;originating_url&quot;:&quot;https://github.com/miguel-perez/smoothState.js&quot;,&quot;user_id&quot;:15176516}}" data-hydro-click-hmac="a9824abf2679c386be77fa3646a10e32c0ce7ec077ef7d387ca099ef4942a308" data-ga-click="Repository, find file, location:repo overview" data-hotkey="t" data-pjax="true" href="/miguel-perez/smoothState.js/find/master">Find file</a>
    </div>


    <span class="d-flex">
        

        <details class="get-repo-select-menu js-get-repo-select-menu  position-relative details-overlay details-reset">
  <summary class="btn btn-sm ml-2 btn-primary" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;repository_id&quot;:21748166,&quot;target&quot;:&quot;CLONE_OR_DOWNLOAD_BUTTON&quot;,&quot;originating_url&quot;:&quot;https://github.com/miguel-perez/smoothState.js&quot;,&quot;user_id&quot;:15176516}}" data-hydro-click-hmac="d7a7b3359faae7046cc4bd4e90b5fadd4aabca17dff606857be89c39baa88f14">
      Clone or download
    <span class="dropdown-caret"></span>
</summary>  <div class="position-relative">
    <div class="get-repo-modal dropdown-menu dropdown-menu-sw pb-0 js-toggler-container on js-get-repo-modal">

      <div class="get-repo-modal-options">
          <div class="clone-options https-clone-options">
              <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" action="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="YcZH9Up/CNrrGeyXQ8kzOPRr6794oPIDLkBOttTuto8YVNpuYBl9vERFeWSOC9HwDqdwPIj78cuf17ujFCC41g==" /><button name="button" type="submit" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;USE_SSH&quot;,&quot;git_repository_type&quot;:&quot;REPOSITORY&quot;,&quot;repository_id&quot;:21748166,&quot;originating_url&quot;:&quot;https://github.com/miguel-perez/smoothState.js&quot;,&quot;user_id&quot;:15176516}}" data-hydro-click-hmac="9d67664e8ebfde53afbc3f5aae3c833a2bdebc5f8ce3145427f2659ee2df04ee" class="btn-link btn-change-protocol js-toggler-target float-right">Use SSH</button></form>

            <h4 class="mb-1">
              Clone with HTTPS
              <a class="muted-link" href="https://help.github.com/articles/which-remote-url-should-i-use" target="_blank" title="Which remote URL should I use?">
                <svg class="octicon octicon-question" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"></path></svg>
              </a>
            </h4>
            <p class="mb-2 get-repo-decription-text">
              Use Git or checkout with SVN using the web URL.
            </p>

            <div class="input-group">
  <input type="text" class="form-control input-monospace input-sm" data-autoselect value="https://github.com/miguel-perez/smoothState.js.git" aria-label="Clone this repository at https://github.com/miguel-perez/smoothState.js.git" readonly>
  <div class="input-group-button">
    <clipboard-copy value="https://github.com/miguel-perez/smoothState.js.git" aria-label="Copy to clipboard" class="btn btn-sm" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;COPY_URL&quot;,&quot;git_repository_type&quot;:&quot;REPOSITORY&quot;,&quot;repository_id&quot;:21748166,&quot;originating_url&quot;:&quot;https://github.com/miguel-perez/smoothState.js&quot;,&quot;user_id&quot;:15176516}}" data-hydro-click-hmac="1d8c4af6c6820ead8c0e0782e3f1fea0e01fef0b279e33f0054ab91768d510be"><svg class="octicon octicon-clippy" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path></svg></clipboard-copy>
  </div>
</div>

          </div>

          <div class="clone-options ssh-clone-options">
              <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" action="/users/set_protocol?protocol_selector=https&amp;protocol_type=clone" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="yxhbj5My0KkW/dUDOwDgKYNgdtnFz4a0EKk/tsYOaSKyisYUuVSlz7mhQPD2wgLheaztWjWUhXyhPsqjBsBnew==" /><button name="button" type="submit" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;USE_HTTPS&quot;,&quot;git_repository_type&quot;:&quot;REPOSITORY&quot;,&quot;repository_id&quot;:21748166,&quot;originating_url&quot;:&quot;https://github.com/miguel-perez/smoothState.js&quot;,&quot;user_id&quot;:15176516}}" data-hydro-click-hmac="d555d8ebbeec26b3507f5526cb137858040b867c0411a84d318e334692d9986b" class="btn-link btn-change-protocol js-toggler-target float-right">Use HTTPS</button></form>
              <h4 class="mb-1">
                Clone with SSH
                <a class="muted-link" href="https://help.github.com/articles/which-remote-url-should-i-use" target="_blank" title="Which remote URL should I use?">
                  <svg class="octicon octicon-question" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"></path></svg>
                </a>
              </h4>


              <p class="mb-2 get-repo-decription-text">
                  Use a password protected SSH key.
              </p>

              <div class="input-group">
  <input type="text" class="form-control input-monospace input-sm" data-autoselect value="git@github.com:miguel-perez/smoothState.js.git" aria-label="Clone this repository at git@github.com:miguel-perez/smoothState.js.git" readonly>
  <div class="input-group-button">
    <clipboard-copy value="git@github.com:miguel-perez/smoothState.js.git" aria-label="Copy to clipboard" class="btn btn-sm" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;COPY_URL&quot;,&quot;git_repository_type&quot;:&quot;REPOSITORY&quot;,&quot;repository_id&quot;:21748166,&quot;originating_url&quot;:&quot;https://github.com/miguel-perez/smoothState.js&quot;,&quot;user_id&quot;:15176516}}" data-hydro-click-hmac="1d8c4af6c6820ead8c0e0782e3f1fea0e01fef0b279e33f0054ab91768d510be"><svg class="octicon octicon-clippy" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path></svg></clipboard-copy>
  </div>
</div>

          </div>
        <div class="mt-2 d-flex">
          <a class="btn btn-outline get-repo-btn tooltipped tooltipped-s tooltipped-multiline js-remove-unless-platform js-get-repo" aria-label="Clone miguel-perez/smoothState.js to your computer and use it in GitHub Desktop." data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;OPEN_IN_DESKTOP&quot;,&quot;git_repository_type&quot;:&quot;REPOSITORY&quot;,&quot;repository_id&quot;:21748166,&quot;originating_url&quot;:&quot;https://github.com/miguel-perez/smoothState.js&quot;,&quot;user_id&quot;:15176516}}" data-hydro-click-hmac="bbc3c77206e926d544adb5704c478665c49b6dab6de74f48bb9a1cd5765164db" data-platforms="windows,mac" href="x-github-client://openRepo/https://github.com/miguel-perez/smoothState.js">Open in Desktop</a>

<a class="flex-1 btn btn-outline get-repo-btn " rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;DOWNLOAD_ZIP&quot;,&quot;git_repository_type&quot;:&quot;REPOSITORY&quot;,&quot;repository_id&quot;:21748166,&quot;originating_url&quot;:&quot;https://github.com/miguel-perez/smoothState.js&quot;,&quot;user_id&quot;:15176516}}" data-hydro-click-hmac="d1b50abf03e8a4a5c760fc3c5d0aa76eff87943e31f88477ffd35153ba1ad206" data-ga-click="Repository, download zip, location:repo overview" href="/miguel-perez/smoothState.js/archive/master.zip">Download ZIP</a>

        </div>
      </div>


      <div class="js-modal-download-mac py-2 px-3 d-none">
        <h4 class="lh-condensed mb-3">Launching GitHub Desktop<span class="AnimatedEllipsis"></span></h4>
        <p class="text-gray">If nothing happens, <a href="https://desktop.github.com/">download GitHub Desktop</a> and try again.</p>
        <p><button class="btn-link js-get-repo-modal-download-back">Go back</button></p>
      </div>

      <div class="js-modal-download-windows py-2 px-3 d-none">
        <h4 class="lh-condensed mb-3">Launching GitHub Desktop<span class="AnimatedEllipsis"></span></h4>
        <p class="text-gray">If nothing happens, <a href="https://desktop.github.com/">download GitHub Desktop</a> and try again.</p>
        <p><button class="btn-link js-get-repo-modal-download-back">Go back</button></p>
      </div>

      <div class="js-modal-download-xcode py-2 px-3 d-none">
        <h4 class="lh-condensed mb-3">Launching Xcode<span class="AnimatedEllipsis"></span></h4>
        <p class="text-gray">If nothing happens, <a href="https://developer.apple.com/xcode/">download Xcode</a> and try again.</p>
        <p><button class="btn-link js-get-repo-modal-download-back">Go back</button></p>
      </div>

      <div class="js-modal-download-visual-studio py-2 px-3 d-none">
        <h4 class="lh-condensed mb-3">Launching Visual Studio<span class="AnimatedEllipsis"></span></h4>
        <p class="text-gray">If nothing happens, <a href="https://visualstudio.github.com/">download the GitHub extension for Visual Studio</a> and try again.</p>
        <p><button class="btn-link js-get-repo-modal-download-back">Go back</button></p>
      </div>

    </div>
  </div>
</details>


    </span>

    
</div>




<div class="Box mb-3 Box--condensed">
  <div class="Box-header Box-header--blue position-relative "
    style="margin-bottom:-1px;">
    <h2 class="sr-only">Latest commit</h2>
    <div class="commit-tease js-details-container Details d-flex rounded-top-1 flex-auto" data-issue-and-pr-hovercards-enabled>
        
    
<div class="AvatarStack flex-self-start ">
  <div class="AvatarStack-body" aria-label="Miguel Pérez">
        <img src="https://camo.githubusercontent.com/63ed4d2d8f2d6004659248ba82d35dd53ff0ef86/68747470733a2f2f302e67726176617461722e636f6d2f6176617461722f34316236653930663338346338383761333463646232326333346566623237393f643d68747470732533412532462532466769746875622e6769746875626173736574732e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d3634" width="20" height="20" class="avatar" alt="Miguel Pérez">
  </div>
</div>

    <div class="flex-auto f6 mr-3">
      
        <span class="commit-author user-mention">Miguel Pérez</span>


  


        <a data-pjax="true" title="Update README.md" class="message text-inherit" href="/miguel-perez/smoothState.js/commit/a22f5b6b372dc532a159e967e408e4d766fa70a4">Update README.md</a>

    </div>
    <div class="no-wrap d-flex flex-self-start flex-items-baseline">
        <span class="mr-2 flex-self-center">
          <include-fragment accept="text/fragment+html" src="/miguel-perez/smoothState.js/commit/a22f5b6b372dc532a159e967e408e4d766fa70a4/rollup?direction=w" class="d-inline"></include-fragment>
        </span>
      <span class="mr-1">Latest commit</span>
      <a class="commit-tease-sha mr-1" href="/miguel-perez/smoothState.js/commit/a22f5b6b372dc532a159e967e408e4d766fa70a4" data-pjax>
        a22f5b6
      </a>
      <span itemprop="dateModified"><relative-time datetime="2016-10-06T18:09:03Z" class="no-wrap">Oct 6, 2016</relative-time></span>
    </div>
    </div>
  </div>
  <h2 id="files"  class="sr-only">Files</h2>
  


    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/miguel-perez/smoothState.js/tree/a22f5b6b372dc532a159e967e408e4d766fa70a4">Permalink</a>

    <table class="files js-navigation-container js-active-navigation-container " data-pjax>
      <thead>
        <tr>
          <th><span class="sr-only">Type</span></th>
          <th><span class="sr-only">Name</span></th>
          <th><span class="sr-only">Latest commit message</span></th>
          <th><span class="sr-only">Commit time</span></th>
        </tr>
      </thead>


      <tbody>
        <tr class="warning include-fragment-error">
          <td class="icon"><svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path></svg></td>
          <td class="content" colspan="3">Failed to load latest commit information.</td>
        </tr>

          <tr class="js-navigation-item">
            <td class="icon">
              <svg aria-label="directory" class="octicon octicon-file-directory" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"></path></svg>
              <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
            </td>
            <td class="content">
              <span class="css-truncate css-truncate-target"><a class="js-navigation-open " title="demos" id="9e8e2db3bc5ed9dbf33f7bcd0ce401a7-708d41b2412557fefd8b1c45322f2578446d43cf" href="/miguel-perez/smoothState.js/tree/master/demos">demos</a></span>
            </td>
            <td class="message">
              <span class="css-truncate css-truncate-target">
                    <a data-pjax="true" title="Added support for redirected requests." class="link-gray" href="/miguel-perez/smoothState.js/commit/bc878e07d4265b71b566de16c22d9dd354847f16">Added support for redirected requests.</a>
              </span>
            </td>
            <td class="age">
              <span class="css-truncate css-truncate-target"><time-ago datetime="2016-07-04T15:36:01Z" class="no-wrap">Jul 4, 2016</time-ago></span>
            </td>
          </tr>
          <tr class="js-navigation-item">
            <td class="icon">
              <svg aria-label="directory" class="octicon octicon-file-directory" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"></path></svg>
              <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
            </td>
            <td class="content">
              <span class="css-truncate css-truncate-target"><a class="js-navigation-open " title="src" id="25d902c24283ab8cfbac54dfa101ad31-54c4719f7667ecaab912d2b5abcdcdc7997dccdd" href="/miguel-perez/smoothState.js/tree/master/src">src</a></span>
            </td>
            <td class="message">
              <span class="css-truncate css-truncate-target">
                    <a data-pjax="true" title="Added support for redirected requests." class="link-gray" href="/miguel-perez/smoothState.js/commit/bc878e07d4265b71b566de16c22d9dd354847f16">Added support for redirected requests.</a>
              </span>
            </td>
            <td class="age">
              <span class="css-truncate css-truncate-target"><time-ago datetime="2016-07-04T15:36:01Z" class="no-wrap">Jul 4, 2016</time-ago></span>
            </td>
          </tr>
          <tr class="js-navigation-item">
            <td class="icon">
              <svg aria-label="directory" class="octicon octicon-file-directory" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"></path></svg>
              <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
            </td>
            <td class="content">
              <span class="css-truncate css-truncate-target"><a class="js-navigation-open " title="tests" id="b61a6d542f9036550ba9c401c80f00ef-989ec34ecbc24e3ad92ec7153247029e01fdf235" href="/miguel-perez/smoothState.js/tree/master/tests">tests</a></span>
            </td>
            <td class="message">
              <span class="css-truncate css-truncate-target">
                    <a data-pjax="true" title="Adding corrections in testUtility

Adding corrections in order to consider parameter hrefRegex." class="link-gray" href="/miguel-perez/smoothState.js/commit/4aa4f286aedbe2df447b711e7cdf8d10d4e64317">Adding corrections in testUtility</a>
              </span>
            </td>
            <td class="age">
              <span class="css-truncate css-truncate-target"><time-ago datetime="2015-08-19T17:27:37Z" class="no-wrap">Aug 19, 2015</time-ago></span>
            </td>
          </tr>
          <tr class="js-navigation-item">
            <td class="icon">
              <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
              <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
            </td>
            <td class="content">
              <span class="css-truncate css-truncate-target"><a class="js-navigation-open " title=".gitignore" id="a084b794bc0759e7a6b77810e01874f2-28441f7a67a965acf0a562847b54bd412ecaeffd" href="/miguel-perez/smoothState.js/blob/master/.gitignore">.gitignore</a></span>
            </td>
            <td class="message">
              <span class="css-truncate css-truncate-target">
                    <a data-pjax="true" title="Add gulp serve task" class="link-gray" href="/miguel-perez/smoothState.js/commit/f92c3b99f71a7fa1c10c63423730d81a0b317d30">Add gulp serve task</a>
              </span>
            </td>
            <td class="age">
              <span class="css-truncate css-truncate-target"><time-ago datetime="2015-10-26T16:39:43Z" class="no-wrap">Oct 26, 2015</time-ago></span>
            </td>
          </tr>
          <tr class="js-navigation-item">
            <td class="icon">
              <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
              <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
            </td>
            <td class="content">
              <span class="css-truncate css-truncate-target"><a class="js-navigation-open " title=".jshintrc" id="4d5aa81bf4f18104bb6ea53a8b5d1f43-50acd93876108edcd93a31d1db5cae15850caea8" href="/miguel-perez/smoothState.js/blob/master/.jshintrc">.jshintrc</a></span>
            </td>
            <td class="message">
              <span class="css-truncate css-truncate-target">
                    <a data-pjax="true" title="Added support for redirected requests." class="link-gray" href="/miguel-perez/smoothState.js/commit/bc878e07d4265b71b566de16c22d9dd354847f16">Added support for redirected requests.</a>
              </span>
            </td>
            <td class="age">
              <span class="css-truncate css-truncate-target"><time-ago datetime="2016-07-04T15:36:01Z" class="no-wrap">Jul 4, 2016</time-ago></span>
            </td>
          </tr>
          <tr class="js-navigation-item">
            <td class="icon">
              <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
              <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
            </td>
            <td class="content">
              <span class="css-truncate css-truncate-target"><a class="js-navigation-open " title=".travis.yml" id="354f30a63fb0907d4ad57269548329e3-297c5096b438c82e1eb794bb114629cc9752cfae" href="/miguel-perez/smoothState.js/blob/master/.travis.yml">.travis.yml</a></span>
            </td>
            <td class="message">
              <span class="css-truncate css-truncate-target">
                    <a data-pjax="true" title="Update travis settings." class="link-gray" href="/miguel-perez/smoothState.js/commit/fb4f757336cf6eda8a45038daa0a33eef1da6ede">Update travis settings.</a>
              </span>
            </td>
            <td class="age">
              <span class="css-truncate css-truncate-target"><time-ago datetime="2015-05-24T20:11:45Z" class="no-wrap">May 24, 2015</time-ago></span>
            </td>
          </tr>
          <tr class="js-navigation-item">
            <td class="icon">
              <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
              <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
            </td>
            <td class="content">
              <span class="css-truncate css-truncate-target"><a class="js-navigation-open " title="LICENSE.md" id="37854d19817c792316d481f5beb93cc7-5bc2f2122aa117d5c336af5c155872b3718c2c9a" itemprop="license" href="/miguel-perez/smoothState.js/blob/master/LICENSE.md">LICENSE.md</a></span>
            </td>
            <td class="message">
              <span class="css-truncate css-truncate-target">
                    <a data-pjax="true" title="Create LICENSE.md" class="link-gray" href="/miguel-perez/smoothState.js/commit/f938d179bfffd071861e81c769a7cd1aa12eb7fe">Create LICENSE.md</a>
              </span>
            </td>
            <td class="age">
              <span class="css-truncate css-truncate-target"><time-ago datetime="2014-07-23T15:39:15Z" class="no-wrap">Jul 23, 2014</time-ago></span>
            </td>
          </tr>
          <tr class="js-navigation-item">
            <td class="icon">
              <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
              <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
            </td>
            <td class="content">
              <span class="css-truncate css-truncate-target"><a class="js-navigation-open " title="README.md" id="04c6e90faac2675aa89e2176d2eec7d8-fcfb0c54d4dcce339a35efc8a52ad125b90eaf97" href="/miguel-perez/smoothState.js/blob/master/README.md">README.md</a></span>
            </td>
            <td class="message">
              <span class="css-truncate css-truncate-target">
                    <a data-pjax="true" title="Update README.md" class="link-gray" href="/miguel-perez/smoothState.js/commit/a22f5b6b372dc532a159e967e408e4d766fa70a4">Update README.md</a>
              </span>
            </td>
            <td class="age">
              <span class="css-truncate css-truncate-target"><time-ago datetime="2016-10-06T18:09:03Z" class="no-wrap">Oct 6, 2016</time-ago></span>
            </td>
          </tr>
          <tr class="js-navigation-item">
            <td class="icon">
              <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
              <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
            </td>
            <td class="content">
              <span class="css-truncate css-truncate-target"><a class="js-navigation-open " title="bower.json" id="0a08a7565aba4405282251491979bb6b-b67e034eb7da6029daf3e0deba11e9add3809b4e" href="/miguel-perez/smoothState.js/blob/master/bower.json">bower.json</a></span>
            </td>
            <td class="message">
              <span class="css-truncate css-truncate-target">
                    <a data-pjax="true" title="Remove moot `version` property from bower.json

Per bower/bower.json-spec@a325da3

Also their maintainer says they probably won&#39;t ever use it: http://stackoverflow.com/questions/24844901/bowers-bower-json-file-version-property" class="link-gray" href="/miguel-perez/smoothState.js/commit/8a72c0259c348606146a9d462ba3c32f41d02e3f">Remove moot `version` property from bower.json</a>
              </span>
            </td>
            <td class="age">
              <span class="css-truncate css-truncate-target"><time-ago datetime="2015-06-12T00:50:15Z" class="no-wrap">Jun 12, 2015</time-ago></span>
            </td>
          </tr>
          <tr class="js-navigation-item">
            <td class="icon">
              <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
              <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
            </td>
            <td class="content">
              <span class="css-truncate css-truncate-target"><a class="js-navigation-open " title="gulpfile.js" id="b9e12334e9eafd8341a6107dd98510c9-e7aadde0e1780a3fa3c87d4ddbc29b91768e2f49" href="/miguel-perez/smoothState.js/blob/master/gulpfile.js">gulpfile.js</a></span>
            </td>
            <td class="message">
              <span class="css-truncate css-truncate-target">
                    <a data-pjax="true" title="Various Fixes + Update NPM + Cleanup Demos

Changes:
- Updated NPM manifest;
- Fixed #260 (typo in README);
- Fixed #254 (typo in variable name on onPopState function);
- Cleaned up demos (simplified sidebar demo from #256);" class="link-gray" href="/miguel-perez/smoothState.js/commit/02845f07501c8628ed4aaf9dcc5e68cb4c14d3db">Various Fixes + Update NPM + Cleanup Demos</a>
              </span>
            </td>
            <td class="age">
              <span class="css-truncate css-truncate-target"><time-ago datetime="2016-03-16T15:59:37Z" class="no-wrap">Mar 16, 2016</time-ago></span>
            </td>
          </tr>
          <tr class="js-navigation-item">
            <td class="icon">
              <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
              <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
            </td>
            <td class="content">
              <span class="css-truncate css-truncate-target"><a class="js-navigation-open " title="jquery.smoothState.min.js" id="9865d87f914a60ed7506cece22766dd3-329be17a455aa2a172fd684742ba773ae8862c7f" href="/miguel-perez/smoothState.js/blob/master/jquery.smoothState.min.js">jquery.smoothState.min.js</a></span>
            </td>
            <td class="message">
              <span class="css-truncate css-truncate-target">
                    <a data-pjax="true" title="Added support for redirected requests." class="link-gray" href="/miguel-perez/smoothState.js/commit/bc878e07d4265b71b566de16c22d9dd354847f16">Added support for redirected requests.</a>
              </span>
            </td>
            <td class="age">
              <span class="css-truncate css-truncate-target"><time-ago datetime="2016-07-04T15:36:01Z" class="no-wrap">Jul 4, 2016</time-ago></span>
            </td>
          </tr>
          <tr class="js-navigation-item">
            <td class="icon">
              <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
              <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
            </td>
            <td class="content">
              <span class="css-truncate css-truncate-target"><a class="js-navigation-open " title="package.json" id="b9cfc7f2cdf78a7f4b91a753d10865a2-a01b9c8970f07b30dcda32eb2821610fa2707917" href="/miguel-perez/smoothState.js/blob/master/package.json">package.json</a></span>
            </td>
            <td class="message">
              <span class="css-truncate css-truncate-target">
                    <a data-pjax="true" title="Various Fixes + Update NPM + Cleanup Demos

Changes:
- Updated NPM manifest;
- Fixed #260 (typo in README);
- Fixed #254 (typo in variable name on onPopState function);
- Cleaned up demos (simplified sidebar demo from #256);" class="link-gray" href="/miguel-perez/smoothState.js/commit/02845f07501c8628ed4aaf9dcc5e68cb4c14d3db">Various Fixes + Update NPM + Cleanup Demos</a>
              </span>
            </td>
            <td class="age">
              <span class="css-truncate css-truncate-target"><time-ago datetime="2016-03-16T15:59:37Z" class="no-wrap">Mar 16, 2016</time-ago></span>
            </td>
          </tr>
          <tr class="js-navigation-item">
            <td class="icon">
              <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
              <img width="16" height="16" class="spinner" alt="" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" />
            </td>
            <td class="content">
              <span class="css-truncate css-truncate-target"><a class="js-navigation-open " title="smoothstatedemo.gif" id="59f895980bcd714c994e2e8ecccf261e-19f866e9cc24e08a403b63670ed681a57e448f9c" href="/miguel-perez/smoothState.js/blob/master/smoothstatedemo.gif">smoothstatedemo.gif</a></span>
            </td>
            <td class="message">
              <span class="css-truncate css-truncate-target">
                    <a data-pjax="true" title="Add gif of demo" class="link-gray" href="/miguel-perez/smoothState.js/commit/5e6fbb38910654a6b4f12cfe7c84777fc46e37b7">Add gif of demo</a>
              </span>
            </td>
            <td class="age">
              <span class="css-truncate css-truncate-target"><time-ago datetime="2016-04-27T16:25:47Z" class="no-wrap">Apr 27, 2016</time-ago></span>
            </td>
          </tr>
      </tbody>
    </table>




</div>

  <div id="readme" class="Box md js-code-block-container Box--condensed">
    <div class="Box-header d-flex flex-items-center flex-justify-between ">
      <h2 class="Box-title pr-3">
        <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path></svg>
        README.md
      </h2>
    </div>
        <div class="Popover anim-scale-in js-tagsearch-popover"
     hidden
     data-tagsearch-url="/miguel-perez/smoothState.js/find-symbols"
     data-tagsearch-ref="master"
     data-tagsearch-path="README.md"
     data-tagsearch-lang="Markdown"
     data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_symbol&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_symbol&quot;,&quot;repository_id&quot;:21748166,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;Markdown&quot;,&quot;originating_url&quot;:&quot;https://github.com/miguel-perez/smoothState.js&quot;,&quot;user_id&quot;:15176516}}"
     data-hydro-click-hmac="be793e958911c82e1034c355cde843b9a913b253df8173106645408556ce0ebe">
  <div class="Popover-message Popover-message--large Popover-message--top-left TagsearchPopover mt-1 mb-4 mx-auto Box box-shadow-large">
    <div class="TagsearchPopover-content js-tagsearch-popover-content overflow-auto" style="will-change:transform;">
    </div>
  </div>
</div>

      <div class="Box-body p-5">
        <article class="markdown-body entry-content" itemprop="text"><h1><a id="user-content-smoothstatejs" class="anchor" aria-hidden="true" href="#smoothstatejs"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>smoothState.js</h1>
<p>smoothState.js is a jQuery plugin that <a href="http://www.smashingmagazine.com/2009/04/22/progressive-enhancement-what-it-is-and-how-to-use-it/" rel="nofollow">progressively enhances</a> page loads to give us control over page transitions. If the user's browser doesn't have the <a href="http://caniuse.com/#search=pushstate" rel="nofollow">required features</a>, smoothState.js fades into the background and never runs.</p>
<p><a target="_blank" rel="noopener noreferrer" href="https://raw.githubusercontent.com/miguel-perez/smoothState.js/master/smoothstatedemo.gif"><img src="https://raw.githubusercontent.com/miguel-perez/smoothState.js/master/smoothstatedemo.gif" alt="demo of smoothstate" style="max-width:100%;"></a></p>
<p><a href="https://travis-ci.org/miguel-perez/smoothState.js" rel="nofollow"><img src="https://camo.githubusercontent.com/6a026856969432ea169b0fab63b14cff71910bd7/68747470733a2f2f7472617669732d63692e6f72672f6d696775656c2d706572657a2f736d6f6f746853746174652e6a732e7376673f6272616e63683d6d6173746572" alt="Build Status" data-canonical-src="https://travis-ci.org/miguel-perez/smoothState.js.svg?branch=master" style="max-width:100%;"></a>
<a href="https://gitter.im/miguel-perez/smoothState.js?utm_source=badge&amp;utm_medium=badge&amp;utm_campaign=pr-badge" rel="nofollow"><img src="https://camo.githubusercontent.com/da2edb525cde1455a622c58c0effc3a90b9a181c/68747470733a2f2f6261646765732e6769747465722e696d2f4a6f696e253230436861742e737667" alt="Gitter" data-canonical-src="https://badges.gitter.im/Join%20Chat.svg" style="max-width:100%;"></a></p>
<ul>
<li><a href="#built-with-smoothstatejs">Built with smoothState.js</a></li>
<li><a href="#need-help">Need help?</a></li>
<li><a href="#intro">Intro</a></li>
<li><a href="#options">Options</a></li>
<li><a href="#methods-and-properties">Methods and properties</a></li>
<li><a href="#faq">FAQ</a></li>
<li><a href="#contribute">Contribute</a></li>
</ul>
<h2><a id="user-content-built-with-smoothstatejs" class="anchor" aria-hidden="true" href="#built-with-smoothstatejs"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Built with smoothState.js</h2>
<p>Below are some cool sites built with smoothState.js. Feel free to submit a pull request with your own site, or <a href="https://twitter.com/cxiengineer" rel="nofollow">tweet me</a> with a link.</p>
<h3><a id="user-content-contributor-demos" class="anchor" aria-hidden="true" href="#contributor-demos"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributor demos</h3>
<ul>
<li><a href="https://rawgit.com/miguel-perez/smoothState.js/master/demos/barebones/index.html" rel="nofollow">Barebones behavior</a></li>
<li><a href="https://rawgit.com/miguel-perez/smoothState.js/master/demos/csstricks/index.html" rel="nofollow">CSSTricks demo</a></li>
<li><a href="https://rawgit.com/miguel-perez/smoothState.js/master/demos/anchor-transitions/index.html" rel="nofollow">Contextual transitions</a></li>
<li><a href="https://rawgit.com/miguel-perez/smoothState.js/master/demos/sidebar/index.html" rel="nofollow">Sidebar demo</a></li>
</ul>
<h3><a id="user-content-live-sites" class="anchor" aria-hidden="true" href="#live-sites"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Live Sites</h3>
<ul>
<li><a href="http://www.twitchcon.com/" rel="nofollow">Twitch Conf</a> by <a href="https://twitter.com/alexisg" rel="nofollow">Alexis Gallisá</a></li>
<li><a href="http://riccardozanutta.com/lato" rel="nofollow">Interactive portfolio</a> by <a href="https://twitter.com/RiccardoZanutta" rel="nofollow">Recardo Zanutta</a></li>
<li><a href="http://refune.com/" rel="nofollow">Refune</a> by <a href="https://twitter.com/pudgereyem" rel="nofollow">Victor Meyer</a></li>
<li><a href="http://beauhanxu.com/" rel="nofollow">Beau Han Xu London</a> by <a href="https://twitter.com/gosseti" rel="nofollow">Lawrence Gosset</a></li>
<li><a href="http://www.rockwerchter.be/en" rel="nofollow">Rock Werchter</a> by Rock Werchter</li>
<li><a href="http://aaronporter.co/" rel="nofollow">Portfolio Site</a> by <a href="https://twitter.com/Aaron_porter" rel="nofollow">Aaron Porter</a></li>
<li><a href="http://www.openinnovationinscience.at/home.html" rel="nofollow">Open Innovation in Science</a> by <a href="https://twitter.com/rolandschuetz" rel="nofollow">Roland Schütz</a></li>
</ul>
<h2><a id="user-content-need-help" class="anchor" aria-hidden="true" href="#need-help"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Need help?</h2>
<p>If you need a little help implementing smoothState there are a couple things you could do to get some support:</p>
<ol>
<li>Post on stackoverflow using the <a href="http://stackoverflow.com/tags/smoothState.js" rel="nofollow">smoothState.js tag</a>.</li>
<li>Join the <a href="https://gitter.im/miguel-perez/smoothState.js?utm_source=badge&amp;utm_medium=badge&amp;utm_campaign=pr-badge" rel="nofollow">Gitter room</a> and talk to some of the contributors.</li>
<li>Contact <a href="https://github.com/miguel-perez">Miguel</a> directly, he provides pair-programing help billed by the hour</li>
</ol>
<p>Please <strong>avoid creating a Github issue</strong> with personal support requests, to keep the tracker clear for bugs and pull requests.</p>
<h2><a id="user-content-intro" class="anchor" aria-hidden="true" href="#intro"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Intro</h2>
<p>Imagine, for a second, how disorienting it would be if touching a doorknob teleported you to the other side of the door. Navigating the web feels like using a teleporting doorknob. Layouts change, elements rearrange or disappear, and it takes time for the user to adjust. Smooth transitions reduce the effort it takes for users to get settled into a new environment.</p>
<p>Javascript SPA frameworks, sometimes referred to as MVC frameworks, are a common way to solve this issue. These frameworks often lose the benefits of unobtrusive code. Writing unobtrusive javascript gives us more resilience to errors, and improved performance and accessibility.</p>
<h3><a id="user-content-how-does-smoothstatejs-work" class="anchor" aria-hidden="true" href="#how-does-smoothstatejs-work"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How does smoothState.js work?</h3>
<p>smoothState.js <strong>provides hooks</strong> that can be used to choreograph how elements enter and exit the page during navigation. It uses the time the animations are running to fetch content via AJAX to inject into the page.</p>
<p>smoothState.js doesn't dictate how things on the page should be animated. It supports CSS animations, as well as JS animation libraries like <a href="http://julian.com/research/velocity/" rel="nofollow">velocity.js</a>.</p>
<h3><a id="user-content-design-philosophy-and-requirements" class="anchor" aria-hidden="true" href="#design-philosophy-and-requirements"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Design philosophy and requirements</h3>
<p>The project's main goal is to allow developers to add page transitions without having to add any logic to the backend. We keep things unobtrusive at all times.</p>
<p><strong>smoothState.js initializes on containers, not links.</strong> Think of a container as a small window object embedded in the page.</p>
<ol>
<li>Every URL on your site should return a full layout - not just an HTML fragment</li>
<li>The smoothState container needs to have an <code>id</code> set - a unique hook to tell us what to update on the page</li>
<li>All links and forms on the page should live within the container</li>
</ol>
<p>These requirements makes the website resilient, since it smoothState.js can abort and simply redirect the user if an error occurs. Making each link return a full page also ensures that pages are created with progressive enhancement in mind.</p>
<h2><a id="user-content-getting-started" class="anchor" aria-hidden="true" href="#getting-started"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting started</h2>
<p>All we need to do to get started is:</p>
<ol>
<li>Include a copy of jQuery and jQuery.smoothState.js on your page</li>
<li>Add a container with an id of <code>#main</code> and include some links inside of it</li>
<li>Create a new js file and run <code>$('#main').smoothState()</code></li>
</ol>
<div class="highlight highlight-source-js"><pre><span class="pl-en">$</span>(<span class="pl-k">function</span>() {
  <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).<span class="pl-en">smoothState</span>();
});</pre></div>
<p>By default, smoothState.js will:</p>
<ul>
<li>Prevent links and forms from triggering a full page load, if possible</li>
<li>Use AJAX to request pages and replace the content appropriately</li>
<li>Update URLs and browsing history so that browsing expectations aren't broken</li>
</ul>
<p>smoothState.js <strong>will not</strong> add page transitions to pages. You'll need to define the animations you want to run using the hooks smoothState.js provides.</p>
<ul>
<li><a href="#onbefore"><code>onBefore</code></a> - Runs before a page load has been started</li>
<li><a href="#onstart"><code>onStart</code></a> - Runs once a page load has been activated</li>
<li><a href="#onprogress"><code>onProgress</code></a> - Runs if the page request is still pending and the <code>onStart</code> animations have finished</li>
<li><a href="#onready"><code>onReady</code></a> - Run once the requested content is ready to be injected into the page and the previous animations have finished</li>
<li><a href="#onafter"><code>onAfter</code></a> - Runs after the new content has been injected into the page and all animations are complete</li>
</ul>
<h2><a id="user-content-options" class="anchor" aria-hidden="true" href="#options"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Options</h2>
<p>smoothState.js provides some options that allow customization of the plugin's functionality. The default options are overridden by passing an object into the <code>smoothState</code> function.</p>
<h4><a id="user-content-options-example" class="anchor" aria-hidden="true" href="#options-example"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Options example</h4>
<div class="highlight highlight-source-js"><pre><span class="pl-en">$</span>(<span class="pl-k">function</span>(){
  <span class="pl-s"><span class="pl-pds">'</span>use strict<span class="pl-pds">'</span></span>;
  <span class="pl-k">var</span> options <span class="pl-k">=</span> {
    prefetch<span class="pl-k">:</span> <span class="pl-c1">true</span>,
    cacheLength<span class="pl-k">:</span> <span class="pl-c1">2</span>,
    onStart<span class="pl-k">:</span> {
      duration<span class="pl-k">:</span> <span class="pl-c1">250</span>, <span class="pl-c"><span class="pl-c">//</span> Duration of our animation</span>
      <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">$container</span>) {
        <span class="pl-c"><span class="pl-c">//</span> Add your CSS animation reversing class</span>
        <span class="pl-smi">$container</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">'</span>is-exiting<span class="pl-pds">'</span></span>);

        <span class="pl-c"><span class="pl-c">//</span> Restart your animation</span>
        <span class="pl-smi">smoothState</span>.<span class="pl-en">restartCSSAnimations</span>();
      }
    },
    onReady<span class="pl-k">:</span> {
      duration<span class="pl-k">:</span> <span class="pl-c1">0</span>,
      <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">$container</span>, <span class="pl-smi">$newContent</span>) {
        <span class="pl-c"><span class="pl-c">//</span> Remove your CSS animation reversing class</span>
        <span class="pl-smi">$container</span>.<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">'</span>is-exiting<span class="pl-pds">'</span></span>);

        <span class="pl-c"><span class="pl-c">//</span> Inject the new content</span>
        <span class="pl-smi">$container</span>.<span class="pl-en">html</span>($newContent);

      }
    }
  },
  smoothState <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).<span class="pl-en">smoothState</span>(options).<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">'</span>smoothState<span class="pl-pds">'</span></span>);
});</pre></div>
<h3><a id="user-content-debug" class="anchor" aria-hidden="true" href="#debug"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>debug</code></h3>
<p>If set to <code>true</code>, smoothState.js will log useful debug information to the console, instead of aborting. For example, instead of redirecting the user to a page on an error, it might log:</p>
<pre><code>No element with an id of “#main” in response from “/about.html”.
</code></pre>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Default</span>
<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).<span class="pl-en">smoothState</span>({ debug<span class="pl-k">:</span> <span class="pl-c1">false</span> });</pre></div>
<h3><a id="user-content-anchors" class="anchor" aria-hidden="true" href="#anchors"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>anchors</code></h3>
<p>A jQuery selector specifying which anchors within the <code>smoothState</code> element should be bound.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Default</span>
<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).<span class="pl-en">smoothState</span>({ anchors<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>a<span class="pl-pds">'</span></span> });</pre></div>
<h3><a id="user-content-hrefregex" class="anchor" aria-hidden="true" href="#hrefregex"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>hrefRegex</code></h3>
<p>A regular expression to specify which anchor with a specific href property based on the regex smoothState should bind to. If empty, every href will be permitted.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Default</span>
<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).<span class="pl-en">smoothState</span>({ hrefRegex<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span> });</pre></div>
<h3><a id="user-content-forms" class="anchor" aria-hidden="true" href="#forms"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>forms</code></h3>
<p>A jQuery selector specifying which forms within the <code>smoothState</code> element should be bound.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Default</span>
<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).<span class="pl-en">smoothState</span>({ forms<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>form<span class="pl-pds">'</span></span> });</pre></div>
<h3><a id="user-content-allowformcaching" class="anchor" aria-hidden="true" href="#allowformcaching"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>allowFormCaching</code></h3>
<p>Controls whether or not form submission responses are preserved in the cache. If set to true, smoothState will store form responses in the cache. This should be set to false unless you understand how caching form results will affect your website's behaviour very well.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Default</span>
<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).<span class="pl-en">smoothState</span>({ allowFormCaching<span class="pl-k">:</span> <span class="pl-c1">false</span> });</pre></div>
<h3><a id="user-content-repeatdelay" class="anchor" aria-hidden="true" href="#repeatdelay"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>repeatDelay</code></h3>
<p>The minimum number of milliseconds between click/submit events. User events ignored beyond this rate are ignored. This can be used to ignore double-clicks so that the user's browser history won't become cluttered by incompleted page loads.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Default</span>
<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).<span class="pl-en">smoothState</span>({ repeatDelay<span class="pl-k">:</span> <span class="pl-c1">500</span> });</pre></div>
<h3><a id="user-content-blacklist" class="anchor" aria-hidden="true" href="#blacklist"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>blacklist</code></h3>
<p>A jQuery selector specifying which elements within the <code>smoothState</code> element should be ignored. This includes both form and anchor elements.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Default</span>
<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).<span class="pl-en">smoothState</span>({ blacklist<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>.no-smoothState<span class="pl-pds">'</span></span> });</pre></div>
<h3><a id="user-content-prefetch" class="anchor" aria-hidden="true" href="#prefetch"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>prefetch</code></h3>
<p>There is a 200ms to 300ms delay between the time that a user hovers over a link and the time they click it. On touch screens, the delay between the <code>touchstart</code> and <code>touchend</code> is even greater. If the <code>prefetch</code> option is set to <code>true</code>, smoothState.js will begin to preload the contents of the URL during that delay. This technique will increase the perceived performance of the site.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Default</span>
<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).<span class="pl-en">smoothState</span>({ prefetch<span class="pl-k">:</span> <span class="pl-c1">false</span> });</pre></div>
<h3><a id="user-content-prefetchon" class="anchor" aria-hidden="true" href="#prefetchon"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>prefetchOn</code></h3>
<p>The name of the events to listen to from anchors when prefetching.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Default</span>
<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).<span class="pl-en">smoothState</span>({ prefetchOn<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>mouseover touchstart<span class="pl-pds">'</span></span> });</pre></div>
<p>If you would like to throttle the prefetch, do so by firing custom events.</p>
<p>Libraries like @tristen's <a href="https://github.com/tristen/hoverintent">hoverintent</a> can be used to throttle prefetching based on the user's intent, by triggering a custom <code>intent</code> event. To use it with smoothState.js, set <code>intent</code> as the <code>prefetchOn</code> option.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).<span class="pl-en">smoothState</span>({ prefetchOn<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>intent<span class="pl-pds">'</span></span> });</pre></div>
<p>Or, for the opposite effect, use something like @cihadturhan's <a href="https://github.com/cihadturhan/jquery-aim">jQuery.aim</a> and add spider sense-like prefetching to smoothState.js.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).<span class="pl-en">smoothState</span>({ prefetchOn<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>aim<span class="pl-pds">'</span></span> });</pre></div>
<h3><a id="user-content-locationheader" class="anchor" aria-hidden="true" href="#locationheader"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>locationHeader</code></h3>
<p>A field name to lookup among the headers from the HTTP response to alert smoothState.js of any redirected URL.</p>
<p>smoothState.js makes AJAX requests using <code>XMLHttpRequest</code>, which silently follows redirects. This transparence prevents smoothState.js from knowing if a request resulted in a redirection.</p>
<p>For example, when you visit <code>/about</code> and the server redirects you to <code>/about/company</code>, smoothState.js is only ever informed of a successful response from <code>/about</code>. The <code>locationHeader</code> option gives smoothState.js a HTTP response header to consult and replace the browser's history entry with the <em>real</em> URI.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).<span class="pl-en">smoothState</span>({ locationHeader<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>X-SmoothState-Location<span class="pl-pds">'</span></span> });</pre></div>
<h3><a id="user-content-cachelength" class="anchor" aria-hidden="true" href="#cachelength"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>cacheLength</code></h3>
<p>The number of pages to cache. smoothState.js can cache pages in memory, avoiding the user having to request pages more than once. Cached pages will load instantaneously.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Default</span>
<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).<span class="pl-en">smoothState</span>({ cacheLength<span class="pl-k">:</span> <span class="pl-c1">0</span> });</pre></div>
<h3><a id="user-content-loadingclass" class="anchor" aria-hidden="true" href="#loadingclass"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>loadingClass</code></h3>
<p>The class to apply to the <code>body</code> while a page is still loading, unless the page is received before the animations are complete.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Default</span>
<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).<span class="pl-en">smoothState</span>({ loadingClass<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>is-loading<span class="pl-pds">'</span></span> });</pre></div>
<h3><a id="user-content-scroll" class="anchor" aria-hidden="true" href="#scroll"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>scroll</code></h3>
<p>Scroll to top after onStart and scroll to hash after onReady. This is default behavior, if you want to implement your own scroll behavior, set <code>scroll: false</code></p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Default</span>
<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).<span class="pl-en">smoothState</span>({ scroll<span class="pl-k">:</span> <span class="pl-c1">true</span> });</pre></div>
<h3><a id="user-content-alterrequest" class="anchor" aria-hidden="true" href="#alterrequest"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>alterRequest</code></h3>
<p>A function to alter a request's <a href="http://api.jquery.com/jquery.ajax/#jQuery-ajax-settings" rel="nofollow">AJAX settings</a> before it is called. This can be used to alter the requested URL, for example.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Default</span>
<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).<span class="pl-en">smoothState</span>({
  <span class="pl-c"><span class="pl-c">//</span> Param `request` is an `Object` that is currently set to be used</span>
  <span class="pl-en">alterRequest</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">request</span>) {
    <span class="pl-c"><span class="pl-c">//</span> Must return and `Object` that will be used to make the request</span>
    <span class="pl-k">return</span> request;
  }
});</pre></div>
<h3><a id="user-content-alterchangestate" class="anchor" aria-hidden="true" href="#alterchangestate"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>alterChangeState</code></h3>
<p>A function to alter a history entry's state object before it is modified or added to the browser's history. This can be used to attach serializable data to the history entry, for example.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Default</span>
<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).<span class="pl-en">smoothState</span>({
  <span class="pl-c"><span class="pl-c">//</span> Param `state` is an `Object` that contains the container ID, by default</span>
  <span class="pl-en">alterChangeState</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">state</span>) {
    <span class="pl-c"><span class="pl-c">//</span> Must return a serializable `Object` that is associated with the history entry</span>
    <span class="pl-k">return</span> state;
  }
});</pre></div>
<h3><a id="user-content-onbefore" class="anchor" aria-hidden="true" href="#onbefore"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>onBefore</code></h3>
<p>The function to run before a page load is started.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Default</span>
<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).<span class="pl-en">smoothState</span>({
  <span class="pl-c"><span class="pl-c">//</span> `$currentTarget` is a `jQuery Object` of the element, anchor or form, that triggered the load</span>
  <span class="pl-c"><span class="pl-c">//</span> `$container` is a `jQuery Object` of the the current smoothState container</span>
  <span class="pl-en">onBefore</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">$currentTarget</span>, <span class="pl-smi">$container</span>) {}
});</pre></div>
<h3><a id="user-content-onstart" class="anchor" aria-hidden="true" href="#onstart"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>onStart</code></h3>
<p>The function to run once a page load has been activated. This is an ideal time to animate elements that exit the page and set up for a loading state.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Default</span>
<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).<span class="pl-en">smoothState</span>({
  onStart<span class="pl-k">:</span> {
    <span class="pl-c"><span class="pl-c">//</span> How long this animation takes</span>
    duration<span class="pl-k">:</span> <span class="pl-c1">0</span>,
    <span class="pl-c"><span class="pl-c">//</span> A function that dictates the animations that take place</span>
    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">$container</span>) {}
  }
});</pre></div>
<h3><a id="user-content-onprogress" class="anchor" aria-hidden="true" href="#onprogress"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>onProgress</code></h3>
<p>The function to run only if the page request is still pending and <code>onStart</code> has finished animating. This is a good place to add something like a loading indicator.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Default</span>
<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).<span class="pl-en">smoothState</span>({
  onProgress<span class="pl-k">:</span> {
    <span class="pl-c"><span class="pl-c">//</span> How long this animation takes</span>
    duration<span class="pl-k">:</span> <span class="pl-c1">0</span>,
    <span class="pl-c"><span class="pl-c">//</span> A function that dictates the animations that take place</span>
    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">$container</span>) {}
  }
});</pre></div>
<h3><a id="user-content-onready" class="anchor" aria-hidden="true" href="#onready"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>onReady</code></h3>
<p>The function to run when the requested content is ready to be injected into the page. This is when the page's contents should be updated.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Default</span>
<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).<span class="pl-en">smoothState</span>({
  onReady<span class="pl-k">:</span> {
    duration<span class="pl-k">:</span> <span class="pl-c1">0</span>,
    <span class="pl-c"><span class="pl-c">//</span> `$container` is a `jQuery Object` of the the current smoothState container</span>
    <span class="pl-c"><span class="pl-c">//</span> `$newContent` is a `jQuery Object` of the HTML that should replace the existing container's HTML.</span>
    <span class="pl-en">render</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">$container</span>, <span class="pl-smi">$newContent</span>) {
      <span class="pl-c"><span class="pl-c">//</span> Update the HTML on the page</span>
      <span class="pl-smi">$container</span>.<span class="pl-en">html</span>($newContent);
    }
  }
});</pre></div>
<h3><a id="user-content-onafter" class="anchor" aria-hidden="true" href="#onafter"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>onAfter</code></h3>
<p>The function to run when the new content has been injected into the page and all animations are complete. This is when to re-initialize any plugins needed by the page.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Default</span>
<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).<span class="pl-en">smoothState</span>({
  <span class="pl-en">onAfter</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">$container</span>, <span class="pl-smi">$newContent</span>) {}
});</pre></div>
<h2><a id="user-content-methods-and-properties" class="anchor" aria-hidden="true" href="#methods-and-properties"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Methods and properties</h2>
<p><code>smoothState</code> provides some methods and properties, made accessible through the element's <code>data</code> property.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Access smoothState</span>
<span class="pl-k">var</span> smoothState <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).<span class="pl-en">smoothState</span>().<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">'</span>smoothState<span class="pl-pds">'</span></span>);

<span class="pl-c"><span class="pl-c">//</span> Run method</span>
<span class="pl-smi">smoothState</span>.<span class="pl-c1">load</span>(<span class="pl-s"><span class="pl-pds">'</span>/newPage.html<span class="pl-pds">'</span></span>);</pre></div>
<h3><a id="user-content-properties" class="anchor" aria-hidden="true" href="#properties"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Properties</h3>
<ul>
<li><a href="#href"><code>href</code></a></li>
<li><a href="#cache"><code>cache</code></a></li>
</ul>
<h4><a id="user-content-href" class="anchor" aria-hidden="true" href="#href"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>href</code></h4>
<p>The URL of the content that is currently displayed.</p>
<h4><a id="user-content-cache" class="anchor" aria-hidden="true" href="#cache"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>cache</code></h4>
<p>An object containing the cached pages after they are requested.</p>
<h3><a id="user-content-methods" class="anchor" aria-hidden="true" href="#methods"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Methods</h3>
<ul>
<li><a href="#loadurl"><code>load</code></a></li>
<li><a href="#fetchurl"><code>fetch</code></a></li>
<li><a href="#clearurl"><code>clear</code></a></li>
<li><a href="#restartcssanimations"><code>restartCSSAnimations</code></a></li>
</ul>
<h4><a id="user-content-loadurl" class="anchor" aria-hidden="true" href="#loadurl"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>load(url)</code></h4>
<p>This loads the contents of a URL into our container.</p>
<h4><a id="user-content-fetchurl" class="anchor" aria-hidden="true" href="#fetchurl"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>fetch(url)</code></h4>
<p>This fetches the contents of a URL and caches it.</p>
<h4><a id="user-content-clearurl" class="anchor" aria-hidden="true" href="#clearurl"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>clear(url)</code></h4>
<p>This clears a given page from the cache. If no URL is provided it will clear the entire cache.</p>
<h4><a id="user-content-restartcssanimations" class="anchor" aria-hidden="true" href="#restartcssanimations"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>restartCSSAnimations()</code></h4>
<p>This restarts any CSS animations applying to elements within the <code>smoothState</code> container.</p>
<h2><a id="user-content-faq" class="anchor" aria-hidden="true" href="#faq"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>FAQ</h2>
<blockquote>
<p>Help! My <code>$(document).ready()</code> plugins work fine when I refresh but break on the second page load.</p>
</blockquote>
<p>smoothState.js provides the <a href="https://github.com/miguel-perez/smoothState.js#onafter"><code>onAfter</code></a> callback function that allows you to re-run your plugins. This can be tricky if you're unfamiliar with how AJAX works.</p>
<p>When you run a plugin on <code>$(document).ready()</code>, it's going to register <em>only</em> on elements that are currently on the page. Since we're injecting new elements every load, we need to run the plugins again, scoping it to <em>just</em> the new stuff.</p>
<p>A good way to do this is to wrap your plugin initializations in a function that we call on both <code>$.fn.ready()</code> and <code>onAfter</code>. You'll want to specify the <a href="http://api.jquery.com/jQuery/#jQuery-selector-context" rel="nofollow">context</a> each time you initialize the plugins so that you don't double-bind them. This is called a "module execution controller".</p>
<h2><a id="user-content-contribute" class="anchor" aria-hidden="true" href="#contribute"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contribute</h2>
<p>We're always looking for:</p>
<ul>
<li>Bug reports, especially those for aspects with a reduced test case</li>
<li>Pull requests for features, spelling errors, clarifications, etc.</li>
<li>Ideas for enhancements</li>
<li>Demos and links to sites built with smoothState.js</li>
</ul>
</article>
      </div>
  </div>




  </div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-lg width-full px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2020 GitHub, Inc.</li>
        <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>

    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>
    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    <script crossorigin="anonymous" async="async" integrity="sha512-WcQmT2vhcClFVOaaAJV/M+HqsJ2Gq/myvl6F3gCVBxykazXTs+i5fvxncSXwyG1CSfcrqmLFw/R/bmFYzprX2A==" type="application/javascript" id="js-conditional-compat" data-src="https://github.githubassets.com/assets/compat-bootstrap-59c4264f.js"></script>
    <script crossorigin="anonymous" integrity="sha512-qRIR9sJtW+F0sy3P1EuUI81C+jzXTa54zUOyTmKhz64cc/Wj2XT1nnh23ZjWj1CFf8tO9LOn49s79ilOILcGkA==" type="application/javascript" src="https://github.githubassets.com/assets/environment-bootstrap-a91211f6.js"></script>
      <script crossorigin="anonymous" async="async" integrity="sha512-qUt0W3Q++EcTV/FjWCH4pkCuFrwLmBaxXaem85oHWp5D40Jb6WozJdUpeKQgU3fguUZ7cqxD1gpjU6f4u3ScKg==" type="application/javascript" src="https://github.githubassets.com/assets/vendor-a94b745b.js"></script>
      <script crossorigin="anonymous" async="async" integrity="sha512-HYp7CXb89TL5eJ7vMb865dEBf/XP7Z3QiK4zwki3uGpcLps5iOCRi47l49bxZax3P+FY7LDX0juQ4g7T71sn+g==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-1d8a7b09.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-Fnqq4mSciGpjg3c/SWld6kRYUrEKwYUPJ3xch/ul3XfiC+FTCOQlWt6QipJRpwwLk1Q05TumWAAK1PydlWaJlA==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-167aaae2.js"></script>
    
    
    
  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path></svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>

