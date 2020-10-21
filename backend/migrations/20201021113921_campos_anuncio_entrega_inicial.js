
exports.up = function (knex, Promise) {
    return knex.schema.alterTable('announcements', table => {
        table.string('anunciante').notNull()
        table.string('telefone').notNull()
        table.float('preco',14,2).notNull()
        
        table.dropColumn('userId')
        table.dropColumn('content')
    })
};


exports.down = function (knex, Promise) {
    return knex.schema.alterTable('announcements', table => {
        table.dropColumn('anunciante')
        table.dropColumn('telefone')
        table.dropColumn('preco')

        table.binary('content').notNull()
        table.integer('userId').references('id')
            .inTable('users').notNull()
    })
};