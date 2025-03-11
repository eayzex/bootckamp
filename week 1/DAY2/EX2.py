family = {}
number_of_family = int(input("how many people are in your family: "))
for i in range(number_of_family):
    name = input("enter the name of family person: ")
    age = int(input(f"Enter {name}'s age: "))
    family[name] = age 


def get_ticket_price(age):
    if age < 3:
        return 0
    elif age < 12:
        return 10
    else:
        return 15
    
total_cost = 0   
for name, age in family.items():
    price= get_ticket_price(age)
    print(f"{name} has to pay: ${price}")
    total_cost += price
print(f"Total cost for the family is: ${total_cost}")