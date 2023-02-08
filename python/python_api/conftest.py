import pytest
import requests
import json

@pytest.fixture(scope="module", params=['p1','p2'])
def api_connection(request):
    # data= {
    #     "grant_type": "",
    #     "username": "",
    #     "password": "",
    #     "scope" : "",
    #     "client_id": 12,
    #     "client_secret": ""
    # }
    # res = requests.post('ttps://demoapp-testing.herokuapp.com/users/login', json.dumps(data))
    return request.param