import db

import sqlite3
from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/growers')
def get_growers():
    global cursor
    result = cursor.execute('SELECT * FROM growers')

    return [{
        'id': grower[0],
        'name': grower[1],
        'location': grower[2],
    } for grower in result]


@app.route('/harvests')
def get_harvests():
    global cursor
    result = cursor.execute('SELECT * FROM harvests')

    return [{
        'id': harvest[0],
        'name': harvest[1]
    } for harvest in result]


def initialize_database(reset):
    try:
        global con, cursor
        con = sqlite3.connect('raiz.db', check_same_thread=False)
        cursor = con.cursor()
    except Exception as ex:
        print('error: initialize_datbase:', ex)
        exit(1)

    for name, schema in db.TABLES.items():
        cursor.execute('SELECT name FROM sqlite_master WHERE type=\'table\' AND name=?', (name,))
        result = cursor.fetchone()

        if result:
            print(f'table {name} exists in database.')
            if not reset:
                continue 
            cursor.execute(f'DROP TABLE {name}')

        print(f'table {name} does not exist in database. creating...')

        # create database table
        query = f'CREATE TABLE {name}('
        for col, t in schema.items():
            query += f'{col} {t}, '
        query = query[:-2] + ')'
        cursor.execute(query)

        # add seed data for table
        query = f'INSERT INTO {name} VALUES('
        for _, _ in schema.items():
            query += '?, '
        query = query[:-2] + ')'
        cursor.executemany(query, db.SEED[name])
        con.commit()


if __name__ == "__main__":
    try:
        initialize_database(reset=False)
        app.run(host="0.0.0.0", port=9001)
    except Exception as ex:
        print(f'error: main: {ex}')
    finally:
        con.close()
