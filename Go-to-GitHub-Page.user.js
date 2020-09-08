// ==UserScript==
// @name         Go To GitHub Pages
// @version      0.1
// @description  Add a button to github pages in repository's home page
// @author       rogeraabbccdd
// @match        https://github.com/*
// @namespace    https://github.com/rogeraabbccdd/Go-to-GitHub-Page/
// @updateURL    https://raw.githubusercontent.com/rogeraabbccdd/Go-to-GitHub-Page/master/Go-to-GitHub-Page.user.js
// @downloadURL  https://raw.githubusercontent.com/rogeraabbccdd/Go-to-GitHub-Page/master/Go-to-GitHub-Page.user.js
// @grant        none
// ==/UserScript==

const nav = document.querySelector('.file-navigation')
const url = location.href
if(url.match(/https:\/\/github\.com\/.*\/.+/g) && nav) {
  const path = location.pathname.split('/')
  const html = `<a class="btn ml-2" href="https://${path[1]}.github.io/${path[2]}" target="_blank">Go to Page</a>`
  nav.insertAdjacentHTML('beforeend', html)
}
