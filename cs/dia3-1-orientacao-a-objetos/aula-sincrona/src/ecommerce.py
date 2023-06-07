import re
from dataclasses import dataclass


class Customer:
    def __init__(self, name: str, email: str, address: str):
        self.name = name
        self.__email = email
        self.address = address

    def __str__(self) -> str:
        return f"{self.name} <{self.email}>"

    @property
    def email(self):
        return self.__email

    @email.setter
    def email(self, value):
        if not re.match(r"[^w]+@[^w]+\.[^w]+", value):
            raise ValueError("E-mail inválido!")
        self.__email = value

    def show_details(self):
        print(
            f"Nome: {self.name}|Email: {self.email}|Endereço: {self.address}"
        )


@dataclass
class Product:
    name: str
    unit_price: float
    stock_quantity: int = 0


class ShoppingCart:

    def __init__(self):
        self._items: list[tuple[Product, int]] = []

    def add_item(self, product_quantity: tuple[Product, int]):
        self._items.append(product_quantity)

    def items_quantity(self):
        return sum(item[1] for item in self._items)

    def total_price(self):
        return sum(
            product.unit_price * quantity for product, quantity in self._items
        )
        # return sum(item[0].unit_price * item[1] for item in self._items)


class PremiumCustomer(Customer):
    def __init__(
        self, name: str, email: str, address: str, rewards_points: int = 0
    ):
        super().__init__(name, email, address)
        self.rewards_points = rewards_points

    def add_rewards_points(self, points: int):
        self.rewards_points += points

    def redeem_rewards_points(self, points: int):
        if self.rewards_points >= points:
            self.rewards_points -= points
        else:
            print("Não há pontos para reduzir!")

    def show_details(self):
        super().show_details()
        print(f"Rewards Points: {self.rewards_points}")
