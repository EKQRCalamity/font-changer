document.addEventListener('DOMContentLoaded', function () {
  var toggleSwitch = document.getElementById('toggleFontSwitch');
  var toggleText = document.getElementById('toggleText');
  var fontSelector = document.getElementById('font-selector'); 

  chrome.fontSettings.getFontList((fonts) => {
    fonts.forEach((font) => {
      fontSelector.innerHTML += `<option value="${font.fontId}">${font.fontId}</option>`;
    });
  });

  var toggleDivTag = document.getElementById('toggleDivSwitch');
  var toggleSpanTag = document.getElementById('toggleSpanSwitch');
  var toggleATag = document.getElementById('toggleASwitch');
  var togglePTag = document.getElementById('togglePSwitch');
  var toggleHTag = document.getElementById('toggleHSwitch');
  var toggleQTag = document.getElementById('toggleQSwitch');
  var togglePreTag = document.getElementById('togglePreSwitch');
  var toggleYTTag = document.getElementById('toggleYTStringSwitch');
  var toggleStyleTag = document.getElementById('toggleStyleSwitch');
  var toggleCodeTag = document.getElementById('toggleCodeSwitch');
  var toggleQuoteTag = document.getElementById('toggleQuoteSwitch');
  var toggleListTag = document.getElementById('toggleListSwitch');
  let toggleSR_RSTag = document.getElementById('toggleSliderRevolutionSwitch');

  chrome.storage.local.get(['toggled', 'font', 'div', 'span', 'a', 'p', 'q', 'h', 'yt', 'pre', 'style', 'code', 'quote', 'list', 'sliderrevolution'], (data) => {
    const toggled = !!data.toggled ? data.toggled : false;
    const font = !!data.font ? data.font : "Consolas";
    const divtoggled = !!data.div ? data.div : false;
    const spantoggled = !!data.span ? data.span : false;
    const atoggled = !!data.a ? data.a : false;
    const ptoggled = !!data.p ? data.p : false;
    const htoggled = !!data.h ? data.h : false;
    const qtoggled = !!data.q ? data.q : false;
    const pretoggled = !!data.pre ? data.pre : false;
    const yttoggled = !!data.yt ? data.yt : false;    
    const styletoggled = !!data.style ? data.style : false;
    const codetoggled = !!data.code ? data.code : false;
    const quotetoggled = !!data.quote ? data.quote : false;
    const listtoggled = !!data.list ? data.list : false;
    const sliderrevolutiontoggled = !!data.sliderrevolution ? data.sliderrevolution : false;

    if (data.toggled === undefined) {
      toggleSwitch.checked = false;
      toggleText.innerText = "Not Running";
    } else {
      toggleSwitch.checked = data.toggled;
      toggleText.innerText = data.toggled ? "Running" : "Not Running";
    }

    fontSelector.value = font;
    toggleDivTag.checked = divtoggled;
    toggleSpanTag.checked = spantoggled;
    toggleATag.checked = atoggled;
    togglePTag.checked = ptoggled;
    toggleHTag.checked = htoggled;
    toggleQTag.checked = qtoggled;
    togglePreTag.checked = pretoggled;
    toggleYTTag.checked = yttoggled;
    toggleStyleTag.checked = styletoggled;
    toggleCodeTag.checked = codetoggled;
    toggleQuoteTag.checked = quotetoggled;
    toggleListTag.checked = listtoggled;
    toggleSR_RSTag.checked = sliderrevolutiontoggled;
  });

  toggleSwitch.addEventListener('change', function () {
    chrome.storage.local.set({toggled: toggleSwitch.checked}, () => {});

    toggleText.innerText = toggleSwitch.checked ? "Running" : "Not Running";
  });

  fontSelector.addEventListener('change', function () {
    var selectedFont = fontSelector.value;
    chrome.storage.local.set({font: selectedFont}, () => {});
  });

  toggleDivTag.addEventListener('change', function () {
    chrome.storage.local.set({div: toggleDivTag.checked});
  });

  toggleSpanTag.addEventListener('change', function () {
    chrome.storage.local.set({span: toggleSpanTag.checked});
  });

  toggleATag.addEventListener('change', function () {
    chrome.storage.local.set({a: toggleATag.checked});
  });

  togglePTag.addEventListener('change', function () {
    chrome.storage.local.set({p: togglePTag.checked});
  });

  toggleHTag.addEventListener('change', function() {
    chrome.storage.local.set({h: toggleHTag.checked});
  });

  toggleQTag.addEventListener('change', function() {
    chrome.storage.local.set({q: toggleQTag.checked});
  });

  togglePreTag.addEventListener('change', function() {
    chrome.storage.local.set({pre: togglePreTag.checked});
  });

  toggleYTTag.addEventListener('change', function() {
    chrome.storage.local.set({yt: toggleYTTag.checked});
  });

  toggleStyleTag.addEventListener('change', function () {
    chrome.storage.local.set({style: toggleStyleTag.checked});
  })

  toggleCodeTag.addEventListener('change', function () {
    chrome.storage.local.set({code: toggleCodeTag.checked});
  })

  toggleQuoteTag.addEventListener('change', function () {
    chrome.storage.local.set({quote: toggleQuoteTag.checked});
  })

  toggleListTag.addEventListener('change', function () {
    chrome.storage.local.set({list: toggleListTag.checked});
  })

  toggleSR_RSTag.addEventListener('change', function () {
    chrome.storage.local.set({sliderrevolution: toggleSR_RSTag.checked});
  })
});
