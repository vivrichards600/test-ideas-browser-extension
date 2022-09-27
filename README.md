Test Ideas Browser Extension
==================================

A browser extension to help identify new test ideas when viewing a web page.

Feel free to contribute to this extension.

## Basic Install Instructions
* Download and extract this repository somewhere
* Navigate to `chrome://extensions` within Chrome
* Ensure to switch 'Developer mode' on (a toggle at the top right of the page)
* Select `Load unpacked` and then navigate to the extension folder
* Navigate to a website and then click on the light bulb icon in the extensions bar. Any test ideas are displayed in the browsers console panel within DevTools

## Current Test Ideas
The following test ideas are suggested within this extension:
* maxlength attribute set - field has a max length attribute set, investigate if removing this is useful
* required attribute set - field has a required attribute set, investigate if removing this is useful
* input type is of type text - field is of type text and so will accept anything, explore the input range.
* input type is not of type text - field expects a particular input type, investigate if changing this is useful.
* input type is hidden field - does this hidden field have a value that looks useful to amend? Idea suggested by eviltester :)
