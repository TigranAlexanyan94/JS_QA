import pytest
import requests

@pytest.mark.parametrize("username, password", [("Tigran@example.com", "pwd")])
def test_login(username, password):
    response = requests.post(
        "https://demoapp-testing.herokuapp.com/users/login",
        data={"username": username, "password": password}
    )
    assert response.status_code == 403


def test_get_api():
    response = requests.get("https://demoapp-testing.herokuapp.com/users/")
    assert response.status_code == 200

@pytest.mark.skip(reason="This task no resolved")
def test_post_api():
    data = {
        "fullname": "slllklklklkklklkl",
        "email": "k@example.com",
        "birth": "2023-02-09",
        "gender": "string",
        "phone": "string",
        "password": "sstring"
    }
    response = requests.post("https://demoapp-testing.herokuapp.com/users/", data)
    assert response.status_code == 201

@pytest.mark.skip(reason="Cannot delete object")
def test_delete_obj():
    response = requests.delete('https://demoapp-testing.herokuapp.com/users/{255}')
    assert response.status_code == 200
    