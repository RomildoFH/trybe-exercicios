import json


def load_games_from_json(file_path: str) -> list[dict]:
    try:
        with open(file_path, "r") as file:
            games = json.load(file)
    except FileNotFoundError:
        raise FileNotFoundError("Arquivo não encontrado!")  # o raise gera uma
        # nova excessão que pode ser personalizada ou personaliza existente
    except json.decoder.JSONDecodeError:
        print("Arquivo json inválido!")
    else:
        return games


def get_all_consoles(games: list[dict]) -> set[str]:
    # o set cria lista com elementos únicos
    all_consoles = set()
    for game in games:
        console = game["Release"]["Console"]
        all_consoles.add(console)
    return all_consoles


def get_sales_by_console(games_data: list[dict]) -> dict:
    result = {}
    for game in games_data:
        console = game["Release"]["Console"]
        sales = game["Metrics"]["Sales"]

        if console in result:
            result[console] += sales
        else:
            result[console] = sales

    return result


if __name__ == "__main__":
    video_games = load_games_from_json("data/video_games.json")
    consoles = get_all_consoles(video_games)
    print(f"Consoles: \n {consoles}")
    sales = get_sales_by_console(video_games)
    print("Vendas (U$k):")
    for game in sales:
        print(f"{game}: {round(sales[game],2)}")
