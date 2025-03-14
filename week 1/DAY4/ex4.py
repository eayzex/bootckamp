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

# Creating an instance of Family with a last name and members
family_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

my_family = Family("Smith", family_members)

# Using the methods
my_family.family_presentation()  # Display family details

# Adding a new child
my_family.born(name="John", age=5, gender="Male", is_child=True)

# Checking age
print(my_family.is_18("Michael"))  # Is Michael over 18? (Should return True)
print(my_family.is_18("John"))  # Is John over 18? (Should return False)

