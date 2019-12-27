// 切割
export const splitText = (text = "") => (text + "").split("");


/**
 * getPosition这个方法是用来计算目标数字的y轴坐标值，
 * 根据当前数字在数组中的下标乘以测量出的数字文本绘制高度取负值，得出坐标值。
 * @param {*} param0
 */
export const getPosition = ({ text, items, height }) => {
  // 获得文本在数组的下标
  return parseInt(text) * height * -1;
};


// 指定范围创建数组
export const range = length => Array.from({ length }, (x, i) => i);


// 是十进制数字判断
export const isNumber = (text = "") => !isNaN(parseInt(text));
export const isString = (text = "") => typeof text === "string";


export const getAnimationStyle = animation => {
  return {
    transform: [{ translateY: animation }]
  };
};