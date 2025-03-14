# Assuming the Family class is already created from the previous exercise

class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name  # Family's last name
        self.members = members  # List of family members

    # Method to add a new child
    def born(self, **kwargs):
        self.members.append(kwargs)  # Add the child to the list
        print(f"Congratulations! A new family member has been born: {kwargs['name']}")

    # Method to check if a family member is over 18
    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] > 18  # Return True if age is greater than 18
        return False

    # Method to display family details
    def family_presentation(self):
        print(f"Family Last Name: {self.last_name}")
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Is Child: {member['is_child']}")


class TheIncredibles(Family):
    def __init__(self, last_name, members):
        super().__init__(last_name, members)  # Initialize the parent Family class

    # Method to use the power of a family member
    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] > 18:
                    print(f"{member['name']} uses the power of {member['power']}!")
                    return
                else:
                    raise Exception(f"{member['name']} is not over 18 years old.")
        print("No such family member found.")

    # Method for family presentation
    def incredible_presentation(self):
        print("Here is our powerful family!")
        super().family_presentation()  # Call the family_presentation from the parent class


# Create an instance of TheIncredibles with last name "Incredibles" and members
members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
]

incredible_family = TheIncredibles("Incredibles", members)

# Call the incredible_presentation method
incredible_family.incredible_presentation()

# Use the born method to add Baby Jack with "Unknown Power"
incredible_family.born(name="Jack", age=2, gender="Male", is_child=True, power="Unknown Power", incredible_name="BabyJack")

# Call the incredible_presentation method again
incredible_family.incredible_presentation()

# Try to use the power of an underage family member (Jack)
try:
    incredible_family.use_power("Jack")
except Exception as e:
    print(e)

# Use the power of an adult fa
