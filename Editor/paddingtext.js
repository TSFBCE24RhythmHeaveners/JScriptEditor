Blockly.defineBlocksWithJsonArray([
{
  "type": "text_padleft",
  "tooltip": "Pad the left of the text.",
  "helpUrl": "",
  "message0": "add %1 on the left until it reaches %2 using %3",
  "args0": [
    {
      "type": "input_value",
      "name": "target"
    },
    {
      "type": "input_value",
      "name": "paddingamount",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "paddingsymbol"
    }
  ],
  "output": null,
  "colour": 150,
  "inputsInline": true
},
{
  "type": "text_padright",
  "tooltip": "Pad the right of the text.",
  "helpUrl": "",
  "message0": "add %1 on the right for %2 times using %3",
  "args0": [
    {
      "type": "input_value",
      "name": "target"
    },
    {
      "type": "input_value",
      "name": "paddingamount",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "paddingsymbol"
    }
  ],
  "output": null,
  "colour": 150,
  "inputsInline": true
}
]);
Blockly.JavaScript['text_padleft'] = function(block) {
  var value_target = Blockly.JavaScript.valueToCode(block, 'target', javascript.Order.ATOMIC);
  var value_paddingamount = Blockly.JavaScript.valueToCode(block, 'paddingamount', javascript.Order.ATOMIC);
  var value_paddingsymbol = Blockly.JavaScript.valueToCode(block, 'paddingsymbol', javascript.Order.ATOMIC);
  var code = '"' + value_target + '".padStart(' + value_paddingamount + ', ' + value_paddingsymbol + ');\n';
  return [code, javascript.Order.ATOMIC]
};
Blockly.JavaScript['text_padright'] = function(block) {
  var value_target = Blockly.JavaScript.valueToCode(block, 'target', javascript.Order.ATOMIC);
  var value_paddingamount = Blockly.JavaScript.valueToCode(block, 'paddingamount', javascript.Order.ATOMIC);
  var value_paddingsymbol = Blockly.JavaScript.valueToCode(block, 'paddingsymbol', javascript.Order.ATOMIC);
  var code = '"' + value_target + '".padEnd(' + value_paddingamount + ', ' + value_paddingsymbol + ');\n';
  return [code, javascript.Order.ATOMIC]
};
