import pytest
import sys
sys.path.append('code_folder')
import perfectNumber

@pytest.mark.parametrize("i", range(50))
def test_answer(i):
    if i in (1, 50):
        assert perfectNumber.perfect_number(i)
