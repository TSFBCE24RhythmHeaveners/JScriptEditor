Blockly.common.defineBlocksWithJsonArray([
{
  "type": "wait_seconds",
  "message0": "wait %1 seconds",
  "args0": [
    {
       "type": "input_value",
       "name": "SECONDS",
       "check": "Number"
    }
   ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": %{BKY_LOOPS_HUE},
  "tooltip": "Wait for specified number of seconds",
  "helpUrl": ""
}
]);
Blockly.JavaScript['wait_seconds'] = function(block)  {
  const seconds = Blockly.JavaScript.valueToCode(block, 'SECONDS', Blockly.JavaScript.ORDER_NONE) || '1';
  return `await waitSeconds(${seconds});\n`;
};
