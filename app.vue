<template>
  <div class="layout">
  <nav class="navbar">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>
 
  <div class="content">
    <NuxtPage />
  </div>
  </div>
</template>

<style>
/*background*/
body{
  background-image: url('/background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

p{
  font-family:Arial,sans-serif;
}
.layout{
  display: flex;
  min-height: 100vh;
}

.navbar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 200px;
  background-color: pink;
  padding: 20px;
  border-radius: 15px;
}

.navbar ul{
  display: flex;
  justify-content: center; 
  list-style: none;
  padding: 0;
  margin: 0;
  
}

.navbar a {
  color: black;
  text-decoration: none;
  padding: 20px;
  font-size: 20px;
  font-family: Arial;
  
}

.navbar a:hover {
  color: palevioletred;
  font-weight: bolder;
  background-color: white;
}

.content{
  flex:1;
  background-color:  rgba(255, 255, 255, 0.9);
  padding: 20px;
  margin: 20px;
  border-radius: 20px;
  text-align: justify;
  
}

img {
  max-width: 100%;
  height: auto;
}

h1,h2{
  font-family:Arial;
}
</style>
