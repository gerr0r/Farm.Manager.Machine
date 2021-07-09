const db = require('../db/models')
const { hasRights } = require('../helpers/auth')

module.exports = {
    Query: {
        async getMachine(parent, args, context) {
            const { token } = context
            // if (!hasRights(token, 'admin')) throw new Error('Unauthorized')
            return await db.Machine.findByPk(args.id)
        },

        async getMachines(parent, args, context) {
            const { token } = context
            if (!hasRights(token, 'master')) throw new Error('Unauthorized')
            return await db.Machine.findAll()
        }
    },

    Machine: {
        async __resolveReference(machine) {
            return await db.Machine.findByPk(machine.id)
        }
    }
}