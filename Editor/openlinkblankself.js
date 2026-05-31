Blockly.defineBlocksWithJsonArray([
{
  "type": "openlinknew",
  "message0": "open link %1 in a new tab",
  "args0": [
    {
      "type": "input_value",
      "name": "OpenLinkURLNew"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "tooltip": "",
  "helpUrl": ""
},{
  "type": "openlinkself",
  "message0": "open link %1 in the same tab",
  "args0": [
    {
      "type": "input_value",
      "name": "OpenLinkURLSelf"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "tooltip": "",
  "helpUrl": ""
}
]);
Blockly.JavaScript['openlinkself'] = function(block) {
  var value_openlinkurlself = Blockly.JavaScript.valueToCode(block, 'OpenLinkURLSelf', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.open (' + value_openlinkurlself + ', "_self");\n';
  return code;
};
Blockly.JavaScript['openlinknew'] = function(block) {
  var value_openlinkurlnew = Blockly.JavaScript.valueToCode(block, 'OpenLinkURLNew', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.open (' + value_openlinkurlnew + ', "_blank");\n';
  return code;
};
