<template>
    <div>
{{ code }}


    </div>
</template>

<script  setup>
 const userName=ref('Sashmu')

 //GET using query params
// const {data:msg}= await useFetch('/api/message?userName=Sashmu' )

 //POST using body
// const {data:msg}= await useFetch('/api/message?userName=Sashmu',{
//     method : 'post',
//     body : { age: 29}
// })

//  const {data:currency}= await useFetch('/api/message')

const {data:code} = await useFetch('/api/currency/ETH')



</script>

<style  scoped>

</style>