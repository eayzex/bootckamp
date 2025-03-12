
def make_shirt(size, message):
    print(f"The size of the shirt is {size} and the text is '{message}'")


def make_shirt(size="Large", message="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{message}'")


make_shirt()


make_shirt(size="Medium")


make_shirt(size="Small", message="Hello, World!")

make_shirt(message="Python is awesome", size="Extra Large")
