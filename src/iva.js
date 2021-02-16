function iva(amount, rate) {
    if(amount <0 || rate < 0) return 0;
    return (amount * rate) / 100;
}
module.exports = iva;