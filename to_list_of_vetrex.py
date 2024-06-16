import json
import locale

def make_list() -> list:


    line = [[] * i for i in range(453)]

    with open("Метро время между станциями.json", 'r') as name_station_file:
        file = json.load(name_station_file)

        for element in file:
            st_1 = element['id_st1']
            st_2 = element['id_st2']
            time = element['time']

            time = time.replace(',', '.')

            line[int(st_1)].append((int(st_2), float(time)))
            line[int(st_2)].append((int(st_1), float(time)))

    return line


def see_at_list_of_vertexies(line: list) -> None:

    count = 0
    for popopo in line:
        print(f'{count} : {popopo}')
        count += 1
