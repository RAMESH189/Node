const login = (req, res) => {
    // console.log(req.body);
    const { name } = req.body;
    if (name) {
       return res.send(`Welcome ${name}`).status(200)
    }
    res.status(401).send('Please provide credentilas')
}

module.exports = { login }