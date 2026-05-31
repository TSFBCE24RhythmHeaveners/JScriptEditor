Blockly.defineBlocksWithJsonArray([
{
  "type": "await_wait_seconds",
  "message0": "await wait %1 seconds",
  "args0": [
    {
      "type": "input_value",
      "name": "SECONDS",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240,
  "tooltip": "Wait for a specified number of seconds",
  "helpUrl": ""
},{
  "type": "wait_seconds_end",
  "tooltip": "Wait for a specific amount of seconds",
  "helpUrl": "https://www.sitepoint.com/delay-sleep-pause-wait/",
  "message0": "wait %1 seconds %2 do %3 end",
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
},{
  "type": "wait_seconds_do",
  "tooltip": "Wait for a specific amount of seconds",
  "helpUrl": "https://www.sitepoint.com/delay-sleep-pause-wait/",
  "message0": "wait %1 seconds %2 do %3",
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
  "nextStatement": null,
  "colour": 120,
  "inputsInline": true
}
]);
Blockly.JavaScript['await_wait_seconds'] = function(block) {
  const seconds = Blockly.JavaScript.valueToCode(block, 'SECONDS', Blockly.JavaScript.ORDER_NONE) || '1';
  return `await waitSeconds(${seconds});\n`;
};
Blockly.JavaScript['wait_seconds_end'] = function(block)  {
  var value_seconds = Blockly.JavaScript.valueToCode(block, 'seconds', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
  var code = 'setTimeout(() => {  ' + statements_statement + ' },((' + value_seconds + ') * 1000));\n';
  return code;
};
Blockly.JavaScript['wait_seconds_do'] = function(block)  {
  var value_seconds = Blockly.JavaScript.valueToCode(block, 'seconds', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
  var code = 'setTimeout(() => {  ' + statements_statement + ' },((' + value_seconds + ') * 1000));\n';
  return code;
};
