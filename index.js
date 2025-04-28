// ==UserScript==
// @name         Highlight the Non-Followers on X.com
// @namespace    http://tampermonkey.net/
// @version      2024-08-07
// @description  Highlight users who don't follow you back on your X following page.
// @author       Ajmal
// @match        https://x.com/*/following
// @icon         https://www.google.com/s2/favicons?sz=64&domain=x.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('Highlight Non-Followers script loaded');

    let lastUrl = location.href;
    let debounceTimer;

    function highlightNonFollowers() {
        console.log('Highlighting non-followers...');
        const nonFollowers = document.querySelectorAll('div[data-testid="cellInnerDiv"]');

        nonFollowers.forEach(div => {
            const userAvatarContainer = div.querySelector('div[data-testid*="UserAvatar-Container"]');
            const followIndicator = div.querySelector('div[data-testid="userFollowIndicator"]');

            if (userAvatarContainer && !followIndicator) {
                div.style.backgroundColor = '#64181c';  // Deep red for non-followers
            }
        });
    }

    function runScript() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            highlightNonFollowers();
        }, 1000); // Run after 1s delay
    }

    const observer = new MutationObserver(() => {
        if (location.href !== lastUrl) {
            console.log('URL changed. Reloading script...');
            lastUrl = location.href;
        }
        if (location.pathname.endsWith('/following')) {
            runScript();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // First run
    if (location.pathname.endsWith('/following')) {
        runScript();
    }
})();
