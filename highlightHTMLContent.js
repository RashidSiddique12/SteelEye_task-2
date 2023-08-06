function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
  function findHTMLPosition(index) {
    let htmlIndex = 0;
    for (let i = 0; i < index; i++) {
      htmlIndex +=
        htmlContent.substring(htmlIndex).indexOf(plainText[i]) +
        plainText[i].length;
    }
    return htmlIndex;
  }

  plainTextPositions.sort((a, b) => a.start - b.start);

  const highlightedHTML = [];

  for (let i = 0; i < plainTextPositions.length; i++) {
    const { start, end } = plainTextPositions[i];

    const htmlStart = findHTMLPosition(start);
    const htmlEnd = findHTMLPosition(end);

    highlightedHTML.push(
      htmlContent.substring(highlightedHTML.length, htmlStart)
    );

    highlightedHTML.push(
      `<mark>${htmlContent.substring(htmlStart, htmlEnd)}</mark>`
    );
  }

  highlightedHTML.push(htmlContent.substring(highlightedHTML.length));

  return highlightedHTML.join("");
}

module.exports = highlightHTMLContent;
