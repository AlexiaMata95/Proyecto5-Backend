const bcrypt = require('bcrypt')

const authService =  class {
    constructor(userService) {
        this.UserService = userService
    }

    async login(email, password){
        const user = await this.UserService.getByEmail(email)
        if (!user) {
            throw new Error('Usuario no encontrado')
        } else if(await bcrypt.compare(password, user.password) || !user){
            return user.toObject()
        } else {
            throw new Error('No autorizado')
        }
    }
}

module.exports = authService