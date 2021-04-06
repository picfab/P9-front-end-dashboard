const {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
} = require('./data')

/**
 * @description Retrieve the main user info (first name, last name, today score)
 * @param {number} id
 */
const getUserById = id => USER_MAIN_DATA
    .filter(user => user.id === id)
    .shift()
/**
 * @description Retrieve the main user key-data (calorieCount, proteinCount, carbohydrateCount, lipidCount)
 * @param {number} id
 */
const getKeyDataById = id => {
    const user = USER_MAIN_DATA
    .filter(user => user.id === id)
    .shift()

    return {
        userId: user.id,
        data:user.keyData
    }
}

/**
 * @description Retrieve the main user today score
 * @param {number} id
 */
const getTodayScoreById = id => {
    const user = USER_MAIN_DATA
    .filter(user => user.id === id)
    .shift()

    return {
        userId: user.id,
        data:user.todayScore
    }
}


/**
 * @param {number} id
 */
const getUserActivityById = id => USER_ACTIVITY
    .filter(userActivity => userActivity.userId === id)
    .shift()


/**
 * @param {number} id
 */
const getUserAverageSession = id => USER_AVERAGE_SESSIONS
    .filter(userActivity => userActivity.userId === id)
    .shift()


/**
 * @param {number} id
 */
const getUserPerformance = id => USER_PERFORMANCE
    .filter(userPerformance => userPerformance.userId === id)
    .shift()

module.exports = {
    getUserById,
    getUserActivityById,
    getUserAverageSession,
    getUserPerformance,
    getKeyDataById,
    getTodayScoreById
}
