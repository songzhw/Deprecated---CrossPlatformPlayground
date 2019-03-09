export const CHANNEL_DEMO = "CHANNEL_DEMO";
export const getChannelDemoAction = () => ({
  type: CHANNEL_DEMO
});
export const CHANNEL_DEMO_RESULT = "CHANNEL_DEMO_RESULT";
export const getChannelResultAction = () => ({
  type: CHANNEL_DEMO_RESULT
});


const initState = {
  text: "from chanel reducer"
};

export default (state = initState, action) => {
  switch (action.type) {
    case CHANNEL_DEMO_RESULT:
      return { text: "channel result (<- reducer)" };
    default:
      return state;
  }
}