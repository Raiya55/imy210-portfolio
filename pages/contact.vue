<template>
    <div>
        <h1>Contact Me</h1>

        <form name="contact" method ="POST" data-netlify="true">
            <label>
                Name:
                <input type="text" name="name">
            </label>
            <label>
                Surname:
                <input type="text" name="surname">
            </label>

            <label>
                Email
                <input type="email" name="email">
            </label>

            <label>
                Message:
                <textarea name="message"></textarea>
            </label>

            <button type="submit">Send</button>
        </form>
    </div>
</template>
