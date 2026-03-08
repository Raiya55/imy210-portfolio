<template>
    <div class="projects">
        <h1>My Projects</h1>
        
        <table>
          <tr>
          <th>Genshin Impact Website</th>
          <th>Visual Design Webcomic</th>
          <th>Blender Chair</th>
        </tr>
        <tr>
            <td><img src="public/website.png" alt="Genshin Imapct Fanpage Website" width="300" height="100"></td>
            <td><img src="public/webcomic.png" alt="webcomic" width="300" height="100"></td>
            <td><img src="public/blender.png" alt="Blender chair" width="300" height="100"></td>
        </tr>
        </table>
    </div>
</template>

<style>
table{
   max-width: 900px;
  margin: 2rem auto;
  background-color: pink;
  padding: 1rem;
 
  border-radius: 8px;
  height: 500px;
  font-family: Arial, Helvetica, sans-serif;

  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

th{
  padding: 1rem;
  text-align: left;
  border-radius: 8px;
  background-color: palevioletred;
}


td{
  padding: 20px;
  background-color: rgb(250, 172, 185);
  border-radius: 10px;
}

img{
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
</style>