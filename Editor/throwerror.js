Blockly.common.defineBlocksWithJsonArray([{
  "type": "throw_error",
  "tooltip": "Throws an error.",
  "helpUrl": "",
  "message0": "throw error %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "inputsInline": true
}]);
Blockly.JavaScript['throw_error'] = function() {
  var value_error = generator.valueToCode(block, 'error', javascript.Order.ATOMIC);
  var code = 'throw new Error ("' + value_error + '");\n';
  return code;
};
