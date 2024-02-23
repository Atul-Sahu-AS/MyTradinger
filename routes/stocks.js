const express = require("express");
const path = require("path");
const router = express.Router();
const stocks = require("../server/stocks");

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/buy", (req, res) => {
  buyStocks = stocks.filter((e) => {
    return e.buyOrSell == "Buy";
  });
  res.render("buy", {
    buyStocks: buyStocks,
  });
});
router.get("/sell", (req, res) => {
  sellStocks = stocks.filter((e) => {
    return e.buyOrSell == "Sell";
  });
  res.render("sell", {
    sellStocks: sellStocks,
  });
});

router.get("/stockDetail/:id", (req, res) => {
  stockDetail = stocks.filter((e) => {
    return e.id == req.params.id;
  });
  res.render("stockDetail", {
    stockDetailId: stockDetail[0].id,
    stockDetailStockName: stockDetail[0].stockName,
    stockDetailQty: stockDetail[0].qty,
    stockDetailPrice: stockDetail[0].price,
    stockDetailDate: stockDetail[0].date,
  });
});

module.exports = router;
