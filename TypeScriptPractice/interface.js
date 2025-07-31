var product = /** @class */ (function () {
    function product(id, name, mrp, category, flaver) {
        this.id = id;
        this.name = name;
        this.MRP = mrp;
        this.ctogary = category;
        this.flaver = flaver;
    }
    product.prototype.ShowDitails = function () {
        console.log(this.id, this.name, this.MRP, this.ctogary, this.flaver);
    };
    return product;
}());
var products = new product(1, "sofe", 50, "grosary", "HaldiChandan");
products.ShowDitails();
