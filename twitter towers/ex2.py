import math


def rectangular_tower(width, height):
    """
    Function for handling a rectangle type tower.
    If the width and height are the same, it's a square and the area is calculated.
    If the difference between width and height is greater than 5, it's a rectangle and the area is calculated.
    Otherwise, it's a rectangle and the perimeter is calculated.
    
    Parameters:
    - width: The width of the tower.
    - height: The height of the tower.
    """

    if height == width:
        print("It's a square.")
        print("Area:", height * width)
    elif abs(height - width) > 5:
        print("It's a rectangle.")
        print("Area:", height * width)
    else:
        print("It's a rectangle.")
        print("Perimeter:", 2 * (height + width))


def print_triangular(width, height):
    """
    Function to print a triangular pattern of stars with the given width and height.

    Parameters:
    - width: The width of the tower.
    - height: The height of the tower.
    """

    if width == 3:  # edge-case of width 3 of triangular
        for i in range(height - 1):
            print("*".center(3))
        print("*" * 3)
        return

    if width == 1:  # edge-case of width 3 of triangular
        for i in range(height):
            print("*")
        return

    odds = (width - 2) // 2  # number of odd numbers between 1 to width
    lines = height - 2  # number of lines to fill without the first and the last lines

    times = lines // odds  # times to print each line of stars
    change = lines % odds

    line_stars = 1  # number of stars in line
    print("*".center(width))  # print first line

    while line_stars < lines:
        line_stars += 2  # each new line has two more stars than the previous line
        for i in range(times):  # print the same line as times as needed
            print(("*" * line_stars).center(width))
        if change > 0:  # print another line
            print(("*" * line_stars).center(width))
            change -= 1

    print("*" * width)  # print last line


def triangular_tower(width, height):
    """
    Function for handling a rectangle type tower.
    The user can select to get Triangular Perimeter or to Print Triangular

    Parameters:
    - width: The width of the triangular pattern.
    - height: The height of the triangular pattern.
    """

    print("Triangular Menu:")
    print("1. Triangular Perimeter")
    print("2. Print Triangular")
    choice = input("Enter your choice: ")

    if choice == '1':
        leg = math.sqrt((width / 2) ** 2 + height ** 2)  # calculate leg length according to the Pythagorean theorem.
        perimeter = 2 * leg + width
        print("Perimeter of the triangle:", perimeter)
        return
    elif choice == '2':
        if width % 2 == 0 or width > 2 * height:
            print("Triangle cannot be printed.")
            return
        else:
            print_triangular(width, height)
    else:
        print("Invalid choice.")
        return


def get_dimensions():
    """
    Function to get dimensions of the tower from the user
    """

    while True:
        try:
            width = int(input("Please enter the width of the tower: "))
            height = int(input("Please enter the height of the tower: "))
            if height >= 2:
                return width, height
            else:
                print("The height should be bigger or equal to 2")
        except ValueError:
            print("Please enter valid numbers")


def main():
    while True:
        print("\nWelcome to Twitter's towers program!")
        print("1. Rectangular Tower")
        print("2. Triangular Tower")
        print("3. Exit")
        choice = input("Enter your choice: ")

        if choice == '1':
            width, height = get_dimensions()
            rectangular_tower(width, height)
        elif choice == '2':
            width, height = get_dimensions()
            triangular_tower(width, height)
        elif choice == '3':
            print("Exiting the program...")
            break
        else:
            print("Invalid choice. Please enter again.")


if __name__ == "__main__":
    main()
