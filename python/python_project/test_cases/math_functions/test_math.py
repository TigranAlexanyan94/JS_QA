import pytest
import configparser
import os
import sys
sys.path.append('utils')
import sum

@pytest.fixture(scope="function")
# def read_config():
#     parser = configparser.ConfigParser()
#     root_dir = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))
#     parser.read(root_dir + "/resourses/sum.exp")
#     print('lllllllllll',parser)

# read_config()

@pytest.fixture
def test_sum(x,y):
    assert sum(x,y)



