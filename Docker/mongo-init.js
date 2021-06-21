db.createUser(
        {
            user: "cesiMangerAdmin",
            pwd: "cesimanger123ABC",
            roles: [
                {
                    role: "readWrite",
                    db: "cesiManger"
                }
            ]
        }
);
db = db.getSiblingDB('cesiManger')
db.createCollection("orders");
db.createCollection("order_link_product");
db.createCollection("product");
db.createCollection("menu");
db.createCollection("menu_link_product");
db.createCollection("merchant");
db.createCollection("delivery");
db.createCollection("logs");
