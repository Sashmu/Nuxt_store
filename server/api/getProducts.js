
 import products from "../../data/products.json"
// const {data:products} = await $fetch('../../data/products.json')
export default defineEventHandler((event)=>{
    return{
        api:products
    }
})