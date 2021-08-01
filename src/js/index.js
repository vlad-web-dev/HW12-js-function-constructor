console.log('------------- #3')
const SIZE_SMALL = 'SIZE_SMALL'
const SIZE_MIDDLE = 'SIZE_MIDDLE'
const SIZE_BIG = 'SIZE_BIG'

const CHEESE = 'CHEESE'
const SALAD = 'SALAD'
const POTATO = 'POTATO'
const FLAVORING = 'FLAVORING'
const TOPPING_MAYO = 'TOPPING_MAYO'


function Hamburger(size) {
    this.ingredients = []
    switch (size) {
        case 'SIZE_SMALL':
            this.price = 50
            this.calories = 20
            break
        case 'SIZE_MIDDLE':
            this.price = 75
            this.calories = 30
            break
        case 'SIZE_BIG':
            this.price = 100
            this.calories = 40
            break
        default:
            notAvailableValue('size', size)
    }
    this.addModifier = function (ingredient) {
        switch (ingredient) {
            case 'CHEESE':
                this.price += 10
                this.calories += 20
                this.ingredients.push(ingredient)
                break
            case 'SALAD':
                this.price += 20
                this.calories += 5
                this.ingredients.push(ingredient)
                break
            case 'POTATO':
                this.price += 15
                this.calories += 10
                this.ingredients.push(ingredient)
                break
            case 'FLAVORING':
                this.price += 15
                this.ingredients.push(ingredient)
                break
            case 'TOPPING_MAYO':
                this.price += 20
                this.calories += 5
                this.ingredients.push(ingredient)
                break
            default:
                notAvailableValue('ingredient', ingredient)
        }
    }
    this.info = function () {
        console.log(`Burger ${size.toLowerCase()} with ${this.ingredients.map(el => el.toLowerCase()).join(', ')}`)
        console.log(`Price: ${this.getPrice()}`)
        console.log(`Calories: ${this.getCalories()}`)
    }
    this.getPrice = function () {
        return this.price ? `${this.price} tugriks` : 'Invalid hamburger'
    }
    this.getCalories = function () {
        return this.calories ? `${this.calories} calories` : 'Invalid hamburger'
    }
}
function notAvailableValue(category, val) {
    console.error(`${category} "${val}" is not available for hamburger`)
}

const hamburger = new Hamburger(SIZE_SMALL)
hamburger.addModifier(TOPPING_MAYO)
hamburger.addModifier(POTATO)
hamburger.info()
