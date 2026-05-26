Blockly.common.defineBlocksWithJsonArray([{
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
},{
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
}]);
javascript.javascriptGenerator.forBlock['text_padleft'] = function() {
  const value_target = generator.valueToCode(block, 'target', javascript.Order.ATOMIC);
  const value_paddingamount = generator.valueToCode(block, 'paddingamount', javascript.Order.ATOMIC);
  const value_paddingsymbol = generator.valueToCode(block, 'paddingsymbol', javascript.Order.ATOMIC);
  const code = '"' + value_target + '"padStart(' + value_paddingamount + ', ' + value_paddingsymbol + ')';
  return [code, javascript.Order.NONE];
};
javascript.javascriptGenerator.forBlock['text_padright'] = function() {
  const value_target = generator.valueToCode(block, 'target', javascript.Order.ATOMIC);
  const value_paddingamount = generator.valueToCode(block, 'paddingamount', javascript.Order.ATOMIC);
  const value_paddingsymbol = generator.valueToCode(block, 'paddingsymbol', javascript.Order.ATOMIC);
  const code = '"' + value_target + '"padEnd(' + value_paddingamount + ', ' + value_paddingsymbol + ')';
  return [code, javascript.Order.NONE];
};
