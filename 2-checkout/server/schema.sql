CREATE DATABASE IF NOT EXISTS checkout;

use checkout;

DROP TABLE IF EXISTS orders;

CREATE TABLE orders (
  session_id VARCHAR(255),
  name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255),
  address VARCHAR(255),
  phone VARCHAR(255),
  cc_num INT(255),
  cc_exp VARCHAR(255),
  zip INT(255),
  cvv INT(255)
  );



