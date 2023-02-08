import pytest
import requests
import json

def test_get_api(api_connection):
    res = requests.get('https://demoapp-testing.herokuapp.com/users/')
    data = res.text
    parse_json = json.loads(data)
    print('kjkjk',parse_json[0].get('fullname'))
    assert parse_json[0].get('fullname') == 'Test test'
    

