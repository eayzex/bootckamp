import psycopg2

class MenuItem():
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        connection = psycopg2.connect(database="restaurant_menu", user="postgres", password="12345678", host="localhost", port="5432")
        cursor = connection.cursor()
        query = f'''INSERT INTO menu_items (item_name, item_price) 
        VALUES ('{self.name}', '{self.price}')'''
        cursor.execute(query)
        connection.commit()
        connection.close()
        # print(f"{self.name}")
        

    def delete(self):
        connection = psycopg2.connect(database="restaurant_menu", user="postgres", password="yourpassword", host="localhost", port="5432")
        cursor = connection.cursor()
        cursor.execute("DELETE FROM Menu_Items WHERE item_name = %s", (self.name,))
        connection.commit()
        connection.close()
        print(f"{self.name}")

    def update(self, new_name, new_price):
        connection = psycopg2.connect(database="restaurant_menu", user="postgres", password="yourpassword", host="localhost", port="5432")
        cursor = connection.cursor()
        cursor.execute("UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s", (new_name, new_price, self.name))
        connection.commit()
        connection.close()
        print(f"{self.name} {new_name} {new_price}.")


