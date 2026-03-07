<template>
    <div>
        <h1>Contact Me</h1>

        <form name="contact" method ="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact">

            <label>
                Name:
                <input type="text" name="name">
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
