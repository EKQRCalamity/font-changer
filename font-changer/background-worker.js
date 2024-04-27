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
      const elements = [
        ...(ptoggled ? [...document.getElementsByTagName('p')].filter((x) => !!x.innerText) : []),
        ...(htoggled ? [...document.querySelectorAll('h1, h2, h3, h4, h5, h6')].filter((x) => !!x.innerText) : [] ),
        ...(atoggled ? [...document.getElementsByTagName('a')].filter((x) => !!x.innerText && !(x.innerText == x.innerText.toLowerCase()) || x.innerText.split(' ').length > 1) : [] ),
        ...(qtoggled ? [...document.getElementsByTagName('q')].filter((x) => !!x.innerText && !(x.innerText == x.innerText.toLowerCase()) || x.innerText.split(' ').length > 1) : [] ),
        ...(spantoggled ? [...document.getElementsByTagName('span')].filter((x) => !!x.innerText && !(x.innerText == x.innerText.toLowerCase()) || x.innerText.split(' ').length > 1) : [] ),
        ...(divtoggled ? [...document.getElementsByTagName('div')].filter((x) => !!x.innerText && !(x.innerText == x.innerText.toLowerCase()) || x.innerText.split(' ').length >1) : [] ),
        ...(pretoggled ? [...document.getElementsByTagName('pre')].filter((x) => !!x.innerText && !(x.innerText == x.innerText.toLowerCase()) || x.innerText.split(' ').length > 1) : [] ),
        ...(yttoggled ? [...document.querySelectorAll('yt-formatted-string, yt-attributed-string, yt-touch-feedback-shape')] : []),
        ...(styletoggled ? [...document.querySelectorAll('strong, b, i, em, mark, small, del, s, ins, u, sup, dfn')].filter((x) => !!x.innerText) : []),
        ...(codetoggled ? [...document.querySelectorAll('code, samp, kbd, var')].filter((x) => !!x.innerText) : []),
        ...(quotetoggled ? [...document.querySelectorAll('blockquote, cite')].filter((x) => !!x.innerText) : []),
        ...(listtoggled ? [...document.querySelectorAll('li, ul, dd, dl, ol, dt')].filter((x) => !!x.innerText) : []),
        ...(sliderrevolutiontoggled ? [...document.querySelectorAll('rs-loader, rs-loop-wrap, rs-layer-wrap, rs-static-layers, rs-slides, rs-slides, rs-mask-wrap, rs-layer')].filter((x) => !!x.innerText) : [])
      ];
    
      
      elements.forEach(element => {
        const computedStyle = window.getComputedStyle(element);
        if (computedStyle.getPropertyPriority('font-family') !== 'important') {
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
