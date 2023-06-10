/**
 * @description: 开户券商
 */
enum Broker {
    BY = "BY",
    CG = "CG",
    CR = "CR",
    US = "US",
    JP = "JP",
    HK = "HK",
}

/**
 * @description: 归属地
 */
enum Attribution {
    BY = "BY",
    CG = "CG",
    CR = "CR",
    US = "US",
    JP = "JP",
    HK = "HK",
}

/**
 * @description: 交易能力
 */
enum Ability {
    US_STOCK = "美股",
    HK_STOCK = "港股",
    A_STOCK = "A股",
    JP_STOCK = "日股",
    SG_STOCK = "新股",
    UK_STOCK = "英股",
    DE_STOCK = "德股",
    FUND = "基金",
    BOND = "债券",
    FUTURES = "期货",
    OPTION = "期权",
    FOREX = "外汇",
    CRYPTO = "加密货币",
}

enum Kind {
    individual = "个人",
    institution = "机构",
}

enum Type {
    margin = "融资",
    cash = "现金",
}

enum Model {
    fund_acc = "基金账户",
    single_acc = "单一账户",
    uni_acc = "统一账户",
}

enum Status {
    closed = "已关闭",
    opened = "已开通",
}


export {Broker, Attribution, Ability, Kind, Type, Model, Status};