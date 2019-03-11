export const CHANNEL_REQUEST2 = "CHANNEL_REQUEST2";
export const requestChannel2 = () => ({
  type: CHANNEL_REQUEST2
});

export const CHANNEL_DEMO2 = "CHANNEL_DEMO2";
export const getChannelDemoAction2 = () => ({
  type: CHANNEL_DEMO2
});
export const CHANNEL_DEMO_RESULT2 = "CHANNEL_DEMO_RESULT2";
export const getChannelResultAction2 = (num) => ({
  type: CHANNEL_DEMO_RESULT2,
  num: num
});


const initState = {
  text: "from chanel2 reducer2"
};

export default (state = initState, action) => {
  switch (action.type) {
    case CHANNEL_DEMO_RESULT2:
      console.log(`szw reducer CHANNEL_DEMO_RESULT2`);
      return { text: `channel2 result ${action.num}` };
    default:
      return state;
  }
}