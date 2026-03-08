<template>
  <div class="index">
    <br>
    <h1>Riley Abrahams</h1>
    <img src="/Myphoto.jpeg" alt="My Photo - Riley Abrahams" width="500">
    <p>Hi! Welcome to my personal portfolio. 
        I am Riley Abrahams, a BIS Multimedia student at the University of Pretoria.
        I enjoy graphics designing, web development and being creative.
    </p>

    <br>
    <br>
    <h2>Random Kitty Fact</h2>
    <p v-if="fact">{{ fact }}</p>
    <p v-else>Loading fact...</p>
    <br>
    <br>
    <h2>Random Kitty Picture</h2>
    
    <img :src="kittyPicture" width="300">
    <br>
    
    <button @click="getKittyContent">
        Get New Kitty Content
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue"

const fact = ref("")
const kittyPicture = ref("")

async function getKittyContent(){


    const factResponse = await fetch("https://catfact.ninja/fact")
    const factData = await factResponse .json()
    

    kittyPicture.value = "https://cataas.com/cat?timestamp=" + new Date().getTime()
    fact.value = factData.fact
}

getKittyContent()
</script>
