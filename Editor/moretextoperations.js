Blockly.defineBlocksWithJsonArray([
{
  "type": "text_padleft",
  "tooltip": "Pad the left of the text. WARNING: THIS BLOCK IS DYSFUNCTIONAL, SO DO NOT USE IT.",
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
  "tooltip": "Pad the right of the text. WARNING: THIS BLOCK IS DYSFUNCTIONAL, SO DO NOT USE IT.",
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
},
{
  "type": "repeat_text",
  "tooltip": "",
  "helpUrl": "",
  "message0": "repeat %1 call %2",
  "args0": [
    {
      "type": "input_value",
      "name": "repeattextamount",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "repeattextstring"
    }
  ],
  "output": null,
  "colour": 165,
  "inputsInline": true
},
{
  "type": "letter_oftext",
  "tooltip": "",
  "helpUrl": "",
  "message0": "letter %1 of %2",
  "args0": [
    {
      "type": "input_value",
      "name": "letternumber_number",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "letternumber_target"
    }
  ],
  "output": null,
  "colour": 165,
  "inputsInline": true
}
]);
Blockly.JavaScript['text_padleft'] = function(block) {
  var value_target = Blockly.JavaScript.valueToCode(block, 'target', javascript.Order.ATOMIC);
  var value_paddingamount = Blockly.JavaScript.valueToCode(block, 'paddingamount', javascript.Order.ATOMIC);
  var value_paddingsymbol = Blockly.JavaScript.valueToCode(block, 'paddingsymbol', javascript.Order.ATOMIC);
  var code = '"' + value_target + '".padStart(' + value_paddingamount + ', ' + value_paddingsymbol + ')';
  return [code, javascript.Order.ATOMIC]
};
Blockly.JavaScript['text_padright'] = function(block) {
  var value_target = Blockly.JavaScript.valueToCode(block, 'target', javascript.Order.ATOMIC);
  var value_paddingamount = Blockly.JavaScript.valueToCode(block, 'paddingamount', javascript.Order.ATOMIC);
  var value_paddingsymbol = Blockly.JavaScript.valueToCode(block, 'paddingsymbol', javascript.Order.ATOMIC);
  var code = '"' + value_target + '".padEnd(' + value_paddingamount + ', ' + value_paddingsymbol + ')';
  return [code, javascript.Order.ATOMIC]
};
Blockly.JavaScript['repeat_text'] = function(block) {
  var repeattextamount = Blockly.JavaScript.valueToCode(block, 'repeattextamount', javascript.Order.ATOMIC);
  var repeattextstring = Blockly.JavaScript.valueToCode(block, 'repeattextstring', javascript.Order.ATOMIC);
  var code = '' + repeattextstring + '.repeat(' + repeattextamount + ')';
  return [code, javascript.Order.ATOMIC]
};
Blockly.JavaScript['letter_oftext'] = function(block) {
  var value_letternumber_number = Blockly.JavaScript.valueToCode(block, 'letternumber_number', javascript.Order.ATOMIC);
  var value_letternumber_target = Blockly.JavaScript.valueToCode(block, 'letternumber_target', javascript.Order.ATOMIC);
  var code = '' + value_letternumber_target + '.charAt((' + value_letternumber_number + ') + 1)';
  return [code, javascript.Order.ATOMIC]
};
