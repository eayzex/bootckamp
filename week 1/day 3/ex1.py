class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1 = Cat("Whiskers", 3)
cat2 = Cat("Tom", 5)
cat3 = Cat("Felix", 7)





cats = [cat1, cat2, cat3]
def max_age():
    max_age =0
    for cat in cats: 
        if cat.age > max_age:
            max_age = cat.age
    print(f"The oldest cat is {cat.name} and it is {cat.age} years old")
   
max_age()




            
            