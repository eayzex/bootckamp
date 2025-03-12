class dog :
     def __init__(self, name, hight):
            self.name = name
            self.hight = hight

     def bark(self):
            print(f"{self.name}  goes woof")

     def jump(self):
            print(f"{self.name} jumps {self.hight * 2} cm high")
davis_dog = dog ("rex", 50)
sarahs_dog = dog("Teacup", 20)

print (f"davis dog is named {davis_dog.name} and is {davis_dog.hight} cm hight.")
davis_dog.bark()
davis_dog.jump()

print (f"sarahs dog is named {sarahs_dog.name} and is {sarahs_dog.hight} cm hight.")
sarahs_dog.bark()  
sarahs_dog.jump()

if davis_dog.hight > sarahs_dog.hight: 
       print(f"the bigger fog is {davis_dog.name}")
elif davis_dog.hight < sarahs_dog.hight:
       print(f"the bigger dog is {sarahs_dog.name}")
else:
       print ("both dog are the same size")

       



