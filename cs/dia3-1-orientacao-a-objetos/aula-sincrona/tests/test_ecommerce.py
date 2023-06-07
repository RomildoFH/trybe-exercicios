from src.ecommerce import Customer, Product, ShoppingCart


def test_customer_create():
    customer = Customer("João", "joao@example.com", "Rua 1, 123")
    assert customer.name == "João"
    assert customer.email == "joao@example.com"
    assert customer.address == "Rua 1, 123"


def test_product_create():
    product = Product("Camiseta", 9.99)
    assert product.name == "Camiseta"
    assert product.unit_price == 9.99


def test_shopping_cart_add_items():
    cart = ShoppingCart()
    product_1 = Product("Produto X", 100.00)
    product_2 = Product("Produto Y", 20.50)
    cart.add_item((product_1, 2))
    cart.add_item((product_2, 1))
    assert len(cart._items) == 2
    assert cart._items[0] == (product_1, 2)
    assert cart._items[1] == (product_2, 1)


def test_shopping_cart_total_price():
    cart = ShoppingCart()
    assert cart.total_price() == 0.0
    product_1 = Product("Produto X", 100.00)
    product_2 = Product("Produto Y", 20.50)
    cart.add_item((product_1, 2))
    cart.add_item((product_2, 1))
    assert cart.total_price() == 220.50
