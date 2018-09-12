(() => {
    const els = document.querySelectorAll('.itArea:not(#jqueryui) .col .it, .itArea:not(#jqueryui) .col h4');
    
   let lastH4 = null;
    const data = Array.prototype.reduce.call(els, (prev, cur) => {
       const groopEl = cur.closest('.itArea').querySelector('h2');
       if (!prev[groopEl.innerText]) {
           prev[groopEl.innerText] = {};
       }

       if (cur.tagName === 'H4') {
            prev[groopEl.innerText][cur.innerText] = [];
            lastH4 = cur.innerText;
       }

       if (cur.tagName === 'DIV') {
           const item = { 
              name: cur.innerText,
              help: cur.querySelector('.tx').innerText,
              link: cur.querySelector('a').href,
           };
           prev[groopEl.innerText][lastH4].push(item);
       }
       return prev;
    }, {});
    return JSON.stringify(data);
})();