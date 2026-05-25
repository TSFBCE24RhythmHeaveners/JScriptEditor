Blockly.defineBlocksWithJsonArray([
{
  "type": "wait_seconds",
  "tooltip": "Wait for a specific amount of seconds",
  "helpUrl": "https://www.sitepoint.com/delay-sleep-pause-wait/",
  "message0": "wait for %1 seconds %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "seconds",
      "check": "Number"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statement"
    }
  ],
  "previousStatement": null,
  "colour": 120,
  "inputsInline": true
}
]);
Blockly.JavaScript['wait_seconds'] = function(block)  {
  var value_seconds = Blockly.JavaScript.valueToCode(block, 'seconds', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
  var code = 'setTimeout(() => {  ' + statements_statement + ' },((' + value_seconds + ') * 1000));\n';
  return code;
};
