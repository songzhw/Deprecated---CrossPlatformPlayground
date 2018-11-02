export const FETCH_CURRENCY = "FETCH_CURRENCY"
export const fetchCurrencyEvent = {
  type: FETCH_CURRENCY,
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