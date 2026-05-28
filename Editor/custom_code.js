Blockly.defineBlocksWithJsonArray([{
  "type": "custom_code",
  "tooltip": "",
  "helpUrl": "",
  "message0": "your own code %1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "yourowncode",
      "text": "abc"
    },
    {
      "type": "input_dummy",
      "name": ""
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 225,
  "inputsInline": true
}]);
Blockly.JavaScript['custom_code'] = function(block) {
  var your_own_code = Blockly.JavaScript.valueToCode(block, 'yourowncode', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '' + your_own_code + '\n';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
