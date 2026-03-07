<template>
  <div>
    <nav class="navbar">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/projects">Projects</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>

<style>
.navbar {
  display: flex;
  gap: 20px;
  background-color: pink;
  padding: 10px;
}

.navbar a {
  color: black;
  text-decoration: none;
  font-weight: bold;
}

.navbar a:hover {
  text-decoration: underline;
}
</style>
