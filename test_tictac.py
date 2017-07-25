"""Test module for simple flask app."""
from bs4 import BeautifulSoup as soup
import tictac
import unittest


class TicTacTestCase(unittest.TestCase):
    """This is a flask test."""

    def setUp(self):
        """Setup."""
        tictac.app.config['TESTING'] = True
        self.app = tictac.app.test_client()

    def test_status_code_200_root_route(self):
        """First test."""
        response = self.app.get('/')
        self.assertEqual(response.status_code, 200)

    def test_page_has_game_board(self):
        """Home route has game board."""
        response = self.app.get('/')
        souped = soup(response.data, 'html.parser')
        squares = souped.findAll("div", {"class": "square"})
        self.assertTrue(len(squares) == 9)


if __name__ == '__main__':
    unittest.main()
