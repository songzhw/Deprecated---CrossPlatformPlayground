export const FETCH_CURRENCY = "FETCH_CURRENCY"
// 原来是直接返回一个event = {}对象. 但现在我们需要外面传来base这个值, 毕竟不同货币的兑换表是不一样的. 所以改成了方法
export const fetchCurrencyEvent = (currency) => {
  return {
    type: FETCH_CURRENCY,
    payload: {
      thisCurrency: currency
    }
  }
}


/*
标准action                出错时的action
{                       {
  type: '..',               type: '..',
  payload: {                payload: new Error(),
    text: '..'              error: true
  }                     }
}

可能还有个meta字段: 需要的额外信息, 但又不在payload时
 */