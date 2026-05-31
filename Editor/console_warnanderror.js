Blockly.defineBlocksWithJsonArray([
{
  "type": "console_warn",
  "tooltip": "Prints a warning in console.",
  "helpUrl": "",
  "message0": "console warn %1",
  "args0": [
    {
      "type": "input_value",
      "name": "consolewarn"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 225 120
},
{
  "type": "console_error",
  "tooltip": "Prints an error in console.",
  "helpUrl": "",
  "message0": "console error %1",
  "args0": [
    {
      "type": "input_value",
      "name": "consoleerror"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120
}
]);
Blockly.JavaScript['console_warn'] = function(block) 
  var value_warning = Blockly.JavaScript.valueToCode(block, 'consolewarn', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'console.warn(' + value_warning + ');\n';
  return code;
};
Blockly.JavaScript['console_error'] = function(block) 
  var value_error = Blockly.JavaScript.valueToCode(block, 'consoleerror', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'console.error(' + value_error + ');\n';
  return code;
};
