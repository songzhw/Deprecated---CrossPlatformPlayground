export const CHANNEL_DEMO = "CHANNEL_DEMO";
export const getChannelDemoAction = () => ({
  type: CHANNEL_DEMO
});
export const CHANNEL_DEMO_RESULT = "CHANNEL_DEMO_RESULT";
export const getChannelResultAction = (num) => ({
  type: CHANNEL_DEMO_RESULT,
  num: num
});


const initState = {
  text: "from chanel reducer"
};

export default (state = initState, action) => {
  switch (action.type) {
    case CHANNEL_DEMO_RESULT:
      console.log(`szw reducer CHANNEL_DEMO_RESULT`)
      return { text: `channel result ${action.num}` };
    default:
      return state;
  }
}