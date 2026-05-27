Blockly.common.defineBlocksWithJsonArray([
{
  "type": "throw_error",
  "message0": "throw error %1",
  "args0": [
    {
      "type": "input_value",
      "name": "error"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "Throws an error.",
  "helpUrl": ""
}
]);
Blockly.JavaScript['throw_error'] = function(block) {
  var value_error = Blockly.JavaScript.valueToCode(block, 'error', javascript.Order.ATOMIC);
  var code = 'throw new Error ("' + value_error + '");\n';
  return code;
};
