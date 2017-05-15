function drawEmojiTree(rows) {
  const space = '&nbsp;&nbsp;';
  const emoji = '😎';
  let content = '';
  for (var i = 0; i < rows; i++) {
    for (var j = (rows - 1); j >= 0; j--) {
      content += (j <= i) ? emoji : space;
    }
    content += '<br />';
  }
  return content;
}

document.getElementById('root').innerHTML = drawEmojiTree(8);
