const wrap = require('word-wrap');

function filter(array) {
  return array.filter(function(x) {
    return x;
  });
}

function formatStory(story) {
  return `[${story}]`;
}

module.exports = function(answers) {
  var maxLineWidth = 100;

  var wrapOptions = {
    trim: true,
    newline: '\n',
    indent: '',
    width: maxLineWidth,
  };

  const story = answers.story ? formatStory(answers.story) : '';

  const headline = `${answers.type}: ${story} ${answers.subject.trim()}`;

  const head = headline.slice(0, maxLineWidth);

  const remainingHeadline = headline.slice(maxLineWidth, -1);

  const body = wrap(
    remainingHeadline.length > 0
      ? `...${remainingHeadline}\n${answers.body}`
      : answers.body,
    wrapOptions
  );

  // Apply breaking change prefix, removing it if already present
  let breaking = answers.breaking ? answers.breaking.trim() : '';
  breaking = breaking
    ? 'BREAKING CHANGE: ' + breaking.replace(/^BREAKING CHANGE: /, '')
    : '';
  breaking = wrap(breaking, wrapOptions);

  const footer = filter([breaking]).join('\n\n');

  return `${head}\n\n${body}\n\n${footer}`;
};
