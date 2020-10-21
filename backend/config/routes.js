module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .put(app.api.user.save)
        .get(app.api.user.getById)
    
    app.route('/categories')
        .get(app.api.category.get)
        .post(app.api.category.save)

    app.route('/categories/:id')
        .get(app.api.category.getById)
        .put(app.api.category.save)
    
    app.route('/announcements')
        .post(app.config.passport.authenticate())
        .get(app.api.announcement.get)
        .post(app.api.announcement.save)

    app.route('/announcements/:id')
        .get(app.api.announcement.getById)
        .put(app.api.announcement.save)
        .delete(app.api.announcement.remove)

    app.route('/categories/:id/announcements')
        .get(app.api.announcement.getByCategory)
        
}