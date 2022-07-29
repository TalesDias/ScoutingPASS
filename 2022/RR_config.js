var config_data = `
{
  "title":"Scouting PASS 2022",
  "page_title":"Rapid React",
  "elements":{
    "prematch": {
      "Iniciais do Scout": {
        "code":"s",
        "type":"scouter",
        "size":5,
        "maxSize":5,
        "required":"true"
      },
      "Evento":{
        "code":"e",
        "type":"event",
        "defaultValue":"2019brnov",
        "required":"true",
        "disabled":"true"
      },
      "Fase da partida":{
        "code":"l",
        "type":"level",
        "choices":{
          "qm":"Qualificatórias<br>",
          "qf":"Quartas de final<br>",
          "sf":"Semi final<br>",
          "f":"Final"
        },
        "defaultValue":"qm",
        "required":"true"
      },
      "Partida n°":{
        "code":"m",
        "type":"match",
        "min":1,
        "max":100,
        "required":"true"
      },
     "Posicao do time<br>na Driver Station": {
        "code":"r",
        "type":"robot",
        "choices":{
          "r1":"Red-1",
          "b1":"Blue-1<br>",
          "r2":"Red-2",
          "b2":"Blue-2<br>",
          "r3":"Red-3",
          "b3":"Blue-3"
        },
        "required":"true"
      },
      "Time n°": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
      },
      "Posição inicial do robô": {
        "code":"as",
        "title": "posicao inicial robo",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "auton": {
      "Taxi": {
        "code":"at",
        "title": "Taxied?",
        "type":"bool"
      },
      "Acertos na Upper Cargo": {
        "code":"au",
        "title": "pontos upper cargo",
        "type":"counter"
      },
      "Acertos na Lower Cargo": {
        "code":"al",
        "title": "pontos lower cargo",
        "type":"counter"
      },
      "Pegou mais Cargo sozinho?": {
        "code":"ac",
        "title": "pegou cargo",
        "type":"bool"
      }
    },
    "teleop": {
      "Acertos na Upper Cargo": {
        "code":"tu",
        "title": "Upper Cargo Scored",
        "type":"counter"
      },
      "Acertos na Lower Cargo": {
        "code":"tl",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Era de Defesa?": {
        "code":"wd",
        "title": "Was Defended",
        "type":"bool"
      },
      "Wallbot?": {
        "code":"wbt",
        "title": "Wallbot?",
        "type":"bool"
      },
      "Pegou Cargo de onde?": {
        "code":"cif",
        "title": "Cargo Intake From",
        "type":"radio",
        "choices":{
          "t":"Terminal<br>",
          "g":"Chão<br>",
          "b":"Ambos<br>",
          "x":"Não tentou"
        },
        "defaultValue":"x"
      },
      "Local de tiro": {
        "code":"ss",
        "title": "Shooting Spot",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "endgame": {
      "Escalada": {
        "code":"c",
        "title": "Climb",
        "type":"radio",
        "choices":{
          "1":"Low<br>",
          "2":"Mid<br>",
          "3":"High<br>",
          "4":"Traversal<br>",
          "a":"Tentou mas falhou<br>",
          "x":"Não tentou"
        },
        "defaultValue":"x"
      },
      "Começou a subir antes do Endgame?": {
        "code":"be",
        "title": "Started climb before EndGame",
        "type":"bool"
      },
      "Número de robôs que subiram": {
        "code":"cn",
        "title": "# of alliance bots climbed",
        "type":"counter"
      }
    },
    "postmatch": {
      "Habilidade do piloto": {
        "code":"ds",
        "title": "Driver Skill",
        "type":"radio",
        "choices":{
          "n":"Inexperiente<br>",
          "a":"Normal<br>",
          "v":"Experiente<br>",
          "x":"Não observado"
        },
        "defaultValue":"x"
      },
      "Classificação de defesa": {
        "code":"dr",
        "title": "Defense Rating",
        "type":"radio",
        "choices":{
          "b":"Inefetiva<br>",
          "a":"Média<br>",
          "g":"Boa<br>",
          "e":"Excelente<br>",
          "x":"Não jogou defesa"
        },
        "defaultValue":"x"
      },
      "Penalidades da aliança":{
        "code":"fa",
        "type":"match",
        "min":0,
        "max":255,
        "required":"true"
      },
       "Classificação de Velocidade": {
        "code":"sr",
        "title": "Speed Rating",
        "type":"radio",
        "choices":{
          "1":"1 (devagar)<br>",
          "2":"2<br>",
          "3":"3 (rápido)"
        },
        "defaultValue":"3"
      },
      "Foi de base/A mimir (Morreu/Tombou)?": {
        "code":"d",
        "title": "Died/Tipped",
        "type":"bool"
      },
      "Comentários": {
        "code":"co",
        "title": "Comments",
        "type":"text",
        "size":15,
        "maxSize":50
      }
    } 
  }
}`;
