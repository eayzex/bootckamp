import psycopg2
import requests
import random


def connect_db():
    return psycopg2.connect(
        database="fetch_countries.py",  
        user="postgres", 
        password="12345678",  
        host="localhost",
        port="5432"
    )


def fetch_countries():
    url = "https://restcountries.com/v3.1/all"
    response = requests.get(url)
    countries = response.json()
    data = random.sample(countries, 10)
    return data
    
      


def insert_country(country):
    for item in country:
        
        conn = connect_db()
        cursor = conn.cursor()
        
    
        name = item.get('name', {}).get('common', 'N/A')
        capital = item.get('capital', ['N/A'])[0]
        flag = item.get('flags', {}).get('png', 'N/A')
        subregion = item.get('subregion', 'N/A')
        population = item.get('population', 0)
        
    
        cursor.execute("""
            INSERT INTO countries (name, capital, flag, subregion, population)
            VALUES (%s, %s, %s, %s, %s);
        """, (name, capital, flag, subregion, population))
        
        conn.commit()
        cursor.close()
        conn.close()




deta = fetch_countries()
print(deta)
insert_country(deta)

# insert_country(name)