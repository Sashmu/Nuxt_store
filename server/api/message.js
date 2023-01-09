export default defineEventHandler(async(event)=>{
const currency=useRuntimeConfig()
    //handle query params
// const {userName}=getQuery(event)

    //handle post data
//    const {age} = await readBody(event)

   //api call with private key
const {data} =await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currency}`)

    return {currency:data}

 
})