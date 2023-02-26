import pytest
import sys
sys.path.append('code_folder')
import perfectNumber

@pytest.mark.parametrize("i", range(2,50))
def test_answer(i):
    if i in (2, 50):
        assert perfectNumber.perfect_number(i)

@pytest.mark.parametrize("i", range(1,50))
def test_answer(i):
    if i in (1, 50):
        assert perfectNumber.fibonacci(i)


@pytest.mark.parametrize("i", range(2,50))
def test_answer(i):
    if i in (1, 50):
        assert perfectNumber.pascal_triangle(i)        
    