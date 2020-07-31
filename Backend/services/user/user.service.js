let db = require('../../database').getInstance();
const {modelNameEnum: {USER}} = require('../../constants');

class UserService {
    getUserByParams(params) {
        const UserModel = db.getModel(USER);

        return UserModel.findOne({
            where: params
        });
    }
}

module.exports = new UserService;
