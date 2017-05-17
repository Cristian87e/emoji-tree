function drawEmojiTree(rows) {
  const space = '&nbsp;&nbsp;'; // Two whitespaces represent the width of one emoji.
  const emoji = '😎';
  let content = '';
  for (let i = 0; i < rows; i++) {
    for (let j = (rows - 1); j >= 0; j--) {
      content += (j <= i) ? emoji : space;
    }
    content += '<br />';
  }
  return content;
}

document.getElementById('root').innerHTML = drawEmojiTree(8);
