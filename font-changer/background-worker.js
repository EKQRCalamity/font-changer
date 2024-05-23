

function updateText(wait_time) {
  chrome.storage.local.get(['toggled', 'font', 'div', 'span', 'a', 'p', 'q', 'h', 'yt', 'pre', 'style', 'code', 'quote', 'list', 'sliderrevolution'], (data) => {
    const toggled = data.toggled || false;
    const font = data.font || 'Consolas';
    const divtoggled = data.div || false;
    const spantoggled = data.span || false;
    const atoggled = data.a || false;
    const ptoggled = data.p || false;
    const htoggled = data.h || false;
    const qtoggled = data.q || false;
    const pretoggled = data.pre || false;
    const yttoggled = data.yt || false;
    const styletoggled = data.style || false;
    const codetoggled = data.code || false;
    const quotetoggled = data.quote || false;
    const listtoggled = data.list || false;
    const sliderrevolutiontoggled = data.sliderrevolution || false;

    if (toggled) {
      function innerCheck(x) {
        return !!x && !!x.innerText;
      }

      function deepCheck(x) {
        if (!x || !x.innerText) return false;
        const lowerUpperCheck = (x.innerText == x.innerText.toLowerCase() || x.innerText == x.innerText.toUpperCase());
        if (lowerUpperCheck && x.innerText.split(" ").length == 1) return false;
        return true;
      }

      const innerCheckTags = [
        ...(ptoggled ? ["p"] : []),
        ...(htoggled ? ["h1", "h2", "h3", "h4", "h5", "h6"] : []),
        ...(yttoggled ? ["yt-formatted-string", "yt-attributed-string", "yt-touch-feedback-shape"] : []),
        ...(styletoggled ? ["strong", "b", "i", "em", "mark", "small", "del", "s", "ins", "u", "sup", "dfn"] : []),
        ...(codetoggled ? ["code", "samp", "kbd", "var"] : []),
        ...(quotetoggled ? ["blockquote", "cite"] : []),
        ...(listtoggled ? ["li", "ul", "dd", "dl", "ol", "dt"] : []),
        ...(sliderrevolutiontoggled ? ["rs-loader", "rs-loop-wrap", "rs-layer-wrap", "rs-static-layers", "rs-slides", "rs-mask-wrap", "rs-layer"] : []),
      ].join(", ");

      const deepCheckTags = [
        ...(atoggled ? ["a"] : []),
        ...(qtoggled ? ["q"] : []),
        ...(spantoggled ? ["span"] : []),
        ...(divtoggled ? ["div"] : []),
        ...(pretoggled ? ["pre"] : []),
      ].join(", ");

      const elements = [
        ...(!!innerCheckTags ? [...document.querySelectorAll(innerCheckTags)].filter((x) => innerCheck(x)) : []),
        ...(!!deepCheckTags ? [...document.querySelectorAll(deepCheckTags)].filter((x) => deepCheck(x)) : [])
      ];

      elements.forEach(element => {
        const computedStyle = window.getComputedStyle(element);
        if (computedStyle.getPropertyPriority('font-family') !== 'important' && element.style.fontFamily != `${font}, sans-serif`) {
          element.style.fontFamily = `${font}, sans-serif`;
        }
      });
    }

    setTimeout(() => {
      updateText(wait_time);
    }, wait_time);
  });
}


chrome.runtime.onMessage.addListener(function(message, sender, sendr) {
  if (message.toggle) {
    chrome.storage.local.get('toggled', (result) => {
      if (result === undefined) {
        result = true;
      }
      chrome.storage.local.set({ 'toggled': !result }, () => {});
    });
  }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) { 
  if (changeInfo.status == 'complete' && !(tab.url?.startsWith('chrome'))) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: updateText,
      args: [1500]
    }) 
  }
});
