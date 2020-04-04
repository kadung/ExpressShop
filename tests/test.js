var _ = require('lodash'); 

const ProductsData = [
    {
        "name": "Duckworth Woolfill Jacket",
        "price": "188.00",
        "description": "<p style=\"margin-bottom: 25px; text-rendering: optimizeLegibility;\">Inspired by the timeless, functional style of your grandfather's work coat, the Foraker features brass buttons and 4 patch pockets. Crafted in Bristol, Tennessee, our 10oz organic duck canvas is light enough for an early summer morning, but rugged enough to handle your days work.<\/p><ul class=\"tabs-content\" style=\"margin-right: 0px; margin-bottom: 25px; margin-left: 20px; padding: 0px; text-rendering: optimizeLegibility;\"><li style=\"margin-bottom: 0px;\">100% Organic Duck Canvas.<\/li><\/ul>",
        "allowPublish": true,
        "categories": ["jacket"],
        "options": {
            "sizes": [
                "L",
                "XL"
            ],
            "colours": [
                "Harvest",
                "Navy"
            ]
        },
        "stock": 10
    },
    {
        "name": "5 Panel Camp Cap",
        "price": "48.00",
        "description": "<p style=\"margin-bottom: 25px; text-rendering: optimizeLegibility;\">A classic 5 panel hat with our United By Blue logo on the front and an adjustable strap to keep fit and secure. Made with recycled polyester and organic cotton mix.<\/p><ul style=\"margin-right: 0px; margin-bottom: 25px; margin-left: 20px; padding: 0px; text-rendering: optimizeLegibility;\"><li style=\"margin-bottom: 0px;\">Made in&nbsp;New Jersey<\/li><li style=\"margin-bottom: 0px;\">7oz Eco-Twill fabric:&nbsp;35% organic cotton, 65% recycled PET&nbsp;(plastic water and soda bottles)&nbsp;<\/li><li style=\"margin-bottom: 0px;\">Embossed leather patch<\/li><\/ul><ul class=\"tabs\" style=\"margin-right: 0px; margin-bottom: 25px; margin-left: 20px; padding: 0px; text-rendering: optimizeLegibility; color: rgb(28, 29, 29); font-family: Arapey, serif; line-height: 25.008px;\"><\/ul>",
        "allowPublish": true,
        "categories": ["cap"],
        "options": {
            "colour": [
                "Heather green",
                "Burnt orange",
            ]
        },
        "stock": 10
    },
    {
        "name": "Red Wing Iron Ranger Boot",
        "price": "310.00",
        "description": "<p style=\"margin-bottom: 25px; text-rendering: optimizeLegibility;\">The Mesabi Iron Range lies in northern Minnesota, a rugged and remote area known for its iron mines. The local residents who work these mines are proudly known as Iron Rangers, individuals with a sense of adventure and a determined personality. Originally designed to be worn in the iron mines, Iron Ranger work boots had to be as tough as the people who wore them in demanding conditions. Iron Ranger boots are built with a double layer of leaver over the toe to provide an extra measure of safety.<\/p><ul class=\"tabs-content\" style=\"margin-right: 0px; margin-bottom: 25px; margin-left: 20px; padding: 0px; text-rendering: optimizeLegibility;\"><li style=\"margin-bottom: 0px;\">6 inch, Amber Harness leather with Nitrile Cork sole.<\/li><\/ul>",
        "allowPublish": true,
        "categories": ["boot", "leather"],
        "options": {
            "size": [
                "7.5",
                "8"
            ]
        },
        "stock": 10
    }
]

const categories = [
    { name: 'shirt', _id: "5e821843ae9bc621144ac47a", __v: 0 },
    { name: 'backpack', _id: "5e821843ae9bc621144ac47b", __v: 0 },
    { name: 'organic', _id: "5e821843ae9bc621144ac47c", __v: 0 },
    { name: 'pullover', _id: "5e821843ae9bc621144ac47d", __v: 0 },
    { name: 'boot', _id: "5e821843ae9bc621144ac47e", __v: 0 },
    { name: 'leather', _id: "5e821843ae9bc621144ac47f", __v: 0 },
    { name: 'cap', _id: "5e821843ae9bc621144ac480", __v: 0 },
    { name: 'jacket', _id: "5e821843ae9bc621144ac481", __v: 0 }
];

const cat = categories.find((cat)=>{
    console.log("Category is: ")
    console.log(cat)
    return cat.name='shirt';
})
console.log(cat);

// const dict = _.keyBy(categories, 'name');
// ProductsData.forEach((product) => {
//     console.log(product.categories.map((cat) => dict[cat]._id))
//     product.categories = product.categories.map((cat) => dict[cat]._id)
// });


