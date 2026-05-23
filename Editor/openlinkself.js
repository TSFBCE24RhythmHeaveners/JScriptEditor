Blockly.defineBlocksWithJsonArray([
 {
  "type": "openlinkself",
  "message0": "open link %1 in the same tab",
  "args0": [
    {
      "type": "input_value",
      "name": "OpenLinkURLSelf",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "tooltip": "",
  "helpUrl": ""
}])
Blockly.JavaScript['openlinkself'] = function(block) {
  var value_openlinkurlself = Blockly.JavaScript.valueToCode(block, 'OpenLinkURLSelf', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.open (' + value_openlinkurlself + ', self);\n';
  return code;
};
