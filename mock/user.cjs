const tokens = {
    admin: {
        token: 'admin-token',
    },
    editor: {
        token: 'editor-token',
    },
}

const users = {
    'admin-token': {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin',
    },
    'editor-token': {
        roles: ['editor'],
        introduction: 'I am an editor',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor',
    },
}

module.exports = function (app) {
    // user login
    app.post('/vue3-admin-template/user/login', (req, resp) => {
        const { username } = req.body
        const token = tokens[username]
        if (!token) {
            resp.json({ code: 500, message: 'Account and password are incorrect.' })
            return
        }
        resp.json({ code: 200, message: 'Login Success.', data: token })
    })

    // get user info
    app.get('/vue3-admin-template/user/info', (req, resp) => {
        const { token } = req.query
        const info = users[token]
        if (!info) {
            resp.json({ code: 508, message: 'Login failed, unable to get user details.' })
            return
        }
        resp.json({ code: 200, message: 'Get User Info Success.', data: info })
    })

    // user logout
    app.post('/vue3-admin-template/user/logout', (req, resp) => {
        resp.json({ code: 200, message: 'Logout Success.' })
    })
}
