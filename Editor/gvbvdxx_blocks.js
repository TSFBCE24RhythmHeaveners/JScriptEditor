//blocks go here
Blockly.defineBlocksWithJsonArray([
 {
  "type": "openlink",
  "message0": "Open Link %1",
  "args0": [
    {
      "type": "input_value",
      "name": "OpenLinkURL",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "tooltip": "",
  "helpUrl": ""
},
 {
   "type": "speak",
   "message0": "System Synth Speak %1",
   "args0": [
     {
       "type": "input_value",
       "name": "SpeakText",
       "check": "String"
     }
   ],
   "previousStatement": null,
   "nextStatement": null,
   "colour": 300,
   "tooltip": "",
   "helpUrl": ""
 },
{
  "type": "savefile",
  "message0": "%1 Save File %2 Name: %3 (Text) Data: %4",
  "args0": [
    {
      "type": "field_image",
      "src": "data:image/png;base64,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",
      "width": 30,
      "height": 30,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "FILENAME",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "FILEDATA",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 75,
  "tooltip": "",
  "helpUrl": ""
},
    {
  "type": "scratch_play_sound",
  "message0": "start sound %1",
  "args0": [
    {
      "type": "input_value",
      "name": "sound",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
},    {
  "type": "scratch_play_sound_until_done",
  "message0": "play sound %1 until done",
  "args0": [
    {
      "type": "input_value",
      "name": "sound",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
},
    {
  "type": "ask",
  "message0": "Ask %1 For Text",
  "args0": [
    {
      "type": "input_value",
      "name": "asktext"
    }
  ],
  "output": null,
  "colour": 165,
  "tooltip": "Asks For Text",
  "helpUrl": ""
},
    {
  "type": "scratch_join",
  "message0": "Join %1 With %2",
  "args0": [
    {
      "type": "input_value",
      "name": "TEXT1",
      "check": [
        "String",
        "Number"
      ]
    },
    {
      "type": "input_value",
      "name": "TEXT2",
      "check": [
        "String",
        "Number"
      ]
    }
  ],
  "output": null,
  "colour": 120,
  "tooltip": "(Block From Scratch) Joins Text The First Value And 2nd",
  "helpUrl": ""
},
  {
  "type": "data_storage",
  "message0": "%1 Store Data: %2 ID: %3 Value: %4",
  "args0": [
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAAXNSR0IArs4c6QAAAp5JREFUOBGlU8tLlUEUP+eb77ufXu2hghFFgSRhQtSiWkQUQQTt2/YHRP9OixYuahFJq9y1M0yohAh7SGWCmlmmebv3fo+ZOY+Ye6+S7rLDMMMsfnN+jzmoqrDXivYKDLj/Asftzq/fzN5/PFU6AlAAVFAVDbVNLFxEFard6e1b10dPnQSADnjs0WQ9Ohp3I7F4T4nBShKZCITVOspL71hjY0B0+UcxPbu+A+w9x1VgcocHei6eGR4ZGjy4vxqbyBE3msXqWm3m7eKL2eWCkNmXzrcJdTpjhAroPd28durc6SEAYFHnKSZOK8lA376zo8dtPvH05Spisi2lA96+2zLP8wyjhEWJmYiJpLTe2iLPGsKEJoEtKzpuK4CIiMKXpbWNzd+O2JN4UuulcJQVduX7+rcfNWIorSPiHbRBlFmiKJpbWHs/N2+MSWIDGDGzc66ZleTdRp0UU2sdsewAi6qIZnlx4/K50RNHfm5mG7VmlpXEHBmTVpL+A9XxJ5ML0yuASWDYqo5mVQ3CSo8A/Qd7Bwb6qRWSdd46auYFeRcWEUaxhr8QqgMmYs+kgM9efaoYHRwcxMiwhJCL0tYbzcWlr3NfvsdxxXnWXZ1FhYMSVcCpmTnEj4goLcO9D3hQ7a72yE/LwdednVWUiMuyvHJ++NKFEYDYOgpCHHni0joVuvdgYubDLzTp9q/dikrbqUq9kQtzSA6wzSTsANa6ZlaIhlB20/aeyBMi3n04NT3zfujYod6eqjGR89xs5mvrmx8+Lb79vN6V9mWFawn8y7A0TWqrDUT9VeN38/Pk34GQBnmiAqwRmkraVUWwvxt5HHf4YltArZ6NjT/PLGOLpIaZDIm0ztZsKkB4TLq7kju3rvYd6IEwulvWtaP7p/0P7jr93K/ZZd4AAAAASUVORK5CYII=",
      "width": 20,
      "height": 20,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "dataname"
    },
    {
      "type": "input_value",
      "name": "datavalue"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "Stores Data (cookies for this site)",
  "helpUrl": ""
},
    {
  "type": "data_storage_read",
  "message0": "%1 Read From Storage: %2 ID: %3",
  "args0": [
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAAXNSR0IArs4c6QAAAp5JREFUOBGlU8tLlUEUP+eb77ufXu2hghFFgSRhQtSiWkQUQQTt2/YHRP9OixYuahFJq9y1M0yohAh7SGWCmlmmebv3fo+ZOY+Ye6+S7rLDMMMsfnN+jzmoqrDXivYKDLj/Asftzq/fzN5/PFU6AlAAVFAVDbVNLFxEFard6e1b10dPnQSADnjs0WQ9Ohp3I7F4T4nBShKZCITVOspL71hjY0B0+UcxPbu+A+w9x1VgcocHei6eGR4ZGjy4vxqbyBE3msXqWm3m7eKL2eWCkNmXzrcJdTpjhAroPd28durc6SEAYFHnKSZOK8lA376zo8dtPvH05Spisi2lA96+2zLP8wyjhEWJmYiJpLTe2iLPGsKEJoEtKzpuK4CIiMKXpbWNzd+O2JN4UuulcJQVduX7+rcfNWIorSPiHbRBlFmiKJpbWHs/N2+MSWIDGDGzc66ZleTdRp0UU2sdsewAi6qIZnlx4/K50RNHfm5mG7VmlpXEHBmTVpL+A9XxJ5ML0yuASWDYqo5mVQ3CSo8A/Qd7Bwb6qRWSdd46auYFeRcWEUaxhr8QqgMmYs+kgM9efaoYHRwcxMiwhJCL0tYbzcWlr3NfvsdxxXnWXZ1FhYMSVcCpmTnEj4goLcO9D3hQ7a72yE/LwdednVWUiMuyvHJ++NKFEYDYOgpCHHni0joVuvdgYubDLzTp9q/dikrbqUq9kQtzSA6wzSTsANa6ZlaIhlB20/aeyBMi3n04NT3zfujYod6eqjGR89xs5mvrmx8+Lb79vN6V9mWFawn8y7A0TWqrDUT9VeN38/Pk34GQBnmiAqwRmkraVUWwvxt5HHf4YltArZ6NjT/PLGOLpIaZDIm0ztZsKkB4TLq7kju3rvYd6IEwulvWtaP7p/0P7jr93K/ZZd4AAAAASUVORK5CYII=",
      "width": 20,
      "height": 20,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "dataname"
    }
  ],
  "output": null,
  "colour": 90,
  "tooltip": "Reads Data (cookies for this site)",
  "helpUrl": ""
},
 {
  "type": "data_storage_remove",
  "message0": "%1 Remove Data From Storage: %2 ID: %3",
  "args0": [
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAAXNSR0IArs4c6QAAAp5JREFUOBGlU8tLlUEUP+eb77ufXu2hghFFgSRhQtSiWkQUQQTt2/YHRP9OixYuahFJq9y1M0yohAh7SGWCmlmmebv3fo+ZOY+Ye6+S7rLDMMMsfnN+jzmoqrDXivYKDLj/Asftzq/fzN5/PFU6AlAAVFAVDbVNLFxEFard6e1b10dPnQSADnjs0WQ9Ohp3I7F4T4nBShKZCITVOspL71hjY0B0+UcxPbu+A+w9x1VgcocHei6eGR4ZGjy4vxqbyBE3msXqWm3m7eKL2eWCkNmXzrcJdTpjhAroPd28durc6SEAYFHnKSZOK8lA376zo8dtPvH05Spisi2lA96+2zLP8wyjhEWJmYiJpLTe2iLPGsKEJoEtKzpuK4CIiMKXpbWNzd+O2JN4UuulcJQVduX7+rcfNWIorSPiHbRBlFmiKJpbWHs/N2+MSWIDGDGzc66ZleTdRp0UU2sdsewAi6qIZnlx4/K50RNHfm5mG7VmlpXEHBmTVpL+A9XxJ5ML0yuASWDYqo5mVQ3CSo8A/Qd7Bwb6qRWSdd46auYFeRcWEUaxhr8QqgMmYs+kgM9efaoYHRwcxMiwhJCL0tYbzcWlr3NfvsdxxXnWXZ1FhYMSVcCpmTnEj4goLcO9D3hQ7a72yE/LwdednVWUiMuyvHJ++NKFEYDYOgpCHHni0joVuvdgYubDLzTp9q/dikrbqUq9kQtzSA6wzSTsANa6ZlaIhlB20/aeyBMi3n04NT3zfujYod6eqjGR89xs5mvrmx8+Lb79vN6V9mWFawn8y7A0TWqrDUT9VeN38/Pk34GQBnmiAqwRmkraVUWwvxt5HHf4YltArZ6NjT/PLGOLpIaZDIm0ztZsKkB4TLq7kju3rvYd6IEwulvWtaP7p/0P7jr93K/ZZd4AAAAASUVORK5CYII=",
      "width": 20,
      "height": 20,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "dataname"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "Removes Data (cookies for this site)",
  "helpUrl": ""
},
{
  "type": "wait",
  "message0": "Wait for %1 When Finished Waiting %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "time",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "afterwait"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 65,
  "tooltip": "This Waits For This Many Something... (idk what wait method it uses, maybe frames???))",
  "helpUrl": "https://www.sitepoint.com/delay-sleep-pause-wait/"
},
{
  "type": "comment",
  "lastDummyAlign0": "RIGHT",
  "message0": "Comment: %1",
  "args0": [
    {
      "type": "field_input",
      "name": "ctext",
      "text": "This Is A Comment"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "confirm",
  "message0": "Ask To %1",
  "args0": [
    {
      "type": "input_value",
      "name": "confirmedText"
    }
  ],
  "output": null,
  "colour": 210,
  "tooltip": "This Will Give Out If The Player Is Wanting To Do This If Not It Will Be False",
  "helpUrl": ""
},
{
  "type": "while",
  "message0": "While %1 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "statement",
      "check": [
        "Number",
        "Boolean"
      ]
    },
    {
      "type": "input_statement",
      "name": "Code",
      "align": "CENTRE"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 70,
  "tooltip": "Repeats Until Its False Or = 0.",
  "helpUrl": ""
},
    {
  "type": "geturl",
  "message0": "Get The URL",
  "output": null,
  "colour": 230,
  "tooltip": "Gets The Url Of The Page",
  "helpUrl": ""
},
    {
  "type": "or",
  "message0": "%1 Or %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "or1",
      "check": "Boolean"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "or2",
      "check": "Boolean"
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": 120,
  "tooltip": "If One Of These Statements Is True",
  "helpUrl": ""
},
    {
  "type": "set_sound_component",
  "message0": "set sound with  %1 with file data named %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "soundVAR",
      "variable": "Sound-1"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "text": "default"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "",
  "helpUrl": ""
},
    {
  "type": "play_pause_sound_component",
  "lastDummyAlign0": "CENTRE",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PlayOrPause",
      "options": [
        [
          "Start Playing",
          "play()"
        ],
        [
          "Pause",
          "pause()"
        ]
      ]
    },
    {
      "type": "field_variable",
      "name": "soundVAR",
      "variable": "Sound-1"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "",
  "helpUrl": ""
},
    {
  "type": "is_doing_this_sound_component",
  "lastDummyAlign0": "CENTRE",
  "message0": "Is %1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "soundVAR",
      "variable": "Sound-1"
    },
    {
      "type": "field_dropdown",
      "name": "DoingThis",
      "options": [
        [
          "Playing?",
          "play"
        ],
        [
          "Paused?",
          "pause"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "",
  "helpUrl": ""
},
    {
  "type": "is_doing_this_sound_component",
  "lastDummyAlign0": "CENTRE",
  "message0": "Is %1 %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "soundVAR",
      "variable": "Sound-1"
    },
    {
      "type": "field_dropdown",
      "name": "DoingThis",
      "options": [
        [
          "Paused?",
          "paused"
        ],
         [
          "Is A Looping Sound?",
          "loop"
        ],
          [
             "Keep The Same Pitch When Changing Speed?",
             "preservesPitch"
              
          ],
        [
            "Speed",
            "playbackRate"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 300,
  "tooltip": "",
  "helpUrl": ""
},
    {
  "type": "set_setting_sound_component",
  "message0": "Set %1 %2 Setting To  %3",
  "args0": [
    {
      "type": "field_variable",
      "name": "soundVAR",
      "variable": "Sound-1"
    },
    {
      "type": "field_dropdown",
      "name": "Setting",
      "options": [
        [
          "Looping Sound",
          "loop"
        ],
          [
              "Speed",
              "playbackRate"
          ],
         [
             "Keep The Same Pitch When Changing Speed?",
             "preservesPitch"
         ]
      ]
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": ""
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "",
  "helpUrl": ""
},
    {
  "type": "log",
  "message0": "Log In Console %1",
  "args0": [
    {
      "type": "input_value",
      "name": "logtext",
      "check": [
        "String",
        "Number",
        "Boolean"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
},
    {
  "type": "playnotegmidi",
  "message0": "Play Note %1 with instrument %2",
  "args0": [
    {
      "type": "input_value",
      "name": "playnote",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "piano",
          "0"
        ],
        [
          "pulse",
          "1"
        ],
        [
          "pulse2",
          "2"
        ],
        [
          "sawtooth",
          "3"
        ],
        [
          "sine",
          "4"
        ],
        [
          "square",
          "5"
        ],
        [
          "triangle",
          "6"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
},
    {
  "type": "async",
  "message0": "async this %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "await_script"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "its while but it animates the program",
  "helpUrl": ""
},
    {
  "type": "lists_get",
  "message0": "in %1 get number %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "list"
    },
    {
      "type": "input_value",
      "name": "listvar",
      "check": "Number"
    }
  ],
  "output": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
    {
  "type": "lists_make",
  "message0": "list %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "lists_make_item",
  "message0": "List Item %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "text",
      "check": [
        "Number",
        "String"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": "Array",
  "nextStatement": "Array",
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
    {
  "type": "list_text",
  "message0": "Make List Off Of Text %1",
  "args0": [
    {
      "type": "field_input",
      "name": "text",
      "text": "\"Hello\", \"World!\""
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
    {
  "type": "did_press_key_",
  "message0": "Key %1 Pressed?",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "key",
      "options": [
        [
          "Space Bar",
          " "
        ],
        [
          "Right Arrow",
          "right"
        ],
        [
          "Left Arrow",
          "left"
        ],
        [
          "Down Arrow",
          "down"
        ],
        [
          "Up Arrow",
          "up"
        ],
        [
          "1",
          "1"
        ],
        [
          "2",
          "2"
        ],
        [
          "3",
          "3"
        ],
        [
          "4",
          "4"
        ],
        [
          "5",
          "5"
        ],
        [
          "6",
          "6"
        ],
        [
          "7",
          "7"
        ],
        [
          "8",
          "8"
        ],
        [
          "9",
          "9"
        ],
        [
          "a",
          "a"
        ],
        [
          "b",
          "b"
        ],
        [
          "c",
          "c"
        ],
        [
          "d",
          "d"
        ],
        [
          "e",
          "e"
        ],
        [
          "f",
          "f"
        ],
        [
          "g",
          "g"
        ],
        [
          "h",
          "h"
        ],
        [
          "i",
          "i"
        ],
        [
          "j",
          "j"
        ],
        [
          "k",
          "k"
        ],
        [
          "l",
          "l"
        ],
        [
          "m",
          "m"
        ],
        [
          "n",
          "n"
        ],
        [
          "o",
          "o"
        ],
        [
          "p",
          "p"
        ],
        [
          "q",
          "q"
        ],
        [
          "r",
          "r"
        ],
        [
          "s",
          "s"
        ],
        [
          "t",
          "t"
        ],
        [
          "u",
          "u"
        ],
        [
          "v",
          "v"
        ],
        [
          "w",
          "w"
        ],
        [
          "x",
          "x"
        ],
        [
          "y",
          "y"
        ],
        [
          "z",
          "z"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "calculate_note_as_play_rate",
  "message0": "calculate  %1 as a playback rate",
  "args0": [
    {
      "type": "input_value",
      "name": "convert note",
      "check": "Number"
    }
  ],
  "output": "Number",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
]); //end the code for the JSON
Blockly.JavaScript['openlink'] = function(block) {
  var value_openlinkurl = Blockly.JavaScript.valueToCode(block, 'OpenLinkURL', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.open (' + value_openlinkurl + ');\n';
  return code;
};
Blockly.JavaScript['speak'] = function(block) {
  var value_speaktext = Blockly.JavaScript.valueToCode(block, 'SpeakText', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '  let utterance = new SpeechSynthesisUtterance(' + value_speaktext + '); speechSynthesis.speak(utterance);\n';
  return code;
};
Blockly.JavaScript['savefile'] = function(block) {
  var value_filename = Blockly.JavaScript.valueToCode(block, 'FILENAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_filedata = Blockly.JavaScript.valueToCode(block, 'FILEDATA', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'var userInput = ' + value_filename + ' ; var blob = new Blob([userInput], { type: "text/plain;charset=utf-8" }); saveAs(blob, ' + value_filename + ');//this will not work if the saveAs js file is not loaded in your program\n';
  return code;
};
Blockly.JavaScript['scratch_play_sound'] = function(block) {
  var value_sound = Blockly.JavaScript.valueToCode(block, 'sound', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'let audio = new Audio(' + value_sound + '); audio.play();\n';
  return code;
};
Blockly.JavaScript['ask'] = function(block) {
  var value_asktext = Blockly.JavaScript.valueToCode(block, 'asktext', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.prompt(' + value_asktext +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['scratch_join'] = function(block) {
  var value_text1 = Blockly.JavaScript.valueToCode(block, 'TEXT1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text2 = Blockly.JavaScript.valueToCode(block, 'TEXT2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '(' + value_text1 + ') + (' + value_text2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['data_storage'] = function(block) {
  var value_dataname = Blockly.JavaScript.valueToCode(block, 'dataname', Blockly.JavaScript.ORDER_ATOMIC);
  var value_datavalue = Blockly.JavaScript.valueToCode(block, 'datavalue', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'localStorage.setItem(' + value_dataname + ', ' + value_datavalue + ');\n';
  return code;
};
Blockly.JavaScript['data_storage_read'] = function(block) {
  var value_dataname = Blockly.JavaScript.valueToCode(block, 'dataname', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'localStorage.getItem(' + value_dataname + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['data_storage_remove'] = function(block) {
  var value_dataname = Blockly.JavaScript.valueToCode(block, 'dataname', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'localStorage.removeItem(' + value_dataname + ');\n';
  return code;
};
Blockly.JavaScript['wait'] = function(block) {
  var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_afterwait = Blockly.JavaScript.statementToCode(block, 'afterwait');
  // TODO: Assemble JavaScript into code variable.
  var code = 'setTimeout(() => {  ' + statements_afterwait + ' },(' + value_time + '));\n';
  return code;
};
Blockly.JavaScript['comment'] = function(block) {
  var text_ctext = block.getFieldValue('ctext');
  // TODO: Assemble JavaScript into code variable.
  var code = '//' + text_ctext + '\n';
  return code;
};
Blockly.JavaScript['confirm'] = function(block) {
  var value_confirmedtext = Blockly.JavaScript.valueToCode(block, 'confirmedText', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.confirm(' + value_confirmedtext + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['while'] = function(block) {
  var value_statement = Blockly.JavaScript.valueToCode(block, 'statement', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_code = Blockly.JavaScript.statementToCode(block, 'Code');
  // TODO: Assemble JavaScript into code variable.
  var code = 'while (' + value_statement + ') { \n ' + statements_code + ' } \n';
  return code;
};
Blockly.JavaScript['geturl'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.location.href';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['scratch_play_sound_until_done'] = function(block) {
  var value_sound = Blockly.JavaScript.valueToCode(block, 'sound', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'let audio = new Audio(' + value_sound + '); audio.play();\n';
  return code;
};
Blockly.JavaScript['or'] = function(block) {
  var value_or1 = Blockly.JavaScript.valueToCode(block, 'or1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_or2 = Blockly.JavaScript.valueToCode(block, 'or2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = ' (' + value_or1 + ')  || (' + value_or2 + ') ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['set_sound_component'] = function(block) {
  var variable_soundvar = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('soundVAR'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'var ' + variable_soundvar + ' = new Audio(' + value_name + ');\n';
  return code;
};
Blockly.JavaScript['play_pause_sound_component'] = function(block) {
  var dropdown_playorpause = block.getFieldValue('PlayOrPause');
  var variable_soundvar = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('soundVAR'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '' + variable_soundvar + '.' + dropdown_playorpause + ';\n';
  return code;
};
Blockly.JavaScript['is_doing_this_sound_component'] = function(block) {
  var variable_soundvar = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('soundVAR'), Blockly.Variables.NAME_TYPE);
  var dropdown_doingthis = block.getFieldValue('DoingThis');
  // TODO: Assemble JavaScript into code variable.
  var code = '' + variable_soundvar + '.' + dropdown_doingthis + '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['set_setting_sound_component'] = function(block) {
  var variable_soundvar = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('soundVAR'), Blockly.Variables.NAME_TYPE);
  var dropdown_setting = block.getFieldValue('Setting');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '' + variable_soundvar + '.' + dropdown_setting + ' = ' + value_name + ' ;\n';
  return code;
};
Blockly.JavaScript['log'] = function(block) {
  var value_logtext = Blockly.JavaScript.valueToCode(block, 'logtext', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log (' + value_logtext + ');\n';
  return code;
};
Blockly.JavaScript['playnotegmidi'] = function(block) {
  var value_playnote = Blockly.JavaScript.valueToCode(block, 'playnote', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'GMIDI_Play_Note( ' + value_playnote + ', ' + dropdown_name + ');\n';
  return code;
};
Blockly.JavaScript['async'] = function(block) {
  var statements_await_script = Blockly.JavaScript.statementToCode(block, 'await_script');
  var random_gen = (Math.round(Math.random(0,999)));
  // TODO: Assemble JavaScript into code variable.
  var code = '(async function myfunction' + random_gen + '() {\n ' + statements_await_script + ' });\n';
  return code;
};
Blockly.JavaScript['lists_get'] = function(block) {
  var variable_name = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_listvar = Blockly.JavaScript.valueToCode(block, 'listvar', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '' + variable_name + '[' + value_listvar + ']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['lists_make'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '[' + statements_name + ' "NaN"]';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['lists_make_item'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '' + value_text + ',';
  return code;
};
Blockly.JavaScript['list_text'] = function(block) {
  var text_text = block.getFieldValue('text');
  // TODO: Assemble JavaScript into code variable.
  var code = '[' + text_text + ']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['did_press_key_'] = function(block) {
  var dropdown_key = block.getFieldValue('key');
  // TODO: Assemble JavaScript into code variable.
  var code = 'iskeypressed("' + dropdown_key + '")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['calculate_note_as_play_rate'] = function(block) {
  var value_convert_note = Blockly.JavaScript.valueToCode(block, 'convert note', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '2 ** (((' + value_convert_note + ') - 60) / 12)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};



workspace.registerButtonCallback('addAddon', function(button) {
loadaddon(window.prompt('type in URL for addon' , 'https://'))
});
