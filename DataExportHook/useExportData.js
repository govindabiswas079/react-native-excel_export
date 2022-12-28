import { View, Text, TouchableOpacity, PermissionsAndroid, ToastAndroid, Alert, Modal } from 'react-native';
import { writeFile, readFile, DownloadDirectoryPath, } from 'react-native-fs'
import XLSX from 'xlsx';

const DDP = DownloadDirectoryPath + "/";
const output = res => res;

export const useExportData = () => {

  const ExportData = (event) => {
    let wb = XLSX.utils.book_new();
    let ws1 = XLSX.utils.json_to_sheet([])
    let ws2 = XLSX.utils.json_to_sheet([])
    let ws3 = XLSX.utils.json_to_sheet([])

    XLSX.utils.sheet_add_json(ws1, event?.gropdata?.data, { origin: 'A8', skipHeader: false });
    XLSX.utils.sheet_add_json(ws2, event?.gropdata?.data, { origin: 'A8', skipHeader: false });
    XLSX.utils.sheet_add_json(ws3, event?.gropdata?.data, { origin: 'A8', skipHeader: false });

    XLSX.utils.sheet_add_aoa(ws1, event?.Heading1, { origin: 'B2' })
    XLSX.utils.sheet_add_aoa(ws2, event?.Heading1, { origin: 'B2' })
    XLSX.utils.sheet_add_aoa(ws3, event?.Heading1, { origin: 'B2' })
    XLSX.utils.sheet_add_aoa(ws1, event?.Heading2, { origin: 'B4' })
    XLSX.utils.sheet_add_aoa(ws2, event?.Heading2, { origin: 'B4' })
    XLSX.utils.sheet_add_aoa(ws3, event?.Heading2, { origin: 'B4' })


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


  const HandleClick = async (event) => {
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
          ExportData(event);
          console.log("Permission granted");
        } else {
          console.log("Permission denied");
        }
      } else {
        ExportData(event);
      }
    } catch (e) {
      console.log('Error while checking permission');
      console.log(e);
      return
    }

  };


  return ({
    HandleClick: HandleClick,
  })
}