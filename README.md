# Highlight Non-Followers on X (Twitter)

> ✨ A userscript to easily highlight users who don't follow you back on [X.com](https://x.com).

![Highlight Example](https://github.com/user-attachments/assets/71171d1e-5dd9-409c-98d0-ae5d183824fe)



## Table of Contents
- [Overview](#overview)
- [Requirements](#requirements)
- [Installation](#installation)
- [How It Works](#how-it-works)
- [Notes](#notes)



## Overview

This user script dynamically highlights non-followers on your X profile by changing their background color.  
It uses **CSS selectors** and the **MutationObserver API** to catch users who don't follow you back — even as you scroll down.


## Requirements
- A **userscript manager** like [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Edge) or [Violentmonkey](https://violentmonkey.github.io/) (Firefox).
- Access to [https://x.com/](https://x.com/)'s web interface.
- You must **edit the script** to replace the sample URL (`https://x.com/AJMAL_AJU_3/following`) with your own profile's following URL.


## Installation

1. **Install Tampermonkey** from your browser's extension store.
2. **Create a new userscript** within Tampermonkey by clicking ➡️ **Create a new script**.
3. **Set the script name** (example: `Highlight Non-Followers`).
4. **Paste** the provided script code into the editor.
5. **Replace** the username in the URL to match your X profile if needed.
6. **Save** and **refresh** your "Following" page on X to see the highlights!


## How It Works

1. When you visit your **Following** page, the script **waits for 2 seconds** to allow the page to fully load.
2. It selects all user entries using:
   ```html
   <div data-testid="cellInnerDiv"></div>
