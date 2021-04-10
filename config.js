var currentAmount = 0;
var best = 0;

var count2X = 1;
var first2XPrice = 10;
var current2XPrice = first2XPrice;
var next2XPrice = 0; //Math.pow(current2XPrice, 2) - Math.pow(current2XPrice, 2) * 0.6;

var countMasterReset = 0;
var firstMasterResetPrice = 100000;
var currentMasterResetPrice = firstMasterResetPrice;
var nextMasterResetPrice = 0; //Math.pow(currentMasterReset, 2) - Math.pow(currentMasterReset, 2) * 0.5;

var first10XPrice = 1000
var current10XPrice = first10XPrice;
var next10XPrice = 0; // Math.pow(current10XPrice, 2) - Math.pow(current10XPrice, 2) * 0.5;
var is10XActive = false;
var count10Xclick = 0;
// Prices
// x * x - (x * x * (porcentagem) ))   