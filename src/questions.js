const map = require('lodash.map');
const longest = require('longest');
const rightPad = require('right-pad');
const { execSync } = require('child_process');
const types = require('conventional-commit-types').types;

function formatTypes(types) {
  const length = longest(Object.keys(types)).length + 1;
  return (choices = map(types, function(type, key) {
    return {
      name: rightPad(key + ':', length) + ' ' + type.description,
      value: key,
    };
  }));
}

const branchName = execSync('git branch --show-current')
  .toString()
  .trim();
const shortcutIssueRegex = /(?<shortcutIssue>(?<!([A-Z0-0]{1,10})-?)[sc|SC]+-\d+)/;
const matchResult = branchName.match(shortcutIssueRegex);
const shortcutIssue =
  matchResult && matchResult.groups && matchResult.groups.shortcutIssue;

module.exports = [
  {
    type: 'list',
    name: 'type',
    message: "Select the type of change that you're committing:",
    choices: formatTypes(types),
  },
  {
    type: 'input',
    name: 'story',
    message: 'Enter Shortcut story id (SC-123)',
    default: shortcutIssue || '',
    validate: function(shortcutStoryId) {
      return /^(?<!([A-Z0-9]{1,10})-?)[sc|SC]+-\d+$/.test(shortcutStoryId);
    },
    filter: function(shortcutStoryId) {
      return shortcutStoryId.toUpperCase();
    },
  },
  {
    type: 'input',
    name: 'subject',
    message: 'Write a short, imperative tense description of the change:',
  },
  {
    type: 'input',
    name: 'body',
    message:
      'Provide a longer description of the change: (press enter to skip)\n',
  },
  {
    type: 'confirm',
    name: 'isBreaking',
    message: 'Are there any breaking changes?',
    default: false,
  },
  {
    type: 'confirm',
    name: 'isBreaking',
    message: 'You do know that this will bump the major version, are you sure?',
    default: false,
    when: function(answers) {
      return answers.isBreaking;
    },
  },
  {
    type: 'input',
    name: 'breaking',
    message: 'Describe the breaking changes:\n',
    when: answers => answers.isBreaking,
  },
];
