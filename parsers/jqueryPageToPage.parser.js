/**
 * Снипет в консоль браузера, распечатает все подсказки с карты функций сайта http://jquery.page2page.ru/
 */
(() => {
    const els = document.querySelectorAll('.itArea:not(#jqueryui) .col .it, .itArea:not(#jqueryui) .col h4');
//     console.log(els)
   let lastH4 = null;
    const data = Array.prototype.reduce.call(els, (prev, cur) => {
       const groopEl = cur.closest('.itArea').querySelector('h2');
       if (!prev.find(({ title }) => title === groopEl.innerText)) {
           prev.push({ title: groopEl.innerText, items: [] })
       }

       if (cur.tagName === 'H4') {
            prev.find(({ title }) => title === groopEl.innerText).items.push({
                title: cur.innerText,
                items: [],
            });
            lastH4 = cur.innerText;
       }

       if (cur.tagName === 'DIV') {
           const item = { 
              name: cur.innerText,
              help: cur.querySelector('.tx').innerText,
              link: cur.querySelector('a').href,
           };
           prev
            .find(({ title }) => title === groopEl.innerText).items
            .find(({ title }) => title === lastH4).items.push(item);
       }
       return prev;
    }, []);
    return JSON.stringify(data);
})();