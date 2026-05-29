BLockly.defineBlocksWithJsonArray([
{
  "type": "hat_block",
  "tooltip": "This hat block does nothing but to clear timeouts.",
  "helpUrl": "https://www.w3schools.com/jsref/met_win_cleartimeout.asp",
  "message0": "Hat block (event) %1",
  "args0": [
    {
      "type": "input_dummy",
      "name": ""
    }
  ],
  "nextStatement": null,
  "colour": 60,
},{
  "type": "clear_timeout",
  "tooltip": "Clears any timeouts.",
  "helpUrl": "",
  "message0": "clear timeout %1",
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
Blockly.JavaScript['hat_block'] = function(block) {
  var code = 'clearTimeout()';
  return code;
};
Blockly.JavaScript['clear_timeout'] = function(block) {
  var code = 'clearTimeout()';
  return code;
};
