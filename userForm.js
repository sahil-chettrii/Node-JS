function userForm(req, res) {

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.write(`
        <form action="/submit" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <br><br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <br><br>

            <button type="submit">Submit</button>
        </form>
    `);

    res.end();
}

module.exports = userForm;