
list1 = [5, 10, 15, 20, 25, 50, 20]

# Find the index of the first occurrence of 20 using index()
index_of_20 = list1.index(20)

# Replace the value 20 with 200 at that index
list1[index_of_20] = 200

# Print the updated list
print(list1)


a_tuple = (5, 10, 15, 20, 25, 90, 40)
a, b, c, d, e, f, g = a_tuple

# print the values of variables 
print(a)  # should be 5
print(b)  # should be 10         
print(c)  # should be 15
print(d)  # should be 20
print(e)  # should be 25
print(f)  # should be 90
print(g)  # should be 40


fruits = ['apple', 'banana', 'kiwi', 'pear']

for fruit in fruits:
  print(fruit)


  cities = ["London", "San Francisco", "Paris", "Barcelona"]

for city in cities:
    print("I once went to", city)


 active = True

while active: 
    city = input("milan or quit: ")
    if city == 'quit':
        active = False
    elif city == 'leave me alone':
        active = False
    elif city == 'stop':
        active = False
    else:
        print("I'd love to go to", milan)

print("Goodbye !")


  