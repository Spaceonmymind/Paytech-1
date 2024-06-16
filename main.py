from to_list_of_vetrex import make_list
from collections import defaultdict
import json

line = make_list()

# возвращает номер станции по ее названию
def get_number_of_station(name_of_staion: str) -> int:
    result = -1

    with open("Наименование станций метро.json", 'r') as name_station_file:
        file = json.load(name_station_file)

        for station in file:
            if name_of_staion == station['name_station']:
                result = station['id']


    return result


def get_time_between_stations(first_station: int, second_station: int) -> float:
    result_time = "-1.0"

    if first_station == second_station:
        return result_time

    with open("Метро время между станциями.json", 'r') as name_station_file:
        file = json.load(name_station_file)

        for station in file:
            if (int(station["id_st1"]) == first_station or int(station["id_st2"]) == first_station) \
                and (int(station["id_st1"]) == second_station or int(station["id_st2"]) == second_station):

                result_time = station["time"]

    result_time = result_time.replace(',', '.')

    return float(result_time)


def find_all_paths(adjacency_list, start, end):

    # Преобразование списка смежности в defaultdict для удобства
    graph = defaultdict(list)
    for index, neighbors in enumerate(adjacency_list):
        for neighbor, weight in neighbors:
            graph[index].append((neighbor, weight))

    def find_all_paths_util(u, d, visited, path, all_paths):
        visited[u] = True
        path.append(u)

        # Если достигли целевой вершины - добавляем путь в all_paths
        if u == d:
            all_paths.append(list(path))
        else:
            # Если не  достигли целевой вершин - продолжаем обход
            for (i, weight) in graph[u]:
                if not visited[i]:
                    find_all_paths_util(i, d, visited, path, all_paths)

        # Удаляем вершину из path и отмечаем как не посещенную
        path.pop()
        visited[u] = False

    visited = [False] * len(adjacency_list)  # Инициализируем все вершины как не посещенные
    path = []  # Временный список для хранения текущего пути
    all_paths = []  # Список для хранения всех путей

    # Вызываем вспомогательную рекурсивную функцию
    find_all_paths_util(start, end, visited, path, all_paths)
    return all_paths

# Выводит все время в пути по переданному маршруту
def all_time(path: list) -> int:
    all_time_result = 0

    first_st = path[0]
    for index_st in range(1, len(path)):
        second_st = path[index_st]

        all_time_result += get_time_between_stations(first_st, second_st)
        first_st = second_st

    return all_time_result




if __name__ == '__main__':
    id_station = get_number_of_station('--------') # Название станции

    start_vertex = 1
    end_vertex = 10
    paths = find_all_paths(line, start_vertex, end_vertex)

    print()
    print(f"Все пути от вершины {start_vertex} до вершины {end_vertex}:")
    print()

    for path in paths:
        print(path)

    print()
    print(f"...Все время по маршруту займет {all_time(path)} минут...")
    print()














