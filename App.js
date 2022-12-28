import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useExportData } from './DataExportHook/useExportData';

const App = () => {
  const { HandleClick } = useExportData();


  const onSubmit = async (event) => {
    await HandleClick(event)
      .then(function (ress) {
        console.log('ress', ress)
      })
      .catch(function (err) {
        console.log('err', err)
      })
  }
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <TouchableOpacity
        onPress={() => onSubmit({ gropdata, Heading1, Heading2 })}
        style={{
          width: '50%',
          paddingVertical: 10,
          paddingHorizontal: 15,
          backgroundColor: 'blue',
          marginVertical: 20,
        }}>
        <Text style={{ textAlign: 'center', color: 'white' }}>
          Export to Excel
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default App;

var Heading1 = [
  ["FirstName", "Last Name"]
];
var Heading2 = [
  ["FirstName", "Last Name"],
  ["FirstName", "Last Name"],
  ["FirstName", "Last Name"],
];
const gropdata = {
  "data": [
    {
      "deviceId": 11,
      "deviceName": "CG12QW1235",
      "distance": 0.0,
      "averageSpeed": 0.0,
      "maxSpeed": 0.0,
      "spentFuel": 37.0,
      "startOdometer": 0.0,
      "endOdometer": 80.17,
      "startTime": "2022-08-27T14:25:36.000+00:00",
      "endTime": "2022-08-27T14:25:57.000+00:00",
      "positionId": 7622994,
      "latitude": 21.42056,
      "longitude": 81.077912,
      "address": "Rahud, CT, IN",
      "duration": 21000,
      "engineHours": 0
    },
    {
      "deviceId": 493,
      "deviceName": "CG04KC8600",
      "distance": 0.0,
      "averageSpeed": 0.0,
      "maxSpeed": 0.0,
      "spentFuel": 0.0,
      "startOdometer": 0.0,
      "endOdometer": 163.53,
      "startTime": "2022-03-10T18:37:41.000+00:00",
      "endTime": "2022-03-10T18:54:42.000+00:00",
      "positionId": 6153500,
      "latitude": 21.1316573,
      "longitude": 81.7824123,
      "address": "Atal Nagar-Nava Raipur, CT, IN",
      "duration": 1021000,
      "engineHours": 0
    },
    {
      "deviceId": 493,
      "deviceName": "CG04KC8600",
      "distance": 0.0,
      "averageSpeed": 0.0,
      "maxSpeed": 0.0,
      "spentFuel": 0.0,
      "startOdometer": 12682.21,
      "endOdometer": 12770.3,
      "startTime": "2022-03-10T20:27:03.000+00:00",
      "endTime": "2022-03-10T21:26:51.000+00:00",
      "positionId": 6154769,
      "latitude": 21.1317242,
      "longitude": 81.7823861,
      "address": "Atal Nagar-Nava Raipur, CT, IN",
      "duration": 3588000,
      "engineHours": 0
    },
    {
      "deviceId": 493,
      "deviceName": "CG04KC8600",
      "distance": 0.0,
      "averageSpeed": 0.0,
      "maxSpeed": 0.0,
      "spentFuel": 0.0,
      "startOdometer": 22339.21,
      "endOdometer": 53345.36,
      "startTime": "2022-03-10T22:00:07.000+00:00",
      "endTime": "2022-08-09T05:33:41.000+00:00",
      "positionId": 6156137,
      "latitude": 21.1317366,
      "longitude": 81.7823719,
      "address": "Naya Raipur, CT, IN",
      "duration": 13073614000,
      "engineHours": 0
    },
    {
      "deviceId": 493,
      "deviceName": "CG04KC8600",
      "distance": 0.0,
      "averageSpeed": 0.0,
      "maxSpeed": 0.0,
      "spentFuel": 0.0,
      "startOdometer": 71620.69,
      "endOdometer": 73320.04,
      "startTime": "2022-08-09T09:54:35.000+00:00",
      "endTime": "2022-08-09T11:50:38.000+00:00",
      "positionId": 7480341,
      "latitude": 21.2163202,
      "longitude": 81.624182,
      "address": "Mathpurena, CT, IN",
      "duration": 6963000,
      "engineHours": 0
    },
    {
      "deviceId": 493,
      "deviceName": "CG04KC8600",
      "distance": 0.0,
      "averageSpeed": 0.0,
      "maxSpeed": 0.0,
      "spentFuel": 0.0,
      "startOdometer": 78217.41,
      "endOdometer": 80251.78,
      "startTime": "2022-08-09T13:01:47.000+00:00",
      "endTime": "2022-08-10T04:00:12.000+00:00",
      "positionId": 7481073,
      "latitude": 21.2198043,
      "longitude": 81.6648081,
      "address": "Raipur, CT, IN",
      "duration": 53905000,
      "engineHours": 0
    },
    {
      "deviceId": 493,
      "deviceName": "CG04KC8600",
      "distance": 0.0,
      "averageSpeed": 0.0,
      "maxSpeed": 0.0,
      "spentFuel": 0.0,
      "startOdometer": 311705.76,
      "endOdometer": 311988.02,
      "startTime": "2022-08-10T07:44:13.000+00:00",
      "endTime": "2022-08-10T08:01:49.000+00:00",
      "positionId": 7484033,
      "latitude": 22.3481043,
      "longitude": 82.701798,
      "address": "Purani Basti, CT, IN",
      "duration": 1056000,
      "engineHours": 0
    },
    {
      "deviceId": 493,
      "deviceName": "CG04KC8600",
      "distance": 0.0,
      "averageSpeed": 0.0,
      "maxSpeed": 0.0,
      "spentFuel": 0.0,
      "startOdometer": 317640.98,
      "endOdometer": 371944.2,
      "startTime": "2022-08-10T08:38:49.000+00:00",
      "endTime": "2022-08-10T11:59:38.000+00:00",
      "positionId": 7484988,
      "latitude": 22.3676043,
      "longitude": 82.7344601,
      "address": "Korba, CT, IN",
      "duration": 12049000,
      "engineHours": 0
    },
    {
      "deviceId": 493,
      "deviceName": "CG04KC8600",
      "distance": 0.0,
      "averageSpeed": 0.0,
      "maxSpeed": 0.0,
      "spentFuel": 0.0,
      "startOdometer": 430126.75,
      "endOdometer": 501446.62,
      "startTime": "2022-08-10T12:59:02.000+00:00",
      "endTime": "2022-08-10T14:38:19.000+00:00",
      "positionId": 7487376,
      "latitude": 21.8961313,
      "longitude": 81.9733208,
      "address": "Sargaon, CT, IN",
      "duration": 5957000,
      "engineHours": 0
    },
    {
      "deviceId": 493,
      "deviceName": "CG04KC8600",
      "distance": 0.0,
      "averageSpeed": 0.0,
      "maxSpeed": 0.0,
      "spentFuel": 0.0,
      "startOdometer": 527198.0,
      "endOdometer": 534360.62,
      "startTime": "2022-08-10T16:00:11.000+00:00",
      "endTime": "2022-08-12T07:37:39.000+00:00",
      "positionId": 7488055,
      "latitude": 21.2442093,
      "longitude": 81.633829,
      "address": "Raipur, CT, IN",
      "duration": 142648000,
      "engineHours": 0
    },
    {
      "deviceId": 493,
      "deviceName": "CG04KC8600",
      "distance": 0.0,
      "averageSpeed": 0.0,
      "maxSpeed": 0.0,
      "spentFuel": 0.0,
      "startOdometer": 553115.59,
      "endOdometer": 559015.57,
      "startTime": "2022-08-12T11:21:28.000+00:00",
      "endTime": "2022-08-12T15:16:18.000+00:00",
      "positionId": 7491822,
      "latitude": 21.2199416,
      "longitude": 81.6645466,
      "address": "Raipur, CT, IN",
      "duration": 14090000,
      "engineHours": 0
    },
    {
      "deviceId": 493,
      "deviceName": "CG04KC8600",
      "distance": 0.0,
      "averageSpeed": 0.0,
      "maxSpeed": 0.0,
      "spentFuel": 0.0,
      "startOdometer": 568950.96,
      "endOdometer": 569833.96,
      "startTime": "2022-08-12T17:48:56.000+00:00",
      "endTime": "2022-08-13T07:23:47.000+00:00",
      "positionId": 7493089,
      "latitude": 21.2198222,
      "longitude": 81.6647602,
      "address": "Raipur, CT, IN",
      "duration": 48891000,
      "engineHours": 0
    },
    {
      "deviceId": 493,
      "deviceName": "CG04KC8600",
      "distance": 0.0,
      "averageSpeed": 0.0,
      "maxSpeed": 0.0,
      "spentFuel": 0.0,
      "startOdometer": 574985.33,
      "endOdometer": 575168.14,
      "startTime": "2022-08-13T08:11:54.000+00:00",
      "endTime": "2022-08-13T09:05:07.000+00:00",
      "positionId": 7495142,
      "latitude": 21.2198239,
      "longitude": 81.6647509,
      "address": "Raipur, CT, IN",
      "duration": 3193000,
      "engineHours": 0
    },
    {
      "deviceId": 493,
      "deviceName": "CG04KC8600",
      "distance": 0.0,
      "averageSpeed": 0.0,
      "maxSpeed": 0.0,
      "spentFuel": 0.0,
      "startOdometer": 580204.92,
      "endOdometer": 585485.64,
      "startTime": "2022-08-13T10:31:44.000+00:00",
      "endTime": "2022-08-13T11:12:01.000+00:00",
      "positionId": 7495844,
      "latitude": 21.2388234,
      "longitude": 81.6847384,
      "address": "Raipur, CT, IN",
      "duration": 2417000,
      "engineHours": 0
    },
    {
      "deviceId": 493,
      "deviceName": "CG04KC8600",
      "distance": 0.0,
      "averageSpeed": 0.0,
      "maxSpeed": 0.0,
      "spentFuel": 0.0,
      "startOdometer": 592106.64,
      "endOdometer": 593569.65,
      "startTime": "2022-08-13T11:59:28.000+00:00",
      "endTime": "2022-08-13T13:45:42.000+00:00",
      "positionId": 7496626,
      "latitude": 21.25733,
      "longitude": 81.6478223,
      "address": "Raipur, CT, IN",
      "duration": 6374000,
      "engineHours": 0
    },
    {
      "deviceId": 493,
      "deviceName": "CG04KC8600",
      "distance": 0.0,
      "averageSpeed": 0.0,
      "maxSpeed": 0.0,
      "spentFuel": 0.0,
      "startOdometer": 599519.83,
      "endOdometer": 722899.18,
      "startTime": "2022-08-13T16:33:11.000+00:00",
      "endTime": "2022-08-18T08:48:21.000+00:00",
      "positionId": 7497865,
      "latitude": 21.2198173,
      "longitude": 81.6647499,
      "address": "Raipur, CT, IN",
      "duration": 404110000,
      "engineHours": 0
    },
    {
      "deviceId": 493,
      "deviceName": "CG04KC8600",
      "distance": 0.0,
      "averageSpeed": 0.0,
      "maxSpeed": 0.0,
      "spentFuel": 0.0,
      "startOdometer": 849699.1,
      "endOdometer": 870254.32,
      "startTime": "2022-08-18T11:53:56.000+00:00",
      "endTime": "2022-08-19T07:17:24.000+00:00",
      "positionId": 7536859,
      "latitude": 22.4554574,
      "longitude": 83.2084295,
      "address": "SH 1, Dharamjaigarh, CT, IN",
      "duration": 69808000,
      "engineHours": 0
    },
    {
      "deviceId": 493,
      "deviceName": "CG04KC8600",
      "distance": 0.0,
      "averageSpeed": 0.0,
      "maxSpeed": 0.0,
      "spentFuel": 0.0,
      "startOdometer": 1146811.37,
      "endOdometer": 1151255.75,
      "startTime": "2022-08-19T12:34:33.000+00:00",
      "endTime": "2022-08-25T07:48:51.000+00:00",
      "positionId": 7545697,
      "latitude": 21.2315715,
      "longitude": 81.6570389,
      "address": "Raipur, CT, IN",
      "duration": 501258000,
      "engineHours": 0
    },
    {
      "deviceId": 493,
      "deviceName": "CG04KC8600",
      "distance": 0.0,
      "averageSpeed": 0.0,
      "maxSpeed": 0.0,
      "spentFuel": 0.0,
      "startOdometer": 1151473.38,
      "endOdometer": 1154440.83,
      "startTime": "2022-08-25T08:10:57.000+00:00",
      "endTime": "2022-08-26T17:59:20.000+00:00",
      "positionId": 7594989,
      "latitude": 21.2399279,
      "longitude": 81.6486286,
      "address": "Raipur, CT, IN",
      "duration": 121703000,
      "engineHours": 0
    },
    {
      "deviceId": 493,
      "deviceName": "CG04KC8600",
      "distance": 0.0,
      "averageSpeed": 0.0,
      "maxSpeed": 0.0,
      "spentFuel": 0.0,
      "startOdometer": 1157748.19,
      "endOdometer": 1171285.62,
      "startTime": "2022-08-26T18:19:36.000+00:00",
      "endTime": "2022-09-02T10:42:00.000+00:00",
      "positionId": 7617290,
      "latitude": 21.2199069,
      "longitude": 81.6647955,
      "address": "Raipur, CT, IN",
      "duration": 577344000,
      "engineHours": 0
    },
    {
      "deviceId": 493,
      "deviceName": "CG04KC8600",
      "distance": 0.0,
      "averageSpeed": 0.0,
      "maxSpeed": 0.0,
      "spentFuel": 0.0,
      "startOdometer": 1202056.82,
      "endOdometer": 1203074.92,
      "startTime": "2022-09-02T15:48:59.000+00:00",
      "endTime": "2022-09-02T17:05:40.000+00:00",
      "positionId": 7680803,
      "latitude": 21.2198504,
      "longitude": 81.6647688,
      "address": "Raipur, CT, IN",
      "duration": 4601000,
      "engineHours": 0
    },
    {
      "deviceId": 493,
      "deviceName": "CG04KC8600",
      "distance": 0.0,
      "averageSpeed": 0.0,
      "maxSpeed": 0.0,
      "spentFuel": 0.0,
      "startOdometer": 1205348.78,
      "endOdometer": 1212489.74,
      "startTime": "2022-09-02T18:52:38.000+00:00",
      "endTime": "2022-09-04T04:06:54.000+00:00",
      "positionId": 7682730,
      "latitude": 21.2198286,
      "longitude": 81.6647804,
      "address": "Raipur, CT, IN",
      "duration": 119656000,
      "engineHours": 0
    },
    {
      "deviceId": 493,
      "deviceName": "CG04KC8600",
      "distance": 0.0,
      "averageSpeed": 0.0,
      "maxSpeed": 0.0,
      "spentFuel": 0.0,
      "startOdometer": 1291673.77,
      "endOdometer": 1292671.68,
      "startTime": "2022-09-04T06:35:41.000+00:00",
      "endTime": "2022-09-05T03:15:48.000+00:00",
      "positionId": 7686555,
      "latitude": 21.2264179,
      "longitude": 81.6579706,
      "address": "Raipur, CT, IN",
      "duration": 74407000,
      "engineHours": 0
    }
  ]
}



/* 
const exportDataToExcel = () => {
    let wb = XLSX.utils.book_new();
    let ws1 = XLSX.utils.json_to_sheet([])
    let ws2 = XLSX.utils.json_to_sheet([])
    let ws3 = XLSX.utils.json_to_sheet([])

    XLSX.utils.sheet_add_json(ws1, gropdata.data, { origin: 'A8', skipHeader: false });
    XLSX.utils.sheet_add_json(ws2, sample_data_to_export, { origin: 'A8', skipHeader: false });
    XLSX.utils.sheet_add_json(ws3, sample_data_to_export, { origin: 'A8', skipHeader: false });

    XLSX.utils.sheet_add_aoa(ws1, Heading1, { origin: 'B2' })
    XLSX.utils.sheet_add_aoa(ws2, Heading1, { origin: 'B2' })
    XLSX.utils.sheet_add_aoa(ws3, Heading1, { origin: 'B2' })
    XLSX.utils.sheet_add_aoa(ws1, Heading2, { origin: 'B4' })
    XLSX.utils.sheet_add_aoa(ws2, Heading2, { origin: 'B4' })
    XLSX.utils.sheet_add_aoa(ws3, Heading2, { origin: 'B4' })


    XLSX.utils.book_append_sheet(wb, ws1, "Users1")
    XLSX.utils.book_append_sheet(wb, ws2, "Users2")
    XLSX.utils.book_append_sheet(wb, ws3, "Users4")

    const wbout = XLSX.write(wb, { type: 'binary', bookType: "xlsx" });
    const file = DDP + "group.xlsx"

    writeFile(file, output(wbout), 'ascii')
      .then((ress) => {
        Alert.alert("export file done", "Export to" + file)
        console.log(ress)
      })
      .catch((err) => {
        Alert.alert("export file error", "Export" + err.message)
      })
  }

  const handleClick = async () => {
    try {
      let isPermitedExternalStorage = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);

      if (!isPermitedExternalStorage) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "Storage permission needed",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          exportDataToExcel();
          console.log("Permission granted");
        } else {
          console.log("Permission denied");
        }
      } else {
        exportDataToExcel();
      }
    } catch (e) {
      console.log('Error while checking permission');
      console.log(e);
      return
    }

  };



*/