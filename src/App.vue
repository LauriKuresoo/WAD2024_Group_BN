<template>
  <router-view/>
</template>

<script>
export default{
  name: 'App',
}
</script>


<style>
.navbar{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgb(238, 187, 92);
    height: 60px;
    width: 100%;
    align-items:center;
    border-radius: 10px;
}

#navleft{
    padding-left: 30px;
    
    height: 100%;
    width: 20%;
    display: flex;
    align-items: center;
    justify-content:left;    
    white-space: nowrap;
   
}

#navleft > .link {
    margin-left: 30px;
    display: flex;
    align-items: center;
    height: 100%;
    margin: 10px 10px;
    padding-right: 30px;
    padding-left: 30px;
}

#navleft .link:hover{
    background-color: orange;
    border-radius: 8px;
    transform: scale(1.1);
    transition: all 0.08s ease-in;
    padding: 5 30 5 30px;
}

#navright {
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 40px;

  }  

.dropdown{
    height: 100%;
}

#navimage{
    height: 100%;
    display: flex;
    align-items: center;
}

#navimage img {
    max-height: 90%;
    width: auto; 
    object-fit: contain; 
    border-radius: 20px;
}


.navbar .link{
    text-decoration: none;
    color: black;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 400;
    font-size: 2em;
    text-align: center;
}
</style>
