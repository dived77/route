
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller, middleware } = app;

    const {
        account, balance, wallet, miner, email, test
    } = controller;

    const tokenCheck = middleware.tokenCheck();


    /**
     * 用户相关
     */
    router.post('/account/login', account.login);// 用户登录
    router.post('/account/register', account.register);// 用户注册
    router.post('/account/forget', account.forget);// 修改密码
    router.post('/account/changePassword', tokenCheck, account.updatePass);// 修改密码
    router.post('/account/balances', tokenCheck, balance.total);// 修改密码


    /**
     * 钱包相关
     */
    router.post('/wallet/assets', tokenCheck, wallet.assets);
    router.post('/wallet/withdraw', tokenCheck, wallet.withdraw);
    router.post('/wallet/withdraw/history', tokenCheck, wallet.withdrawHistory);


    /**
     * miner相关
     */
     router.post('/miner', tokenCheck, miner.index);
     router.post('/miner/:id', tokenCheck, miner.detail);

    /**
     * 邮箱相关
     */
    router.post('/email/captcha', email.sendCaptcha);

    /**
     * 测试相关
     */
    router.post('/test', tokenCheck, test.test);

};
