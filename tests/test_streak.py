import pytest
from streak import longest_positive_streak

def test_empty_list():
    """Tests that an empty list returns a streak of 0."""
    assert longest_positive_streak([]) == 0

def test_multiple_streaks():
    """Tests that the longest streak is identified when there are multiple."""
    assert longest_positive_streak([2, 3, -1, 5, 6, 7, 0, 4]) == 3

def test_streaks_with_zeros_and_negatives():
    """Tests that zeros and negative numbers break the streak."""
    assert longest_positive_streak([1, 2, 0, 3, 4, -5, 6]) == 2

def test_all_positive():
    """Tests a list with all positive numbers."""
    assert longest_positive_streak([1, 1, 1, 2, 3]) == 5

def test_all_non_positive():
    """Tests a list with no positive numbers."""
    assert longest_positive_streak([-1, -2, 0, -5]) == 0

def test_single_element_list():
    """Tests lists with a single element."""
    assert longest_positive_streak([5]) == 1
    assert longest_positive_streak([-5]) == 0
    assert longest_positive_streak([0]) == 0

def test_long_list():
    """Tests a longer list with various streaks."""
    assert longest_positive_streak([1, 2, 3, 0, 1, 2, 0, 1, 2, 3, 4, 5, 0, 1]) == 5