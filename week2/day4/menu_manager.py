import psycopg2

class MenuManager:
    @classmethod
    def get_by_name(cls, item_name):
        connection = psycopg2.connect(database="restaurant_menu", user="postgres", password="yourpassword", host="localhost", port="5432")
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM Menu_Items WHERE item_name = %s", (item_name,))
        item = cursor.fetchone()
        connection.close()
        return item if item else None

    @classmethod
    def all_items(cls):
        connection = psycopg2.connect(database="restaurant_menu", user="postgres", password="yourpassword", host="localhost", port="5432")
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM Menu_Items")
        items = cursor.fetchall()
        connection.close()
        return items
    

