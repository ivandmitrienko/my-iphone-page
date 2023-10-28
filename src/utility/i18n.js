export function i18n(json) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el, i) => {
    const text = el.innerHTML;
    let translate = json[text];
    el.innerHTML = translate;
    const variables = translate.match(/{({.*?})}/g);
    if (variables) {
      variables.forEach((variable) => {
        // Filter all `data-*` attributes for this element to find the matching key.
        Object.entries(el.dataset).filter(([key, value]) => {
          if (`{{${key}}}` === variable) {
            translate = translate.replace(
              `${variable}`,
              new Function(`return '$'+(${value})`)(),
            );
            el.innerHTML = translate;
          }
        });
      });
    }
  });
}
