BLockly.defineBlocksWithJsonArray([
{
  "type": "clear_timeout_hat",
  "tooltip": "This hat block does nothing but to clear timeouts.",
  "helpUrl": "https://www.w3schools.com/jsref/met_win_cleartimeout.asp",
  "message0": "start and clear timeouts %1",
  "args0": [
    {
      "type": "input_dummy",
      "name": ""
    }
  ],
  "nextStatement": null,
  "colour": 60,
},
{
  "type": "clear_timeout",
  "tooltip": "Clears any timeouts.",
  "helpUrl": "https://www.w3schools.com/jsref/met_win_cleartimeout.asp",
  "message0": "clear timeouts %1",
  "args0": [
    {
      "type": "input_dummy",
      "name": ""
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60
}
]);
Blockly.JavaScript['clear_timeout_hat'] = function(block) {
  var code = 'clearTimeout()';
  return code;
};
Blockly.JavaScript['clear_timeout'] = function(block) {
  var code = 'clearTimeout()';
  return code;
};
