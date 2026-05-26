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
javascript.javascriptGenerator.forBlock['throw_error'] = function() {
  const value_error = generator.valueToCode(block, 'error', javascript.Order.ATOMIC);
  const code = 'throw new Error ("()");\n';
  return code;
}
