var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3632377492508745,
          "pitch": 0.3589224276442682,
          "rotation": 0,
          "target": "4-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3449700369781663,
          "pitch": 0.5305806230668537,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": -1.6311900968829143,
          "pitch": 0.5361580098323415,
          "rotation": 0,
          "target": "2-bed-room-v1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bed-room-v1",
      "name": "Bed Room (V1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2727020985813535,
          "pitch": 0.9251037191076179,
          "rotation": 0,
          "target": "3-bed-room-v2"
        },
        {
          "yaw": -1.593741431075813,
          "pitch": 0.3543675045050527,
          "rotation": 0,
          "target": "4-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bed-room-v2",
      "name": "Bed Room (V2)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5224481060349007,
          "pitch": 0.778586080787699,
          "rotation": 0,
          "target": "2-bed-room-v1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-passage",
      "name": "Passage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4265585205679674,
          "pitch": 0.28658237423498534,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": -1.538390157891019,
          "pitch": 0.644014673477562,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": -1.0172814103786987,
          "pitch": 0.42155029299934554,
          "rotation": 0,
          "target": "2-bed-room-v1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
