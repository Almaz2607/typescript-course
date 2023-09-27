const totalPrice = (obj) => {
    if (obj.isInstallment) {
        return (obj.price - (obj.price * obj.discount) / 100) / obj.month;
    }
    else {
        return "No installments";
    }
};
const price = totalPrice({
    price: 100000,
    discount: 25,
    isInstallment: true,
    month: 12,
});
console.log(price);
