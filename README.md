# font-changer
Chrome/Chromium Extension for changing the fonts of websites.

Most websites should work out of the box. There are some checks that should catch most of icon elements and such so we don't change the font there to not break anything.

Generally supported is:
- Most common websites and web tags
  - &#x3C;div&#x3E;, &#x3C;span&#x3E;, &#x3C;a&#x3E;, &#x3C;p&#x3E;, all &#x3C;h&#x3E; tags, &#x3C;q&#x3E;, &#x3C;pre&#x3E;, &#x3C;code&#x3E;, &#x3C;blockquote&#x3E;, &#x3C;cite&#x3E;, common tags for lists, italic, bold, subscript...
- Specially added YouTube Strings and regularly formated (bold, italic,...) YouTube Strings
- Keeping state of chosen option
- Use of system installed fonts

### Jump To:
##### [Installation](#installation)
##### [Screenshots](#screenshots)

### Installation

Download the crx or zip from the [Releases](https://github.com/EKQRCalamity/font-changer/releases/tag/release) tab and install using the following steps:
- Download and extract the zip file into a folder
- Open your chromium based browser and go to chrome://extensions
- Either open the Developer Dropdown Menu and Click 'Load Unpacked Extension' or toggle the Developer Mode/Developer Settings using the checkbox and then do the same.
- Then select the folder where the extracted files are

Or using these steps (might not work on Chrome):

- Download the crx or zip file
- Open your chromium based browser and go to chrome://extensions
- (Skip if you have Developer Settings dropdown/options) Tick the Developer Mode/Developer Settings box
- Drag the zip or crx file into the extensions window

### Screenshots

##### Consolas Example on GitHub and OpenBMC Documentation:
![Screenshot #1 Consolas](https://github.com/ekqrcalamity/font-changer/blob/main/assets/Screen1.png?raw=true)

##### Nerd Font on YouTube Example:
![Screenshot #2 Nerd Font YouTube](https://github.com/ekqrcalamity/font-changer/blob/main/assets/Screen2.png?raw=true)

#### Nerd Font on GitHub and Wikipedia:
![Screenshot #3 Nerd Font](https://github.com/ekqrcalamity/font-changer/blob/main/assets/Screen3.png?raw=true)

