<template>
<div>
    <h1 class="contactH1">Contact Me</h1>
<div class="contact">
        <form name="contact" method ="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <label>
                Name:
                <input type="text" name="name">
            </label>
            <br>
            <label>
                Surname:
                <input type="text" name="surname">
            </label>
            <br>
            <label>
                Email
                <input type="email" name="email">
            </label>
            <br>
            <label>
                Message:
                <textarea name="message"></textarea>
            </label>
            <br>
            <button type="submit">Send</button>
        </form>
    </div>
    </div>
</template>

<style>

.contactH1{
    text-align: center;
}

.contact{
    background-color: pink;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    max-width: 600px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 500px;
}

.contact label{
    display: flex;
    flex-direction: column;
    font-weight: bold;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    padding-bottom: 30px;
}

.contact input{
    padding: 10px;
    border: 1px solid palevioletred;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.contact textarea{
    padding: 20px;
    border: 1px solid palevioletred;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.contact button{
    background-color: palevioletred;
    color: white;
    font-weight: bold;
    padding: 15px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    
}

.contact button:hover{
    background-color: rgb(205, 44, 113);

}

</style>

