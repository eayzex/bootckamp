
zara_info = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}


print("Brand name:", zara_info["name"])
print("Creation date:", zara_info["creation_date"])
print("Creator:", zara_info["creator_name"])
print("Types of clothes:", ", ".join(zara_info["type_of_clothes"]))
print("International competitors:", ", ".join(zara_info["international_competitors"]))
print("Number of stores:", zara_info["number_stores"])



print("Major color in France:", zara_info["major_color"]["France"])
print("Major color in Spain:", zara_info["major_color"]["Spain"])
print("Major colors in US:", ", ".join(zara_info["major_color"]["US"]))
