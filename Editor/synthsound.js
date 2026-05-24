Blockly.defineBlocksWithJsonArray([{
                "type": "create_oscillator",
                "message0": "create %1 wave at %2 Hz for %3 seconds",
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "WAVE_TYPE",
                        "options": [
                            ["sine", "sine"],
                            ["square", "square"],
                            ["sawtooth", "sawtooth"],
                            ["triangle", "triangle"]
                        ]
                    },
                    {
                        "type": "input_value",
                        "name": "FREQUENCY",
                        "check": "Number"
                    },
                    {
                        "type": "input_value",
                        "name": "DURATION",
                        "check": "Number"
                    }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 320,
                "tooltip": "Generate a synthesized tone",
                "helpUrl": ""
            },
            {
                "type": "beep",
                "message0": "beep at %1 Hz for %2 ms",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "FREQUENCY",
                        "check": "Number"
                    },
                    {
                        "type": "input_value",
                        "name": "DURATION",
                        "check": "Number"
                    }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 320,
                "tooltip": "Play a simple beep sound",
                "helpUrl": ""
            }
]);
        Blockly.JavaScript['create_oscillator'] = function(block) {
            const waveType = block.getFieldValue('WAVE_TYPE');
            const frequency = Blockly.JavaScript.valueToCode(block, 'FREQUENCY', Blockly.JavaScript.ORDER_NONE) || '440';
            const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_NONE) || '1';
            return `createOscillatorTone('${waveType}', ${frequency}, ${duration});\n`;
        };

        Blockly.JavaScript['beep'] = function(block) {
            const frequency = Blockly.JavaScript.valueToCode(block, 'FREQUENCY', Blockly.JavaScript.ORDER_NONE) || '800';
            const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_NONE) || '200';
            return `playBeep(${frequency}, ${duration});\n`;
        };
