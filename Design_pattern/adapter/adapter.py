import json
import xmltodict

class DataProvider:
    def get_xml_data():
        with open("example.xml") as xml_file:
            data = xml_file.read()
        return data


class AdapterXMLToJson(DataProvider):
    def __init__(self):
        self.data = DataProvider.get_xml_data()

    def convert(self):
        data_dict = xmltodict.parse(self.data)
        with open("example.json", "w") as json_file:
            json_file.write(json.dumps(data_dict))
    



if __name__ == "__main__":
    adapter = AdapterXMLToJson()
    adapter.convert()
