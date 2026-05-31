Blockly.defineBlocksWithJsonArray([
{
  "type": "console_warn",
  "tooltip": "Prints a warning in console.",
  "helpUrl": "",
  "message0": "console warn %1",
  "args0": [
    {
      "type": "input_value",
      "name": "warn_text"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120
},{
  "type": "console_error",
  "tooltip": "Prints an error in console.",
  "helpUrl": "",
  "message0": "console error %1",
  "args0": [
    {
      "type": "input_value",
      "name": "error_text"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120
},{
  "type": "console_info",
  "tooltip": "Prints an informational message in console.",
  "helpUrl": "",
  "message0": "console info %1",
  "args0": [
    {
      "type": "input_value",
      "name": "info_text"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120
},{
  "type": "clear_console",
  "tooltip": "Clears the console.",
  "helpUrl": "",
  "message0": "clear console %1",
  "args0": [
    {
      "type": "input_dummy"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120
}
]);
Blockly.JavaScript['console_warn'] = function(block) {
  var value_warning = Blockly.JavaScript.valueToCode(block, 'warn_text', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'console.warn(' + value_warning + ');\n';
  return code;
};
Blockly.JavaScript['console_error'] = function(block) {
  var value_error = Blockly.JavaScript.valueToCode(block, 'error_text', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'console.error(' + value_error + ');\n';
  return code;
};
Blockly.JavaScript['console_info'] = function(block) {
  var value_info = Blockly.JavaScript.valueToCode(block, 'info_text', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'console.info(' + value_info + ');\n';
  return code;
};
Blockly.JavaScript['clear_console'] = function(block) {
  var code = 'console.clear();\n';
  return code;
};
