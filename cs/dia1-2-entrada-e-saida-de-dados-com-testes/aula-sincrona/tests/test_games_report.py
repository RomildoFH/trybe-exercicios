import pytest
from src.games_report import (
    get_all_consoles,
    get_sales_by_console,
    load_games_from_json,
)


@pytest.fixture  # esse marcador @pytest indica o que será em sequência,
# no caso uma fixture (uma pré-condição para rodar os testes)
def games_data():
    return [
        {
            "Title": "Lumines: Puzzle Fusion",
            "Metrics": {
                "Sales": 0.56,
            },
            "Release": {
                "Console": "Sony PSP",
                "Year": 2004,
            },
        },
        {
            "Title": "Hot Shots Golf: Open Tee",
            "Metrics": {
                "Sales": 0.49,
            },
            "Release": {
                "Console": "Sony PSP",
                "Year": 2004,
            },
        },
        {
            "Title": "Spider-Man 2",
            "Metrics": {
                "Sales": 0.45,
            },
            "Release": {
                "Console": "Nintendo DS",
                "Year": 2004,
            },
        },
        {
            "Title": "The Urbz: Sims in the City",
            "Metrics": {
                "Sales": 0.41,
            },
            "Release": {
                "Console": "Nintendo 64",
                "Year": 2004,
            },
        },
        {
            "Title": "WarioWare Touched!",
            "Metrics": {
                "Sales": 0.54,
            },
            "Release": {
                "Console": "Nintendo DS",
                "Year": 2004,
            },
        },
    ]


def test_get_all_consoles(games_data):
    console = get_all_consoles(games_data)
    assert console == {"Sony PSP", "Nintendo DS", "Nintendo 64"}


def test_total_sales_by_console(games_data):
    result = get_sales_by_console(games_data)
    assert result["Nintendo DS"] == 0.99


def test_import_from_file_not_found():
    with pytest.raises(FileNotFoundError, match="Arquivo não encontrado!"):
        load_games_from_json("fake_file.json")
